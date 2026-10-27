/**
 * POST /api/v1/tasking  - submit an observation request
 * GET  /api/v1/tasking  - list recent tasks, or fetch one with ?taskId=TASK-ORB-8842
 *                         (send header `x-aerogrid-token` to also verify a token)
 *
 * Design notes
 * - Tasks are held in an in-memory store pinned to globalThis (survives dev HMR). On
 *   serverless platforms it is per-instance and ephemeral, which is fine for a mock;
 *   swap `store` for Redis/Postgres when this graduates.
 * - Verification tokens are compact HS256-style tokens (header.payload.signature) signed
 *   with node:crypto. Set AEROGRID_SIGNING_SECRET in production.
 * - Pass/downlink figures are simulated but always respect the product guarantees:
 *   pass < 60 min, compilation < 90 s, contact-to-delivery < 5 min.
 * - No external dependencies.
 */
import { NextRequest, NextResponse } from 'next/server';
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/* ------------------------------------------------------------------ */
/* Domain types                                                        */
/* ------------------------------------------------------------------ */

const PAYLOAD_TYPES = ['HyperEye-V2', 'Sentinel-SAR X1', 'ThermoScan-L3', 'NeuralCore-E2'] as const;
const PRIORITIES = ['ROUTINE', 'URGENT_TACTICAL'] as const;

type PayloadType = (typeof PAYLOAD_TYPES)[number];
type Priority = (typeof PRIORITIES)[number];
type TaskStatus = 'SCHEDULED' | 'ACQUIRING' | 'PROCESSING' | 'DOWNLINKING' | 'DELIVERED';

interface TaskRequest {
  aoiName: string;
  coordinates: [number, number];
  payloadType: PayloadType;
  priority: Priority;
}

interface TaskRecord extends TaskRequest {
  taskId: string;
  satelliteId: string;
  sensorMode: string;
  offNadirDeg: number;
  createdAtMs: number;
  passTimeMs: number;
  compilationDurationSec: number;
  downlinkStation: string;
  downlinkAosMs: number;
  contactToDeliverySec: number;
  deliveredAtMs: number;
  tokenExpiresAtMs: number;
}

interface TaskStore {
  counter: number;
  tasks: Map<string, TaskRecord>;
  rate: Map<string, { count: number; resetAt: number }>;
}

/* ------------------------------------------------------------------ */
/* Static configuration                                                */
/* ------------------------------------------------------------------ */

const MAX_BODY_BYTES = 4096;
const MAX_STORED_TASKS = 500;
const RATE_LIMIT_PER_MIN = 20;
const ACQUISITION_WINDOW_MS = 60_000;
const TOKEN_TTL_MS = 24 * 3600 * 1000;

const SENSOR_MODE: Record<PayloadType, string> = {
  'HyperEye-V2': 'PAN_0.5M_MS_8BAND',
  'Sentinel-SAR X1': 'STRIPMAP_1.0M',
  'ThermoScan-L3': 'LWIR_30M_WIDE',
  'NeuralCore-E2': 'ONBOARD_INFERENCE',
};

/** Which fleet satellites can serve each payload (mirrors /api/v1/constellation). */
const PAYLOAD_SATS: Record<PayloadType, readonly string[]> = {
  'HyperEye-V2': ['AeroGrid-03', 'AeroGrid-05', 'AeroGrid-08', 'AeroGrid-11'],
  'Sentinel-SAR X1': ['AeroGrid-01', 'AeroGrid-02', 'AeroGrid-04', 'AeroGrid-07', 'AeroGrid-10'],
  'ThermoScan-L3': ['AeroGrid-06', 'AeroGrid-09', 'AeroGrid-12'],
  // Every bus carries a NeuralCore-E2 processor.
  'NeuralCore-E2': Array.from({ length: 12 }, (_, i) => `AeroGrid-${String(i + 1).padStart(2, '0')}`),
};

const NORTH_STATIONS = ['Svalbard SvalSat', 'Inuvik'] as const;
const SOUTH_STATIONS = ['Punta Arenas', 'Troll Antarctica', 'Awarua'] as const;
const ALL_STATIONS = [...NORTH_STATIONS, ...SOUTH_STATIONS] as const;

/* ------------------------------------------------------------------ */
/* Shared state                                                        */
/* ------------------------------------------------------------------ */

const g = globalThis as unknown as { __aerogridTaskStore?: TaskStore };
const store: TaskStore = (g.__aerogridTaskStore ??= {
  counter: 8841,
  tasks: new Map<string, TaskRecord>(),
  rate: new Map<string, { count: number; resetAt: number }>(),
});

/* ------------------------------------------------------------------ */
/* Utilities                                                           */
/* ------------------------------------------------------------------ */

const rand = (lo: number, hi: number): number => lo + Math.random() * (hi - lo);
const pick = <T,>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)];
const round = (v: number, d = 1): number => Math.round(v * 10 ** d) / 10 ** d;
const iso = (ms: number): string => new Date(ms).toISOString();

const JSON_HEADERS = { 'Cache-Control': 'no-store, max-age=0', 'X-Data-Source': 'SIMULATED' };

function errorResponse(
  status: number,
  code: string,
  message: string,
  extra: Record<string, unknown> = {},
  headers: Record<string, string> = {},
): NextResponse {
  return NextResponse.json({ error: code, message, ...extra }, { status, headers: { ...JSON_HEADERS, ...headers } });
}

function clientKey(request: NextRequest): string {
  const fwd = request.headers.get('x-forwarded-for');
  return (fwd ? fwd.split(',')[0].trim() : request.headers.get('x-real-ip')) ?? 'unknown';
}

function checkRateLimit(key: string, now: number): { ok: boolean; retryAfterSec: number } {
  if (store.rate.size > 1000) {
    store.rate.forEach((v, k) => {
      if (v.resetAt <= now) store.rate.delete(k);
    });
  }
  const entry = store.rate.get(key);
  if (!entry || entry.resetAt <= now) {
    store.rate.set(key, { count: 1, resetAt: now + 60_000 });
    return { ok: true, retryAfterSec: 0 };
  }
  entry.count += 1;
  return { ok: entry.count <= RATE_LIMIT_PER_MIN, retryAfterSec: Math.ceil((entry.resetAt - now) / 1000) };
}

/* ------------------------------------------------------------------ */
/* Token signing                                                       */
/* ------------------------------------------------------------------ */

const DEV_SECRET = 'aerogrid-dev-only-signing-secret';
let warnedAboutSecret = false;

function signingSecret(): string {
  const secret = process.env.AEROGRID_SIGNING_SECRET;
  if (secret) return secret;
  if (process.env.NODE_ENV === 'production' && !warnedAboutSecret) {
    warnedAboutSecret = true;
    console.warn('[tasking] AEROGRID_SIGNING_SECRET is not set; using an insecure development secret.');
  }
  return DEV_SECRET;
}

const b64url = (input: string | Buffer): string => Buffer.from(input).toString('base64url');

function hmac(data: string): Buffer {
  return createHmac('sha256', signingSecret()).update(data).digest();
}

function signToken(payload: Record<string, unknown>): string {
  const header = b64url(JSON.stringify({ alg: 'HS256', typ: 'AGT' }));
  const body = b64url(JSON.stringify(payload));
  const sig = b64url(hmac(`${header}.${body}`));
  return `${header}.${body}.${sig}`;
}

function verifyToken(token: string, expectedTaskId?: string): { valid: boolean; reason: string } {
  const parts = token.split('.');
  if (parts.length !== 3) return { valid: false, reason: 'MALFORMED' };
  const [header, body, sig] = parts;

  const expected = hmac(`${header}.${body}`);
  let provided: Buffer;
  try {
    provided = Buffer.from(sig, 'base64url');
  } catch {
    return { valid: false, reason: 'MALFORMED' };
  }
  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) {
    return { valid: false, reason: 'BAD_SIGNATURE' };
  }

  try {
    const claims = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as {
      sub?: string;
      exp?: number;
    };
    if (typeof claims.exp !== 'number' || claims.exp * 1000 < Date.now()) {
      return { valid: false, reason: 'EXPIRED' };
    }
    if (expectedTaskId && claims.sub !== expectedTaskId) {
      return { valid: false, reason: 'TASK_MISMATCH' };
    }
    return { valid: true, reason: 'OK' };
  } catch {
    return { valid: false, reason: 'MALFORMED' };
  }
}

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

const AOI_NAME_PATTERN = /^[\p{L}\p{N} \-_.,'()/&]+$/u;

function validateRequest(raw: unknown): { ok: true; value: TaskRequest } | { ok: false; errors: string[] } {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, errors: ['Request body must be a JSON object.'] };
  }
  const body = raw as Record<string, unknown>;
  const errors: string[] = [];

  // aoiName
  let aoiName = '';
  if (typeof body.aoiName !== 'string') {
    errors.push('aoiName must be a string.');
  } else {
    aoiName = body.aoiName.trim().replace(/\s+/g, ' ');
    if (aoiName.length < 1 || aoiName.length > 80) {
      errors.push('aoiName must be 1-80 characters.');
    } else if (!AOI_NAME_PATTERN.test(aoiName)) {
      errors.push("aoiName may contain only letters, digits, spaces and - _ . , ' ( ) / &");
    }
  }

  // coordinates
  let coordinates: [number, number] = [0, 0];
  const c = body.coordinates;
  if (
    !Array.isArray(c) ||
    c.length !== 2 ||
    typeof c[0] !== 'number' ||
    typeof c[1] !== 'number' ||
    !Number.isFinite(c[0]) ||
    !Number.isFinite(c[1])
  ) {
    errors.push('coordinates must be [lat, lon] as two finite numbers.');
  } else {
    if (c[0] < -90 || c[0] > 90) errors.push('latitude must be between -90 and 90.');
    if (c[1] < -180 || c[1] > 180) errors.push('longitude must be between -180 and 180.');
    coordinates = [round(c[0], 5), round(c[1], 5)];
  }

  // payloadType / priority
  if (typeof body.payloadType !== 'string' || !(PAYLOAD_TYPES as readonly string[]).includes(body.payloadType)) {
    errors.push(`payloadType must be one of: ${PAYLOAD_TYPES.join(', ')}.`);
  }
  if (typeof body.priority !== 'string' || !(PRIORITIES as readonly string[]).includes(body.priority)) {
    errors.push(`priority must be one of: ${PRIORITIES.join(', ')}.`);
  }

  if (errors.length > 0) return { ok: false, errors };
  return {
    ok: true,
    value: {
      aoiName,
      coordinates,
      payloadType: body.payloadType as PayloadType,
      priority: body.priority as Priority,
    },
  };
}

/* ------------------------------------------------------------------ */
/* Scheduling simulation                                               */
/* ------------------------------------------------------------------ */

function nextTaskId(): string {
  store.counter += 1 + Math.floor(Math.random() * 3);
  return `TASK-ORB-${store.counter}`;
}

function planTask(req: TaskRequest, now: number): TaskRecord {
  const urgent = req.priority === 'URGENT_TACTICAL';
  const [lat] = req.coordinates;

  // Pass time: always < 60 min. Urgent tasks pre-empt the queue.
  const passMin = urgent ? rand(6, 22) : rand(24, 58);
  const passTimeMs = now + Math.round(passMin * 60_000);

  // Compilation: always < 90 s. Urgent tasks use the fast-path planner.
  const compilationDurationSec = round(urgent ? rand(9, 35) : rand(28, 84), 1);

  // Downlink: station biased by hemisphere; contact-to-delivery always < 5 min.
  const stationPool = lat >= 30 ? NORTH_STATIONS : lat <= -30 ? SOUTH_STATIONS : ALL_STATIONS;
  const downlinkStation = pick(stationPool);
  const downlinkAosMs = passTimeMs + Math.round((urgent ? rand(3, 14) : rand(4, 35)) * 60_000);
  const contactToDeliverySec = Math.round(urgent ? rand(45, 120) : rand(90, 280));
  const deliveredAtMs = downlinkAosMs + contactToDeliverySec * 1000;

  return {
    ...req,
    taskId: nextTaskId(),
    satelliteId: pick(PAYLOAD_SATS[req.payloadType]),
    sensorMode: SENSOR_MODE[req.payloadType],
    offNadirDeg: round(rand(4, 32), 1), // agility limit is +/-35 deg
    createdAtMs: now,
    passTimeMs,
    compilationDurationSec,
    downlinkStation,
    downlinkAosMs,
    contactToDeliverySec,
    deliveredAtMs,
    tokenExpiresAtMs: now + TOKEN_TTL_MS,
  };
}

function deriveStatus(r: TaskRecord, now: number): TaskStatus {
  if (now < r.passTimeMs) return 'SCHEDULED';
  if (now < r.passTimeMs + ACQUISITION_WINDOW_MS) return 'ACQUIRING';
  if (now < r.downlinkAosMs) return 'PROCESSING';
  if (now < r.deliveredAtMs) return 'DOWNLINKING';
  return 'DELIVERED';
}

function serialize(r: TaskRecord, now: number) {
  return {
    taskId: r.taskId,
    status: deriveStatus(r, now),
    request: {
      aoiName: r.aoiName,
      coordinates: r.coordinates,
      payloadType: r.payloadType,
      priority: r.priority,
    },
    schedule: {
      createdAt: iso(r.createdAtMs),
      estimatedPassTime: iso(r.passTimeMs),
      estimatedPassInSeconds: Math.max(0, Math.round((r.passTimeMs - now) / 1000)),
      estimatedPassInMinutes: round(Math.max(0, (r.passTimeMs - now) / 60_000), 1),
      satelliteId: r.satelliteId,
      sensorMode: r.sensorMode,
      offNadirAngleDeg: r.offNadirDeg,
    },
    compilation: { durationSec: r.compilationDurationSec },
    downlink: {
      station: r.downlinkStation,
      estimatedAos: iso(r.downlinkAosMs),
      contactToDeliverySec: r.contactToDeliverySec,
      estimatedDeliveryTime: iso(r.deliveredAtMs),
      endToEndLatencySec: Math.round((r.deliveredAtMs - r.passTimeMs) / 1000),
    },
  };
}

/* ------------------------------------------------------------------ */
/* Handlers                                                            */
/* ------------------------------------------------------------------ */

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const now = Date.now();

    const limit = checkRateLimit(clientKey(request), now);
    if (!limit.ok) {
      return errorResponse(
        429,
        'RATE_LIMITED',
        `Limit is ${RATE_LIMIT_PER_MIN} tasking requests per minute.`,
        { retryAfterSec: limit.retryAfterSec },
        { 'Retry-After': String(limit.retryAfterSec) },
      );
    }

    if (!(request.headers.get('content-type') ?? '').toLowerCase().includes('application/json')) {
      return errorResponse(415, 'UNSUPPORTED_MEDIA_TYPE', 'Content-Type must be application/json.');
    }

    const text = await request.text();
    if (Buffer.byteLength(text, 'utf8') > MAX_BODY_BYTES) {
      return errorResponse(413, 'PAYLOAD_TOO_LARGE', `Body must not exceed ${MAX_BODY_BYTES} bytes.`);
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      return errorResponse(400, 'INVALID_JSON', 'Request body is not valid JSON.');
    }

    const result = validateRequest(parsed);
    if (!result.ok) {
      return errorResponse(400, 'VALIDATION_FAILED', 'Tasking request failed validation.', {
        details: result.errors,
      });
    }

    const record = planTask(result.value, now);

    const aoiDigest = createHash('sha256')
      .update(`${record.aoiName}|${record.coordinates[0]}|${record.coordinates[1]}`)
      .digest('hex')
      .slice(0, 16);

    const token = signToken({
      iss: 'aerogrid-os',
      sub: record.taskId,
      sat: record.satelliteId,
      pay: record.payloadType,
      pri: record.priority,
      aoi: aoiDigest,
      iat: Math.floor(now / 1000),
      exp: Math.floor(record.tokenExpiresAtMs / 1000),
    });

    store.tasks.set(record.taskId, record);
    while (store.tasks.size > MAX_STORED_TASKS) {
      const oldest = store.tasks.keys().next().value;
      if (oldest === undefined) break;
      store.tasks.delete(oldest);
    }

    return NextResponse.json(
      {
        ...serialize(record, now),
        verification: {
          algorithm: 'HMAC-SHA256',
          token,
          expiresAt: iso(record.tokenExpiresAtMs),
        },
      },
      {
        status: 201,
        headers: { ...JSON_HEADERS, Location: `/api/v1/tasking?taskId=${record.taskId}` },
      },
    );
  } catch (err) {
    console.error('[tasking] POST failed', err);
    return errorResponse(500, 'INTERNAL_ERROR', 'Tasking request could not be processed.');
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const now = Date.now();
    const params = new URL(request.url).searchParams;
    const taskId = params.get('taskId');

    if (taskId) {
      const record = store.tasks.get(taskId);
      if (!record) {
        return errorResponse(404, 'TASK_NOT_FOUND', `No task found with id ${taskId}.`);
      }
      const token = request.headers.get('x-aerogrid-token');
      return NextResponse.json(
        {
          ...serialize(record, now),
          ...(token ? { verification: verifyToken(token, record.taskId) } : {}),
        },
        { status: 200, headers: JSON_HEADERS },
      );
    }

    const rawLimit = Number.parseInt(params.get('limit') ?? '10', 10);
    const limit = Number.isFinite(rawLimit) ? Math.min(50, Math.max(1, rawLimit)) : 10;
    const tasks = Array.from(store.tasks.values())
      .reverse()
      .slice(0, limit)
      .map((r) => serialize(r, now));

    return NextResponse.json(
      { count: tasks.length, totalStored: store.tasks.size, tasks },
      { status: 200, headers: JSON_HEADERS },
    );
  } catch (err) {
    console.error('[tasking] GET failed', err);
    return errorResponse(500, 'INTERNAL_ERROR', 'Tasking data could not be retrieved.');
  }
}
