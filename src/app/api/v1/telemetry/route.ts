/**
 * GET /api/v1/telemetry
 *
 * Simulated real-time telemetry for AeroGrid-1 (constellation slot AG-01).
 *
 * Design notes
 * - The orbit is propagated analytically (circular, 520 km, i = 97.5 deg) as a pure
 *   function of wall-clock time. Position, eclipse state, battery DoD and ground-station
 *   passes are therefore mutually consistent and identical across serverless instances.
 * - "Random walk" noise is implemented as smooth value-noise keyed on time, so values
 *   drift continuously between fetches instead of jumping. A small gaussian sensor noise
 *   is layered on top.
 * - No external dependencies.
 */
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */

const DEG = Math.PI / 180;
const R_EARTH_KM = 6371;
const OMEGA_EARTH_RAD_S = 7.2921159e-5;

const NOMINAL_ALT_KM = 520;
const NOMINAL_VELOCITY_KMS = 7.605;
const INCLINATION_DEG = 97.5;
const ORBIT_PERIOD_MIN = 94.9;
const ORBIT_PERIOD_S = ORBIT_PERIOD_MIN * 60;

/** Mission epoch: phase 0 for AeroGrid-1. Keep identical to the constellation route. */
const MISSION_EPOCH_MS = Date.UTC(2026, 0, 15, 0, 0, 0);
const RAAN_DEG = 40;

/** Fraction of the orbit spent in Earth's shadow (~34 min of 94.9). */
const ECLIPSE_START = 0.58;
const ECLIPSE_END = 0.94;

const BUS_VOLTAGE_NOMINAL_V = 28.1;
const DOD_NOMINAL_PCT = 18;
const DOD_PEAK_PCT = 32;
const DOD_HARD_LIMIT_PCT = 40;

const XBAND_NOMINAL_MBPS = 800;
const XBAND_FREQ_GHZ = 8.2;
const LINK_MARGIN_NOMINAL_DB = 4.2;

const ELEVATION_MASK_DEG = 5;
const SCAN_STEP_S = 10;
const SCAN_HORIZON_S = 12 * 3600;

const STATIONS = [
  { id: 'SVALSAT', name: 'Svalbard SvalSat', lat: 78.2297, lon: 15.4077 },
  { id: 'INUVIK', name: 'Inuvik', lat: 68.3607, lon: -133.7217 },
  { id: 'PUNTA_ARENAS', name: 'Punta Arenas', lat: -53.1638, lon: -70.9171 },
  { id: 'TROLL', name: 'Troll Antarctica', lat: -72.0119, lon: 2.535 },
  { id: 'AWARUA', name: 'Awarua', lat: -46.5283, lon: 168.6761 },
] as const;

/* ------------------------------------------------------------------ */
/* Math helpers                                                        */
/* ------------------------------------------------------------------ */

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));
const round = (v: number, d = 2): number => Math.round(v * 10 ** d) / 10 ** d;
const frac = (v: number): number => v - Math.floor(v);

function hash01(n: number, seed: number): number {
  let h = Math.imul(n | 0, 0x27d4eb2d) ^ Math.imul(seed | 0, 0x165667b1);
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

/** Smooth 1-D value noise in [-1, 1]; behaves like a bounded random walk over time. */
function smoothNoise(tSec: number, seed: number, periodSec: number): number {
  const x = tSec / periodSec;
  const i = Math.floor(x);
  const f = x - i;
  const s = f * f * (3 - 2 * f);
  const a = hash01(i, seed) * 2 - 1;
  const b = hash01(i + 1, seed) * 2 - 1;
  return a + (b - a) * s;
}

/** Zero-mean, unit-variance gaussian (Box-Muller). */
function gauss(): number {
  const u = 1 - Math.random();
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function geodeticToEcef(latDeg: number, lonDeg: number, radiusKm: number): Vec3 {
  const lat = latDeg * DEG;
  const lon = lonDeg * DEG;
  return {
    x: radiusKm * Math.cos(lat) * Math.cos(lon),
    y: radiusKm * Math.cos(lat) * Math.sin(lon),
    z: radiusKm * Math.sin(lat),
  };
}

const STATION_ECEF: Vec3[] = STATIONS.map((s) => geodeticToEcef(s.lat, s.lon, R_EARTH_KM));

/* ------------------------------------------------------------------ */
/* Orbit model                                                         */
/* ------------------------------------------------------------------ */

interface SatState {
  ecef: Vec3;
  latDeg: number;
  lonDeg: number;
  /** Orbit phase in [0, 1) measured from the ascending node. */
  phase: number;
  elapsedS: number;
}

function satelliteState(tSec: number): SatState {
  const elapsedS = tSec - MISSION_EPOCH_MS / 1000;
  const phase = frac(elapsedS / ORBIT_PERIOD_S);
  const u = 2 * Math.PI * phase;
  const inc = INCLINATION_DEG * DEG;
  const raan = RAAN_DEG * DEG;
  const r = R_EARTH_KM + NOMINAL_ALT_KM;

  // Orbital plane -> ECI
  const xi = r * (Math.cos(raan) * Math.cos(u) - Math.sin(raan) * Math.sin(u) * Math.cos(inc));
  const yi = r * (Math.sin(raan) * Math.cos(u) + Math.cos(raan) * Math.sin(u) * Math.cos(inc));
  const zi = r * Math.sin(u) * Math.sin(inc);

  // ECI -> ECEF (Earth rotation)
  const theta = OMEGA_EARTH_RAD_S * elapsedS;
  const ecef: Vec3 = {
    x: xi * Math.cos(theta) + yi * Math.sin(theta),
    y: -xi * Math.sin(theta) + yi * Math.cos(theta),
    z: zi,
  };

  return {
    ecef,
    latDeg: Math.asin(ecef.z / r) / DEG,
    lonDeg: Math.atan2(ecef.y, ecef.x) / DEG,
    phase,
    elapsedS,
  };
}

function elevationDeg(sat: Vec3, station: Vec3): number {
  const dx = sat.x - station.x;
  const dy = sat.y - station.y;
  const dz = sat.z - station.z;
  const range = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const stationNorm = Math.sqrt(station.x ** 2 + station.y ** 2 + station.z ** 2);
  const sinEl = (dx * station.x + dy * station.y + dz * station.z) / (range * stationNorm);
  return Math.asin(clamp(sinEl, -1, 1)) / DEG;
}

interface NextPass {
  stationIndex: number;
  aosSec: number;
  durationSec: number;
  maxElevationDeg: number;
}

/** Scan forward on an absolute 10 s grid so the predicted AOS is stable between requests. */
function findNextPass(nowSec: number): NextPass | null {
  const t0 = Math.floor(nowSec / SCAN_STEP_S) * SCAN_STEP_S;
  const start = satelliteState(t0).ecef;
  const prevVisible = STATION_ECEF.map((s) => elevationDeg(start, s) >= ELEVATION_MASK_DEG);

  for (let t = t0 + SCAN_STEP_S; t <= t0 + SCAN_HORIZON_S; t += SCAN_STEP_S) {
    const { ecef } = satelliteState(t);
    for (let j = 0; j < STATION_ECEF.length; j++) {
      const visible = elevationDeg(ecef, STATION_ECEF[j]) >= ELEVATION_MASK_DEG;
      if (visible && !prevVisible[j]) {
        let los = t;
        let maxEl = 0;
        while (los < t + 1500) {
          const el = elevationDeg(satelliteState(los).ecef, STATION_ECEF[j]);
          if (el < ELEVATION_MASK_DEG) break;
          maxEl = Math.max(maxEl, el);
          los += SCAN_STEP_S;
        }
        return { stationIndex: j, aosSec: t, durationSec: los - t, maxElevationDeg: maxEl };
      }
      prevVisible[j] = visible;
    }
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Power model                                                         */
/* ------------------------------------------------------------------ */

/**
 * Orbit-phase battery DoD profile: 12% at end of sunlit arc, rising linearly to 24% at
 * end of eclipse (orbit mean = 18% nominal). Every 4th orbit carries a SAR burst
 * during eclipse that adds up to 8 points, reaching the 32% peak.
 */
function batteryDod(phase: number, orbitNumber: number): { dod: number; burst: boolean } {
  const inEclipse = phase >= ECLIPSE_START && phase < ECLIPSE_END;
  let dod: number;
  let burst = false;

  if (inEclipse) {
    const e = (phase - ECLIPSE_START) / (ECLIPSE_END - ECLIPSE_START);
    dod = 12 + 12 * e;
    if (orbitNumber % 4 === 0 && e > 0.5) {
      const k = clamp((e - 0.5) / 0.2, 0, 1);
      dod += 8 * (k * k * (3 - 2 * k));
      burst = true;
    }
  } else {
    const s = frac(phase - ECLIPSE_END) / (1 - (ECLIPSE_END - ECLIPSE_START));
    dod = 24 - 12 * s;
  }
  return { dod, burst };
}

/* ------------------------------------------------------------------ */
/* Handler                                                             */
/* ------------------------------------------------------------------ */

const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, max-age=0',
  'X-Data-Source': 'SIMULATED',
};

export async function GET(): Promise<NextResponse> {
  try {
    const nowMs = Date.now();
    const nowSec = nowMs / 1000;
    const sat = satelliteState(nowSec);
    const orbitNumber = Math.floor(sat.elapsedS / ORBIT_PERIOD_S);

    /* ---- Orbital state ---- */
    const altitudeKm = clamp(
      NOMINAL_ALT_KM +
        0.35 * smoothNoise(nowSec, 11, 23) +
        0.15 * smoothNoise(nowSec, 12, 5) +
        0.02 * gauss(),
      NOMINAL_ALT_KM - 0.5,
      NOMINAL_ALT_KM + 0.5,
    );
    // dv/dr = -v / (2r) for a circular orbit
    const velocityKmS =
      NOMINAL_VELOCITY_KMS -
      (NOMINAL_VELOCITY_KMS / (2 * (R_EARTH_KM + NOMINAL_ALT_KM))) * (altitudeKm - NOMINAL_ALT_KM) +
      0.0004 * smoothNoise(nowSec, 13, 9);

    const inEclipse = sat.phase >= ECLIPSE_START && sat.phase < ECLIPSE_END;
    const ascending = Math.cos(2 * Math.PI * sat.phase) > 0;

    /* ---- Power ---- */
    const { dod: rawDod, burst } = batteryDod(sat.phase, orbitNumber);
    const dodPct = clamp(rawDod + 0.15 * smoothNoise(nowSec, 21, 7) + 0.05 * gauss(), 5, DOD_PEAK_PCT);

    let solarBusOutputW: number;
    if (inEclipse) {
      // Arrays dark: the regulated bus is held at base load by the battery.
      solarBusOutputW = 410 + 4 * smoothNoise(nowSec, 22, 11) + 0.5 * gauss();
    } else {
      const s = frac(sat.phase - ECLIPSE_END) / (1 - (ECLIPSE_END - ECLIPSE_START));
      solarBusOutputW = 540 + 100 * Math.sin(Math.PI * s) + 3 * smoothNoise(nowSec, 23, 13) + 0.5 * gauss();
    }
    solarBusOutputW = clamp(solarBusOutputW, 410, 640);

    const eclipseProgress = inEclipse
      ? (sat.phase - ECLIPSE_START) / (ECLIPSE_END - ECLIPSE_START)
      : 0;
    const busVoltageV =
      BUS_VOLTAGE_NOMINAL_V - 0.2 * eclipseProgress + 0.02 * smoothNoise(nowSec, 24, 17) + 0.005 * gauss();

    /* ---- Ground segment ---- */
    let contactIndex = -1;
    let contactElevation = 0;
    STATION_ECEF.forEach((st, idx) => {
      const el = elevationDeg(sat.ecef, st);
      if (el >= ELEVATION_MASK_DEG && el > contactElevation) {
        contactElevation = el;
        contactIndex = idx;
      }
    });
    const inContact = contactIndex >= 0;
    const nextPass = findNextPass(nowSec);

    /* ---- RF ---- */
    const activeRateMbps = inContact
      ? clamp(
          XBAND_NOMINAL_MBPS * (0.92 + 0.08 * Math.min(1, contactElevation / 30)) +
            12 * smoothNoise(nowSec, 31, 6) +
            2 * gauss(),
          0,
          1200,
        )
      : 0;
    const snrDb = inContact
      ? LINK_MARGIN_NOMINAL_DB + 0.25 * smoothNoise(nowSec, 32, 8) + 0.04 * gauss()
      : LINK_MARGIN_NOMINAL_DB;

    const body = {
      spacecraft: {
        id: 'AG-01',
        name: 'AeroGrid-1',
        mode: inContact ? 'DOWNLINK' : inEclipse ? 'ECLIPSE_OPS' : 'NOMINAL_SUNLIT',
      },
      timestamp: new Date(nowMs).toISOString(),
      frameCounter: Math.floor(nowMs / 100),
      orbit: {
        altitudeKm: round(altitudeKm, 3),
        velocityKmS: round(velocityKmS, 4),
        inclinationDeg: INCLINATION_DEG,
        latitudeDeg: round(sat.latDeg, 4),
        longitudeDeg: round(sat.lonDeg, 4),
        periodMin: ORBIT_PERIOD_MIN,
        orbitNumber,
        orbitPhaseDeg: round(sat.phase * 360, 2),
        trackDirection: ascending ? 'ASCENDING' : 'DESCENDING',
        sunlit: !inEclipse,
        orbitType: 'SSO',
      },
      power: {
        solarBusOutputW: round(solarBusOutputW, 1),
        powerSource: inEclipse ? 'BATTERY' : 'SOLAR_ARRAY',
        arrayGenerationW: inEclipse ? 0 : round(solarBusOutputW, 1),
        busVoltageV: round(busVoltageV, 2),
        battery: {
          dodPercent: round(dodPct, 1),
          stateOfChargePercent: round(100 - dodPct, 1),
          nominalDodPercent: DOD_NOMINAL_PCT,
          peakDodPercent: DOD_PEAK_PCT,
          hardLimitDodPercent: DOD_HARD_LIMIT_PCT,
          sarBurstActive: burst,
          state: dodPct <= 22 ? 'NOMINAL' : dodPct <= 28 ? 'ELEVATED' : 'PEAK',
        },
      },
      rf: {
        band: 'X-BAND',
        frequencyGHz: XBAND_FREQ_GHZ,
        modulation: 'DVB-S2X',
        linkState: inContact ? 'DOWNLINKING' : 'STANDBY',
        nominalRateMbps: XBAND_NOMINAL_MBPS,
        activeRateMbps: round(activeRateMbps, 1),
        snrDb: round(snrDb, 2),
        snrBasis: inContact ? 'MEASURED' : 'PREDICTED',
        encryption: 'AES-256-GCM-LOCKED',
      },
      groundStation: {
        inContact,
        currentStation: inContact ? STATIONS[contactIndex].name : null,
        currentElevationDeg: inContact ? round(contactElevation, 1) : null,
        next: nextPass
          ? {
              stationId: STATIONS[nextPass.stationIndex].id,
              stationName: STATIONS[nextPass.stationIndex].name,
              aosTime: new Date(nextPass.aosSec * 1000).toISOString(),
              aosCountdownSec: Math.max(0, Math.round(nextPass.aosSec - nowSec)),
              passDurationSec: nextPass.durationSec,
              passDurationMin: round(nextPass.durationSec / 60, 1),
              maxElevationDeg: round(nextPass.maxElevationDeg, 1),
            }
          : null,
      },
    };

    return NextResponse.json(body, { status: 200, headers: NO_STORE_HEADERS });
  } catch (err) {
    console.error('[telemetry] generation failed', err);
    return NextResponse.json(
      { error: 'TELEMETRY_UNAVAILABLE', message: 'Telemetry frame could not be generated.' },
      { status: 500, headers: NO_STORE_HEADERS },
    );
  }
}
