'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import SoundToggle from '@/components/ui/SoundToggle';
import { soundEngine } from '@/lib/soundEngine';
import {
  ArrowLeft,
  ChevronRight,
  Crosshair,
  Cpu,
  Download,
  Eye,
  Radar,
  Radio,
  Rocket,
  Satellite,
  Thermometer,
  Timer,
  Activity,
  FileCode,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ───────────────────────── Design tokens ───────────────────────── */
const C = { bg0: '#05070B', bg1: '#080C14', cyan: '#00A1FF', green: '#00FF88', amber: '#FC6A18', dim: '#7C8DA6' } as const;
const MONO = "ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace";
const SANS = "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif";
const PLANE_COLORS = ['#00A1FF', '#00FF88', '#FC6A18', '#B197FF', '#FF5C9A', '#FFD43B'] as const;

/* ───────────────────────── Domain constants ───────────────────────── */
const ORBIT = { altitudeKm: 520, inclinationDeg: 97.5, periodMin: 94.9, velocityKmS: 7.605 } as const;
const COST = { sovereignM: 14.2, legacyM: 160 } as const;
const SLA_DAYS = 180;
const FOOTPRINT_DEG = 5; // ~555 km access radius (off-nadir tasking)
const EARTH_ROT_MIN = 1436.07; // sidereal day in minutes
const D2R = Math.PI / 180;

type SensorId = 'optical' | 'sar' | 'lwir' | 'edge' | 'comms';
type AoiId = 'hormuz' | 'baltic' | 'amazon' | 'suez' | 'custom';
interface Bbox { minLat: number; maxLat: number; minLon: number; maxLon: number }
type BboxStr = Record<keyof Bbox, string>;
interface Sensor { id: SensorId; name: string; role: string; massKg: number; powerW: number; night: boolean; Icon: LucideIcon }
interface Aoi { id: AoiId; name: string; domain: string; bbox: Bbox }

const SENSORS: Sensor[] = [
  { id: 'optical', name: 'HyperEye-V2', role: 'Optical', massKg: 38, powerW: 45, night: false, Icon: Eye },
  { id: 'sar', name: 'Sentinel-SAR X1', role: 'Radar', massKg: 52, powerW: 180, night: true, Icon: Radar },
  { id: 'lwir', name: 'ThermoScan-L3', role: 'LWIR', massKg: 24, powerW: 30, night: true, Icon: Thermometer },
  { id: 'edge', name: 'NeuralCore-E2', role: 'Edge AI', massKg: 4, powerW: 25, night: false, Icon: Cpu },
  { id: 'comms', name: 'LinkMesh-D2C', role: 'Comms', massKg: 6, powerW: 20, night: false, Icon: Radio },
];
const SENSOR_MAP: Record<SensorId, Sensor> = {
  optical: SENSORS[0], sar: SENSORS[1], lwir: SENSORS[2], edge: SENSORS[3], comms: SENSORS[4],
};
const AOI_MAP: Record<AoiId, Aoi> = {
  hormuz: { id: 'hormuz', name: 'Strait of Hormuz', domain: 'Maritime', bbox: { minLat: 24, maxLat: 28, minLon: 54, maxLon: 58 } },
  baltic: { id: 'baltic', name: 'Baltic Sea', domain: 'Border', bbox: { minLat: 54, maxLat: 60, minLon: 14, maxLon: 24 } },
  amazon: { id: 'amazon', name: 'Amazon Basin', domain: 'Forestry / Disaster', bbox: { minLat: -10, maxLat: 2, minLon: -70, maxLon: -50 } },
  suez: { id: 'suez', name: 'Suez Canal', domain: 'Maritime', bbox: { minLat: 29, maxLat: 32, minLon: 31.5, maxLon: 33.5 } },
  custom: { id: 'custom', name: 'Custom bounding box', domain: 'User defined', bbox: { minLat: 24, maxLat: 30, minLon: 44, maxLon: 52 } },
};
const AOI_ORDER: AoiId[] = ['hormuz', 'baltic', 'amazon', 'suez', 'custom'];

/* ───────────────────────── Aerospace math ───────────────────────── */
function planesFor(n: number): number {
  if (n >= 18 && n % 6 === 0) return 6;
  if (n >= 16 && n % 4 === 0) return 4;
  if (n % 3 === 0) return 3;
  if (n % 2 === 0) return 2;
  return 1;
}

function wrapLon(l: number): number {
  let x = ((l + 180) % 360 + 360) % 360 - 180;
  if (x === -180) x = 180;
  return x;
}

/** Sub-satellite point for a circular SSO orbit: RAAN, initial phase (deg), sim time (min). */
function satLatLon(raanDeg: number, phaseDeg: number, tMin: number): { lat: number; lon: number } {
  const u = (phaseDeg + (360 * tMin) / ORBIT.periodMin) * D2R;
  const om = raanDeg * D2R;
  const inc = ORBIT.inclinationDeg * D2R;
  const x = Math.cos(om) * Math.cos(u) - Math.sin(om) * Math.cos(inc) * Math.sin(u);
  const y = Math.sin(om) * Math.cos(u) + Math.cos(om) * Math.cos(inc) * Math.sin(u);
  const z = Math.sin(inc) * Math.sin(u);
  const lat = Math.asin(Math.max(-1, Math.min(1, z))) / D2R;
  const lon = wrapLon(Math.atan2(y, x) / D2R - (360 * tMin) / EARTH_ROT_MIN);
  return { lat, lon };
}

function angDist(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const dLat = (lat2 - lat1) * D2R;
  const dLon = (lon2 - lon1) * D2R;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * D2R) * Math.cos(lat2 * D2R) * Math.sin(dLon / 2) ** 2;
  return (2 * Math.asin(Math.min(1, Math.sqrt(a)))) / D2R;
}

function parseBbox(b: BboxStr): Bbox {
  const n = (s: string, fb: number, lo: number, hi: number): number => {
    const v = parseFloat(s);
    return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : fb;
  };
  const a = n(b.minLat, 24, -90, 90), c = n(b.maxLat, 30, -90, 90);
  const d = n(b.minLon, 44, -180, 180), e = n(b.maxLon, 52, -180, 180);
  return { minLat: Math.min(a, c), maxLat: Math.max(a, c), minLon: Math.min(d, e), maxLon: Math.max(d, e) };
}

interface LaunchPlan { vehicle: string; mode: string; slots: number }
function launchPlan(n: number): LaunchPlan {
  if (n <= 8) return { vehicle: 'Falcon 9 · Transporter-14', mode: 'Rideshare', slots: 1 };
  if (n <= 16) return { vehicle: 'Falcon 9 · Transporter-14 + follow-on', mode: 'Rideshare', slots: 2 };
  return { vehicle: 'Dedicated Falcon 9 SSO launch', mode: 'Dedicated', slots: 1 };
}

function fmtCountdown(sec: number): { d: string; rest: string } {
  const s = Math.max(0, Math.floor(sec));
  const p = (x: number): string => String(x).padStart(2, '0');
  return { d: String(Math.floor(s / 86400)), rest: `${p(Math.floor((s % 86400) / 3600))}:${p(Math.floor((s % 3600) / 60))}:${p(s % 60)}` };
}

/* ───────────────────────── Styles ───────────────────────── */
const CSS = `
.ag{min-height:100vh;background:radial-gradient(1100px 560px at 85% -10%,rgba(0,161,255,.14),transparent 60%),linear-gradient(180deg,${C.bg0},${C.bg1});color:#DCE8F5;font-family:${SANS};padding:0 0 56px}
.ag *{box-sizing:border-box}
.ag-grid{display:grid;grid-template-columns:minmax(300px,380px) minmax(0,1fr);gap:18px;align-items:start;padding:0 clamp(14px,3vw,40px)}
@media(max-width:980px){.ag-grid{grid-template-columns:1fr}}
.ag-panel{background:linear-gradient(160deg,rgba(0,161,255,.15),rgba(0,161,255,.05));border:1px solid rgba(0,161,255,.3);border-radius:10px;padding:16px;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.ag-h{font-size:13px;font-weight:600;color:#9FD6FF;margin:0 0 12px;display:flex;gap:8px;align-items:center;justify-content:space-between}
.ag-m{font-family:${MONO}}
.ag-metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;margin-top:18px}
.ag-card{background:rgba(5,7,11,.6);border:1px solid rgba(0,161,255,.22);border-radius:6px;padding:14px;min-width:0}
.ag-k{font:11px ${MONO};color:${C.dim};display:flex;gap:6px;align-items:center}
.ag-v{font:600 26px ${MONO};margin-top:6px;letter-spacing:-.02em}
.ag-s{font:11px ${MONO};color:${C.dim};margin-top:6px;line-height:1.5}
.ag-range{width:100%;accent-color:${C.cyan};height:28px;cursor:pointer}
.ag-opt{width:100%;text-align:left;background:rgba(5,7,11,.5);color:#DCE8F5;border:1px solid rgba(0,161,255,.25);border-radius:6px;padding:9px 11px;margin-bottom:6px;display:flex;gap:10px;align-items:center;cursor:pointer;font:13px ${SANS};transition:border-color .15s,background .15s}
.ag-opt:hover{border-color:${C.cyan}}
.ag-opt[aria-pressed=true],.ag-opt[aria-checked=true]{border-color:${C.green};background:rgba(0,255,136,.08)}
.ag-opt small{display:block;font:11px ${MONO};color:${C.dim};margin-top:2px}
.ag-in{width:100%;background:${C.bg0};border:1px solid rgba(0,161,255,.35);border-radius:4px;color:#fff;font:13px ${MONO};padding:6px 8px}
.ag-btn{display:inline-flex;gap:8px;align-items:center;justify-content:center;padding:11px 16px;border-radius:6px;font:600 13px ${SANS};cursor:pointer;text-decoration:none;border:1px solid ${C.cyan};color:#fff;background:rgba(0,161,255,.18);transition:background .15s}
.ag-btn:hover{background:rgba(0,161,255,.34)}
.ag-btn.go{background:${C.green};color:${C.bg0};border-color:${C.green}}
.ag-btn.go:hover{background:#4dffb0}
.ag-chip{font:11px ${MONO};padding:4px 9px;border-radius:999px;border:1px solid rgba(0,161,255,.35);color:#9FD6FF;background:rgba(0,161,255,.1);white-space:nowrap}
.ag-speed{font:11px ${MONO};padding:3px 8px;border-radius:4px;border:1px solid rgba(0,161,255,.35);background:transparent;color:#9FD6FF;cursor:pointer}
.ag-speed[aria-pressed=true]{background:${C.cyan};color:${C.bg0};border-color:${C.cyan}}
.ag-table{width:100%;border-collapse:collapse;font:12px ${MONO}}
.ag-table th{color:${C.dim};font-weight:400;text-align:left;padding:4px 8px 4px 0}
.ag-table td{padding:6px 8px 6px 0;border-top:1px solid rgba(0,161,255,.15)}
.ag :focus-visible{outline:2px solid ${C.green};outline-offset:2px}
.ag-canvas{display:block;width:100%;aspect-ratio:2/1;border-radius:6px;border:1px solid rgba(0,161,255,.25);background:${C.bg0}}
`;

/* ───────────────────────── Page ───────────────────────── */
export default function SimulatorPage() {
  const [fleet, setFleet] = useState<number>(12);
  const [aoiId, setAoiId] = useState<AoiId>('hormuz');
  const [sensors, setSensors] = useState<SensorId[]>(['optical', 'sar', 'edge']);
  const [custom, setCustom] = useState<BboxStr>({ minLat: '24', maxLat: '30', minLon: '44', maxLon: '52' });
  const [speed, setSpeed] = useState<number>(240);
  const [inView, setInView] = useState<number>(0);
  const [simMin, setSimMin] = useState<number>(0);
  const [t0, setT0] = useState<number | null>(null);
  const [now, setNow] = useState<number>(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const simRef = useRef<number>(0);
  const speedRef = useRef<number>(speed);

  useEffect(() => { speedRef.current = speed; }, [speed]);
  useEffect(() => {
    const s = Date.now();
    setT0(s);
    setNow(s);
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  /* Real-time synthesis */
  const model = useMemo(() => {
    const planes = planesFor(fleet);
    const revisit = 360 / (fleet * 0.75);
    const bbox = aoiId === 'custom' ? parseBbox(custom) : AOI_MAP[aoiId].bbox;
    const center = { lat: (bbox.minLat + bbox.maxLat) / 2, lon: (bbox.minLon + bbox.maxLon) / 2 };
    const passes = Math.round((1440 / revisit) * (0.7 + (0.8 * Math.abs(center.lat)) / 90));
    const night = sensors.some((id) => SENSOR_MAP[id].night);
    const usable = night ? passes : Math.round(passes * 0.5);
    const payloadKg = sensors.reduce((a, id) => a + SENSOR_MAP[id].massKg, 0);
    const powerW = sensors.reduce((a, id) => a + SENSOR_MAP[id].powerW, 0);
    const areaKm2 = Math.round((bbox.maxLat - bbox.minLat) * 111.32 * (bbox.maxLon - bbox.minLon) * 111.32 * Math.cos(center.lat * D2R));
    const savings = Math.round((1 - COST.sovereignM / COST.legacyM) * 100);
    return { planes, perPlane: fleet / planes, revisit, bbox, center, passes, night, usable, payloadKg, powerW, areaKm2, savings, launch: launchPlan(fleet) };
  }, [fleet, aoiId, custom, sensors]);

  const { planes, bbox, center } = model;
  const missionId = `AGOS-${fleet}${planes}1-${aoiId.slice(0, 3).toUpperCase()}`;
  const aoi = AOI_MAP[aoiId];

  /* Canvas: equirectangular ground-track visualizer */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0, last = 0, lastCount = -1, lastMin = -1;

    const frame = (ts: number): void => {
      if (last === 0) last = ts;
      const dt = Math.min(0.1, (ts - last) / 1000);
      last = ts;
      if (!reduce) simRef.current += (dt * speedRef.current) / 60;
      const t = simRef.current;
      const dpr = window.devicePixelRatio || 1;
      const W = canvas.clientWidth, H = canvas.clientHeight;
      if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const X = (lon: number): number => ((lon + 180) / 360) * W;
      const Y = (lat: number): number => ((90 - lat) / 180) * H;

      ctx.fillStyle = C.bg0;
      ctx.fillRect(0, 0, W, H);
      ctx.font = `10px ${MONO}`;
      ctx.lineWidth = 1;
      for (let lon = -180; lon <= 180; lon += 30) {
        ctx.strokeStyle = 'rgba(0,161,255,0.12)';
        ctx.beginPath(); ctx.moveTo(X(lon), 0); ctx.lineTo(X(lon), H); ctx.stroke();
        ctx.fillStyle = 'rgba(124,141,166,0.8)';
        if (lon < 180) ctx.fillText(`${lon}°`, X(lon) + 3, H - 4);
      }
      for (let lat = -90; lat <= 90; lat += 30) {
        ctx.strokeStyle = lat === 0 ? 'rgba(0,161,255,0.3)' : 'rgba(0,161,255,0.12)';
        ctx.beginPath(); ctx.moveTo(0, Y(lat)); ctx.lineTo(W, Y(lat)); ctx.stroke();
        ctx.fillStyle = 'rgba(124,141,166,0.8)';
        if (lat > -90) ctx.fillText(`${lat}°`, 4, Y(lat) - 3);
      }

      // AOI bounding box
      ctx.strokeStyle = C.amber;
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(X(bbox.minLon), Y(bbox.maxLat), Math.max(2, X(bbox.maxLon) - X(bbox.minLon)), Math.max(2, Y(bbox.minLat) - Y(bbox.maxLat)));
      ctx.setLineDash([]);

      // Orbital plane ground tracks
      const perPlane = fleet / planes;
      for (let p = 0; p < planes; p++) {
        const col = PLANE_COLORS[p % PLANE_COLORS.length];
        ctx.strokeStyle = `${col}66`;
        ctx.beginPath();
        let prev: number | null = null;
        for (let u = 0; u <= 360; u += 3) {
          const s = satLatLon((p * 360) / planes, u, t);
          if (prev === null || Math.abs(s.lon - prev) > 180) ctx.moveTo(X(s.lon), Y(s.lat));
          else ctx.lineTo(X(s.lon), Y(s.lat));
          prev = s.lon;
        }
        ctx.stroke();
      }

      // Satellites, footprints, contact cones
      let count = 0;
      for (let p = 0; p < planes; p++) {
        const col = PLANE_COLORS[p % PLANE_COLORS.length];
        for (let k = 0; k < perPlane; k++) {
          const s = satLatLon((p * 360) / planes, (k * 360) / perPlane + (p * 360) / fleet, t);
          const sx = X(s.lon), sy = Y(s.lat);
          const contact = angDist(s.lat, s.lon, center.lat, center.lon) <= FOOTPRINT_DEG;
          if (contact) count++;
          const ry = (FOOTPRINT_DEG / 180) * H;
          const rx = Math.min(W / 4, (FOOTPRINT_DEG / Math.max(0.2, Math.cos(s.lat * D2R)) / 360) * W);
          ctx.beginPath();
          ctx.ellipse(sx, sy, rx, ry, 0, 0, Math.PI * 2);
          ctx.fillStyle = contact ? 'rgba(0,255,136,0.22)' : `${col}14`;
          ctx.fill();
          ctx.strokeStyle = contact ? C.green : `${col}55`;
          ctx.stroke();
          if (contact) {
            const tx = X(center.lon), ty = Y(center.lat);
            ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(tx - rx * 0.6, ty); ctx.lineTo(tx + rx * 0.6, ty); ctx.closePath();
            ctx.fillStyle = 'rgba(0,255,136,0.12)';
            ctx.fill();
          }
          ctx.shadowColor = contact ? C.green : col;
          ctx.shadowBlur = 8;
          ctx.fillStyle = contact ? C.green : col;
          ctx.beginPath(); ctx.arc(sx, sy, 3.5, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Target marker
      const tx = X(center.lon), ty = Y(center.lat);
      const pulse = 7 + 5 * Math.abs(Math.sin(ts / 600));
      ctx.strokeStyle = C.amber;
      ctx.beginPath(); ctx.arc(tx, ty, pulse, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(tx - 12, ty); ctx.lineTo(tx + 12, ty); ctx.moveTo(tx, ty - 12); ctx.lineTo(tx, ty + 12); ctx.stroke();

      if (count !== lastCount) { lastCount = count; setInView(count); }
      const mi = Math.floor(t);
      if (mi !== lastMin) { lastMin = mi; setSimMin(mi); }
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [fleet, planes, bbox, center]);

  /* Handlers & deliverables */
  const toggleSensor = (id: SensorId): void => {
    soundEngine.playClick();
    setSensors((cur) => (cur.includes(id) ? (cur.length > 1 ? cur.filter((s) => s !== id) : cur) : [...cur, id]));
  };
  const setBox = (key: keyof Bbox) => (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setCustom((c) => ({ ...c, [key]: value }));
  };

  const launchDate = t0 === null ? null : new Date(t0 + SLA_DAYS * 86400000).toISOString().slice(0, 10);
  const cd = fmtCountdown(t0 === null ? SLA_DAYS * 86400 : SLA_DAYS * 86400 - (now - t0) / 1000);

  const deployHref = useMemo(() => {
    const q = new URLSearchParams({
      fleet: String(fleet), planes: String(planes), walker: `${fleet}/${planes}/1`, aoi: aoiId,
      sensors: sensors.join(','), revisitMin: model.revisit.toFixed(1), passes: String(model.passes), mission: missionId,
    });
    return `/dashboard?${q.toString()}`;
  }, [fleet, planes, aoiId, sensors, model.revisit, model.passes, missionId]);

  const buildBrief = (): Record<string, unknown> => ({
    schema: 'aerogrid.sovereign-mission-brief/1.0',
    missionId,
    generatedAt: new Date().toISOString(),
    orbit: { type: 'Sun-Synchronous (SSO)', ...ORBIT, constellation: `Walker-Delta ${fleet}/${planes}/1` },
    aoi: { id: aoiId, name: aoi.name, domain: aoi.domain, bbox, center, areaKm2: model.areaKm2 },
    sensors: sensors.map((id) => { const s = SENSOR_MAP[id]; return { id, name: s.name, role: s.role, massKg: s.massKg, powerW: s.powerW }; }),
    constellation: Array.from({ length: planes }, (_, p) => ({
      plane: String.fromCharCode(65 + p),
      raanDeg: (p * 360) / planes,
      satellites: Array.from({ length: model.perPlane }, (_, k) => ({
        id: `${missionId}-${String.fromCharCode(65 + p)}${k + 1}`,
        phaseDeg: Number(((k * 360) / model.perPlane + (p * 360) / fleet).toFixed(2)),
      })),
    })),
    performance: {
      meanRevisitMin: Number(model.revisit.toFixed(1)),
      dailyImagingPasses: model.passes,
      usablePassesWithSensorMix: model.usable,
      nightAllWeatherCapable: model.night,
      payloadMassPerSatKg: model.payloadKg,
      payloadPowerPerSatW: model.powerW,
    },
    launch: { ...model.launch, slaDays: SLA_DAYS, targetDate: launchDate },
    cost: { sovereignProgramUsdM: COST.sovereignM, legacyProgramUsdM: COST.legacyM, savingsPct: model.savings },
  });

  const downloadBrief = (): void => {
    soundEngine.playChirp();
    const blob = new Blob([JSON.stringify(buildBrief(), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sovereign-mission-brief-${missionId}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const stashFleet = (): void => {
    soundEngine.playWarp();
    try { sessionStorage.setItem('aerogrid.fleetConfig', JSON.stringify(buildBrief())); } catch { /* storage unavailable */ }
  };

  const simClock = `T+${Math.floor(simMin / 1440)}d ${String(Math.floor((simMin % 1440) / 60)).padStart(2, '0')}:${String(simMin % 60).padStart(2, '0')}`;

  return (
    <main className="ag">
      <style>{CSS}</style>

      {/* Global Top Navigation Bar */}
      <nav style={{ borderBottom: '1px solid rgba(0,161,255,0.2)', background: 'rgba(7,11,19,0.9)', backdropFilter: 'blur(12px)', padding: '12px clamp(14px,3vw,40px)', marginBottom: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: 6, font: `11px ${MONO}`, color: C.dim, textDecoration: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: 999 }}
          >
            <ArrowLeft size={13} /> HOME
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, font: `11px ${MONO}`, color: C.dim }}>
            <ChevronRight size={12} />
            <Link href="/dashboard" style={{ color: C.dim, textDecoration: 'none' }}>MISSION CONTROL</Link>
            <ChevronRight size={12} />
            <span style={{ color: C.cyan, fontWeight: 700 }}>ORBIT SYNTHESIZER</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link
            href="/dashboard"
            style={{ display: 'flex', alignItems: 'center', gap: 6, font: `11px ${MONO}`, textTransform: 'uppercase', color: C.green, background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)', padding: '6px 12px', borderRadius: 999, textDecoration: 'none' }}
          >
            <Activity size={13} /> Mission Control
          </Link>
          <Link
            href="/payloads"
            style={{ display: 'flex', alignItems: 'center', gap: 6, font: `11px ${MONO}`, textTransform: 'uppercase', color: C.cyan, background: 'rgba(0,161,255,0.1)', border: '1px solid rgba(0,161,255,0.3)', padding: '6px 12px', borderRadius: 999, textDecoration: 'none' }}
          >
            <Satellite size={13} /> Payloads CAD
          </Link>
          <Link
            href="/docs"
            style={{ display: 'flex', alignItems: 'center', gap: 6, font: `11px ${MONO}`, textTransform: 'uppercase', color: '#CBD0DC', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: 999, textDecoration: 'none' }}
          >
            <FileCode size={13} /> API Docs
          </Link>
          <SoundToggle />
        </div>
      </nav>

      <header style={{ padding: '0 clamp(14px,3vw,40px)', marginBottom: 20, display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div className="ag-m" style={{ color: C.cyan, fontSize: 12 }}>AeroGrid OS · Mission Design</div>
          <h1 style={{ fontSize: 'clamp(22px,3.2vw,34px)', margin: '6px 0 0', fontWeight: 650, letterSpacing: '-0.02em' }}>
            Sovereign Constellation &amp; Orbit Synthesizer
          </h1>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }} aria-label="Fixed orbit parameters">
          <span className="ag-chip">SSO {ORBIT.altitudeKm} km</span>
          <span className="ag-chip">i {ORBIT.inclinationDeg}°</span>
          <span className="ag-chip">T {ORBIT.periodMin} min</span>
          <span className="ag-chip">v {ORBIT.velocityKmS} km/s</span>
          <span className="ag-chip" style={{ color: C.green, borderColor: 'rgba(0,255,136,.4)' }}>{missionId}</span>
        </div>
      </header>

      <div className="ag-grid">
        {/* ── Controls ── */}
        <section className="ag-panel" aria-label="Mission parameters">
          <h2 className="ag-h">Fleet size <span className="ag-m" style={{ color: C.green }}>{fleet} sats</span></h2>
          <input
            className="ag-range" type="range" min={4} max={24} step={1} value={fleet}
            aria-label="Target fleet size" onChange={(e) => {
              soundEngine.playClick();
              setFleet(Number(e.target.value));
            }}
          />
          <div className="ag-s" style={{ marginBottom: 20 }}>
            Walker-Delta {fleet}/{planes}/1 · {planes} plane{planes > 1 ? 's' : ''} × {model.perPlane}
          </div>

          <h2 className="ag-h">Area of interest</h2>
          <div role="radiogroup" aria-label="Area of interest">
            {AOI_ORDER.map((id) => (
              <button key={id} type="button" role="radio" aria-checked={aoiId === id} className="ag-opt" onClick={() => {
                soundEngine.playClick();
                setAoiId(id);
              }}>
                <Crosshair size={16} color={aoiId === id ? C.green : C.cyan} aria-hidden />
                <span>{AOI_MAP[id].name}<small>{AOI_MAP[id].domain}</small></span>
              </button>
            ))}
          </div>
          {aoiId === 'custom' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '4px 0 6px' }}>
              {(['minLat', 'maxLat', 'minLon', 'maxLon'] as const).map((key) => (
                <label key={key} className="ag-s" style={{ margin: 0 }}>
                  {key}
                  <input className="ag-in" inputMode="decimal" value={custom[key]} onChange={setBox(key)} aria-label={key} />
                </label>
              ))}
            </div>
          )}

          <h2 className="ag-h" style={{ marginTop: 20 }}>Sensor mix <span className="ag-m" style={{ color: C.dim }}>{sensors.length}/5</span></h2>
          {SENSORS.map(({ id, name, role, Icon, massKg, powerW }) => (
            <button key={id} type="button" aria-pressed={sensors.includes(id)} className="ag-opt" onClick={() => toggleSensor(id)}>
              <Icon size={16} color={sensors.includes(id) ? C.green : C.cyan} aria-hidden />
              <span>{name}<small>{role} · {massKg} kg · {powerW} W</small></span>
            </button>
          ))}
        </section>

        {/* ── Visualizer + metrics ── */}
        <div style={{ minWidth: 0 }}>
          <section className="ag-panel" aria-label="Orbital visualizer">
            <h2 className="ag-h">
              <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Satellite size={15} aria-hidden /> Ground tracks · {aoi.name}</span>
              <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <span className="ag-m" style={{ color: C.dim, fontSize: 11, marginRight: 6 }}>{simClock}</span>
                {[60, 240, 600].map((s) => (
                  <button key={s} type="button" className="ag-speed" aria-pressed={speed === s} onClick={() => setSpeed(s)}>{s}×</button>
                ))}
              </span>
            </h2>
            <canvas ref={canvasRef} className="ag-canvas" role="img" aria-label={`Equirectangular map of ${fleet} satellites across ${planes} orbital planes`} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 10, alignItems: 'center' }}>
              {Array.from({ length: planes }, (_, p) => (
                <span key={p} className="ag-m" style={{ fontSize: 11, display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ width: 9, height: 9, borderRadius: 9, background: PLANE_COLORS[p % PLANE_COLORS.length] }} />
                  Plane {String.fromCharCode(65 + p)}
                </span>
              ))}
              <span className="ag-m" style={{ fontSize: 11, marginLeft: 'auto', color: inView > 0 ? C.green : C.amber }}>
                {inView > 0 ? `${inView} sat${inView > 1 ? 's' : ''} covering target` : 'No satellite over target'}
              </span>
            </div>
          </section>

          <div className="ag-metrics">
            <div className="ag-card">
              <div className="ag-k"><Timer size={13} aria-hidden /> Mean revisit interval</div>
              <div className="ag-v" style={{ color: C.cyan }}>{model.revisit.toFixed(1)} min</div>
              <div className="ag-s">360 / (N × 0.75), N = {fleet}</div>
            </div>
            <div className="ag-card">
              <div className="ag-k"><Radar size={13} aria-hidden /> Daily imaging passes</div>
              <div className="ag-v" style={{ color: C.green }}>{model.passes}</div>
              <div className="ag-s">{model.usable} usable with this sensor mix{model.night ? ' (day/night)' : ' (daylight only)'}</div>
            </div>
            <div className="ag-card">
              <div className="ag-k"><Timer size={13} aria-hidden /> Launch SLA countdown</div>
              <div className="ag-v" style={{ color: C.amber }}>{cd.d}d <span style={{ fontSize: 18 }}>{cd.rest}</span></div>
              <div className="ag-s">{SLA_DAYS}-day contract · target {launchDate ?? '—'}</div>
            </div>
            <div className="ag-card">
              <div className="ag-k"><Rocket size={13} aria-hidden /> Launch manifest</div>
              <div style={{ font: `600 15px ${MONO}`, marginTop: 8, lineHeight: 1.4 }}>{model.launch.vehicle}</div>
              <div className="ag-s">{model.launch.mode} · {model.launch.slots} slot{model.launch.slots > 1 ? 's' : ''} · {fleet} sats</div>
            </div>
            <div className="ag-card" style={{ gridColumn: 'span 2' }}>
              <div className="ag-k">Total sovereign program cost</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 14, marginTop: 6 }}>
                <span className="ag-v" style={{ margin: 0, color: C.green }}>${COST.sovereignM}M</span>
                <span className="ag-m" style={{ color: C.dim, textDecoration: 'line-through' }}>${COST.legacyM}M+ legacy</span>
                <span className="ag-v" style={{ margin: '0 0 0 auto', color: C.amber }}>−{model.savings}%</span>
              </div>
              <div style={{ height: 6, background: 'rgba(124,141,166,.25)', borderRadius: 3, marginTop: 10 }}>
                <div style={{ width: `${(COST.sovereignM / COST.legacyM) * 100}%`, height: '100%', background: C.green, borderRadius: 3 }} />
              </div>
            </div>
            <div className="ag-card">
              <div className="ag-k"><Cpu size={13} aria-hidden /> Per-satellite payload</div>
              <div className="ag-v">{model.payloadKg} kg</div>
              <div className="ag-s">{model.powerW} W · AOI ≈ {model.areaKm2.toLocaleString('en-US')} km²</div>
            </div>
          </div>

          <section className="ag-panel" style={{ marginTop: 18 }} aria-label="Orbital plane allocation">
            <h2 className="ag-h">Plane allocation</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="ag-table">
                <thead><tr><th>Plane</th><th>RAAN</th><th>Satellites</th><th>Phasing (F=1)</th></tr></thead>
                <tbody>
                  {Array.from({ length: planes }, (_, p) => (
                    <tr key={p}>
                      <td style={{ color: PLANE_COLORS[p % PLANE_COLORS.length] }}>{String.fromCharCode(65 + p)}</td>
                      <td>{((p * 360) / planes).toFixed(0)}°</td>
                      <td>{model.perPlane}</td>
                      <td>{((p * 360) / fleet).toFixed(1)}°</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18 }}>
            <button type="button" className="ag-btn" onClick={downloadBrief}>
              <Download size={16} aria-hidden /> Download Sovereign Mission Brief (JSON)
            </button>
            <Link href={deployHref} className="ag-btn go" onClick={stashFleet}>
              <Rocket size={16} aria-hidden /> Deploy to Mission Control
            </Link>
            <Link href="/payloads" className="ag-btn">
              <Cpu size={16} aria-hidden /> View Payloads Architecture
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
