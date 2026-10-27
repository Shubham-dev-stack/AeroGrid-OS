'use client';

/**
 * AeroGrid OS · Mission Control Dashboard
 *
 * - Polls /api/v1/telemetry and /api/v1/constellation every 2.5 s.
 * - If an endpoint is unreachable, that feed switches to a client-side simulation that
 *   uses the same orbit model as the API routes (so the handover is seamless) and the
 *   UI says so.
 * - The 2D map is hand-built SVG (equirectangular, simplified coastlines). No chart or
 *   map libraries. Ground track (past + predicted) is propagated analytically from the
 *   fields already present in the telemetry payload.
 * - High-frequency elements (UTC clock, AOS countdown) are isolated components with their
 *   own timers so the rest of the tree only re-renders when data arrives.
 */

import Link from 'next/link';
import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import SoundToggle from '@/components/ui/SoundToggle';
import { soundEngine } from '@/lib/soundEngine';
import {
  ArrowLeft,
  Battery,
  Copy,
  Cpu,
  Crosshair,
  Globe,
  Moon,
  Radio,
  RefreshCw,
  Satellite,
  Send,
  ShieldAlert,
  ShieldCheck,
  Sun,
  Terminal,
  X,
  Zap,
} from 'lucide-react';

/* ================================================================== */
/* API types                                                           */
/* ================================================================== */

type HealthStatus = 'HEALTHY' | 'DOWNLINKING' | 'ECLIPSE';
type PayloadType = 'HyperEye-V2' | 'Sentinel-SAR X1' | 'ThermoScan-L3' | 'NeuralCore-E2';
type Priority = 'ROUTINE' | 'URGENT_TACTICAL';

interface NextPass {
  stationId: string;
  stationName: string;
  aosTime: string;
  aosCountdownSec: number;
  passDurationSec: number;
  passDurationMin: number;
  maxElevationDeg: number;
}

interface TelemetryResponse {
  spacecraft: { id: string; name: string; mode: string };
  timestamp: string;
  frameCounter: number;
  orbit: {
    altitudeKm: number;
    velocityKmS: number;
    inclinationDeg: number;
    latitudeDeg: number;
    longitudeDeg: number;
    periodMin: number;
    orbitNumber: number;
    orbitPhaseDeg: number;
    trackDirection: 'ASCENDING' | 'DESCENDING';
    sunlit: boolean;
    orbitType: string;
  };
  power: {
    solarBusOutputW: number;
    powerSource: 'SOLAR_ARRAY' | 'BATTERY';
    arrayGenerationW: number;
    busVoltageV: number;
    battery: {
      dodPercent: number;
      stateOfChargePercent: number;
      nominalDodPercent: number;
      peakDodPercent: number;
      hardLimitDodPercent: number;
      sarBurstActive: boolean;
      state: 'NOMINAL' | 'ELEVATED' | 'PEAK';
    };
  };
  rf: {
    band: string;
    frequencyGHz: number;
    modulation: string;
    linkState: 'DOWNLINKING' | 'STANDBY';
    nominalRateMbps: number;
    activeRateMbps: number;
    snrDb: number;
    snrBasis: 'MEASURED' | 'PREDICTED';
    encryption: string;
  };
  groundStation: {
    inContact: boolean;
    currentStation: string | null;
    currentElevationDeg: number | null;
    next: NextPass | null;
  };
}

interface FleetSatellite {
  id: string;
  name: string;
  payload: string;
  planeId: string;
  healthStatus: HealthStatus;
  batteryPercent: number;
  currentAoi: string | null;
}

interface ConstellationResponse {
  fleet: string;
  timestamp: string;
  summary: { total: number; healthy: number; downlinking: number; eclipse: number; imaging: number };
  satellites: FleetSatellite[];
}

interface TaskingResponse {
  taskId: string;
  status: string;
  request: { aoiName: string; coordinates: [number, number]; payloadType: string; priority: string };
  schedule: {
    createdAt: string;
    estimatedPassTime: string;
    estimatedPassInSeconds: number;
    estimatedPassInMinutes: number;
    satelliteId: string;
    sensorMode: string;
    offNadirAngleDeg: number;
  };
  compilation: { durationSec: number };
  downlink: {
    station: string;
    estimatedAos: string;
    contactToDeliverySec: number;
    estimatedDeliveryTime: string;
    endToEndLatencySec: number;
  };
  verification: { algorithm: string; token: string; expiresAt: string };
}

/* ================================================================== */
/* Type guards (defensive: never trust the wire)                       */
/* ================================================================== */

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;

function isTelemetry(v: unknown): v is TelemetryResponse {
  if (!isRecord(v)) return false;
  const { orbit, power, rf, groundStation, spacecraft } = v;
  if (!isRecord(orbit) || !isRecord(power) || !isRecord(rf) || !isRecord(groundStation) || !isRecord(spacecraft)) {
    return false;
  }
  return (
    typeof orbit.latitudeDeg === 'number' &&
    typeof orbit.longitudeDeg === 'number' &&
    typeof orbit.altitudeKm === 'number' &&
    typeof orbit.velocityKmS === 'number' &&
    typeof orbit.orbitPhaseDeg === 'number' &&
    typeof orbit.periodMin === 'number' &&
    typeof orbit.sunlit === 'boolean' &&
    typeof power.solarBusOutputW === 'number' &&
    isRecord(power.battery) &&
    typeof power.battery.dodPercent === 'number' &&
    typeof rf.activeRateMbps === 'number' &&
    typeof groundStation.inContact === 'boolean'
  );
}

function isConstellation(v: unknown): v is ConstellationResponse {
  return (
    isRecord(v) &&
    Array.isArray(v.satellites) &&
    v.satellites.every((s) => isRecord(s) && typeof s.id === 'string' && typeof s.batteryPercent === 'number')
  );
}

function isTasking(v: unknown): v is TaskingResponse {
  return (
    isRecord(v) &&
    typeof v.taskId === 'string' &&
    isRecord(v.schedule) &&
    typeof v.schedule.estimatedPassTime === 'string' &&
    isRecord(v.verification) &&
    typeof v.verification.token === 'string'
  );
}

/* ================================================================== */
/* Static reference data                                               */
/* ================================================================== */

const POLL_INTERVAL_MS = 2500;
const FETCH_TIMEOUT_MS = 2000;

const STATIONS = [
  { id: 'SVALSAT', name: 'Svalbard SvalSat', short: 'SVALBARD', lat: 78.2297, lon: 15.4077 },
  { id: 'INUVIK', name: 'Inuvik', short: 'INUVIK', lat: 68.3607, lon: -133.7217 },
  { id: 'PUNTA_ARENAS', name: 'Punta Arenas', short: 'PUNTA ARENAS', lat: -53.1638, lon: -70.9171 },
  { id: 'TROLL', name: 'Troll Antarctica', short: 'TROLL', lat: -72.0119, lon: 2.535 },
  { id: 'AWARUA', name: 'Awarua', short: 'AWARUA', lat: -46.5283, lon: 168.6761 },
] as const;

const AOIS = [
  { name: 'North Sea Strait', lat: 56.5, lon: 2.5 },
  { name: 'Strait of Hormuz', lat: 26.5, lon: 56.3 },
  { name: 'Baltic Approaches', lat: 55.0, lon: 14.0 },
  { name: 'Black Sea Western Shelf', lat: 44.0, lon: 30.5 },
  { name: 'Eastern Mediterranean', lat: 34.5, lon: 32.5 },
  { name: 'Gulf of Aden', lat: 12.5, lon: 47.0 },
  { name: 'Mozambique Channel', lat: -17.0, lon: 41.0 },
  { name: 'Strait of Malacca', lat: 3.5, lon: 100.5 },
  { name: 'South China Sea Spratly Zone', lat: 10.0, lon: 114.0 },
  { name: 'Arctic Svalbard Corridor', lat: 77.0, lon: 15.0 },
  { name: 'Siberian Taiga Fire Belt', lat: 61.0, lon: 105.0 },
  { name: 'Sierra Nevada Wildfire Zone', lat: 38.5, lon: -120.5 },
  { name: 'US Corn Belt', lat: 41.5, lon: -93.5 },
  { name: 'Amazon Deforestation Arc', lat: -9.5, lon: -55.0 },
  { name: 'Pampas Agricultural Belt', lat: -33.0, lon: -61.0 },
  { name: 'Sahel Crop Belt', lat: 13.5, lon: 2.0 },
  { name: 'Indo-Gangetic Plain', lat: 27.0, lon: 80.0 },
  { name: 'Australian Wheatbelt', lat: -31.5, lon: 117.5 },
] as const;

const PAYLOAD_OPTIONS: { value: PayloadType; label: string; blurb: string }[] = [
  { value: 'Sentinel-SAR X1', label: 'Sentinel-SAR X1', blurb: 'X-band SAR · 1.0 m · day/night, all-weather' },
  { value: 'HyperEye-V2', label: 'HyperEye-V2', blurb: 'Multispectral · 0.5 m PAN · daylight only' },
  { value: 'ThermoScan-L3', label: 'ThermoScan-L3', blurb: 'LWIR 8–12 µm · 30 m · thermal anomalies' },
  { value: 'NeuralCore-E2', label: 'NeuralCore-E2', blurb: 'Edge-AI inference · alerts, not imagery' },
];

const FLEET_PAYLOADS = [
  'Sentinel-SAR X1',
  'Sentinel-SAR X1',
  'HyperEye-V2',
  'Sentinel-SAR X1',
  'HyperEye-V2',
  'ThermoScan-L3',
  'Sentinel-SAR X1',
  'HyperEye-V2',
  'ThermoScan-L3',
  'Sentinel-SAR X1',
  'HyperEye-V2',
  'ThermoScan-L3',
] as const;
const PLANE_IDS = ['PLANE-A', 'PLANE-B', 'PLANE-C', 'PLANE-D'] as const;

/* ================================================================== */
/* Orbit model (mirrors the API routes so fallback is seamless)        */
/* ================================================================== */

const DEG = Math.PI / 180;
const R_EARTH_KM = 6371;
const OMEGA_EARTH = 7.2921159e-5;
const ALT_KM = 520;
const INC_DEG = 97.5;
const ORBIT_PERIOD_S = 94.9 * 60;
const EPOCH_SEC = Date.UTC(2026, 0, 15, 0, 0, 0) / 1000;
const RAAN0_DEG = 40;
const PLANE_RAAN_STEP_DEG = 45;
const SATS_PER_PLANE = 3;
const ECLIPSE_START = 0.58;
const ECLIPSE_END = 0.94;
const ELEVATION_MASK_DEG = 5;
const COLLECTION_ENVELOPE_KM = 900;

interface Vec3 {
  x: number;
  y: number;
  z: number;
}
interface SatGeo {
  ecef: Vec3;
  lat: number;
  lon: number;
  phase: number;
}

const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));
const frac = (v: number): number => v - Math.floor(v);
const round = (v: number, d = 1): number => Math.round(v * 10 ** d) / 10 ** d;
const isEclipse = (phase: number): boolean => phase >= ECLIPSE_START && phase < ECLIPSE_END;

function toEcef(latDeg: number, lonDeg: number, r: number): Vec3 {
  const la = latDeg * DEG;
  const lo = lonDeg * DEG;
  return { x: r * Math.cos(la) * Math.cos(lo), y: r * Math.cos(la) * Math.sin(lo), z: r * Math.sin(la) };
}

const STATION_ECEF: Vec3[] = STATIONS.map((s) => toEcef(s.lat, s.lon, R_EARTH_KM));

function propagate(index: number, tSec: number): SatGeo {
  const plane = Math.floor(index / SATS_PER_PLANE);
  const slot = index % SATS_PER_PLANE;
  const elapsed = tSec - EPOCH_SEC;
  const phase = frac(elapsed / ORBIT_PERIOD_S + slot / SATS_PER_PLANE + plane / PLANE_IDS.length / SATS_PER_PLANE);
  const u = 2 * Math.PI * phase;
  const inc = INC_DEG * DEG;
  const raan = (RAAN0_DEG + plane * PLANE_RAAN_STEP_DEG) * DEG;
  const r = R_EARTH_KM + ALT_KM;
  const xi = r * (Math.cos(raan) * Math.cos(u) - Math.sin(raan) * Math.sin(u) * Math.cos(inc));
  const yi = r * (Math.sin(raan) * Math.cos(u) + Math.cos(raan) * Math.sin(u) * Math.cos(inc));
  const zi = r * Math.sin(u) * Math.sin(inc);
  const theta = OMEGA_EARTH * elapsed;
  const ecef: Vec3 = {
    x: xi * Math.cos(theta) + yi * Math.sin(theta),
    y: -xi * Math.sin(theta) + yi * Math.cos(theta),
    z: zi,
  };
  return { ecef, lat: Math.asin(ecef.z / r) / DEG, lon: Math.atan2(ecef.y, ecef.x) / DEG, phase };
}

function elevationDeg(sat: Vec3, st: Vec3): number {
  const dx = sat.x - st.x;
  const dy = sat.y - st.y;
  const dz = sat.z - st.z;
  const range = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const sn = Math.sqrt(st.x * st.x + st.y * st.y + st.z * st.z);
  return Math.asin(clamp((dx * st.x + dy * st.y + dz * st.z) / (range * sn), -1, 1)) / DEG;
}

/** Deterministic per-satellite value in [0, 1); identical to the constellation route. */
function hash01(n: number): number {
  let h = Math.imul(n | 0, 0x27d4eb2d) ^ 0x165667b1;
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

function greatCircleKm(la1: number, lo1: number, la2: number, lo2: number): number {
  const p1 = la1 * DEG;
  const p2 = la2 * DEG;
  const a = Math.sin((p2 - p1) / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(((lo2 - lo1) * DEG) / 2) ** 2;
  return 2 * R_EARTH_KM * Math.asin(Math.min(1, Math.sqrt(a)));
}

function bestContact(ecef: Vec3): { index: number; elevation: number } | null {
  let best: { index: number; elevation: number } | null = null;
  STATION_ECEF.forEach((st, index) => {
    const el = elevationDeg(ecef, st);
    if (el >= ELEVATION_MASK_DEG && (best === null || el > best.elevation)) best = { index, elevation: el };
  });
  return best;
}

function findNextPass(nowSec: number): NextPass | null {
  const STEP = 10;
  const t0 = Math.floor(nowSec / STEP) * STEP;
  const start = propagate(0, t0).ecef;
  const prev = STATION_ECEF.map((s) => elevationDeg(start, s) >= ELEVATION_MASK_DEG);
  for (let t = t0 + STEP; t <= t0 + 6 * 3600; t += STEP) {
    const { ecef } = propagate(0, t);
    for (let j = 0; j < STATION_ECEF.length; j++) {
      const vis = elevationDeg(ecef, STATION_ECEF[j]) >= ELEVATION_MASK_DEG;
      if (vis && !prev[j]) {
        let los = t;
        let maxEl = 0;
        while (los < t + 1500) {
          const el = elevationDeg(propagate(0, los).ecef, STATION_ECEF[j]);
          if (el < ELEVATION_MASK_DEG) break;
          maxEl = Math.max(maxEl, el);
          los += STEP;
        }
        const st = STATIONS[j];
        return {
          stationId: st.id,
          stationName: st.name,
          aosTime: new Date(t * 1000).toISOString(),
          aosCountdownSec: Math.max(0, Math.round(t - nowSec)),
          passDurationSec: los - t,
          passDurationMin: round((los - t) / 60, 1),
          maxElevationDeg: round(maxEl, 1),
        };
      }
      prev[j] = vis;
    }
  }
  return null;
}

/** 12% at end of sunlit arc → 24% at end of eclipse (mean 18%); optional SAR burst to 32%. */
function dodProfile(phase: number, orbitNumber: number): { dod: number; burst: boolean } {
  if (isEclipse(phase)) {
    const e = (phase - ECLIPSE_START) / (ECLIPSE_END - ECLIPSE_START);
    let dod = 12 + 12 * e;
    let burst = false;
    if (orbitNumber % 4 === 0 && e > 0.5) {
      const k = clamp((e - 0.5) / 0.2, 0, 1);
      dod += 8 * (k * k * (3 - 2 * k));
      burst = true;
    }
    return { dod, burst };
  }
  const s = frac(phase - ECLIPSE_END) / (1 - (ECLIPSE_END - ECLIPSE_START));
  return { dod: 24 - 12 * s, burst: false };
}

/* ------------------------------------------------------------------ */
/* Client-side fallback simulation                                     */
/* ------------------------------------------------------------------ */

function simulateTelemetry(nowMs: number): TelemetryResponse {
  const t = nowMs / 1000;
  const sat = propagate(0, t);
  const orbitNumber = Math.floor((t - EPOCH_SEC) / ORBIT_PERIOD_S);
  const eclipse = isEclipse(sat.phase);
  const alt = ALT_KM + 0.35 * Math.sin(t / 23) + 0.15 * Math.sin(t / 5.3);
  const vel = 7.605 - (7.605 / (2 * (R_EARTH_KM + ALT_KM))) * (alt - ALT_KM);
  const { dod, burst } = dodProfile(sat.phase, orbitNumber);
  const dodPct = clamp(dod + 0.15 * Math.sin(t / 7), 5, 32);

  let solar: number;
  if (eclipse) {
    solar = 410 + 3 * Math.sin(t / 11);
  } else {
    const s = frac(sat.phase - ECLIPSE_END) / (1 - (ECLIPSE_END - ECLIPSE_START));
    solar = 540 + 100 * Math.sin(Math.PI * s) + 2 * Math.sin(t / 13);
  }
  solar = clamp(solar, 410, 640);

  const contact = bestContact(sat.ecef);
  const active = contact
    ? 800 * (0.92 + 0.08 * Math.min(1, contact.elevation / 30)) + 10 * Math.sin(t / 6)
    : 0;
  const eclipseProgress = eclipse ? (sat.phase - ECLIPSE_START) / (ECLIPSE_END - ECLIPSE_START) : 0;

  return {
    spacecraft: {
      id: 'AG-01',
      name: 'AeroGrid-1',
      mode: contact ? 'DOWNLINK' : eclipse ? 'ECLIPSE_OPS' : 'NOMINAL_SUNLIT',
    },
    timestamp: new Date(nowMs).toISOString(),
    frameCounter: Math.floor(nowMs / 100),
    orbit: {
      altitudeKm: round(alt, 3),
      velocityKmS: round(vel, 4),
      inclinationDeg: INC_DEG,
      latitudeDeg: round(sat.lat, 4),
      longitudeDeg: round(sat.lon, 4),
      periodMin: 94.9,
      orbitNumber,
      orbitPhaseDeg: round(sat.phase * 360, 2),
      trackDirection: Math.cos(2 * Math.PI * sat.phase) > 0 ? 'ASCENDING' : 'DESCENDING',
      sunlit: !eclipse,
      orbitType: 'SSO',
    },
    power: {
      solarBusOutputW: round(solar, 1),
      powerSource: eclipse ? 'BATTERY' : 'SOLAR_ARRAY',
      arrayGenerationW: eclipse ? 0 : round(solar, 1),
      busVoltageV: round(28.1 - 0.2 * eclipseProgress + 0.01 * Math.sin(t / 17), 2),
      battery: {
        dodPercent: round(dodPct, 1),
        stateOfChargePercent: round(100 - dodPct, 1),
        nominalDodPercent: 18,
        peakDodPercent: 32,
        hardLimitDodPercent: 40,
        sarBurstActive: burst,
        state: dodPct <= 22 ? 'NOMINAL' : dodPct <= 28 ? 'ELEVATED' : 'PEAK',
      },
    },
    rf: {
      band: 'X-BAND',
      frequencyGHz: 8.2,
      modulation: 'DVB-S2X',
      linkState: contact ? 'DOWNLINKING' : 'STANDBY',
      nominalRateMbps: 800,
      activeRateMbps: round(active, 1),
      snrDb: round(4.2 + (contact ? 0.2 * Math.sin(t / 8) : 0), 2),
      snrBasis: contact ? 'MEASURED' : 'PREDICTED',
      encryption: 'AES-256-GCM-LOCKED',
    },
    groundStation: {
      inContact: contact !== null,
      currentStation: contact ? STATIONS[contact.index].name : null,
      currentElevationDeg: contact ? round(contact.elevation, 1) : null,
      next: findNextPass(t),
    },
  };
}

function simulateConstellation(nowMs: number): ConstellationResponse {
  const t = nowMs / 1000;
  const satellites: FleetSatellite[] = FLEET_PAYLOADS.map((payload, i) => {
    const geo = propagate(i, t);
    const eclipse = isEclipse(geo.phase);
    const contact = bestContact(geo.ecef) !== null;

    let currentAoi: string | null = null;
    if (payload !== 'HyperEye-V2' || !eclipse) {
      let best = COLLECTION_ENVELOPE_KM;
      for (const aoi of AOIS) {
        const d = greatCircleKm(geo.lat, geo.lon, aoi.lat, aoi.lon);
        if (d < best) {
          best = d;
          currentAoi = aoi.name;
        }
      }
    }

    const bias = hash01(i + 1) * 4 - 2;
    const load = currentAoi ? (payload === 'Sentinel-SAR X1' ? 4 : 1.5) : 0;
    const n = String(i + 1).padStart(2, '0');
    return {
      id: `AG-${n}`,
      name: `AeroGrid-${n}`,
      payload,
      planeId: PLANE_IDS[Math.floor(i / SATS_PER_PLANE)],
      healthStatus: contact ? 'DOWNLINKING' : eclipse ? 'ECLIPSE' : 'HEALTHY',
      batteryPercent: round(clamp(100 - (dodProfile(geo.phase, 1).dod + bias + load), 60, 100), 1),
      currentAoi,
    };
  });

  const count = (s: HealthStatus): number => satellites.filter((x) => x.healthStatus === s).length;
  return {
    fleet: 'AeroGrid Sovereign Constellation',
    timestamp: new Date(nowMs).toISOString(),
    summary: {
      total: satellites.length,
      healthy: count('HEALTHY'),
      downlinking: count('DOWNLINKING'),
      eclipse: count('ECLIPSE'),
      imaging: satellites.filter((s) => s.currentAoi !== null).length,
    },
    satellites,
  };
}

/* ================================================================== */
/* Data hooks                                                          */
/* ================================================================== */

type DataSource = 'CONNECTING' | 'LIVE' | 'DEGRADED' | 'FALLBACK';

async function fetchJson<T>(url: string, guard: (v: unknown) => v is T): Promise<T> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, { cache: 'no-store', signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: unknown = await res.json();
    if (!guard(data)) throw new Error('UNEXPECTED_PAYLOAD_SHAPE');
    return data;
  } finally {
    clearTimeout(timer);
  }
}

function useMissionData() {
  const [telemetry, setTelemetry] = useState<TelemetryResponse | null>(null);
  const [constellation, setConstellation] = useState<ConstellationResponse | null>(null);
  const [source, setSource] = useState<DataSource>('CONNECTING');
  const [syncing, setSyncing] = useState(false);
  const inFlight = useRef(false);
  const alive = useRef(true);

  const poll = useCallback(async () => {
    if (inFlight.current) return;
    inFlight.current = true;
    setSyncing(true);

    const [t, c] = await Promise.allSettled([
      fetchJson('/api/v1/telemetry', isTelemetry),
      fetchJson('/api/v1/constellation', isConstellation),
    ]);
    if (!alive.current) return;

    const now = Date.now();
    setTelemetry(t.status === 'fulfilled' ? t.value : simulateTelemetry(now));
    setConstellation(c.status === 'fulfilled' ? c.value : simulateConstellation(now));
    const okCount = (t.status === 'fulfilled' ? 1 : 0) + (c.status === 'fulfilled' ? 1 : 0);
    setSource(okCount === 2 ? 'LIVE' : okCount === 1 ? 'DEGRADED' : 'FALLBACK');

    inFlight.current = false;
    setSyncing(false);
  }, []);

  useEffect(() => {
    alive.current = true;
    void poll();
    const id = setInterval(() => {
      if (!document.hidden) void poll();
    }, POLL_INTERVAL_MS);
    return () => {
      alive.current = false;
      clearInterval(id);
    };
  }, [poll]);

  return { telemetry, constellation, source, syncing, refresh: poll };
}

interface LogLine {
  id: number;
  ts: string;
  level: 'INFO' | 'WARN' | 'OK';
  text: string;
}

function useOpsLog(max = 30) {
  const [lines, setLines] = useState<LogLine[]>([]);
  const counter = useRef(0);
  const push = useCallback(
    (level: LogLine['level'], text: string) => {
      counter.current += 1;
      const line: LogLine = { id: counter.current, ts: new Date().toISOString().slice(11, 23), level, text };
      setLines((prev) => [line, ...prev].slice(0, max));
    },
    [max],
  );
  return { lines, push };
}

/* ================================================================== */
/* World map data (simplified, equirectangular; flat [lon,lat,...])    */
/* ================================================================== */

const MAP_W = 1000;
const MAP_H = 500;
const px = (lon: number): number => ((lon + 180) / 360) * MAP_W;
const py = (lat: number): number => ((90 - lat) / 180) * MAP_H;

const LAND: number[][] = [
  // North America
  [-168,66,-162,70,-156,71.3,-141,69.7,-128,70,-115,68.5,-105,68,-96,71,-90,69,-94,62,-93,58.5,-88,56.5,-82,55,-80,51.5,-78.5,54.5,-77,59,-78,62.5,-72,62,-65,60,-61,56,-56,52.5,-60,48,-66,45,-70,43.5,-70,41.8,-74,40.5,-76,37,-76,35,-81,31,-80,26,-81.5,25.2,-83,29,-85,29.8,-89,30,-92,29.5,-97,27.5,-97.5,22,-95,18.5,-91,18.8,-90.5,21,-87,21.5,-88,16,-84,15.8,-83.5,11,-79.5,9.5,-77.5,8.5,-79,7.2,-82,8,-85.7,10,-87.5,13,-92,14.5,-96,15.8,-101,17.5,-105.5,20,-105.5,23,-109,26.5,-112.8,31,-114.7,31.5,-112,27,-110,23,-112,24.5,-114,28,-117,32.5,-120.5,34.5,-122.5,37.5,-124,40.5,-124,46,-124.5,48.3,-127,50.5,-130,54.5,-134,58,-140,59.8,-146,60.8,-151.5,59.5,-154,57.5,-158,56.5,-163,54.8,-158,58.7,-162,59.5,-165,61.5,-164,63.5,-161,64.5,-166,65],
  // Greenland
  [-73,78,-60,82,-30,83.5,-18,80,-20,75,-22,70,-30,68,-40,65,-43,60,-48,61,-52,65,-54,68,-58,72,-68,76],
  // Canadian Arctic: Baffin, Victoria, Ellesmere
  [-80,73,-68,70,-62,66,-65,63,-72,64,-78,65,-90,70],
  [-118,72,-105,73,-100,69,-112,68.5,-118,70],
  [-90,77,-75,79,-65,82,-80,83,-95,81],
  // Cuba
  [-85,22,-80,23,-74,20,-77.5,20,-80,22],
  // South America
  [-77,8.5,-72,12,-64,10.5,-60,8.5,-52,5,-50,0,-44,-2.5,-35,-5.5,-35,-9,-39,-14,-39,-18,-41,-22,-45,-23.5,-48,-26,-49,-29,-53,-34,-57,-35,-58,-38.5,-62,-39,-65,-41,-64.5,-43,-67,-46,-66,-48,-69,-51,-68.5,-52.5,-71,-54,-74,-52,-75,-47,-73.5,-43,-73.5,-37,-71.5,-30,-70.5,-23,-70,-18,-76,-14,-79,-8,-81,-5,-80,-2,-80,1,-78.5,2,-77.5,6.5],
  // Eurasia
  [-9,43,-9,37,-5.5,36,-2,36.7,0,38.7,3,42,4.5,43.5,8,43.8,10,44,10.5,43,12,41.5,15.5,40,16,38,17,39,16.5,40.5,18.5,40.2,16,41.8,13.5,43.5,12.3,45,13.7,45.6,15,44.5,19,42,19.5,40.5,21,38.5,23,36.5,24,38,23,40,26,40.8,29,41,30,36.5,32,36.2,36,36.5,36,34.5,35,33,34,31,32.5,31.2,32.5,29.8,34.8,28,35,25,39,21,42,16,43,12.7,45,12.8,48.5,14,52,16,55,17.5,57.5,19,59.5,22.5,56.5,24.5,56,26,54,24,52,24,51.5,25,50,26.5,48,29.8,50,30,52,28.5,56,27,58,25.5,61.5,25.2,66.5,25.3,68,23.5,70,21,72.5,21,73,16,76,9,77.5,8,80,10,80,15.5,82,17,86,20,88,22,90,22,92,20.5,94,18,94.5,16,97.5,16.5,98,12,98.5,8,100,6.5,101,3,103.5,1.3,104,3,103,6,102,10,100,13.5,103,12,105,9,107,10.5,109,12,109.5,15,106.5,19,108,21.5,110,21,113,22,117,23.5,120,26,122,30,121.5,32.5,119,35,122.5,37,121,39,122,40.5,125,40,126,37,129,35,129.5,37,128,39,130,42.5,133,43,138,47,141,52,140.5,54,143,59,150,59.5,155,59,156,57,156,51,158,53,162,56,163,59.5,170,60,176,62.5,180,65,180,69,170,70,160,70,150,71,140,72.5,130,71,128,73,113,74,106,77.5,100,76.5,95,76,88,75.5,80,73,73,72,68,70.5,60,69.5,55,68.5,44,68,38,66,34,66.5,30,70,25,71,18,70,14,68,10,64,5,62,5,59,8,58,10.5,59.5,11,58,12.5,56,14.5,56,16,56.5,18.5,60,17.5,62,21,64,25,65.5,22,66,21.5,63,21.5,61,23,60,30,60.3,28,59.3,24,59.4,21,57.5,21,55,18,54.8,14,54,11,54.2,10,56,8.5,57,8,55,8.8,54,7,53.5,4.5,52.5,3.5,51.3,1.5,50.8,-1.5,49.7,-4.5,48.5,-2,47,-1.2,46,-1.5,44,-1.8,43.4,-8,43.7],
  // Chukotka (wrap)
  [-180,69,-175,67.5,-170,66,-172,64.5,-180,65],
  // Africa
  [-17,21,-16,24,-13,28,-10,30,-9.5,32.5,-6,35.8,-2,35.2,3,36.8,10,37.2,11,35,10,33.5,15,32.3,20,32.5,20,30.5,24,32,29,31,32.5,31.3,32.5,29.8,34,27,35.5,24,37,21,38.5,18,40,15,43,12.5,44,10.5,51.2,11.8,51,10,48,5,44,1,41,-2,39,-5,39.5,-8,40.5,-11,40.5,-15,35,-19.5,35,-24,32.5,-26,32.5,-28.5,30,-31.5,27,-33.5,22,-34,18.5,-34.2,17,-30,15,-26,14.5,-22,12,-18,13.5,-12,12.5,-6,9,-1,9.5,3.5,6,4.3,2,6.3,-2,5,-4.5,5.2,-7.5,4.3,-11,6.8,-13.5,9.5,-15,11.5,-17,14.5,-16.5,18],
  // Madagascar
  [49.3,-12.2,50.5,-15.5,49.5,-18,47.5,-24.5,45,-25.5,43.5,-22,44.2,-17,46,-15.7],
  // British Isles, Iceland, Svalbard
  [-5.5,50,1.5,51,1.8,52.7,0,53.5,-1.5,55.5,-2,57.5,-3.5,58.6,-5.5,58.5,-6,56.5,-5,54.8,-3,54.5,-3.2,53.4,-4.5,53,-5,51.8,-3.2,51.4],
  [-10,52,-6,52.2,-6,54.2,-7.5,55.2,-9.5,54],
  [-24,65.5,-22,66.4,-16,66.5,-13.5,65,-18,63.5,-22,63.8],
  [11,78.5,17,80,27,80.2,22,77.5,16,76.8],
  // Japan
  [130.5,31.5,132,33.5,135,33.5,137,34.5,140,35.2,141,38,142,40,141.5,41.5,140,40,139.5,38,137,37,136,35.8,133,35.5,131,34.5,130.5,33.5],
  [140,42,141.5,43,145,43.5,142,45.5,141.5,44],
  // Maritime SE Asia
  [95.3,5.5,98,4,104,-1,106,-3,105.5,-5.8,102,-4,98.5,0.5],
  [109,1.5,111,2,114,4.8,117,7,119,5,118,1,116.5,-3.5,114,-4,111,-3,109.5,-1],
  [105.5,-6.8,108,-6.5,111,-6.5,114.5,-7.8,110,-8.3,106,-7.5],
  [131,-0.8,135,-3.5,138,-1.8,141,-2.6,145,-4.5,147.5,-6,150.5,-10.5,147,-10,144,-7.8,141,-9.1,138,-8.2,136,-4.5,132.5,-3.2],
  [120,18.5,122,18.5,122,16,124,13,121,13.5,120,16],
  [122,7,126,9,126.5,7,125,5.8,122.5,7],
  // Australia, Tasmania, New Zealand
  [113.5,-22,114,-26,115,-34,118,-35,123,-34,129,-31.5,134,-32.7,138,-35,140,-38,144,-38.5,147,-38.3,150,-37.5,153,-31,153.5,-27,150,-22.5,146,-19,145.5,-15,143.5,-14,142.5,-10.8,141.5,-13.5,141,-17,139,-17.5,136,-15,137,-12,132.5,-11.5,130,-13,127,-14,125,-15,122,-17,120,-20,116,-20.7],
  [144.7,-40.8,148.3,-41,148,-43.2,146,-43.5],
  [172.7,-34.5,175.5,-37,178.5,-37.7,176.5,-40.5,174.8,-41.3,175,-39.5,173.8,-39.3,174.5,-37.5],
  [172.7,-40.5,174.3,-41.7,171,-44.5,169,-46.5,166.5,-46,168,-44],
  // Antarctica
  [-180,-90,180,-90,180,-71,160,-70,145,-67,120,-66.5,100,-66,80,-68,70,-68,55,-66,40,-69,20,-70,0,-70,-15,-72,-30,-77,-45,-78,-60,-75,-65,-70,-62,-65,-68,-67,-75,-72,-90,-73,-110,-74,-130,-75,-150,-77,-165,-78,-180,-78],
];

/** Inland seas drawn over the land mass in the map background colour. */
const SEAS: number[][] = [
  [28,41.5,28.5,43.5,30,46,33,46,35,45,38,47,41,43,41.5,41.5,36,41.5,32,41.8],
  [47,45,49,46.5,53,46.5,53.5,42,54,40,53,37,50,37,49,40,47.5,43],
];

function polyPath(flat: number[]): string {
  let d = '';
  for (let i = 0; i < flat.length; i += 2) {
    d += `${i === 0 ? 'M' : 'L'}${px(flat[i]).toFixed(1)},${py(flat[i + 1]).toFixed(1)}`;
  }
  return `${d}Z`;
}

const LAND_PATH = LAND.map(polyPath).join('');
const SEA_PATH = SEAS.map(polyPath).join('');

function groundTrackPath(tel: TelemetryResponse, fromSec: number, toSec: number, stepSec: number): string {
  const o = tel.orbit;
  const inc = o.inclinationDeg * DEG;
  const u0 = o.orbitPhaseDeg * DEG;
  const period = o.periodMin * 60;
  const node0 = o.longitudeDeg * DEG - Math.atan2(Math.cos(inc) * Math.sin(u0), Math.cos(u0));
  let d = '';
  let prevLon: number | null = null;
  for (let dt = fromSec; dt <= toSec; dt += stepSec) {
    const u = u0 + (2 * Math.PI * dt) / period;
    const node = node0 - OMEGA_EARTH * dt;
    const lat = Math.asin(Math.sin(inc) * Math.sin(u)) / DEG;
    const lon = ((((node + Math.atan2(Math.cos(inc) * Math.sin(u), Math.cos(u))) / DEG) % 360) + 540) % 360 - 180;
    const wrapped = prevLon !== null && Math.abs(lon - prevLon) > 180;
    d += `${prevLon === null || wrapped ? 'M' : 'L'}${px(lon).toFixed(1)},${py(lat).toFixed(1)}`;
    prevLon = lon;
  }
  return d;
}

/* ================================================================== */
/* Style helpers                                                       */
/* ================================================================== */

const CYAN = '#00A1FF';
const AMBER = '#FC6A18';
const RED = '#FF4D4D';
const GREEN = '#34D399';

const GLASS =
  'rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.55)]';
const SCROLL = '[scrollbar-width:thin] [scrollbar-color:rgba(0,161,255,0.35)_transparent]';
const LABEL = 'text-[10px] font-medium uppercase tracking-[0.18em] text-white/45';

const HEALTH_STYLE: Record<HealthStatus, string> = {
  HEALTHY: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  DOWNLINKING: 'border-[#00A1FF]/40 bg-[#00A1FF]/10 text-[#00A1FF]',
  ECLIPSE: 'border-[#FC6A18]/40 bg-[#FC6A18]/10 text-[#FC6A18]',
};

const SOURCE_STYLE: Record<DataSource, { label: string; cls: string; dot: string }> = {
  CONNECTING: { label: 'CONNECTING', cls: 'border-white/15 text-white/60', dot: 'bg-white/50' },
  LIVE: { label: 'LIVE LINK', cls: 'border-[#00A1FF]/40 text-[#00A1FF]', dot: 'bg-[#00A1FF]' },
  DEGRADED: { label: 'DEGRADED · PARTIAL SIM', cls: 'border-[#FC6A18]/50 text-[#FC6A18]', dot: 'bg-[#FC6A18]' },
  FALLBACK: { label: 'OFFLINE · SIMULATED', cls: 'border-[#FC6A18]/50 text-[#FC6A18]', dot: 'bg-[#FC6A18]' },
};

function payloadMeta(payload: string): { short: string; cls: string } {
  if (payload.includes('SAR')) return { short: 'SAR', cls: 'text-[#00A1FF] border-[#00A1FF]/30' };
  if (payload.includes('HyperEye')) return { short: 'OPTICAL', cls: 'text-white/80 border-white/25' };
  if (payload.includes('Thermo')) return { short: 'LWIR', cls: 'text-[#FC6A18] border-[#FC6A18]/30' };
  return { short: 'EDGE-AI', cls: 'text-white/60 border-white/20' };
}

function batteryColor(pct: number): string {
  return pct >= 75 ? CYAN : pct >= 65 ? AMBER : RED;
}

function fmtCountdown(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `T-${h}:${mm}:${ss}` : `T-${mm}:${ss}`;
}

function fmtCoord(v: number, pos: string, neg: string, width: number): string {
  return `${Math.abs(v).toFixed(4).padStart(width, '0')}° ${v >= 0 ? pos : neg}`;
}

/* ================================================================== */
/* Small live components                                               */
/* ================================================================== */

function MissionClock() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 47);
    return () => clearInterval(id);
  }, []);
  const iso = now === null ? null : new Date(now).toISOString();
  return (
    <div className="flex items-baseline gap-2 font-mono tabular-nums" aria-label="UTC mission clock">
      <span className="text-[10px] tracking-widest text-white/40">{iso ? iso.slice(0, 10) : '----------'}</span>
      <span className="text-lg font-semibold leading-none text-white">{iso ? iso.slice(11, 23) : '--:--:--.---'}</span>
      <span className="text-[10px] tracking-widest text-[#00A1FF]">UTC</span>
    </div>
  );
}

function AosPill({ tel }: { tel: TelemetryResponse | null }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 200);
    return () => clearInterval(id);
  }, []);

  const gs = tel?.groundStation;
  const next = gs?.next ?? null;
  let text = 'AOS: ACQUIRING';
  let active = false;

  if (gs?.inContact && gs.currentStation) {
    text = `LINK ACTIVE: ${gs.currentStation.replace(' SvalSat', '').replace(' Antarctica', '').toUpperCase()}`;
    active = true;
  } else if (next && now !== null) {
    const short = next.stationName.replace(' SvalSat', '').replace(' Antarctica', '').toUpperCase();
    text = `NEXT AOS: ${short} ${fmtCountdown(Date.parse(next.aosTime) - now)}`;
  } else if (gs && !next) {
    text = 'NEXT AOS: NO PASS < 6H';
  }

  return (
    <div
      className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider ${
        active ? 'border-[#00A1FF]/60 bg-[#00A1FF]/15 text-[#00A1FF]' : 'border-[#FC6A18]/40 bg-[#FC6A18]/10 text-[#FC6A18]'
      }`}
    >
      <Radio size={13} className={active ? 'animate-pulse' : ''} aria-hidden />
      <span className="tabular-nums">{text}</span>
    </div>
  );
}

/* ================================================================== */
/* Gauges                                                              */
/* ================================================================== */

interface ArcGaugeProps {
  label: string;
  icon: ReactNode;
  value: number | null;
  min: number;
  max: number;
  decimals: number;
  unit: string;
  color: string;
  markers?: number[];
  footnote?: string;
}

function ArcGauge({ label, icon, value, min, max, decimals, unit, color, markers = [], footnote }: ArcGaugeProps) {
  const cx = 60;
  const cy = 60;
  const r = 44;
  const f = value === null ? 0 : clamp((value - min) / (max - min), 0, 1);
  const pt = (deg: number, rad: number = r): [number, number] => [
    cx + rad * Math.cos(deg * DEG),
    cy + rad * Math.sin(deg * DEG),
  ];
  const arc = (frac01: number): string => {
    const [sx, sy] = pt(150);
    const [ex, ey] = pt(150 + 240 * frac01);
    return `M${sx.toFixed(2)},${sy.toFixed(2)} A${r},${r} 0 ${240 * frac01 > 180 ? 1 : 0} 1 ${ex.toFixed(2)},${ey.toFixed(2)}`;
  };
  const [tipX, tipY] = pt(150 + 240 * f);

  return (
    <div className="rounded-lg border border-white/[0.07] bg-black/30 p-2.5">
      <div className="flex items-center gap-1.5 text-white/50">
        <span style={{ color }} aria-hidden>
          {icon}
        </span>
        <span className={LABEL}>{label}</span>
      </div>
      <svg viewBox="0 0 120 92" className="mt-1 w-full" role="img" aria-label={`${label}: ${value === null ? 'no data' : value.toFixed(decimals)} ${unit}`}>
        <path d={arc(1)} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" strokeLinecap="round" />
        {f > 0.003 && (
          <path d={arc(f)} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
        )}
        {markers.map((m) => {
          const a = 150 + 240 * clamp((m - min) / (max - min), 0, 1);
          const [x1, y1] = pt(a, r - 8);
          const [x2, y2] = pt(a, r + 6);
          return <line key={m} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" />;
        })}
        {value !== null && <circle cx={tipX} cy={tipY} r="2.6" fill="#fff" />}
        <text x={cx} y={cy + 4} textAnchor="middle" className="fill-white font-mono" style={{ fontSize: 17, fontWeight: 700 }}>
          {value === null ? '—' : value.toFixed(decimals)}
        </text>
        <text x={cx} y={cy + 17} textAnchor="middle" className="fill-white/50 font-mono" style={{ fontSize: 7.5, letterSpacing: 1 }}>
          {unit}
        </text>
      </svg>
      {footnote && <div className="text-center font-mono text-[9px] tracking-wider text-white/35">{footnote}</div>}
    </div>
  );
}

/* ================================================================== */
/* Ground-track map                                                    */
/* ================================================================== */

const GroundTrackMap = memo(function GroundTrackMap({ tel }: { tel: TelemetryResponse | null }) {
  const timestamp = tel?.timestamp ?? null;
  const tracks = useMemo(() => {
    if (!tel) return null;
    return {
      past: groundTrackPath(tel, -3000, 0, 30),
      future: groundTrackPath(tel, 0, tel.orbit.periodMin * 60, 30),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timestamp]);

  const sat = tel ? { x: px(tel.orbit.longitudeDeg), y: py(tel.orbit.latitudeDeg) } : null;
  const nextId = tel?.groundStation.next?.stationId ?? null;
  const contactName = tel?.groundStation.currentStation ?? null;
  const contactStation = contactName ? STATIONS.find((s) => s.name === contactName) : undefined;
  const labelLeft = sat ? sat.x > MAP_W * 0.72 : false;

  const meridians = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150];
  const parallels = [-60, -30, 0, 30, 60];

  return (
    <div className={`${GLASS} relative overflow-hidden`}>
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-[#00A1FF]" aria-hidden />
          <span className={LABEL}>Orbit ground track · equirectangular</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[10px] text-white/45">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-px w-5 bg-[#00A1FF]/40" /> PAST
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-5 border-t border-dashed border-[#00A1FF]" /> PREDICTED 1 ORBIT
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <span className="inline-block h-2 w-2 rotate-45 border border-[#FC6A18]" /> NEXT AOS
          </span>
        </div>
      </div>

      <div className="relative bg-[#04070D]">
        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="block h-auto w-full" role="img" aria-label="World map with satellite ground track and ground stations">
          <defs>
            <filter id="ag-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="ag-vignette" cx="50%" cy="50%" r="75%">
              <stop offset="60%" stopColor="#000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000" stopOpacity="0.65" />
            </radialGradient>
          </defs>

          <rect width={MAP_W} height={MAP_H} fill="#04070D" />

          {/* graticule */}
          <g stroke="rgba(0,161,255,0.10)" strokeWidth="0.6">
            {meridians.map((lon) => (
              <line key={`m${lon}`} x1={px(lon)} y1={0} x2={px(lon)} y2={MAP_H} />
            ))}
            {parallels.map((lat) => (
              <line key={`p${lat}`} x1={0} y1={py(lat)} x2={MAP_W} y2={py(lat)} stroke={lat === 0 ? 'rgba(0,161,255,0.28)' : undefined} />
            ))}
          </g>
          <g className="fill-white/30 font-mono" style={{ fontSize: 8 }}>
            {parallels.map((lat) => (
              <text key={`pl${lat}`} x={4} y={py(lat) - 3}>
                {lat === 0 ? '0°' : `${Math.abs(lat)}°${lat > 0 ? 'N' : 'S'}`}
              </text>
            ))}
            {meridians.map((lon) => (
              <text key={`ml${lon}`} x={px(lon) + 3} y={MAP_H - 4}>
                {lon === 0 ? '0°' : `${Math.abs(lon)}°${lon > 0 ? 'E' : 'W'}`}
              </text>
            ))}
          </g>

          {/* land */}
          <path d={LAND_PATH} fill="rgba(0,161,255,0.09)" stroke="rgba(0,161,255,0.55)" strokeWidth="0.7" strokeLinejoin="round" />
          <path d={SEA_PATH} fill="#04070D" stroke="rgba(0,161,255,0.4)" strokeWidth="0.6" />

          {/* ground track */}
          {tracks && (
            <>
              <path d={tracks.past} fill="none" stroke="rgba(0,161,255,0.4)" strokeWidth="1.2" />
              <path d={tracks.future} fill="none" stroke={CYAN} strokeWidth="1.3" strokeDasharray="4 4" filter="url(#ag-glow)" />
            </>
          )}

          {/* ground stations */}
          {STATIONS.map((s) => {
            const x = px(s.lon);
            const y = py(s.lat);
            const isNext = s.id === nextId;
            const isLinked = contactStation?.id === s.id;
            const color = isNext || isLinked ? AMBER : 'rgba(255,255,255,0.7)';
            const flip = x > MAP_W * 0.85;
            return (
              <g key={s.id}>
                <circle cx={x} cy={y} r={13} fill={isNext || isLinked ? 'rgba(252,106,24,0.10)' : 'rgba(255,255,255,0.03)'} stroke={color} strokeWidth="0.8" strokeDasharray="2 2.5" />
                {(isNext || isLinked) && (
                  <circle cx={x} cy={y} r={6} fill="none" stroke={AMBER} strokeWidth="1">
                    <animate attributeName="r" from="6" to="24" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.7" to="0" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                )}
                <path d={`M${x},${y - 6.5} L${x - 4.8},${y + 3.5} L${x + 4.8},${y + 3.5} Z`} fill={color} />
                <text x={flip ? x - 17 : x + 17} y={y + 3} textAnchor={flip ? 'end' : 'start'} className="font-mono" style={{ fontSize: 8.5, letterSpacing: 0.6 }} fill={color}>
                  {s.short}
                </text>
              </g>
            );
          })}

          {/* downlink beam */}
          {sat && contactStation && Math.abs(px(contactStation.lon) - sat.x) < MAP_W / 2 && (
            <line x1={sat.x} y1={sat.y} x2={px(contactStation.lon)} y2={py(contactStation.lat)} stroke={CYAN} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.9">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" />
            </line>
          )}

          {/* satellite */}
          {sat && (
            <g>
              <circle cx={sat.x} cy={sat.y} r={17} fill="rgba(0,161,255,0.10)" stroke="rgba(0,161,255,0.55)" strokeWidth="0.8" />
              <circle cx={sat.x} cy={sat.y} r={5} fill="none" stroke={CYAN} strokeWidth="1.2">
                <animate attributeName="r" from="5" to="30" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx={sat.x} cy={sat.y} r={3.8} fill={CYAN} stroke="#fff" strokeWidth="1.2" filter="url(#ag-glow)" />
              <text x={labelLeft ? sat.x - 24 : sat.x + 24} y={sat.y - 6} textAnchor={labelLeft ? 'end' : 'start'} className="fill-white font-mono" style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 0.8 }}>
                {tel?.spacecraft.name.toUpperCase()}
              </text>
              <text x={labelLeft ? sat.x - 24 : sat.x + 24} y={sat.y + 5} textAnchor={labelLeft ? 'end' : 'start'} className="fill-white/55 font-mono" style={{ fontSize: 8 }}>
                {tel?.orbit.trackDirection === 'ASCENDING' ? '▲ ASC' : '▼ DESC'} · {tel?.orbit.altitudeKm.toFixed(0)} KM
              </text>
            </g>
          )}

          <rect width={MAP_W} height={MAP_H} fill="url(#ag-vignette)" pointerEvents="none" />
        </svg>

        {/* HUD overlays */}
        <div className="pointer-events-none absolute bottom-2 left-3 hidden font-mono text-[10px] leading-tight text-white/55 sm:block">
          <div>
            LAT <span className="text-white">{tel ? fmtCoord(tel.orbit.latitudeDeg, 'N', 'S', 7) : '—'}</span>
          </div>
          <div>
            LON <span className="text-white">{tel ? fmtCoord(tel.orbit.longitudeDeg, 'E', 'W', 8) : '—'}</span>
          </div>
        </div>
        <div className="pointer-events-none absolute right-3 top-2 text-right font-mono text-[10px] leading-tight text-white/45">
          <div>ORBIT #{tel?.orbit.orbitNumber ?? '—'}</div>
          <div>INC {tel?.orbit.inclinationDeg ?? '—'}° · {tel?.orbit.orbitType ?? 'SSO'}</div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 3px)' }}
          aria-hidden
        />
      </div>
    </div>
  );
});

/* ================================================================== */
/* Panels                                                              */
/* ================================================================== */

function TelemetryPanel({ tel }: { tel: TelemetryResponse | null }) {
  const o = tel?.orbit;
  const p = tel?.power;
  const rf = tel?.rf;
  const dod = p?.battery.dodPercent ?? null;
  const dodColor = dod === null ? CYAN : dod <= 22 ? CYAN : dod <= 28 ? AMBER : RED;
  const rate = rf?.activeRateMbps ?? 0;
  const rateFrac = clamp(rate / 1200, 0, 1);
  const phase = o ? o.orbitPhaseDeg / 360 : 0;

  const modeLabel = tel?.spacecraft.mode.replace(/_/g, ' ') ?? 'ACQUIRING';

  return (
    <section className={`${GLASS} p-3`} aria-label="Live telemetry">
      <header className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Satellite size={14} className="text-[#00A1FF]" aria-hidden />
          <span className={LABEL}>Live telemetry · {tel?.spacecraft.name ?? 'AeroGrid-1'}</span>
        </div>
        <span className="rounded border border-[#00A1FF]/30 bg-[#00A1FF]/10 px-2 py-0.5 font-mono text-[9px] tracking-widest text-[#00A1FF]">
          {modeLabel}
        </span>
      </header>

      <div className="grid grid-cols-2 gap-2">
        <ArcGauge label="Velocity" icon={<Zap size={12} />} value={o?.velocityKmS ?? null} min={7.59} max={7.62} decimals={3} unit="KM/S" color={CYAN} markers={[7.605]} footnote="NOM 7.605" />
        <ArcGauge label="Altitude" icon={<Globe size={12} />} value={o?.altitudeKm ?? null} min={517} max={523} decimals={1} unit="KM" color={CYAN} markers={[520]} footnote="NOM 520 ± 0.5" />
        <ArcGauge label="Solar bus" icon={<Zap size={12} />} value={p?.solarBusOutputW ?? null} min={400} max={650} decimals={0} unit="WATTS" color={p?.powerSource === 'BATTERY' ? AMBER : CYAN} markers={[410, 640]} footnote="410 – 640 W" />
        <ArcGauge label="Battery DoD" icon={<Battery size={12} />} value={dod} min={0} max={40} decimals={1} unit="% DoD" color={dodColor} markers={[18, 32]} footnote="NOM 18 · PEAK 32" />
      </div>

      {/* downlink bar gauge */}
      <div className="mt-2 rounded-lg border border-white/[0.07] bg-black/30 p-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Radio size={12} className={rate > 0 ? 'text-[#00A1FF]' : 'text-white/40'} aria-hidden />
            <span className={LABEL}>X-band downlink</span>
          </div>
          <span className={`font-mono text-[10px] tracking-widest ${rate > 0 ? 'text-[#00A1FF]' : 'text-white/40'}`}>
            {rf?.linkState ?? '—'}
          </span>
        </div>
        <div className="mt-1.5 flex items-baseline gap-1.5 font-mono">
          <span className="text-2xl font-bold tabular-nums text-white">{rate > 0 ? rate.toFixed(0) : '0'}</span>
          <span className="text-[10px] tracking-widest text-white/50">MBPS</span>
          <span className="ml-auto text-[10px] text-white/35">NOM {rf?.nominalRateMbps ?? 800}</span>
        </div>
        <div className="relative mt-1.5 h-2 overflow-hidden rounded-full bg-white/[0.08]">
          <div className="h-full rounded-full transition-[width] duration-700" style={{ width: `${rateFrac * 100}%`, background: CYAN, boxShadow: `0 0 8px ${CYAN}` }} />
          <div className="absolute top-0 h-full w-px bg-white/70" style={{ left: `${(800 / 1200) * 100}%` }} />
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1 font-mono text-[9px] text-white/45">
          <span>
            {rf?.band ?? 'X-BAND'} {rf?.frequencyGHz.toFixed(1) ?? '8.2'} GHz
          </span>
          <span className="text-center">
            SNR {rf ? `${rf.snrDb >= 0 ? '+' : ''}${rf.snrDb.toFixed(1)}` : '—'} dB
          </span>
          <span className="text-right text-[#00A1FF]">{rf?.encryption.includes('LOCKED') ? 'AES-256 🔒' : 'ENC: CHECK'}</span>
        </div>
      </div>

      {/* eclipse state */}
      <div className="mt-2 rounded-lg border border-white/[0.07] bg-black/30 p-2.5">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg border"
            style={{
              borderColor: o?.sunlit === false ? 'rgba(252,106,24,0.5)' : 'rgba(0,161,255,0.4)',
              background: o?.sunlit === false ? 'rgba(252,106,24,0.12)' : 'rgba(0,161,255,0.10)',
              color: o?.sunlit === false ? AMBER : CYAN,
            }}
          >
            {o?.sunlit === false ? <Moon size={20} aria-hidden /> : <Sun size={20} aria-hidden />}
          </div>
          <div className="min-w-0 flex-1">
            <div className={LABEL}>Illumination</div>
            <div className="font-mono text-sm font-bold tracking-widest" style={{ color: o?.sunlit === false ? AMBER : '#fff' }}>
              {o ? (o.sunlit ? 'SUNLIT' : 'SHADOW · ECLIPSE') : '—'}
            </div>
          </div>
          <div className="text-right font-mono text-[10px] leading-tight text-white/50">
            <div>{p?.powerSource === 'BATTERY' ? 'BUS ← BATTERY' : 'BUS ← ARRAY'}</div>
            <div>{p ? `${p.busVoltageV.toFixed(2)} V · ${p.arrayGenerationW.toFixed(0)} W GEN` : '—'}</div>
          </div>
        </div>
        <div className="relative mt-2.5 h-1.5 rounded-full bg-[#00A1FF]/25" aria-hidden>
          <div className="absolute top-0 h-full rounded-full bg-[#FC6A18]/70" style={{ left: `${ECLIPSE_START * 100}%`, width: `${(ECLIPSE_END - ECLIPSE_START) * 100}%` }} />
          {o && <div className="absolute -top-1 h-3.5 w-1 -translate-x-1/2 rounded bg-white shadow-[0_0_6px_#fff]" style={{ left: `${phase * 100}%` }} />}
        </div>
        <div className="mt-1 flex justify-between font-mono text-[9px] text-white/35">
          <span>0° NODE</span>
          <span>ORBIT PHASE {o ? o.orbitPhaseDeg.toFixed(1) : '—'}°</span>
          <span>360°</span>
        </div>
      </div>
    </section>
  );
}

function FleetPanel({ fleet, sourceLabel }: { fleet: ConstellationResponse | null; sourceLabel: string }) {
  const sats = fleet?.satellites ?? [];
  const s = fleet?.summary;
  return (
    <section className={`${GLASS} flex min-h-0 flex-col p-3`} aria-label="Constellation fleet matrix">
      <header className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-[#00A1FF]" aria-hidden />
          <span className={LABEL}>Fleet matrix · {sats.length}/12</span>
        </div>
        <span className="font-mono text-[9px] tracking-widest text-white/35">{sourceLabel}</span>
      </header>

      <div className="mb-2 grid grid-cols-4 gap-1.5 font-mono text-center">
        {[
          { k: 'HEALTHY', v: s?.healthy, c: GREEN },
          { k: 'DOWNLINK', v: s?.downlinking, c: CYAN },
          { k: 'ECLIPSE', v: s?.eclipse, c: AMBER },
          { k: 'IMAGING', v: s?.imaging, c: '#fff' },
        ].map((x) => (
          <div key={x.k} className="rounded-md border border-white/[0.07] bg-black/30 py-1.5">
            <div className="text-base font-bold leading-none tabular-nums" style={{ color: x.c }}>
              {x.v ?? '—'}
            </div>
            <div className="mt-1 text-[8px] tracking-widest text-white/40">{x.k}</div>
          </div>
        ))}
      </div>

      <ul className={`grid min-h-0 flex-1 grid-cols-1 gap-1.5 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-1 ${SCROLL}`}>
        {sats.length === 0 && <li className="py-6 text-center font-mono text-xs text-white/40">ACQUIRING FLEET STATUS…</li>}
        {sats.map((sat) => {
          const meta = payloadMeta(sat.payload);
          const pct = clamp(sat.batteryPercent, 0, 100);
          const color = batteryColor(pct);
          const health = HEALTH_STYLE[sat.healthStatus] ?? HEALTH_STYLE.HEALTHY;
          const isPrimary = sat.id === 'AG-01';
          return (
            <li
              key={sat.id}
              className={`rounded-lg border p-2 transition-colors ${
                isPrimary ? 'border-[#00A1FF]/35 bg-[#00A1FF]/[0.06]' : 'border-white/[0.07] bg-black/25 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-1.5">
                  <Satellite size={12} className="shrink-0 text-white/50" aria-hidden />
                  <span className="truncate font-mono text-[11px] font-bold tracking-wider text-white">{sat.name.toUpperCase()}</span>
                  <span className="font-mono text-[8px] text-white/30">{sat.planeId.replace('PLANE-', 'P')}</span>
                </div>
                <span className={`shrink-0 rounded-full border px-2 py-px font-mono text-[8px] font-semibold tracking-widest ${health}`}>
                  {sat.healthStatus}
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <span className={`rounded border px-1.5 py-px font-mono text-[8px] tracking-widest ${meta.cls}`}>{meta.short}</span>
                <span className="truncate font-mono text-[9px] text-white/45">{sat.payload}</span>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100} aria-label={`${sat.name} battery`}>
                  <div className="h-full rounded-full transition-[width] duration-700" style={{ width: `${pct}%`, background: color }} />
                </div>
                <span className="w-10 text-right font-mono text-[10px] tabular-nums text-white/70">{pct.toFixed(0)}%</span>
              </div>
              <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[9px]">
                <Crosshair size={10} className={sat.currentAoi ? 'text-[#FC6A18]' : 'text-white/25'} aria-hidden />
                <span className={`truncate ${sat.currentAoi ? 'text-[#FC6A18]' : 'text-white/30'}`}>
                  {sat.currentAoi ? sat.currentAoi.toUpperCase() : 'NO ACTIVE COLLECTION'}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function StationTable({ tel }: { tel: TelemetryResponse | null }) {
  const gs = tel?.groundStation;
  return (
    <section className={`${GLASS} p-3`} aria-label="Ground station network">
      <header className="mb-2 flex items-center gap-2">
        <Radio size={14} className="text-[#00A1FF]" aria-hidden />
        <span className={LABEL}>Ground station network</span>
      </header>
      <ul className="space-y-1">
        {STATIONS.map((s) => {
          const linked = gs?.currentStation === s.name;
          const next = gs?.next?.stationId === s.id && !linked;
          return (
            <li key={s.id} className="flex items-center justify-between rounded-md border border-white/[0.06] bg-black/25 px-2.5 py-1.5 font-mono text-[10px]">
              <span className={linked ? 'text-[#00A1FF]' : next ? 'text-[#FC6A18]' : 'text-white/75'}>{s.short}</span>
              <span className="text-white/35">{Math.abs(s.lat).toFixed(1)}°{s.lat >= 0 ? 'N' : 'S'}</span>
              <span className={`w-24 text-right tracking-widest ${linked ? 'text-[#00A1FF]' : next ? 'text-[#FC6A18]' : 'text-white/25'}`}>
                {linked ? `LINK · EL ${gs?.currentElevationDeg?.toFixed(0) ?? '—'}°` : next ? 'NEXT AOS' : 'IDLE'}
              </span>
            </li>
          );
        })}
      </ul>
      {gs?.next && (
        <div className="mt-2 grid grid-cols-3 gap-1.5 text-center font-mono">
          {[
            { k: 'PASS', v: `${gs.next.passDurationMin.toFixed(1)} min` },
            { k: 'MAX EL', v: `${gs.next.maxElevationDeg.toFixed(0)}°` },
            { k: 'AOS UTC', v: gs.next.aosTime.slice(11, 19) },
          ].map((x) => (
            <div key={x.k} className="rounded-md border border-white/[0.06] bg-black/25 py-1">
              <div className="text-[11px] font-semibold text-white">{x.v}</div>
              <div className="text-[8px] tracking-widest text-white/35">{x.k}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function OpsLog({ lines }: { lines: LogLine[] }) {
  const color: Record<LogLine['level'], string> = { INFO: 'text-[#00A1FF]/80', WARN: 'text-[#FC6A18]', OK: 'text-emerald-300' };
  return (
    <section className={`${GLASS} flex min-h-[180px] flex-col p-3`} aria-label="Operations log">
      <header className="mb-2 flex items-center gap-2">
        <Terminal size={14} className="text-[#00A1FF]" aria-hidden />
        <span className={LABEL}>Ops log</span>
      </header>
      <ul className={`max-h-[240px] flex-1 space-y-0.5 overflow-y-auto font-mono text-[10px] leading-relaxed ${SCROLL}`} aria-live="polite">
        {lines.map((l) => (
          <li key={l.id} className="flex gap-2">
            <span className="shrink-0 text-white/30">{l.ts}</span>
            <span className={`shrink-0 ${color[l.level]}`}>{l.level}</span>
            <span className="text-white/70">{l.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ================================================================== */
/* Tasking modal                                                       */
/* ================================================================== */

type VerifyState = 'PENDING' | 'VALID' | 'INVALID' | 'UNAVAILABLE';

interface TaskingModalProps {
  open: boolean;
  onClose: () => void;
  onSubmitted: (task: TaskingResponse) => void;
  initialPayload?: string | null;
}

function TaskingModal({ open, onClose, onSubmitted, initialPayload }: TaskingModalProps) {
  const uid = useId();
  const [aoiName, setAoiName] = useState<string>(AOIS[0].name);
  const [payloadType, setPayloadType] = useState<PayloadType>('Sentinel-SAR X1');
  const [priority, setPriority] = useState<Priority>('URGENT_TACTICAL');

  useEffect(() => {
    if (!initialPayload) return;
    if (initialPayload.includes('hypereye')) setPayloadType('HyperEye-V2');
    else if (initialPayload.includes('sar')) setPayloadType('Sentinel-SAR X1');
    else if (initialPayload.includes('thermo')) setPayloadType('ThermoScan-L3');
    else if (initialPayload.includes('neural')) setPayloadType('NeuralCore-E2');
  }, [initialPayload]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<{ message: string; details: string[] } | null>(null);
  const [result, setResult] = useState<TaskingResponse | null>(null);
  const [verify, setVerify] = useState<VerifyState>('PENDING');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setError(null);
      setCopied(false);
    }
  }, [open]);

  if (!open) return null;

  const aoi = AOIS.find((a) => a.name === aoiName) ?? AOIS[0];

  const verifyToken = async (task: TaskingResponse): Promise<void> => {
    setVerify('PENDING');
    try {
      const res = await fetch(`/api/v1/tasking?taskId=${encodeURIComponent(task.taskId)}`, {
        cache: 'no-store',
        headers: { 'x-aerogrid-token': task.verification.token },
      });
      if (!res.ok) {
        setVerify('UNAVAILABLE');
        return;
      }
      const data: unknown = await res.json();
      const v = isRecord(data) && isRecord(data.verification) ? data.verification : null;
      setVerify(v && v.valid === true ? 'VALID' : v ? 'INVALID' : 'UNAVAILABLE');
    } catch {
      setVerify('UNAVAILABLE');
    }
  };

  const submit = async (): Promise<void> => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/v1/tasking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aoiName: aoi.name, coordinates: [aoi.lat, aoi.lon], payloadType, priority }),
      });
      const data: unknown = await res.json().catch(() => null);
      if (!res.ok || !isTasking(data)) {
        const rec = isRecord(data) ? data : {};
        setError({
          message: typeof rec.message === 'string' ? rec.message : `Tasking uplink returned HTTP ${res.status}.`,
          details: Array.isArray(rec.details) ? rec.details.filter((d): d is string => typeof d === 'string') : [],
        });
        return;
      }
      setResult(data);
      onSubmitted(data);
      void verifyToken(data);
    } catch {
      setError({ message: 'Tasking uplink unreachable. Check that the API server is running and retry.', details: [] });
    } finally {
      setSubmitting(false);
    }
  };

  const copyToken = async (): Promise<void> => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.verification.token);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const fieldCls =
    'w-full rounded-lg border border-white/12 bg-[#070B13] px-3 py-2 font-mono text-xs text-white outline-none transition-colors focus:border-[#00A1FF]/70 [color-scheme:dark]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
      <button type="button" aria-label="Close tasking dialog" onClick={onClose} className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-sm" />
      <div role="dialog" aria-modal="true" aria-labelledby={`${uid}-title`} className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/12 bg-[#070B13]/95 p-5 shadow-[0_0_60px_rgba(0,161,255,0.12)] backdrop-blur-2xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#FC6A18]">
              <Crosshair size={16} aria-hidden />
              <h2 id={`${uid}-title`} className="font-mono text-sm font-bold tracking-[0.2em]">
                {result ? 'TASK SCHEDULED' : 'SUBMIT TASKING'}
              </h2>
            </div>
            <p className="mt-1 text-xs text-white/45">
              {result ? 'Observation compiled and queued on the fleet.' : 'Request a new observation. Compiled on-orbit in < 90 s.'}
            </p>
          </div>
          <button type="button" onClick={onClose} className="rounded-md p-1 text-white/50 transition-colors hover:bg-white/10 hover:text-white" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {!result ? (
          <div className="space-y-4">
            <div>
              <label htmlFor={`${uid}-aoi`} className={`${LABEL} mb-1.5 block`}>
                Area of interest
              </label>
              <select id={`${uid}-aoi`} value={aoiName} onChange={(e) => setAoiName(e.target.value)} className={fieldCls}>
                {AOIS.map((a) => (
                  <option key={a.name} value={a.name}>
                    {a.name}
                  </option>
                ))}
              </select>
              <div className="mt-1 font-mono text-[10px] text-white/35">
                [{aoi.lat.toFixed(2)}, {aoi.lon.toFixed(2)}]
              </div>
            </div>

            <div>
              <label htmlFor={`${uid}-payload`} className={`${LABEL} mb-1.5 block`}>
                Payload
              </label>
              <select id={`${uid}-payload`} value={payloadType} onChange={(e) => setPayloadType(e.target.value as PayloadType)} className={fieldCls}>
                {PAYLOAD_OPTIONS.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
              <div className="mt-1 font-mono text-[10px] text-white/35">{PAYLOAD_OPTIONS.find((p) => p.value === payloadType)?.blurb}</div>
            </div>

            <fieldset>
              <legend className={`${LABEL} mb-1.5`}>Priority</legend>
              <div className="grid grid-cols-2 gap-2">
                {(['ROUTINE', 'URGENT_TACTICAL'] as const).map((pr) => {
                  const sel = priority === pr;
                  const urgent = pr === 'URGENT_TACTICAL';
                  return (
                    <button
                      key={pr}
                      type="button"
                      aria-pressed={sel}
                      onClick={() => setPriority(pr)}
                      className={`rounded-lg border px-3 py-2 font-mono text-[11px] tracking-widest transition-colors ${
                        sel
                          ? urgent
                            ? 'border-[#FC6A18]/70 bg-[#FC6A18]/15 text-[#FC6A18]'
                            : 'border-[#00A1FF]/70 bg-[#00A1FF]/15 text-[#00A1FF]'
                          : 'border-white/10 text-white/50 hover:border-white/25'
                      }`}
                    >
                      {pr.replace('_', ' ')}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {error && (
              <div role="alert" className="rounded-lg border border-[#FF4D4D]/40 bg-[#FF4D4D]/10 p-3 text-xs text-[#FF9a9a]">
                <div className="flex items-center gap-2 font-mono font-semibold">
                  <ShieldAlert size={14} aria-hidden /> UPLINK ERROR
                </div>
                <p className="mt-1">{error.message}</p>
                {error.details.length > 0 && (
                  <ul className="mt-1 list-inside list-disc text-[11px] text-[#FF9a9a]/80">
                    {error.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={() => void submit()}
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#FC6A18]/60 bg-[#FC6A18]/15 py-2.5 font-mono text-xs font-bold tracking-[0.2em] text-[#FC6A18] transition-colors hover:bg-[#FC6A18]/25 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? <RefreshCw size={14} className="animate-spin" aria-hidden /> : <Send size={14} aria-hidden />}
              {submitting ? 'COMPILING SCHEDULE…' : 'TRANSMIT TASKING'}
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="rounded-lg border border-[#00A1FF]/30 bg-[#00A1FF]/[0.07] p-3">
              <div className={LABEL}>Task ID</div>
              <div className="mt-0.5 font-mono text-xl font-bold tracking-wider text-white">{result.taskId}</div>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 font-mono text-[10px] text-white/55">
                <span>STATUS: <span className="text-emerald-300">{result.status}</span></span>
                <span>{result.request.aoiName.toUpperCase()}</span>
                <span>{result.request.payloadType}</span>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-2 font-mono">
              {[
                { k: 'PASS ESTIMATE', v: `${result.schedule.estimatedPassInMinutes.toFixed(1)} min`, sub: `${result.schedule.estimatedPassTime.slice(11, 19)} UTC · < 60 min SLA`, hot: true },
                { k: 'COMPILATION', v: `${result.compilation.durationSec.toFixed(1)} s`, sub: '< 90 s SLA', hot: false },
                { k: 'SATELLITE', v: result.schedule.satelliteId, sub: `${result.schedule.sensorMode} · ${result.schedule.offNadirAngleDeg.toFixed(0)}° off-nadir`, hot: false },
                { k: 'DOWNLINK', v: result.downlink.station, sub: `AOS ${result.downlink.estimatedAos.slice(11, 19)} · +${result.downlink.contactToDeliverySec}s to API`, hot: false },
              ].map((x) => (
                <div key={x.k} className="rounded-lg border border-white/[0.08] bg-black/30 p-2.5">
                  <dt className="text-[9px] tracking-widest text-white/40">{x.k}</dt>
                  <dd className={`mt-0.5 text-sm font-bold ${x.hot ? 'text-[#FC6A18]' : 'text-white'}`}>{x.v}</dd>
                  <dd className="mt-0.5 text-[9px] text-white/40">{x.sub}</dd>
                </div>
              ))}
            </dl>

            <div className="rounded-lg border border-white/[0.08] bg-black/30 p-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className={verify === 'VALID' ? 'text-emerald-300' : verify === 'INVALID' ? 'text-[#FF4D4D]' : 'text-white/40'} aria-hidden />
                  <span className={LABEL}>{result.verification.algorithm} token</span>
                </div>
                <span
                  className={`font-mono text-[9px] font-bold tracking-widest ${
                    verify === 'VALID' ? 'text-emerald-300' : verify === 'INVALID' ? 'text-[#FF4D4D]' : 'text-white/45'
                  }`}
                >
                  {verify === 'PENDING' ? 'VERIFYING…' : verify === 'VALID' ? 'SIGNATURE VERIFIED' : verify === 'INVALID' ? 'SIGNATURE INVALID' : 'VERIFY UNAVAILABLE'}
                </span>
              </div>
              <div className={`mt-2 max-h-20 overflow-y-auto break-all rounded border border-white/[0.06] bg-black/40 p-2 font-mono text-[9px] leading-relaxed text-[#00A1FF]/90 ${SCROLL}`}>
                {result.verification.token}
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-white/35">
                <span>EXPIRES {result.verification.expiresAt.slice(0, 16).replace('T', ' ')} UTC</span>
                <button type="button" onClick={() => void copyToken()} className="flex items-center gap-1 text-white/55 transition-colors hover:text-white">
                  <Copy size={11} aria-hidden /> {copied ? 'COPIED' : 'COPY'}
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setResult(null);
                  setVerify('PENDING');
                }}
                className="flex-1 rounded-lg border border-white/15 py-2 font-mono text-[11px] tracking-widest text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                NEW TASK
              </button>
              <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-[#00A1FF]/50 bg-[#00A1FF]/15 py-2 font-mono text-[11px] font-bold tracking-widest text-[#00A1FF] transition-colors hover:bg-[#00A1FF]/25">
                RETURN TO CONSOLE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export default function DashboardPage() {
  const { telemetry, constellation, source, syncing, refresh } = useMissionData();
  const { lines, push } = useOpsLog();
  const [modalOpen, setModalOpen] = useState(false);
  const [initialPayload, setInitialPayload] = useState<string | null>(null);
  const [lastTask, setLastTask] = useState<TaskingResponse | null>(null);

  const closeModal = useCallback(() => setModalOpen(false), []);
  const handleSubmitted = useCallback(
    (task: TaskingResponse) => {
      setLastTask(task);
      soundEngine.playChirp();
      push('OK', `${task.taskId} SCHEDULED · ${task.request.payloadType} → ${task.request.aoiName.toUpperCase()} · PASS T+${task.schedule.estimatedPassInMinutes.toFixed(0)}m`);
    },
    [push],
  );

  useEffect(() => {
    document.title = 'AeroGrid OS · Mission Control';
    push('INFO', 'MISSION CONTROL ONLINE · ESTABLISHING TELEMETRY LINK');

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const payloadsParam = params.get('payloads');
      if (payloadsParam) {
        setInitialPayload(payloadsParam);
        setModalOpen(true);
        push('INFO', `CONFIG UPLINK: PRE-LOADED SENSOR PAYLOADS [${payloadsParam.toUpperCase()}]`);
      }
    }
  }, [push]);

  // Log data-source transitions.
  const prevSource = useRef<DataSource>('CONNECTING');
  useEffect(() => {
    if (prevSource.current === source) return;
    if (source === 'LIVE') push('OK', 'API LINK NOMINAL · LIVE TELEMETRY + FLEET FEEDS');
    else if (source === 'DEGRADED') push('WARN', 'PARTIAL API OUTAGE · ONE FEED ON SIMULATED FALLBACK');
    else if (source === 'FALLBACK') push('WARN', 'API UNREACHABLE · SWITCHED TO ONBOARD SIMULATION');
    prevSource.current = source;
  }, [source, push]);

  // Log notable telemetry state changes.
  const prevTel = useRef<{ link?: string; station?: string | null; sunlit?: boolean; burst?: boolean }>({});
  useEffect(() => {
    if (!telemetry) return;
    const p = prevTel.current;
    const link = telemetry.rf.linkState;
    const station = telemetry.groundStation.currentStation;
    const burst = telemetry.power.battery.sarBurstActive;
    if (p.link !== undefined) {
      if (link !== p.link) {
        push(link === 'DOWNLINKING' ? 'OK' : 'INFO', link === 'DOWNLINKING' ? `AOS ${station ?? ''} · X-BAND ${telemetry.rf.activeRateMbps.toFixed(0)} MBPS · AES-256-GCM` : 'LOS · X-BAND LINK TO STANDBY');
      }
      if (telemetry.orbit.sunlit !== p.sunlit) {
        push('WARN', telemetry.orbit.sunlit ? 'ECLIPSE EXIT · ARRAYS ILLUMINATED' : 'ECLIPSE ENTRY · BUS ON BATTERY');
      }
      if (burst !== p.burst) {
        push(burst ? 'WARN' : 'INFO', burst ? 'SAR BURST LOAD · DoD RISING TOWARD PEAK' : 'SAR BURST COMPLETE');
      }
    } else {
      push('OK', `TELEMETRY LOCK · ${telemetry.spacecraft.name.toUpperCase()} · ORBIT #${telemetry.orbit.orbitNumber}`);
    }
    prevTel.current = { link, station, sunlit: telemetry.orbit.sunlit, burst };
  }, [telemetry, push]);

  const nodes = constellation?.satellites.length ?? 0;
  const src = SOURCE_STYLE[source];
  const encOk = telemetry ? telemetry.rf.encryption.includes('LOCKED') : true;

  return (
    <div className="flex min-h-screen flex-col bg-black bg-[radial-gradient(ellipse_at_top,#0b1424_0%,#070B13_45%,#000_100%)] text-white lg:h-screen lg:overflow-hidden">
      {/* ---------------- Top mission bar ---------------- */}
      <header className={`${GLASS} m-3 mb-0 flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5`}>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg border border-white/12 px-2.5 py-1.5 font-mono text-[11px] tracking-wider text-white/70 transition-colors hover:border-[#00A1FF]/50 hover:text-[#00A1FF]"
          >
            <ArrowLeft size={13} aria-hidden /> BACK
          </Link>
          <nav aria-label="Breadcrumb" className="hidden items-center gap-2 font-mono text-[11px] tracking-widest sm:flex">
            <Link href="/" className="text-white/40 transition-colors hover:text-white/70">AEROGRID OS</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">MISSION CONTROL</span>
            <span className="text-white/20">/</span>
            <span className="font-semibold text-[#00A1FF]">AEROGRID-1</span>
          </nav>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] tracking-wider">
          <span className={`h-2 w-2 rounded-full ${nodes === 12 ? 'animate-pulse bg-emerald-400' : 'bg-[#FC6A18]'}`} aria-hidden />
          <span className="text-white/85">{nodes}/12 NODES ONLINE</span>
          <span className="text-white/25">·</span>
          <span className={encOk ? 'text-[#00A1FF]' : 'text-[#FC6A18]'}>ENCRYPTION: AES-256-GCM</span>
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-3">
          <MissionClock />
          <AosPill tel={telemetry} />
          <div className={`flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-widest ${src.cls}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${src.dot} ${source === 'LIVE' ? 'animate-pulse' : ''}`} aria-hidden />
            {src.label}
          </div>
          <SoundToggle />
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              void refresh();
            }}
            aria-label="Refresh data now"
            className="rounded-lg border border-white/12 p-1.5 text-white/60 transition-colors hover:border-[#00A1FF]/50 hover:text-[#00A1FF]"
          >
            <RefreshCw size={14} className={syncing ? 'animate-spin' : ''} />
          </button>
        </div>
      </header>

      {/* ---------------- Main grid ---------------- */}
      <main className="grid flex-1 grid-cols-1 gap-3 p-3 lg:min-h-0 lg:grid-cols-[310px_minmax(0,1fr)_330px]">
        <div className={`lg:min-h-0 lg:overflow-y-auto lg:pr-1 ${SCROLL}`}>
          <TelemetryPanel tel={telemetry} />
        </div>

        <div className={`flex flex-col gap-3 lg:min-h-0 lg:overflow-y-auto lg:pr-1 ${SCROLL}`}>
          <GroundTrackMap tel={telemetry} />
          <div className="grid gap-3 md:grid-cols-2">
            <StationTable tel={telemetry} />
            <OpsLog lines={lines} />
          </div>
        </div>

        <div className="flex lg:min-h-0 [&>section]:w-full">
          <FleetPanel fleet={constellation} sourceLabel={source === 'LIVE' ? 'LIVE' : 'SIM'} />
        </div>
      </main>

      {/* ---------------- Quick tasking bar ---------------- */}
      <footer className={`${GLASS} mx-3 mb-3 flex flex-wrap items-center gap-3 px-4 py-2.5`}>
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/55">
          <Crosshair size={14} className="text-[#FC6A18]" aria-hidden />
          QUICK TASKING
        </div>
        {lastTask ? (
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] tracking-wider text-emerald-300">
            <ShieldCheck size={12} aria-hidden />
            {lastTask.taskId} · {lastTask.status} · PASS T+{lastTask.schedule.estimatedPassInMinutes.toFixed(0)}m
          </div>
        ) : (
          <span className="font-mono text-[10px] tracking-wider text-white/35">NO ACTIVE REQUESTS THIS SESSION</span>
        )}
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setModalOpen(true);
          }}
          className="ml-auto flex items-center gap-2 rounded-lg border border-[#FC6A18]/60 bg-[#FC6A18]/15 px-4 py-2 font-mono text-xs font-bold tracking-[0.2em] text-[#FC6A18] shadow-[0_0_24px_rgba(252,106,24,0.15)] transition-colors hover:bg-[#FC6A18]/25"
        >
          <Send size={14} aria-hidden /> SUBMIT TASKING
        </button>
      </footer>

      <TaskingModal open={modalOpen} onClose={closeModal} onSubmitted={handleSubmitted} initialPayload={initialPayload} />
    </div>
  );
}
