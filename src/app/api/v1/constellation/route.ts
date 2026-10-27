/**
 * GET /api/v1/constellation
 *
 * Health and status of the 12 active AeroGrid sovereign-fleet satellites
 * (4 SSO planes x 3 satellites, 520 km, i = 97.5 deg).
 *
 * Design notes
 * - Uses the same analytic orbit model and mission epoch as /api/v1/telemetry, so
 *   AeroGrid-01 here matches AeroGrid-1 there (same eclipse state, same battery DoD).
 * - healthStatus is derived from geometry, not random:
 *     DOWNLINKING = in view of a ground station above the elevation mask
 *     ECLIPSE     = in Earth's shadow (and not downlinking)
 *     HEALTHY     = otherwise
 * - currentAoi is the AOI whose collection envelope the satellite is inside. Optical
 *   satellites do not image in eclipse, so they report null there.
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
const ALT_KM = 520;
const INCLINATION_DEG = 97.5;
const ORBIT_PERIOD_S = 94.9 * 60;

/** Keep identical to the telemetry route. */
const MISSION_EPOCH_MS = Date.UTC(2026, 0, 15, 0, 0, 0);
const RAAN0_DEG = 40;
const ECLIPSE_START = 0.58;
const ECLIPSE_END = 0.94;
const ELEVATION_MASK_DEG = 5;

/** Ground range within which an AOI counts as the satellite's active collection target. */
const COLLECTION_ENVELOPE_KM = 900;

const PLANE_IDS = ['PLANE-A', 'PLANE-B', 'PLANE-C', 'PLANE-D'] as const;
const SATS_PER_PLANE = 3;
const PLANE_RAAN_SPACING_DEG = 45;

type HealthStatus = 'HEALTHY' | 'DOWNLINKING' | 'ECLIPSE';

/** Payload manifest for AeroGrid-01 .. AeroGrid-12. */
const PAYLOADS = [
  'Sentinel-SAR X1', // 01 (plane A, same bus as telemetry AeroGrid-1)
  'Sentinel-SAR X1', // 02
  'HyperEye-V2', // 03
  'Sentinel-SAR X1', // 04 (plane B)
  'HyperEye-V2', // 05
  'ThermoScan-L3', // 06
  'Sentinel-SAR X1', // 07 (plane C)
  'HyperEye-V2', // 08
  'ThermoScan-L3', // 09
  'Sentinel-SAR X1', // 10 (plane D)
  'HyperEye-V2', // 11
  'ThermoScan-L3', // 12
] as const;

const STATIONS = [
  { name: 'Svalbard SvalSat', lat: 78.2297, lon: 15.4077 },
  { name: 'Inuvik', lat: 68.3607, lon: -133.7217 },
  { name: 'Punta Arenas', lat: -53.1638, lon: -70.9171 },
  { name: 'Troll Antarctica', lat: -72.0119, lon: 2.535 },
  { name: 'Awarua', lat: -46.5283, lon: 168.6761 },
] as const;

const AOIS = [
  { name: 'North Sea Strait', lat: 56.5, lon: 2.5 },
  { name: 'Baltic Approaches', lat: 55.0, lon: 14.0 },
  { name: 'Black Sea Western Shelf', lat: 44.0, lon: 30.5 },
  { name: 'Eastern Mediterranean', lat: 34.5, lon: 32.5 },
  { name: 'Strait of Hormuz', lat: 26.5, lon: 56.3 },
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

/* ------------------------------------------------------------------ */
/* Math helpers                                                        */
/* ------------------------------------------------------------------ */

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));
const round = (v: number, d = 1): number => Math.round(v * 10 ** d) / 10 ** d;
const frac = (v: number): number => v - Math.floor(v);

/** Deterministic per-satellite value in [0, 1). */
function hash01(n: number): number {
  let h = Math.imul(n | 0, 0x27d4eb2d) ^ 0x165667b1;
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
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

function elevationDeg(sat: Vec3, station: Vec3): number {
  const dx = sat.x - station.x;
  const dy = sat.y - station.y;
  const dz = sat.z - station.z;
  const range = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const stationNorm = Math.sqrt(station.x ** 2 + station.y ** 2 + station.z ** 2);
  const sinEl = (dx * station.x + dy * station.y + dz * station.z) / (range * stationNorm);
  return Math.asin(clamp(sinEl, -1, 1)) / DEG;
}

function greatCircleKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const p1 = lat1 * DEG;
  const p2 = lat2 * DEG;
  const dLat = p2 - p1;
  const dLon = (lon2 - lon1) * DEG;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dLon / 2) ** 2;
  return 2 * R_EARTH_KM * Math.asin(Math.min(1, Math.sqrt(a)));
}

/* ------------------------------------------------------------------ */
/* Orbit + power model (shared logic with telemetry route)             */
/* ------------------------------------------------------------------ */

interface SatGeometry {
  ecef: Vec3;
  latDeg: number;
  lonDeg: number;
  phase: number;
}

function propagate(index: number, tSec: number): SatGeometry {
  const plane = Math.floor(index / SATS_PER_PLANE);
  const slot = index % SATS_PER_PLANE;
  const elapsedS = tSec - MISSION_EPOCH_MS / 1000;

  // Slots are 120 deg apart in-plane; planes are phased by 1/12 orbit.
  const phase = frac(elapsedS / ORBIT_PERIOD_S + slot / SATS_PER_PLANE + plane / PLANE_IDS.length / SATS_PER_PLANE);
  const u = 2 * Math.PI * phase;
  const inc = INCLINATION_DEG * DEG;
  const raan = (RAAN0_DEG + plane * PLANE_RAAN_SPACING_DEG) * DEG;
  const r = R_EARTH_KM + ALT_KM;

  const xi = r * (Math.cos(raan) * Math.cos(u) - Math.sin(raan) * Math.sin(u) * Math.cos(inc));
  const yi = r * (Math.sin(raan) * Math.cos(u) + Math.cos(raan) * Math.sin(u) * Math.cos(inc));
  const zi = r * Math.sin(u) * Math.sin(inc);

  const theta = OMEGA_EARTH_RAD_S * elapsedS;
  const ecef: Vec3 = {
    x: xi * Math.cos(theta) + yi * Math.sin(theta),
    y: -xi * Math.sin(theta) + yi * Math.cos(theta),
    z: zi,
  };

  return { ecef, latDeg: Math.asin(ecef.z / r) / DEG, lonDeg: Math.atan2(ecef.y, ecef.x) / DEG, phase };
}

/** DoD profile: 12% at end of sunlit arc, rising to 24% at end of eclipse (mean 18%). */
function dodFromPhase(phase: number): number {
  if (phase >= ECLIPSE_START && phase < ECLIPSE_END) {
    return 12 + 12 * ((phase - ECLIPSE_START) / (ECLIPSE_END - ECLIPSE_START));
  }
  const s = frac(phase - ECLIPSE_END) / (1 - (ECLIPSE_END - ECLIPSE_START));
  return 24 - 12 * s;
}

/* ------------------------------------------------------------------ */
/* Handler                                                             */
/* ------------------------------------------------------------------ */

export async function GET(): Promise<NextResponse> {
  try {
    const nowMs = Date.now();
    const nowSec = nowMs / 1000;

    const satellites = PAYLOADS.map((payload, i) => {
      const geo = propagate(i, nowSec);
      const inEclipse = geo.phase >= ECLIPSE_START && geo.phase < ECLIPSE_END;
      const inContact = STATION_ECEF.some((st) => elevationDeg(geo.ecef, st) >= ELEVATION_MASK_DEG);

      // Optical cannot image in eclipse; SAR and LWIR operate day and night.
      const canImage = payload !== 'HyperEye-V2' || !inEclipse;
      let currentAoi: string | null = null;
      if (canImage) {
        let best = COLLECTION_ENVELOPE_KM;
        for (const aoi of AOIS) {
          const d = greatCircleKm(geo.latDeg, geo.lonDeg, aoi.lat, aoi.lon);
          if (d < best) {
            best = d;
            currentAoi = aoi.name;
          }
        }
      }

      const healthStatus: HealthStatus = inContact ? 'DOWNLINKING' : inEclipse ? 'ECLIPSE' : 'HEALTHY';

      // Per-satellite bias (+/-2 pts) and imaging load (SAR draws the most).
      const bias = hash01(i + 1) * 4 - 2;
      const imagingLoad = currentAoi ? (payload === 'Sentinel-SAR X1' ? 4 : 1.5) : 0;
      const batteryPercent = clamp(100 - (dodFromPhase(geo.phase) + bias + imagingLoad), 60, 100);

      const n = String(i + 1).padStart(2, '0');
      return {
        id: `AG-${n}`,
        name: `AeroGrid-${n}`,
        payload,
        planeId: PLANE_IDS[Math.floor(i / SATS_PER_PLANE)],
        healthStatus,
        batteryPercent: round(batteryPercent, 1),
        currentAoi,
      };
    });

    const count = (s: HealthStatus): number => satellites.filter((x) => x.healthStatus === s).length;

    return NextResponse.json(
      {
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
      },
      { status: 200, headers: { 'Cache-Control': 'no-store, max-age=0', 'X-Data-Source': 'SIMULATED' } },
    );
  } catch (err) {
    console.error('[constellation] status generation failed', err);
    return NextResponse.json(
      { error: 'CONSTELLATION_UNAVAILABLE', message: 'Fleet status could not be generated.' },
      { status: 500, headers: { 'Cache-Control': 'no-store, max-age=0' } },
    );
  }
}
