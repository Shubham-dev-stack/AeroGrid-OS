'use client';

/**
 * AeroGrid OS · Modular Payloads & Sensor Explorer
 *
 * - Five sovereign-bus payloads with full spec sheets.
 * - "What the sensor sees" HUD: every preview is procedurally generated on a <canvas>
 *   (seeded terrain, SAR speckle statistics, Planck-integrated LWIR radiance, simulated
 *   edge-AI detections, phased-array beam hopping). No images or external assets.
 *   Hover the preview for per-pixel readouts. Honours prefers-reduced-motion.
 * - Bus compatibility calculator: mass / peak power / volume / daily data volume with
 *   hard limits (24 kg, 320 W, 16U). Deploy is gated on FLIGHT COMPATIBLE.
 * - "Deploy in Constellation" routes to /dashboard?payloads=... which opens the tasking
 *   interface pre-filled with the mounted configuration.
 *
 * Assumptions that are NOT in the payload datasheets (clearly marked in the UI):
 *   - per-payload bus volume (U), imaging duty cycle and downlink data rates,
 *   - downlink capacity of 5 passes/day at 800 Mbps X-band.
 */

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import {
  Aperture,
  ArrowLeft,
  Box,
  Check,
  ChevronRight,
  Cpu,
  Database,
  Gauge,
  Plus,
  Radar,
  RadioTower,
  Rocket,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Thermometer,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ================================================================== */
/* Theme                                                               */
/* ================================================================== */

const C = {
  cyan: '#00A1FF',
  green: '#00FF88',
  amber: '#FC6A18',
  red: '#FF4D4D',
} as const;

const PANEL = 'rounded-xl border border-[rgba(0,161,255,0.2)] bg-[#0A0E17]/75 backdrop-blur-xl';
const LABEL = 'font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45';
const SCROLL = '[scrollbar-width:thin] [scrollbar-color:rgba(0,161,255,0.35)_transparent]';

/* ================================================================== */
/* Payload catalogue                                                   */
/* ================================================================== */

type PayloadId = 'hypereye' | 'sar' | 'thermo' | 'neural' | 'linkmesh';

interface Spec {
  label: string;
  value: string;
}

interface PayloadDef {
  id: PayloadId;
  name: string;
  fullName: string;
  category: string;
  badge: string;
  accent: string;
  Icon: LucideIcon;
  headline: Spec[];
  specs: Spec[];
  keyFeature: string;
  applications: string[];
  massKg: number;
  peakPowerW: number;
  /** ASSUMPTION: reference bus-volume allocation (not in datasheet). */
  volumeU: number;
  /** ASSUMPTION: average data rate while active (Mbps, after on-board compression). */
  dataRateMbps: number;
  /** ASSUMPTION: active minutes per day. */
  dutyMin: number;
  /** Whether NeuralCore edge filtering can reduce this payload's downlink volume. */
  edgeFilterable: boolean;
  /** Taskable through POST /api/v1/tasking. */
  taskable: boolean;
}

const PAYLOADS: PayloadDef[] = [
  {
    id: 'hypereye',
    name: 'HyperEye-V2',
    fullName: 'High-Resolution Multispectral Optical',
    category: 'Earth Observation / Intelligence',
    badge: 'OPTICAL',
    accent: C.cyan,
    Icon: Aperture,
    headline: [
      { label: 'GSD', value: '0.50 m' },
      { label: 'SWATH', value: '14.8 km' },
      { label: 'BANDS', value: '8' },
    ],
    specs: [
      { label: 'Ground Sample Distance', value: '0.50 m @ 520 km SSO' },
      { label: 'Swath', value: '14.8 km' },
      { label: 'Spectral', value: '8 bands · 450–900 nm (RGB + RedEdge + NIR)' },
      { label: 'Mass', value: '4.8 kg' },
      { label: 'Peak Power', value: '38 W' },
      { label: 'Interface', value: 'SpaceWire (200 Mbps) / 28 V regulated' },
    ],
    keyFeature:
      'Time-Delayed Integration (TDI) CMOS sensor delivering sub-meter sovereign intelligence capture.',
    applications: ['Precision agriculture', 'Infrastructure change detection', 'Defense order-of-battle imagery'],
    massKg: 4.8,
    peakPowerW: 38,
    volumeU: 5,
    dataRateMbps: 180,
    dutyMin: 40,
    edgeFilterable: true,
    taskable: true,
  },
  {
    id: 'sar',
    name: 'Sentinel-SAR X1',
    fullName: 'Synthetic Aperture Radar',
    category: 'All-Weather / Radar Reconnaissance',
    badge: 'SAR',
    accent: '#38E1FF',
    Icon: Radar,
    headline: [
      { label: 'RES', value: '1.0 m' },
      { label: 'BAND', value: 'X 9.65G' },
      { label: 'SWATH', value: '20–50 km' },
    ],
    specs: [
      { label: 'Resolution', value: '1.0 m Spotlight / 3.0 m Stripmap' },
      { label: 'Center Frequency', value: '9.65 GHz (X-band)' },
      { label: 'Swath', value: '20–50 km' },
      { label: 'Mass', value: '11.2 kg' },
      { label: 'Peak Power', value: '240 W (pulsed RF)' },
      { label: 'Interface', value: '1000BASE-T Ethernet / 28 V bus' },
    ],
    keyFeature:
      'Complete cloud penetration, nocturnal maritime wake detection, and sub-centimeter interferometric phase coherence.',
    applications: ['Maritime border surveillance', 'Dark-vessel detection', 'Subsidence & flood mapping'],
    massKg: 11.2,
    peakPowerW: 240,
    volumeU: 7,
    dataRateMbps: 600,
    dutyMin: 12,
    edgeFilterable: true,
    taskable: true,
  },
  {
    id: 'thermo',
    name: 'ThermoScan-L3',
    fullName: 'Cooled Long-Wave Infrared (LWIR)',
    category: 'Thermal Surveillance / Early Warning',
    badge: 'LWIR',
    accent: C.amber,
    Icon: Thermometer,
    headline: [
      { label: 'GSD', value: '3.2 m' },
      { label: 'BAND', value: '8–12.5µm' },
      { label: 'NETD', value: '<35 mK' },
    ],
    specs: [
      { label: 'Resolution', value: '3.2 m GSD' },
      { label: 'Spectral', value: '8.0–12.5 µm (LWIR)' },
      { label: 'NETD', value: '< 35 mK' },
      { label: 'Mass', value: '3.6 kg' },
      { label: 'Peak Power', value: '28 W (incl. Stirling cryocooler)' },
      { label: 'Interface', value: 'SpaceWire / 28 V bus' },
    ],
    keyFeature:
      'Calibrated thermal emission radiance, wildfire perimeter detection under heavy smoke, and industrial thermal plume tracking.',
    applications: ['Wildfire perimeter tracking', 'Industrial heat-leak audits', 'Night-time vessel detection'],
    massKg: 3.6,
    peakPowerW: 28,
    volumeU: 3,
    dataRateMbps: 85,
    dutyMin: 60,
    edgeFilterable: true,
    taskable: true,
  },
  {
    id: 'neural',
    name: 'NeuralCore-E2',
    fullName: 'Radiation-Tolerant Edge AI Co-Processor',
    category: 'Autonomous In-Orbit Compute',
    badge: 'EDGE-AI',
    accent: C.green,
    Icon: Cpu,
    headline: [
      { label: 'INT8', value: '275 TOPS' },
      { label: 'POWER', value: '18 W' },
      { label: 'RAM', value: '32 GB' },
    ],
    specs: [
      { label: 'Compute', value: '275 TOPS INT8 / 68 TFLOPS FP16' },
      { label: 'Power', value: '18 W nominal' },
      { label: 'Memory', value: '32 GB LPDDR5 ECC' },
      { label: 'Mass', value: '0.9 kg' },
      { label: 'Form Factor', value: '0.5U PC104 standard' },
      { label: 'Bus', value: 'PCIe Gen3 over SpaceVPX' },
    ],
    keyFeature:
      'Real-time YOLOv10-Space vessel detection, cloud-mask segmentation before downlink (saving 78% of downlink bandwidth), and autonomous zero-latency alert triggers.',
    applications: ['On-board ship detection', 'Cloud-masked product filtering', 'Autonomous alert cueing'],
    massKg: 0.9,
    peakPowerW: 18,
    volumeU: 0.5,
    dataRateMbps: 2,
    dutyMin: 120,
    edgeFilterable: false,
    taskable: true,
  },
  {
    id: 'linkmesh',
    name: 'LinkMesh-D2C',
    fullName: 'Direct-to-Cell / Sovereign IoT Gateway',
    category: 'Secure Communications / Tactical Mesh',
    badge: 'D2C MESH',
    accent: '#9DB8FF',
    Icon: RadioTower,
    headline: [
      { label: 'BEAMS', value: '16' },
      { label: 'CHANNELS', value: '1,200' },
      { label: 'BANDS', value: 'S + UHF' },
    ],
    specs: [
      { label: 'Bands', value: '3GPP Rel-17 NTN S-band & UHF tactical' },
      { label: 'Beamforming', value: '16-element phased array' },
      { label: 'Capacity', value: '1,200 simultaneous voice/telemetry channels' },
      { label: 'Mass', value: '2.4 kg' },
      { label: 'Peak Power', value: '55 W' },
      { label: 'Interface', value: 'Ethernet / SpaceWire' },
    ],
    keyFeature:
      'Sovereign emergency broadcast, encrypted blue-force tracking, and beyond-line-of-sight command routing.',
    applications: ['Emergency broadcast', 'Encrypted blue-force tracking', 'BLOS command routing'],
    massKg: 2.4,
    peakPowerW: 55,
    volumeU: 2,
    dataRateMbps: 20,
    dutyMin: 60,
    edgeFilterable: false,
    taskable: false,
  },
];

const PAYLOAD_BY_ID: Record<PayloadId, PayloadDef> = {
  hypereye: PAYLOADS[0],
  sar: PAYLOADS[1],
  thermo: PAYLOADS[2],
  neural: PAYLOADS[3],
  linkmesh: PAYLOADS[4],
};

interface ModeDef {
  id: string;
  label: string;
}

const MODES: Record<PayloadId, ModeDef[]> = {
  hypereye: [
    { id: 'rgb', label: 'TRUE COLOR' },
    { id: 'nir', label: 'NIR FALSE-COLOR' },
    { id: 'redge', label: 'RED-EDGE NDVI' },
  ],
  sar: [
    { id: 'strip', label: 'STRIPMAP 3.0 m' },
    { id: 'spot', label: 'SPOTLIGHT 1.0 m' },
    { id: 'insar', label: 'InSAR PHASE' },
  ],
  thermo: [
    { id: 'fire', label: 'WILDFIRE FRONT' },
    { id: 'plume', label: 'INDUSTRIAL PLUME' },
  ],
  neural: [
    { id: 'detect', label: 'VESSEL DETECT' },
    { id: 'cloud', label: 'CLOUD MASK' },
  ],
  linkmesh: [
    { id: 'coverage', label: 'BEAM COVERAGE' },
    { id: 'bft', label: 'BLUE-FORCE TRACK' },
  ],
};

/* ================================================================== */
/* Bus budget model                                                    */
/* ================================================================== */

const LIMITS = { massKg: 24, peakPowerW: 320, volumeU: 16 } as const;
const EDGE_FILTER_SAVING = 0.78;
/** ASSUMPTION: 5 ground passes/day × 8 min × 800 Mbps X-band. */
const DOWNLINK_CAPACITY_GB_DAY = (800 * 5 * 8 * 60) / 8 / 1000;

type StatusTone = 'idle' | 'ok' | 'bad';

interface Budget {
  count: number;
  massKg: number;
  powerW: number;
  volumeU: number;
  rawGb: number;
  downlinkGb: number;
  savedGb: number;
  ratios: { mass: number; power: number; volume: number; downlink: number };
  violations: string[];
  warnings: string[];
  status: { label: string; tone: StatusTone };
}

function computeBudget(mounted: ReadonlySet<PayloadId>): Budget {
  let massKg = 0;
  let powerW = 0;
  let volumeU = 0;
  let rawGb = 0;
  let filterableGb = 0;
  let count = 0;

  for (const p of PAYLOADS) {
    if (!mounted.has(p.id)) continue;
    count += 1;
    massKg += p.massKg;
    powerW += p.peakPowerW;
    volumeU += p.volumeU;
    const gb = (p.dataRateMbps * p.dutyMin * 60) / 8 / 1000;
    rawGb += gb;
    if (p.edgeFilterable) filterableGb += gb;
  }

  const savedGb = mounted.has('neural') ? filterableGb * EDGE_FILTER_SAVING : 0;
  const downlinkGb = rawGb - savedGb;
  const ratios = {
    mass: massKg / LIMITS.massKg,
    power: powerW / LIMITS.peakPowerW,
    volume: volumeU / LIMITS.volumeU,
    downlink: downlinkGb / DOWNLINK_CAPACITY_GB_DAY,
  };

  const violations: string[] = [];
  if (ratios.power > 1) violations.push('POWER BUDGET EXCEEDED');
  if (ratios.mass > 1) violations.push('MASS BUDGET EXCEEDED');
  if (ratios.volume > 1) violations.push('VOLUME BUDGET EXCEEDED');
  if (ratios.downlink > 1) violations.push('DOWNLINK CAPACITY EXCEEDED');

  const warnings: string[] = [];
  const warn = (name: string, r: number): void => {
    if (r >= 0.9 && r <= 1) warnings.push(`${name} margin ${((1 - r) * 100).toFixed(1)}%`);
  };
  warn('Peak power', ratios.power);
  warn('Mass', ratios.mass);
  warn('Volume', ratios.volume);
  warn('Downlink', ratios.downlink);

  const status: Budget['status'] =
    count === 0
      ? { label: 'NO PAYLOAD MOUNTED', tone: 'idle' }
      : violations.length > 0
        ? { label: violations[0], tone: 'bad' }
        : { label: 'FLIGHT COMPATIBLE', tone: 'ok' };

  return { count, massKg, powerW, volumeU, rawGb, downlinkGb, savedGb, ratios, violations, warnings, status };
}

/* ================================================================== */
/* Math & noise                                                        */
/* ================================================================== */

const DEG = Math.PI / 180;
const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const smoothstep = (e0: number, e1: number, x: number): number => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

function hash2(ix: number, iy: number, seed: number): number {
  let h = Math.imul(ix | 0, 0x27d4eb2d) ^ Math.imul(iy | 0, 0x165667b1) ^ Math.imul(seed | 0, 0x9e3779b1);
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

function vnoise(x: number, y: number, seed: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi, seed);
  const b = hash2(xi + 1, yi, seed);
  const c = hash2(xi, yi + 1, seed);
  const d = hash2(xi + 1, yi + 1, seed);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x: number, y: number, seed: number, octaves: number): number {
  let amp = 0.5;
  let freq = 1;
  let sum = 0;
  let norm = 0;
  for (let o = 0; o < octaves; o++) {
    sum += amp * vnoise(x * freq, y * freq, seed + o * 17);
    norm += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / norm;
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type RGB = [number, number, number];

function buildLut(stops: RGB[]): Uint8ClampedArray {
  const lut = new Uint8ClampedArray(256 * 3);
  for (let i = 0; i < 256; i++) {
    const f = (i / 255) * (stops.length - 1);
    const k = Math.min(stops.length - 2, Math.floor(f));
    const u = f - k;
    for (let c = 0; c < 3; c++) lut[i * 3 + c] = lerp(stops[k][c], stops[k + 1][c], u);
  }
  return lut;
}

const INFERNO = buildLut([
  [0, 0, 4],
  [31, 12, 72],
  [85, 15, 109],
  [136, 34, 106],
  [186, 54, 85],
  [227, 89, 51],
  [249, 140, 10],
  [249, 201, 50],
  [252, 255, 164],
]);

const RAINBOW = ((): Uint8ClampedArray => {
  const lut = new Uint8ClampedArray(256 * 3);
  for (let i = 0; i < 256; i++) {
    const h = (i / 256) * 6;
    const k = Math.floor(h);
    const f = h - k;
    const q = 1 - f;
    const rgb: RGB =
      k === 0 ? [1, f, 0] : k === 1 ? [q, 1, 0] : k === 2 ? [0, 1, f] : k === 3 ? [0, q, 1] : k === 4 ? [f, 0, 1] : [1, 0, q];
    lut[i * 3] = rgb[0] * 255;
    lut[i * 3 + 1] = rgb[1] * 255;
    lut[i * 3 + 2] = rgb[2] * 255;
  }
  return lut;
})();

/* ================================================================== */
/* Canvas scene infrastructure                                         */
/* ================================================================== */

const W = 512;
const H = 288;
const N = W * H;
const MONO = '10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

type Hover = { x: number; y: number } | null;

interface Scene {
  frame: (ctx: CanvasRenderingContext2D, t: number, hover: Hover) => void;
}

function makeCanvas(): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  return c;
}

function bake(fill: (d: Uint8ClampedArray) => void): HTMLCanvasElement {
  const c = makeCanvas();
  const x = c.getContext('2d');
  if (!x) return c;
  const img = x.createImageData(W, H);
  fill(img.data);
  x.putImageData(img, 0, 0);
  return c;
}

interface Geo {
  lat0: number;
  lon0: number;
  kmW: number;
}

function geoAt(g: Geo, x: number, y: number): { lat: number; lon: number } {
  const kmH = (g.kmW * H) / W;
  const lonSpan = g.kmW / (111.32 * Math.cos(g.lat0 * DEG));
  const latSpan = kmH / 110.57;
  return { lat: g.lat0 + (0.5 - y / H) * latSpan, lon: g.lon0 + (x / W - 0.5) * lonSpan };
}

const fmtLat = (v: number): string => `${Math.abs(v).toFixed(3)}°${v >= 0 ? 'N' : 'S'}`;
const fmtLon = (v: number): string => `${Math.abs(v).toFixed(3)}°${v >= 0 ? 'E' : 'W'}`;

function hudText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  color: string,
  align: CanvasTextAlign = 'left',
): void {
  ctx.save();
  ctx.font = MONO;
  ctx.textAlign = align;
  ctx.textBaseline = 'top';
  ctx.shadowColor = 'rgba(0,0,0,0.95)';
  ctx.shadowBlur = 3;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  ctx.restore();
}

function hudHeader(ctx: CanvasRenderingContext2D, l1: string, l2: string, accent: string): void {
  hudText(ctx, l1, 14, 17, accent);
  hudText(ctx, l2, 14, 30, 'rgba(225,238,250,0.85)');
}

function hudGrid(ctx: CanvasRenderingContext2D, g: Geo, color: string): void {
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color;
  for (let i = 1; i < 5; i++) {
    const x = Math.round((W * i) / 5) + 0.5;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let j = 1; j < 4; j++) {
    const y = Math.round((H * j) / 4) + 0.5;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
  ctx.restore();
  for (let i = 1; i < 5; i++) {
    const x = Math.round((W * i) / 5);
    hudText(ctx, fmtLon(geoAt(g, x, 0).lon), x + 3, 4, 'rgba(200,225,245,0.6)');
  }
  for (let j = 1; j < 4; j++) {
    const y = Math.round((H * j) / 4);
    hudText(ctx, fmtLat(geoAt(g, 0, y).lat), 6, y - 11, 'rgba(200,225,245,0.6)');
  }
}

function hudBrackets(ctx: CanvasRenderingContext2D, color: string): void {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  const m = 5;
  const L = 16;
  const corners: [number, number, number, number][] = [
    [m, m, 1, 1],
    [W - m, m, -1, 1],
    [m, H - m, 1, -1],
    [W - m, H - m, -1, -1],
  ];
  for (const [x, y, sx, sy] of corners) {
    ctx.beginPath();
    ctx.moveTo(x + sx * L, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + sy * L);
    ctx.stroke();
  }
  ctx.restore();
}

function hudHover(ctx: CanvasRenderingContext2D, hover: Hover, lines: string[], accent: string): void {
  if (!hover || lines.length === 0) return;
  const { x, y } = hover;
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(x + 0.5, 0);
  ctx.lineTo(x + 0.5, H);
  ctx.moveTo(0, y + 0.5);
  ctx.lineTo(W, y + 0.5);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.strokeStyle = accent;
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.stroke();

  ctx.font = MONO;
  let maxW = 0;
  for (const l of lines) maxW = Math.max(maxW, ctx.measureText(l).width);
  const bw = maxW + 14;
  const bh = lines.length * 13 + 8;
  let bx = x + 12;
  let by = y + 12;
  if (bx + bw > W - 4) bx = x - 12 - bw;
  if (by + bh > H - 4) by = y - 12 - bh;
  ctx.fillStyle = 'rgba(5,7,11,0.9)';
  ctx.fillRect(bx, by, bw, bh);
  ctx.strokeStyle = accent;
  ctx.globalAlpha = 0.85;
  ctx.strokeRect(bx + 0.5, by + 0.5, bw, bh);
  ctx.globalAlpha = 1;
  ctx.fillStyle = '#E6F1FF';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  lines.forEach((l, i) => ctx.fillText(l, bx + 7, by + 5 + i * 13));
  ctx.restore();
}

let scanlineLayer: HTMLCanvasElement | null = null;
function getScanlines(): HTMLCanvasElement {
  if (!scanlineLayer) {
    scanlineLayer = bake((d) => {
      for (let y = 0; y < H; y++) {
        const a = y % 2 === 0 ? 34 : 0;
        for (let x = 0; x < W; x++) d[(y * W + x) * 4 + 3] = a;
      }
    });
  }
  return scanlineLayer;
}

/* ------------------------------------------------------------------ */
/* Terrain (shared by all scenes)                                      */
/* ------------------------------------------------------------------ */

const WATER = 0;
const FOREST = 1;
const FARM = 2;
const URBAN = 3;

interface Terrain {
  h: Float32Array;
  cls: Uint8Array;
  par: Float32Array;
  det: Float32Array;
  road: Uint8Array;
  sea: number;
}

function buildTerrain(seed: number, sea: number, zoom: number): Terrain {
  const h = new Float32Array(N);
  const par = new Float32Array(N);
  const det = new Float32Array(N);
  const cls = new Uint8Array(N);
  const road = new Uint8Array(N);
  const s = 2.6 / H / zoom;
  const pw = 16 * zoom;
  const ph = 11 * zoom;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x;
      const nx = x * s + seed * 3.17;
      const ny = y * s + seed * 1.31;
      const hv = fbm(nx, ny, seed, 5);
      h[i] = hv;
      det[i] = vnoise(x * 0.5, y * 0.5, seed + 3);
      const wx = vnoise((x * 0.02) / zoom, (y * 0.02) / zoom, seed + 21) * 12 * zoom;
      const wy = vnoise((x * 0.02) / zoom, (y * 0.02) / zoom, seed + 22) * 12 * zoom;
      par[i] = hash2(Math.floor((x + wx) / pw), Math.floor((y + wy) / ph), seed + 31);
      if (hv < sea) {
        cls[i] = WATER;
      } else {
        const g = fbm(nx * 1.9 + 40, ny * 1.9 + 11, seed + 7, 3);
        cls[i] = g > 0.57 && hv < sea + 0.11 ? URBAN : g < 0.47 ? FOREST : FARM;
        const rd = Math.abs(fbm(nx * 2.4 + 90, ny * 2.4 + 30, seed + 9, 3) - 0.5);
        road[i] = rd < 0.007 ? 1 : 0;
      }
    }
  }
  return { h, cls, par, det, road, sea };
}

function classLabel(t: Terrain, i: number): string {
  if (t.cls[i] === WATER) return 'OPEN WATER';
  if (t.road[i]) return 'ROAD / CORRIDOR';
  return t.cls[i] === FOREST ? 'FOREST' : t.cls[i] === FARM ? 'FARMLAND' : 'URBAN / INDUSTRIAL';
}

/* ------------------------------------------------------------------ */
/* Optical colouring                                                   */
/* ------------------------------------------------------------------ */

type OptMode = 'rgb' | 'nir' | 'redge';

function ndviOf(t: Terrain, i: number): number {
  const d = t.det[i] - 0.5;
  if (t.cls[i] === WATER) return -0.2 + d * 0.05;
  if (t.road[i]) return 0.04;
  if (t.cls[i] === FOREST) return 0.82 + d * 0.12;
  if (t.cls[i] === FARM) return 0.18 + t.par[i] * 0.62 + d * 0.08;
  return 0.08 + d * 0.1;
}

const NDVI_STOPS: [number, RGB][] = [
  [0.0, [110, 70, 45]],
  [0.25, [200, 175, 80]],
  [0.5, [120, 190, 70]],
  [0.8, [20, 150, 60]],
  [1.0, [0, 100, 50]],
];

function ndviRamp(v: number): RGB {
  const x = clamp(v, 0, 1);
  for (let k = 0; k < NDVI_STOPS.length - 1; k++) {
    const [a, ca] = NDVI_STOPS[k];
    const [b, cb] = NDVI_STOPS[k + 1];
    if (x <= b) {
      const u = (x - a) / (b - a);
      return [lerp(ca[0], cb[0], u), lerp(ca[1], cb[1], u), lerp(ca[2], cb[2], u)];
    }
  }
  return NDVI_STOPS[NDVI_STOPS.length - 1][1];
}

function opticalPixel(t: Terrain, i: number, mode: OptMode): RGB {
  const d = t.det[i] - 0.5;
  const c = t.cls[i];
  if (c === WATER) {
    const depth = clamp((t.sea - t.h[i]) / 0.22, 0, 1);
    if (mode === 'rgb') return [lerp(34, 6, depth) + d * 12, lerp(100, 30, depth) + d * 14, lerp(112, 56, depth) + d * 14];
    if (mode === 'nir') return [lerp(10, 3, depth) + d * 5, lerp(24, 8, depth) + d * 5, lerp(46, 22, depth) + d * 6];
    return [8 + d * 6, 18 + d * 8, 40 + d * 8];
  }
  if (t.road[i]) return mode === 'rgb' ? [150, 146, 132] : mode === 'nir' ? [130, 150, 160] : [120, 100, 90];
  if (mode === 'redge') return ndviRamp(ndviOf(t, i));
  const p = t.par[i];
  if (c === FOREST) return mode === 'rgb' ? [22 + d * 16, 58 + d * 22, 30 + d * 10] : [190 + d * 50, 28 + d * 20, 58 + d * 20];
  if (c === FARM) {
    return mode === 'rgb'
      ? [70 + p * 85 + d * 12, 96 + p * 55 + d * 10, 44 + p * 12]
      : [105 + p * 145 + d * 20, 24 + p * 22, 52 + (1 - p) * 40];
  }
  const g = 120 + d * 55;
  return mode === 'rgb' ? [g, g, g + 8] : [g * 0.82, g * 0.96, g];
}

function nirReflectance(t: Terrain, i: number): number {
  const d = t.det[i] - 0.5;
  if (t.cls[i] === WATER) return 0.02;
  if (t.cls[i] === FOREST) return 0.42 + d * 0.1;
  if (t.cls[i] === FARM) return 0.2 + t.par[i] * 0.3;
  return 0.22 + d * 0.05;
}

/* ------------------------------------------------------------------ */
/* Scene: HyperEye-V2 (optical)                                        */
/* ------------------------------------------------------------------ */

function createOptical(mode: OptMode): Scene {
  const t = buildTerrain(4, 0.47, 1);
  const base = bake((d) => {
    for (let i = 0; i < N; i++) {
      const [r, g, b] = opticalPixel(t, i, mode);
      const o = i * 4;
      d[o] = r;
      d[o + 1] = g;
      d[o + 2] = b;
      d[o + 3] = 255;
    }
  });
  const geo: Geo = { lat0: 52.46, lon0: 4.55, kmW: 14.8 };
  const accent = C.cyan;
  const modeLabel = mode === 'rgb' ? 'TRUE COLOR' : mode === 'nir' ? 'NIR FALSE-COLOR' : 'RED-EDGE NDVI';

  const readout = (x: number, y: number): string[] => {
    const px = clamp(Math.floor(x), 0, W - 1);
    const py = clamp(Math.floor(y), 0, H - 1);
    const i = py * W + px;
    const g = geoAt(geo, px, py);
    return [
      `${fmtLat(g.lat)}  ${fmtLon(g.lon)}`,
      `CLASS ${classLabel(t, i)}`,
      `NDVI ${ndviOf(t, i).toFixed(2)}   NIR ρ ${nirReflectance(t, i).toFixed(2)}`,
      `PIXEL ${px},${py} · GSD 0.50 m`,
    ];
  };

  return {
    frame(ctx, tm, hover) {
      ctx.drawImage(base, 0, 0);
      const p = (tm % 8) / 5.5;
      if (p < 1) {
        const y = p * H;
        ctx.fillStyle = 'rgba(5,7,11,0.78)';
        ctx.fillRect(0, y, W, H - y);
        const gr = ctx.createLinearGradient(0, y - 20, 0, y);
        gr.addColorStop(0, 'rgba(0,161,255,0)');
        gr.addColorStop(1, 'rgba(0,161,255,0.38)');
        ctx.fillStyle = gr;
        ctx.fillRect(0, y - 20, W, 20);
        ctx.fillStyle = C.cyan;
        ctx.fillRect(0, y, W, 1.5);
      }
      hudGrid(ctx, geo, '#BFE6FF');
      hudBrackets(ctx, accent);
      hudHeader(ctx, `HYPEREYE-V2 · ${modeLabel}`, 'GSD 0.50 m · SWATH 14.8 km · 8 BANDS', accent);
      hudText(ctx, `PUSHBROOM ACQ ${Math.round(clamp(p, 0, 1) * 100)}%`, W - 14, 17, p < 1 ? C.amber : C.green, 'right');
      hudText(ctx, 'TDI 64 STG · LINE RATE 14.0 kHz · 29.6k px/line', 14, H - 24, 'rgba(225,238,250,0.8)');
      hudText(ctx, `CTR ${fmtLat(geo.lat0)} ${fmtLon(geo.lon0)}`, W - 14, H - 24, 'rgba(225,238,250,0.8)', 'right');
      if (hover) hudHover(ctx, hover, readout(hover.x, hover.y), accent);
    },
  };
}

/* ------------------------------------------------------------------ */
/* Ships (shared by SAR and NeuralCore)                                */
/* ------------------------------------------------------------------ */

interface Ship {
  x: number;
  y: number;
  th: number;
  v: number;
  ph: number;
  rcs: number;
  dark: boolean;
  id: number;
}

function placeShips(t: Terrain, seed: number, n: number, margin: number): Ship[] {
  const rng = mulberry32(seed);
  const out: Ship[] = [];
  let tries = 0;
  while (out.length < n && tries < 4000) {
    tries += 1;
    const x = 48 + rng() * (W - 96);
    const y = 40 + rng() * (H - 80);
    const i = Math.floor(y) * W + Math.floor(x);
    if (t.cls[i] !== WATER || t.h[i] > t.sea - margin) continue;
    if (out.some((s) => Math.hypot(s.x - x, s.y - y) < 46)) continue;
    out.push({ x, y, th: rng() * Math.PI * 2, v: rng(), ph: rng() * 6.28, rcs: rng(), dark: out.length % 3 === 1, id: out.length });
  }
  return out;
}

const shipPos = (s: Ship, tm: number): [number, number] => [
  s.x + Math.cos(s.th) * Math.sin(tm * 0.1 + s.ph) * 6,
  s.y + Math.sin(s.th) * Math.sin(tm * 0.1 + s.ph) * 6,
];

/* ------------------------------------------------------------------ */
/* Scene: Sentinel-SAR X1                                              */
/* ------------------------------------------------------------------ */

type SarMode = 'strip' | 'spot' | 'insar';

function createSar(mode: SarMode): Scene {
  const zoom = mode === 'spot' ? 2.4 : 1;
  const t = buildTerrain(11, 0.58, zoom);
  const db = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const x = i % W;
    const y = (i - x) / W;
    const d = t.det[i] - 0.5;
    const c = t.cls[i];
    if (c === WATER) db[i] = -26 + 9 * vnoise(x * 0.011, y * 0.011, 12) + d * 3;
    else if (t.road[i]) db[i] = -21;
    else if (c === FOREST) db[i] = -8 + d * 5;
    else if (c === FARM) db[i] = -13 + t.par[i] * 5 + d * 3;
    else db[i] = 2 + d * 10;
  }

  // Single-look intensity speckle: 10·log10(−ln u) is exponentially distributed power in dB.
  const rng = mulberry32(1234);
  const spk = new Float32Array(65536);
  for (let i = 0; i < spk.length; i++) spk[i] = 10 * Math.log10(-Math.log(Math.max(1e-6, rng())));

  // InSAR fields: subsidence bowl (in fringe cycles) and coherence.
  const disp = new Float32Array(N);
  const coh = new Float32Array(N);
  const bx = W * 0.42;
  const by = H * 0.55;
  for (let i = 0; i < N; i++) {
    const x = i % W;
    const y = (i - x) / W;
    const r2 = (x - bx) ** 2 + (y - by) ** 2;
    disp[i] = 3.2 * Math.exp(-r2 / (2 * 70 * 70)) + 0.6 * (x / W) + 0.4 * fbm(x * 0.01, y * 0.01, 77, 3);
    coh[i] = t.cls[i] === WATER ? 0.04 : clamp(0.9 - 0.25 * Math.abs(t.det[i] - 0.5) * 2 - (t.cls[i] === FOREST ? 0.12 : 0), 0, 1);
  }

  const ships = mode === 'insar' ? [] : placeShips(t, 99, 9, 0.06);
  const shipScale = mode === 'spot' ? 2.2 : 1;
  const geo: Geo = mode === 'spot' ? { lat0: 56.52, lon0: 2.48, kmW: 20 } : { lat0: 56.52, lon0: 2.48, kmW: 50 };
  const accent = '#38E1FF';

  const surface = makeCanvas();
  const sctx = surface.getContext('2d');
  const imgData = sctx ? sctx.createImageData(W, H) : null;
  let lastUpdate = -1;

  const update = (tm: number): void => {
    if (!sctx || !imgData) return;
    const off = Math.floor(Math.random() * 65536);
    const d = imgData.data;
    if (mode === 'insar') {
      const shift = tm * 0.05;
      for (let i = 0; i < N; i++) {
        const o = i * 4;
        const n = spk[(i + off) & 65535];
        const cyc = disp[i] + shift + (1 - coh[i]) * n * 0.12;
        const idx = Math.floor((cyc - Math.floor(cyc)) * 255) * 3;
        const gray = clamp(70 + n * 12, 0, 255);
        d[o] = lerp(gray, RAINBOW[idx], coh[i]);
        d[o + 1] = lerp(gray, RAINBOW[idx + 1], coh[i]);
        d[o + 2] = lerp(gray, RAINBOW[idx + 2], coh[i]);
        d[o + 3] = 255;
      }
    } else {
      for (let i = 0; i < N; i++) {
        const o = i * 4;
        const v = clamp((db[i] + spk[(i + off) & 65535] + 32) / 52, 0, 1);
        d[o] = v * 150;
        d[o + 1] = v * 235;
        d[o + 2] = v * 210;
        d[o + 3] = 255;
      }
    }
    sctx.putImageData(imgData, 0, 0);
  };

  const readout = (x: number, y: number, tm: number): string[] => {
    const px = clamp(Math.floor(x), 0, W - 1);
    const py = clamp(Math.floor(y), 0, H - 1);
    const i = py * W + px;
    const g = geoAt(geo, px, py);
    const inc = 25 + 20 * (px / W);
    for (const s of ships) {
      const [sx, sy] = shipPos(s, tm);
      if (Math.hypot(sx - px, sy - py) < 9) {
        return [`${fmtLat(g.lat)}  ${fmtLon(g.lon)}`, `RETURN +${(14 + s.rcs * 12).toFixed(1)} dB`, s.dark ? 'NO AIS MATCH · DARK VESSEL' : 'AIS MATCH · COOPERATIVE', `INC ${inc.toFixed(1)}°`];
      }
    }
    if (mode === 'insar') {
      return [`${fmtLat(g.lat)}  ${fmtLon(g.lon)}`, `LOS DISP ${(disp[i] * 1.55).toFixed(2)} cm`, `COHERENCE γ ${coh[i].toFixed(2)}`, `INC ${inc.toFixed(1)}°`];
    }
    return [`${fmtLat(g.lat)}  ${fmtLon(g.lon)}`, `σ0 ${db[i].toFixed(1)} dB`, `CLASS ${classLabel(t, i)}`, `INC ${inc.toFixed(1)}°`];
  };

  const modeLabel = mode === 'strip' ? 'STRIPMAP 3.0 m' : mode === 'spot' ? 'SPOTLIGHT 1.0 m' : 'INTERFEROMETRIC PHASE';

  return {
    frame(ctx, tm, hover) {
      if (tm - lastUpdate > 0.05) {
        update(tm);
        lastUpdate = tm;
      }
      ctx.drawImage(surface, 0, 0);
      ctx.drawImage(getScanlines(), 0, 0);

      const sy = (tm * 46) % (H + 40) - 20;
      const gr = ctx.createLinearGradient(0, sy - 24, 0, sy);
      gr.addColorStop(0, 'rgba(56,225,255,0)');
      gr.addColorStop(1, 'rgba(56,225,255,0.22)');
      ctx.fillStyle = gr;
      ctx.fillRect(0, sy - 24, W, 24);

      let alerts = 0;
      if (ships.length > 0) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (const s of ships) {
          const [x, y] = shipPos(s, tm);
          const cs = Math.cos(s.th);
          const sn = Math.sin(s.th);
          if (s.v > 0.2) {
            const wl = mode === 'spot' ? 70 : 38;
            const g2 = ctx.createLinearGradient(x, y, x - cs * wl, y - sn * wl);
            g2.addColorStop(0, 'rgba(180,255,255,0.55)');
            g2.addColorStop(1, 'rgba(180,255,255,0)');
            ctx.strokeStyle = g2;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - cs * wl, y - sn * wl);
            for (const sgn of [-1, 1]) {
              const a = s.th + Math.PI + sgn * 19.5 * DEG;
              ctx.moveTo(x, y);
              ctx.lineTo(x + Math.cos(a) * wl * 0.8, y + Math.sin(a) * wl * 0.8);
            }
            ctx.stroke();
          }
          const R = (5 + s.rcs * 4) * Math.pow(shipScale, 0.7);
          const g = ctx.createRadialGradient(x, y, 0, x, y, R * 2.2);
          g.addColorStop(0, 'rgba(255,255,255,0.95)');
          g.addColorStop(0.25, 'rgba(120,255,235,0.55)');
          g.addColorStop(1, 'rgba(0,255,200,0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, R * 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = 'rgba(200,255,255,0.5)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x - R * 2.6, y);
          ctx.lineTo(x + R * 2.6, y);
          ctx.moveTo(x, y - R * 2.6);
          ctx.lineTo(x, y + R * 2.6);
          ctx.stroke();
        }
        ctx.restore();

        for (const s of ships) {
          if (!s.dark) continue;
          alerts += 1;
          const [x, y] = shipPos(s, tm);
          const b = 14 * Math.pow(shipScale, 0.5);
          ctx.save();
          ctx.strokeStyle = C.amber;
          ctx.lineWidth = 1.4;
          const L = 5;
          for (const [cx, cy, ax, ay] of [[x - b, y - b, 1, 1], [x + b, y - b, -1, 1], [x - b, y + b, 1, -1], [x + b, y + b, -1, -1]] as [number, number, number, number][]) {
            ctx.beginPath();
            ctx.moveTo(cx + ax * L, cy);
            ctx.lineTo(cx, cy);
            ctx.lineTo(cx, cy + ay * L);
            ctx.stroke();
          }
          ctx.restore();
          hudText(ctx, `DARK VESSEL +${(14 + s.rcs * 12).toFixed(1)} dB`, x + b + 4, y - 5, C.amber);
        }
      }

      hudGrid(ctx, geo, '#8FEFFF');
      hudBrackets(ctx, accent);
      hudHeader(ctx, `SENTINEL-SAR X1 · ${modeLabel}`, `X-BAND 9.65 GHz · SWATH ${geo.kmW} km · HH POL`, accent);
      hudText(ctx, mode === 'insar' ? 'PHASE COHERENCE > 0.85' : `DARK VESSELS ${alerts} · RETURNS ${ships.length}`, 14, H - 24, mode === 'insar' ? C.green : alerts > 0 ? C.amber : 'rgba(225,238,250,0.8)');
      hudText(ctx, 'PRF 4.2 kHz · BW 300 MHz · NESZ −24 dB', W - 14, H - 24, 'rgba(225,238,250,0.8)', 'right');
      if (hover) hudHover(ctx, hover, readout(hover.x, hover.y, tm), accent);
    },
  };
}

/* ------------------------------------------------------------------ */
/* Scene: ThermoScan-L3                                                */
/* ------------------------------------------------------------------ */

const T_MIN = 270;
const T_MAX = 420;

function bandRadiance(K: number): number {
  const h = 6.626e-34;
  const c = 2.998e8;
  const k = 1.381e-23;
  const n = 24;
  const l0 = 8e-6;
  const dl = (12.5e-6 - l0) / n;
  let s = 0;
  for (let j = 0; j < n; j++) {
    const l = l0 + (j + 0.5) * dl;
    s += ((2 * h * c * c) / Math.pow(l, 5) / (Math.exp((h * c) / (l * k * K)) - 1)) * dl;
  }
  return s;
}

function createThermal(mode: 'fire' | 'plume'): Scene {
  const t = buildTerrain(23, 0.36, 1);
  const baseK = new Float32Array(N);
  const baseRgb = new Uint8ClampedArray(N * 4);
  const lutIdx = (K: number): number => Math.floor(clamp((K - T_MIN) / (T_MAX - T_MIN), 0, 1) * 255) * 3;

  for (let i = 0; i < N; i++) {
    const d = t.det[i] - 0.5;
    const c = t.cls[i];
    let K: number;
    if (c === WATER) K = 284 - clamp((t.sea - t.h[i]) / 0.2, 0, 1) * 3 + d * 0.8;
    else if (t.road[i]) K = 300 + d * 2;
    else if (c === FOREST) K = 291 + d * 3;
    else if (c === FARM) K = 296 + t.par[i] * 4 + d * 2;
    else K = 302 + d * 5;
    baseK[i] = K;
    const li = lutIdx(K);
    baseRgb[i * 4] = INFERNO[li];
    baseRgb[i * 4 + 1] = INFERNO[li + 1];
    baseRgb[i * 4 + 2] = INFERNO[li + 2];
    baseRgb[i * 4 + 3] = 255;
  }

  const warp = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const x = i % W;
    warp[i] = fbm(x * 0.045 + 3, ((i - x) / W) * 0.045, 31, 3);
  }

  const fx = W * 0.45;
  const fy = H * 0.52;
  const windA = 0.5;
  const wx = Math.cos(windA);
  const wy = Math.sin(windA);
  const BOX = 110;

  const sx = W * 0.3;
  const sy = H * 0.64;
  const plA = -0.28;
  const pc = Math.cos(plA);
  const ps = Math.sin(plA);

  const tempAt = (x: number, y: number, tm: number): number => {
    const i = y * W + x;
    let K = baseK[i];
    if (mode === 'fire') {
      const dx = x - fx;
      const dy = y - fy;
      if (Math.abs(dx) <= BOX && Math.abs(dy) <= BOX) {
        const d = Math.hypot(dx, dy) + (warp[i] - 0.5) * 26 - 0.3 * (dx * wx + dy * wy);
        const R = 44 + 9 * Math.sin(tm * 0.22);
        const f = vnoise(x * 0.32 + tm * 2.6, y * 0.32 - tm * 1.9, 5);
        if (d < R - 4) K = 318 + 30 * f * clamp((d - (R - 24)) / 20, 0, 1);
        else if (d < R + 2.5) K = 480 + 340 * f;
        else K += 28 * Math.exp(-(d - R) / 9);
      }
    } else {
      const dx = x - sx;
      const dy = y - sy;
      const s = dx * pc + dy * ps;
      const perp = -dx * ps + dy * pc;
      if (s > -8 && s < 270 && Math.abs(perp) < 42) {
        const sg = 3 + 0.085 * Math.max(s, 0);
        const mean = 7 * Math.sin(s * 0.035 - tm * 1.1) * Math.min(1, Math.max(s, 0) / 60);
        const q = perp - mean;
        K += 62 * Math.exp(-Math.max(s, 0) / 105) * Math.exp(-(q * q) / (2 * sg * sg));
      }
      if (Math.abs(dx) < 14 && Math.abs(dy) < 10) K = Math.max(K, 318 + (t.det[i] - 0.5) * 12);
      if (Math.hypot(dx, dy) < 3.2) K = 395 + 20 * vnoise(x * 0.5 + tm * 4, y * 0.5, 8);
    }
    return K;
  };

  const surface = makeCanvas();
  const sctx = surface.getContext('2d');
  const imgData = sctx ? sctx.createImageData(W, H) : null;

  const [x0, x1, y0, y1] =
    mode === 'fire'
      ? [Math.floor(fx - BOX), Math.floor(fx + BOX), Math.floor(fy - BOX), Math.floor(fy + BOX)]
      : [Math.floor(sx - 30), Math.floor(sx + 280), Math.floor(sy - 110), Math.floor(sy + 90)];
  const bx0 = clamp(x0, 0, W - 1);
  const bx1 = clamp(x1, 0, W - 1);
  const by0 = clamp(y0, 0, H - 1);
  const by1 = clamp(y1, 0, H - 1);

  const geo: Geo = { lat0: 38.52, lon0: -120.4, kmW: 9.8 };
  const accent = C.amber;

  const readout = (x: number, y: number, tm: number): string[] => {
    const px = clamp(Math.floor(x), 0, W - 1);
    const py = clamp(Math.floor(y), 0, H - 1);
    const K = tempAt(px, py, tm);
    const g = geoAt(geo, px, py);
    return [
      `${fmtLat(g.lat)}  ${fmtLon(g.lon)}`,
      `T ${K.toFixed(1)} K  (${(K - 273.15).toFixed(1)} °C)`,
      `L ${bandRadiance(K).toFixed(2)} W·m⁻²·sr⁻¹`,
      `8.0–12.5 µm · NETD < 35 mK`,
    ];
  };

  return {
    frame(ctx, tm, hover) {
      let peak = 0;
      if (sctx && imgData) {
        const d = imgData.data;
        d.set(baseRgb);
        for (let y = by0; y <= by1; y++) {
          for (let x = bx0; x <= bx1; x++) {
            const K = tempAt(x, y, tm);
            if (K > peak) peak = K;
            const li = lutIdx(K);
            const o = (y * W + x) * 4;
            d[o] = INFERNO[li];
            d[o + 1] = INFERNO[li + 1];
            d[o + 2] = INFERNO[li + 2];
          }
        }
        sctx.putImageData(imgData, 0, 0);
      }
      ctx.drawImage(surface, 0, 0);

      // colour bar
      const barX = W - 28;
      const barY = 46;
      const barH = 170;
      for (let j = 0; j < barH; j += 2) {
        const li = Math.floor((1 - j / barH) * 255) * 3;
        ctx.fillStyle = `rgb(${INFERNO[li]},${INFERNO[li + 1]},${INFERNO[li + 2]})`;
        ctx.fillRect(barX, barY + j, 10, 2);
      }
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';
      ctx.strokeRect(barX + 0.5, barY + 0.5, 10, barH);
      hudText(ctx, `${T_MAX}+ K`, barX - 4, barY - 1, 'rgba(255,255,255,0.8)', 'right');
      hudText(ctx, `${(T_MIN + T_MAX) / 2} K`, barX - 4, barY + barH / 2 - 5, 'rgba(255,255,255,0.8)', 'right');
      hudText(ctx, `${T_MIN} K`, barX - 4, barY + barH - 9, 'rgba(255,255,255,0.8)', 'right');

      hudGrid(ctx, geo, '#FFD2B0');
      hudBrackets(ctx, accent);
      hudHeader(ctx, `THERMOSCAN-L3 · ${mode === 'fire' ? 'WILDFIRE PERIMETER' : 'INDUSTRIAL THERMAL PLUME'}`, 'LWIR 8.0–12.5 µm · GSD 3.2 m · NETD < 35 mK', accent);
      hudText(ctx, mode === 'fire' ? 'SMOKE OPACITY 82% · LWIR UNAFFECTED' : 'WIND 112° · PLUME EXCESS ΔT +62 K AT STACK', 14, H - 24, mode === 'fire' ? C.green : 'rgba(255,230,210,0.9)');
      hudText(ctx, `PEAK ${peak.toFixed(0)} K · CRYO 60 K`, W - 44, H - 24, 'rgba(255,230,210,0.9)', 'right');
      if (hover) hudHover(ctx, hover, readout(hover.x, hover.y, tm), accent);
    },
  };
}

/* ------------------------------------------------------------------ */
/* Scene: NeuralCore-E2                                                */
/* ------------------------------------------------------------------ */

function createNeural(mode: 'detect' | 'cloud'): Scene {
  const t = buildTerrain(37, 0.6, 1);
  const cloud = new Float32Array(N);
  let cloudPixels = 0;
  for (let i = 0; i < N; i++) {
    const x = i % W;
    const y = (i - x) / W;
    const a = smoothstep(0.5, 0.64, fbm(x * 0.011 + 7, y * 0.011 + 3, 41, 5));
    cloud[i] = a;
    if (a > 0.35) cloudPixels += 1;
  }
  const cloudFrac = cloudPixels / N;

  const base = bake((d) => {
    for (let i = 0; i < N; i++) {
      const [r, g, b] = opticalPixel(t, i, 'rgb');
      const o = i * 4;
      d[o] = r;
      d[o + 1] = g;
      d[o + 2] = b;
      d[o + 3] = 255;
    }
  });
  const cloudLayer = bake((d) => {
    for (let i = 0; i < N; i++) {
      const o = i * 4;
      d[o] = 238;
      d[o + 1] = 242;
      d[o + 2] = 248;
      d[o + 3] = cloud[i] * 235;
    }
  });
  const maskLayer = bake((d) => {
    for (let i = 0; i < N; i++) {
      if (cloud[i] <= 0.35) continue;
      const x = i % W;
      const y = (i - x) / W;
      const o = i * 4;
      d[o] = 255;
      d[o + 1] = 0;
      d[o + 2] = 170;
      d[o + 3] = (x + y) % 6 < 2 ? 190 : 95;
    }
  });

  const TILE = 32;
  const tilesX = W / TILE;
  const tilesY = H / TILE;
  const tileFrac: number[] = [];
  for (let ty = 0; ty < tilesY; ty++) {
    for (let tx = 0; tx < tilesX; tx++) {
      let s = 0;
      for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) s += cloud[(ty * TILE + y) * W + tx * TILE + x] > 0.35 ? 1 : 0;
      tileFrac.push(s / (TILE * TILE));
    }
  }
  const dropped = tileFrac.filter((f) => f > 0.55).length;

  const ships = placeShips(t, 57, 8, 0.05).map((s) => ({
    ...s,
    len: 7 + s.rcs * 6,
    conf: 0.93 + s.rcs * 0.06,
    cloud: cloud[Math.floor(s.y) * W + Math.floor(s.x)],
  }));

  const geo: Geo = { lat0: 35.9, lon0: 14.4, kmW: 30 };
  const accent = C.green;

  const readout = (x: number, y: number, tm: number): string[] => {
    const px = clamp(Math.floor(x), 0, W - 1);
    const py = clamp(Math.floor(y), 0, H - 1);
    const i = py * W + px;
    const g = geoAt(geo, px, py);
    for (const s of ships) {
      const [sx, sy] = shipPos(s, tm);
      if (Math.hypot(sx - px, sy - py) < 12) {
        const conf = clamp(s.conf - s.cloud * 0.9, 0, 0.999);
        return [`${fmtLat(g.lat)}  ${fmtLon(g.lon)}`, `TRK-${100 + s.id * 7} · ${s.cloud > 0.55 ? 'OCCLUDED' : 'VESSEL'}`, `CONF ${(conf * 100).toFixed(1)}%${s.dark ? ' · NO AIS' : ''}`, `LEN ≈ ${(s.len * 11).toFixed(0)} m`];
      }
    }
    return [`${fmtLat(g.lat)}  ${fmtLon(g.lon)}`, `CLOUD P ${cloud[i].toFixed(2)}`, `CLASS ${classLabel(t, i)}`, cloud[i] > 0.35 ? 'TILE → MASKED' : 'TILE → KEEP'];
  };

  return {
    frame(ctx, tm, hover) {
      ctx.drawImage(base, 0, 0);

      for (const s of ships) {
        const [x, y] = shipPos(s, tm);
        ctx.save();
        if (s.v > 0.2) {
          ctx.strokeStyle = 'rgba(255,255,255,0.35)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x - Math.cos(s.th) * 28, y - Math.sin(s.th) * 28);
          ctx.stroke();
        }
        ctx.translate(x, y);
        ctx.rotate(s.th);
        ctx.fillStyle = '#EAF0F4';
        ctx.fillRect(-s.len / 2, -1.3, s.len, 2.6);
        ctx.fillStyle = '#7C8B97';
        ctx.fillRect(-s.len / 2 + 1, -0.9, s.len * 0.3, 1.8);
        ctx.restore();
      }

      ctx.drawImage(cloudLayer, 0, 0);

      let detections = 0;
      let alerts = 0;
      let occluded = 0;
      const cyc = 9;
      const ph = tm % cyc;

      if (mode === 'detect') {
        const sweepX = (ph / 6) * W;
        if (ph < 6) {
          const gr = ctx.createLinearGradient(sweepX - 30, 0, sweepX, 0);
          gr.addColorStop(0, 'rgba(0,255,136,0)');
          gr.addColorStop(1, 'rgba(0,255,136,0.28)');
          ctx.fillStyle = gr;
          ctx.fillRect(sweepX - 30, 0, 30, H);
          ctx.fillStyle = C.green;
          ctx.fillRect(sweepX, 0, 1.5, H);
        }
        for (const s of ships) {
          const [x, y] = shipPos(s, tm);
          if (s.cloud > 0.55) {
            occluded += 1;
            continue;
          }
          const age = ph - (s.x / W) * 6;
          if (age <= 0) continue;
          const alpha = clamp(age * 3, 0, 1) * clamp((cyc - ph) / 0.6, 0, 1);
          const conf = clamp(s.conf - s.cloud * 0.9 + 0.006 * Math.sin(tm * 2.1 + s.id), 0, 0.999);
          const low = conf < 0.8;
          detections += 1;
          if (s.dark) alerts += 1;
          const col = low ? C.amber : C.green;
          const bw = s.len * 1.8 + 12;
          const bh = 22;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = col;
          ctx.lineWidth = 1.5;
          const L = 6;
          for (const [cx, cy, ax, ay] of [[x - bw / 2, y - bh / 2, 1, 1], [x + bw / 2, y - bh / 2, -1, 1], [x - bw / 2, y + bh / 2, 1, -1], [x + bw / 2, y + bh / 2, -1, -1]] as [number, number, number, number][]) {
            ctx.beginPath();
            ctx.moveTo(cx + ax * L, cy);
            ctx.lineTo(cx, cy);
            ctx.lineTo(cx, cy + ay * L);
            ctx.stroke();
          }
          ctx.restore();
          ctx.save();
          ctx.globalAlpha = alpha;
          hudText(ctx, low ? `LOW_CONF: ${(conf * 100).toFixed(1)}%` : `VESSEL_DETECTED: ${(conf * 100).toFixed(1)}%`, x - bw / 2, y - bh / 2 - 12, col);
          if (s.dark) hudText(ctx, 'ALERT_TRIGGER ▸ PRIORITY DOWNLINK', x - bw / 2, y + bh / 2 + 3, C.amber);
          ctx.restore();
        }
      } else {
        ctx.save();
        ctx.globalAlpha = 0.85 + 0.15 * Math.sin(tm * 3);
        ctx.drawImage(maskLayer, 0, 0);
        ctx.restore();
        ctx.save();
        ctx.lineWidth = 1;
        for (let ty = 0; ty < tilesY; ty++) {
          for (let tx = 0; tx < tilesX; tx++) {
            const drop = tileFrac[ty * tilesX + tx] > 0.55;
            ctx.strokeStyle = drop ? 'rgba(255,0,170,0.8)' : 'rgba(0,255,136,0.25)';
            ctx.strokeRect(tx * TILE + 0.5, ty * TILE + 0.5, TILE, TILE);
            if (drop) {
              ctx.beginPath();
              ctx.moveTo(tx * TILE + 4, ty * TILE + 4);
              ctx.lineTo(tx * TILE + TILE - 4, ty * TILE + TILE - 4);
              ctx.moveTo(tx * TILE + TILE - 4, ty * TILE + 4);
              ctx.lineTo(tx * TILE + 4, ty * TILE + TILE - 4);
              ctx.stroke();
            }
          }
        }
        ctx.restore();
      }

      hudGrid(ctx, geo, '#BFFFE0');
      hudBrackets(ctx, accent);
      hudHeader(ctx, `NEURALCORE-E2 · ${mode === 'detect' ? 'YOLOv10-Space VESSEL DETECT' : 'CLOUD-MASK SEGMENTATION'}`, '275 TOPS INT8 · 18 W · LATENCY 118 ms/frame', accent);
      if (mode === 'detect') {
        hudText(ctx, `DETECTIONS ${detections} · ALERTS ${alerts} · OCCLUDED ${occluded}`, 14, H - 24, alerts > 0 ? C.amber : C.green);
        hudText(ctx, ph < 6 ? `INFERENCE ${Math.round((ph / 6) * 100)}%` : 'FRAME COMPLETE', W - 14, H - 24, 'rgba(225,238,250,0.8)', 'right');
      } else {
        hudText(ctx, `CLOUD ${(cloudFrac * 100).toFixed(0)}% · TILES MASKED ${dropped}/${tileFrac.length}`, 14, H - 24, C.amber);
        hudText(ctx, 'DOWNLINK SAVED 78% (RATED)', W - 14, H - 24, C.green, 'right');
      }
      if (hover) hudHover(ctx, hover, readout(hover.x, hover.y, tm), accent);
    },
  };
}

/* ------------------------------------------------------------------ */
/* Scene: LinkMesh-D2C                                                 */
/* ------------------------------------------------------------------ */

function createLink(mode: 'coverage' | 'bft'): Scene {
  const t = buildTerrain(53, 0.5, 1);
  const base = bake((d) => {
    for (let i = 0; i < N; i++) {
      const o = i * 4;
      const dd = t.det[i] - 0.5;
      const water = t.cls[i] === WATER;
      d[o] = (water ? 8 : 16) + dd * 4;
      d[o + 1] = (water ? 14 : 28) + dd * 5;
      d[o + 2] = (water ? 24 : 42) + dd * 6;
      d[o + 3] = 255;
    }
  });

  const R = 40;
  const dx = Math.sqrt(3) * R;
  const dy = 1.5 * R;
  const x0 = (W - (3 * dx + dx / 2)) / 2;
  const y0 = (H - 3 * dy) / 2;
  const centers: [number, number][] = [];
  for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) centers.push([x0 + col * dx + (row % 2) * (dx / 2), y0 + row * dy]);

  const rng = mulberry32(808);
  const baseLoad = centers.map(() => 0.3 + rng() * 0.6);
  const terminals: [number, number][] = [];
  for (let i = 0; i < 70; i++) terminals.push([x0 - 30 + rng() * (3 * dx + dx / 2 + 60), 28 + rng() * (H - 56)]);

  interface Track {
    x: number;
    y: number;
    vx: number;
    vy: number;
    id: number;
  }
  const tracks: Track[] = [];
  for (let i = 0; i < 8; i++) {
    const a = rng() * Math.PI * 2;
    const sp = 4 + rng() * 5;
    tracks.push({ x: 70 + rng() * (W - 140), y: 60 + rng() * (H - 120), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, id: i });
  }
  const wrap = (v: number, lo: number, hi: number): number => {
    const span = hi - lo;
    return lo + ((((v - lo) % span) + span) % span);
  };
  const trackAt = (k: Track, tm: number): [number, number] => [wrap(k.x + k.vx * tm, 50, W - 50), wrap(k.y + k.vy * tm, 44, H - 44)];

  const sat: [number, number] = [W - 70, 52];
  const geo: Geo = { lat0: 48.2, lon0: 16.4, kmW: 1400 };
  const accent = '#9DB8FF';

  const hexPath = (ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number): void => {
    ctx.beginPath();
    for (let k = 0; k < 6; k++) {
      const a = (60 * k - 30) * DEG;
      const px = cx + r * Math.cos(a);
      const py = cy + r * Math.sin(a);
      if (k === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
  };

  const load = (i: number, tm: number): number => clamp(baseLoad[i] + 0.12 * Math.sin(tm * 0.6 + i), 0.1, 1);

  const readout = (x: number, y: number, tm: number): string[] => {
    const g = geoAt(geo, clamp(x, 0, W), clamp(y, 0, H));
    if (mode === 'bft') {
      for (const k of tracks) {
        const [tx, ty] = trackAt(k, tm);
        if (Math.hypot(tx - x, ty - y) < 10) {
          return [`${fmtLat(g.lat)}  ${fmtLon(g.lon)}`, `BFT-${String(k.id + 1).padStart(2, '0')} · ENCRYPTED`, `SOG ${(Math.hypot(k.vx, k.vy) * 1.9).toFixed(1)} kn`, 'AES-256 · PING 0.7 Hz'];
        }
      }
    }
    for (let i = 0; i < centers.length; i++) {
      if (Math.hypot(centers[i][0] - x, centers[i][1] - y) < R * 0.87) {
        const l = load(i, tm);
        return [`${fmtLat(g.lat)}  ${fmtLon(g.lon)}`, `BEAM ${String(i + 1).padStart(2, '0')}/16 · LOAD ${(l * 100).toFixed(0)}%`, `${Math.round(l * 75)}/75 CH · S-BAND NTN`, 'ELEV 62° · 3GPP Rel-17'];
      }
    }
    return [`${fmtLat(g.lat)}  ${fmtLon(g.lon)}`, 'OUTSIDE ACTIVE BEAM CLUSTER'];
  };

  const drawSat = (ctx: CanvasRenderingContext2D): void => {
    ctx.save();
    ctx.translate(sat[0], sat[1]);
    ctx.strokeStyle = accent;
    ctx.fillStyle = 'rgba(157,184,255,0.18)';
    ctx.lineWidth = 1.2;
    ctx.fillRect(-5, -4, 10, 8);
    ctx.strokeRect(-5, -4, 10, 8);
    ctx.fillRect(-22, -3, 14, 6);
    ctx.strokeRect(-22, -3, 14, 6);
    ctx.fillRect(8, -3, 14, 6);
    ctx.strokeRect(8, -3, 14, 6);
    ctx.restore();
    hudText(ctx, 'AG-LINK', sat[0], sat[1] + 9, accent, 'center');
  };

  return {
    frame(ctx, tm, hover) {
      ctx.drawImage(base, 0, 0);

      // beam cluster
      const active = Math.floor(tm * 3) % 16;
      let channels = 0;
      for (let i = 0; i < centers.length; i++) {
        const [cx, cy] = centers[i];
        const l = load(i, tm);
        channels += Math.round(l * 75);
        hexPath(ctx, cx, cy, R - 1);
        ctx.fillStyle = `rgba(0,161,255,${0.05 + 0.13 * l})`;
        ctx.fill();
        if (i === active) {
          ctx.fillStyle = `rgba(0,255,136,${0.16 + 0.1 * Math.sin(tm * 12)})`;
          ctx.fill();
        }
        ctx.strokeStyle = i === active ? C.green : 'rgba(0,161,255,0.55)';
        ctx.lineWidth = i === active ? 1.6 : 1;
        ctx.stroke();
        if (mode === 'coverage') hudText(ctx, String(Math.round(l * 75)), cx, cy - 5, 'rgba(225,238,250,0.7)', 'center');
      }

      // terminals
      for (let i = 0; i < terminals.length; i++) {
        const [x, y] = terminals[i];
        ctx.fillStyle = mode === 'coverage' ? 'rgba(0,255,136,0.75)' : 'rgba(157,184,255,0.35)';
        ctx.fillRect(x - 1, y - 1, 2, 2);
      }

      drawSat(ctx);

      if (mode === 'coverage') {
        const [ax, ay] = centers[active];
        ctx.save();
        ctx.strokeStyle = 'rgba(0,255,136,0.75)';
        ctx.setLineDash([4, 4]);
        ctx.lineDashOffset = -tm * 20;
        ctx.beginPath();
        ctx.moveTo(sat[0], sat[1] + 6);
        ctx.lineTo(ax, ay);
        ctx.stroke();
        ctx.restore();
      } else {
        const pos = tracks.map((k) => trackAt(k, tm));
        tracks.forEach((k, i) => {
          // trail
          ctx.strokeStyle = 'rgba(0,255,136,0.35)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          let prev: [number, number] | null = null;
          for (let s = 10; s >= 0; s--) {
            const p = trackAt(k, tm - s * 0.6);
            if (prev && Math.hypot(p[0] - prev[0], p[1] - prev[1]) > 40) {
              ctx.moveTo(p[0], p[1]);
            } else if (prev) {
              ctx.lineTo(p[0], p[1]);
            } else {
              ctx.moveTo(p[0], p[1]);
            }
            prev = p;
          }
          ctx.stroke();

          const [x, y] = pos[i];
          const heading = Math.atan2(k.vy, k.vx);
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(heading);
          ctx.fillStyle = C.green;
          ctx.beginPath();
          ctx.moveTo(6, 0);
          ctx.lineTo(-4, -3.5);
          ctx.lineTo(-4, 3.5);
          ctx.closePath();
          ctx.fill();
          ctx.restore();

          const ph = (tm * 0.7 + i * 0.37) % 1;
          ctx.strokeStyle = `rgba(0,255,136,${(1 - ph) * 0.7})`;
          ctx.beginPath();
          ctx.arc(x, y, 3 + ph * 16, 0, Math.PI * 2);
          ctx.stroke();
          if (ph < 0.35) {
            ctx.save();
            ctx.strokeStyle = `rgba(157,184,255,${(0.35 - ph) * 1.8})`;
            ctx.setLineDash([2, 3]);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(sat[0], sat[1] + 6);
            ctx.stroke();
            ctx.restore();
          }
          hudText(ctx, `BFT-${String(i + 1).padStart(2, '0')}`, x + 8, y - 5, 'rgba(200,255,225,0.85)');
        });

        // BLOS command route A → satellite → B
        ctx.save();
        ctx.strokeStyle = C.amber;
        ctx.lineWidth = 1.4;
        ctx.setLineDash([6, 4]);
        ctx.lineDashOffset = -tm * 24;
        ctx.beginPath();
        ctx.moveTo(pos[0][0], pos[0][1]);
        ctx.lineTo(sat[0], sat[1] + 6);
        ctx.lineTo(pos[5][0], pos[5][1]);
        ctx.stroke();
        ctx.restore();
      }

      hudGrid(ctx, geo, '#C9D8FF');
      hudBrackets(ctx, accent);
      hudHeader(ctx, `LINKMESH-D2C · ${mode === 'coverage' ? 'PHASED-ARRAY BEAM COVERAGE' : 'ENCRYPTED BLUE-FORCE TRACKING'}`, '3GPP Rel-17 NTN S-band + UHF tactical · 16 beams', accent);
      if (mode === 'coverage') {
        hudText(ctx, `CHANNELS ${Math.round((channels / 1200) * 1200).toLocaleString('en-US')} / 1,200 · BEAM HOP ${String(active + 1).padStart(2, '0')}/16`, 14, H - 24, C.green);
        hudText(ctx, 'EIRP 38 dBW · 16-EL ARRAY', W - 14, H - 24, 'rgba(225,238,250,0.8)', 'right');
      } else {
        hudText(ctx, 'BFT TRACKS 8 · AES-256 · PING 0.7 Hz', 14, H - 24, C.green);
        hudText(ctx, 'BLOS CMD ROUTE · 2 HOPS', W - 14, H - 24, C.amber, 'right');
      }
      if (hover) hudHover(ctx, hover, readout(hover.x, hover.y, tm), accent);
    },
  };
}

function createScene(id: PayloadId, mode: string): Scene {
  switch (id) {
    case 'hypereye':
      return createOptical(mode === 'nir' || mode === 'redge' ? mode : 'rgb');
    case 'sar':
      return createSar(mode === 'spot' || mode === 'insar' ? mode : 'strip');
    case 'thermo':
      return createThermal(mode === 'plume' ? 'plume' : 'fire');
    case 'neural':
      return createNeural(mode === 'cloud' ? 'cloud' : 'detect');
    case 'linkmesh':
      return createLink(mode === 'bft' ? 'bft' : 'coverage');
  }
}

/* ================================================================== */
/* UI components                                                       */
/* ================================================================== */

function SensorPreview({ payload, mode, onMode }: { payload: PayloadDef; mode: string; onMode: (m: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoverRef = useRef<Hover>(null);
  const redrawRef = useRef<(() => void) | null>(null);
  const [building, setBuilding] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let cancelled = false;
    let scene: Scene | null = null;
    let t0 = 0;
    setBuilding(true);

    const draw = (now: number): void => {
      if (scene) scene.frame(ctx, (now - t0) / 1000, hoverRef.current);
    };
    const loop = (now: number): void => {
      if (cancelled) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    // Defer scene synthesis one tick so the tab switch paints first.
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      scene = createScene(payload.id, mode);
      t0 = performance.now();
      setBuilding(false);
      if (reduce) {
        const frozen = t0 + 6500;
        draw(frozen);
        redrawRef.current = () => draw(frozen);
      } else {
        raf = requestAnimationFrame(loop);
      }
    }, 30);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      redrawRef.current = null;
    };
  }, [payload.id, mode]);

  const onMove = (e: ReactPointerEvent<HTMLCanvasElement>): void => {
    const r = e.currentTarget.getBoundingClientRect();
    hoverRef.current = { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
    redrawRef.current?.();
  };
  const onLeave = (): void => {
    hoverRef.current = null;
    redrawRef.current?.();
  };

  const modes = MODES[payload.id];
  return (
    <div className={`${PANEL} overflow-hidden`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(0,161,255,0.2)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: payload.accent }} aria-hidden />
          <span className={LABEL}>Sensor mode preview · simulated</span>
        </div>
        <div role="tablist" aria-label={`${payload.name} sensor modes`} className="flex flex-wrap gap-1.5">
          {modes.map((m) => {
            const sel = m.id === mode;
            return (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={sel}
                onClick={() => onMode(m.id)}
                className="rounded-md border px-2.5 py-1 font-mono text-[10px] tracking-widest transition-colors"
                style={{
                  borderColor: sel ? payload.accent : 'rgba(255,255,255,0.12)',
                  background: sel ? `${payload.accent}22` : 'transparent',
                  color: sel ? payload.accent : 'rgba(255,255,255,0.55)',
                }}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="relative bg-black">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="block aspect-video w-full cursor-crosshair"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          role="img"
          aria-label={`Simulated ${payload.name} sensor preview. Move the pointer over the frame for per-pixel readouts.`}
        />
        {building && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 font-mono text-xs tracking-[0.3em] text-white/60">
            ACQUIRING FRAME…
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 font-mono text-[10px] text-white/40">
        <span>SYNTHETIC SCENE · PROCEDURAL · NOT FLIGHT DATA</span>
        <span>HOVER FRAME FOR PIXEL READOUT</span>
      </div>
    </div>
  );
}

function Meter({ label, icon, value, max, unit, decimals = 1 }: { label: string; icon: JSX.Element; value: number; max: number; unit: string; decimals?: number }) {
  const ratio = value / max;
  const tone = ratio > 1 ? C.red : ratio >= 0.9 ? C.amber : C.green;
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-[10px]">
        <span className="flex items-center gap-1.5 text-white/55">
          <span aria-hidden>{icon}</span>
          {label}
        </span>
        <span style={{ color: tone }} className="tabular-nums">
          {value.toFixed(decimals)} / {max} {unit}
        </span>
      </div>
      <div
        className="mt-1 h-2 overflow-hidden rounded-full bg-white/[0.07]"
        role="progressbar"
        aria-label={label}
        aria-valuenow={Math.round(ratio * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full rounded-full transition-[width] duration-500" style={{ width: `${Math.min(ratio, 1) * 100}%`, background: tone, boxShadow: `0 0 8px ${tone}88` }} />
      </div>
    </div>
  );
}

function MiniMeter({ label, ratio, text }: { label: string; ratio: number; text: string }) {
  const tone = ratio > 1 ? C.red : ratio >= 0.9 ? C.amber : C.green;
  return (
    <div className="min-w-[88px]">
      <div className="flex justify-between font-mono text-[9px] tracking-widest">
        <span className="text-white/45">{label}</span>
        <span style={{ color: tone }} className="tabular-nums">
          {text}
        </span>
      </div>
      <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-white/[0.08]">
        <div className="h-full rounded-full transition-[width] duration-500" style={{ width: `${Math.min(ratio, 1) * 100}%`, background: tone }} />
      </div>
    </div>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export default function PayloadsPage() {
  const [selected, setSelected] = useState<PayloadId>('hypereye');
  const [modes, setModes] = useState<Record<PayloadId, string>>({
    hypereye: 'rgb',
    sar: 'strip',
    thermo: 'fire',
    neural: 'detect',
    linkmesh: 'coverage',
  });
  const [mounted, setMounted] = useState<ReadonlySet<PayloadId>>(() => new Set<PayloadId>(['sar', 'neural']));

  useEffect(() => {
    document.title = 'AeroGrid OS · Payloads & Sensor Explorer';
  }, []);

  const toggle = useCallback((id: PayloadId) => {
    setMounted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const setMode = useCallback(
    (m: string) => setModes((prev) => ({ ...prev, [selected]: m })),
    [selected],
  );

  const budget = useMemo(() => computeBudget(mounted), [mounted]);
  const payload = PAYLOAD_BY_ID[selected];
  const ids = PAYLOADS.filter((p) => mounted.has(p.id)).map((p) => p.id);
  const canDeploy = budget.status.tone === 'ok';
  const deployHref = `/dashboard?payloads=${ids.join(',')}&mass=${budget.massKg.toFixed(1)}&power=${budget.powerW.toFixed(0)}`;
  const taskHref = `/dashboard?payloads=${selected}`;

  const statusColor = budget.status.tone === 'ok' ? C.green : budget.status.tone === 'bad' ? C.red : 'rgba(255,255,255,0.5)';

  return (
    <div className="min-h-screen bg-[#05070B] bg-[radial-gradient(ellipse_at_top,rgba(0,161,255,0.10),transparent_55%)] text-white">
      {/* ---------------- Top bar ---------------- */}
      <header className="sticky top-0 z-30 border-b border-[rgba(0,161,255,0.2)] bg-[#05070B]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-lg border border-white/12 px-2.5 py-1.5 font-mono text-[11px] tracking-wider text-white/70 transition-colors hover:border-[#00A1FF]/60 hover:text-[#00A1FF]"
            >
              <ArrowLeft size={13} aria-hidden /> BACK
            </Link>
            <nav aria-label="Breadcrumb" className="hidden items-center gap-1.5 font-mono text-[11px] tracking-widest md:flex">
              <Link href="/" className="text-white/40 transition-colors hover:text-white/75">HOME</Link>
              <ChevronRight size={11} className="text-white/20" aria-hidden />
              <Link href="/dashboard" className="text-white/40 transition-colors hover:text-white/75">MISSION CONTROL</Link>
              <ChevronRight size={11} className="text-white/20" aria-hidden />
              <span className="font-semibold text-[#00A1FF]">PAYLOADS</span>
            </nav>
          </div>

          <div className="rounded-md border border-[rgba(0,161,255,0.3)] bg-[#00A1FF]/[0.07] px-3 py-1.5 font-mono text-[10px] tracking-wider text-[#00A1FF]">
            BUS STANDARD: 28V DC · SpaceWire ECSS-E-ST-50-52C · GBE
          </div>

          <div className="ml-auto flex items-center gap-4" aria-label="Bus allocation">
            <MiniMeter label="MASS" ratio={budget.ratios.mass} text={`${budget.massKg.toFixed(1)}/${LIMITS.massKg} kg`} />
            <MiniMeter label="PEAK PWR" ratio={budget.ratios.power} text={`${budget.powerW.toFixed(0)}/${LIMITS.peakPowerW} W`} />
            <MiniMeter label="VOLUME" ratio={budget.ratios.volume} text={`${budget.volumeU.toFixed(1)}/${LIMITS.volumeU}U`} />
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1600px] gap-4 p-4 xl:grid-cols-[290px_minmax(0,1fr)_350px]">
        {/* ---------------- Payload selector ---------------- */}
        <section aria-label="Payload catalogue" className="grid content-start gap-2 sm:grid-cols-2 xl:grid-cols-1">
          <div className="hidden sm:col-span-2 xl:col-span-1 xl:block">
            <div className={LABEL}>Sovereign bus payloads · 5</div>
          </div>
          {PAYLOADS.map((p) => {
            const isSel = p.id === selected;
            const on = mounted.has(p.id);
            return (
              <div
                key={p.id}
                className="flex overflow-hidden rounded-xl border bg-[#0A0E17]/75 backdrop-blur-xl transition-colors"
                style={{ borderColor: isSel ? p.accent : 'rgba(0,161,255,0.2)', boxShadow: isSel ? `0 0 24px ${p.accent}22` : undefined }}
              >
                <button type="button" onClick={() => setSelected(p.id)} aria-pressed={isSel} className="min-w-0 flex-1 p-3 text-left">
                  <div className="flex items-center gap-2">
                    <p.Icon size={16} style={{ color: p.accent }} aria-hidden />
                    <span className="truncate font-mono text-[12px] font-bold tracking-wider text-white">{p.name}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="rounded border px-1.5 py-px font-mono text-[8px] tracking-widest" style={{ borderColor: `${p.accent}66`, color: p.accent }}>
                      {p.badge}
                    </span>
                    <span className="truncate text-[11px] text-white/45">{p.category}</span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-1">
                    {p.headline.map((h) => (
                      <div key={h.label} className="rounded border border-white/[0.06] bg-black/30 px-1.5 py-1">
                        <div className="font-mono text-[10px] font-semibold text-white">{h.value}</div>
                        <div className="font-mono text-[7px] tracking-widest text-white/35">{h.label}</div>
                      </div>
                    ))}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => toggle(p.id)}
                  aria-pressed={on}
                  aria-label={`${on ? 'Unmount' : 'Mount'} ${p.name} ${on ? 'from' : 'on'} bus`}
                  className="flex w-11 shrink-0 flex-col items-center justify-center gap-1 border-l transition-colors"
                  style={{
                    borderColor: 'rgba(0,161,255,0.2)',
                    background: on ? 'rgba(0,255,136,0.10)' : 'transparent',
                    color: on ? C.green : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {on ? <Check size={16} aria-hidden /> : <Plus size={16} aria-hidden />}
                  <span className="font-mono text-[7px] tracking-widest">{on ? 'MOUNTED' : 'MOUNT'}</span>
                </button>
              </div>
            );
          })}
        </section>

        {/* ---------------- Preview + spec sheet ---------------- */}
        <div className="grid min-w-0 content-start gap-4">
          <SensorPreview payload={payload} mode={modes[selected]} onMode={setMode} />

          <section className={`${PANEL} p-5`} aria-label={`${payload.name} specification sheet`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <payload.Icon size={20} style={{ color: payload.accent }} aria-hidden />
                  <h1 className="font-mono text-xl font-bold tracking-wider text-white">{payload.name}</h1>
                </div>
                <p className="mt-1 text-sm text-white/55">{payload.fullName}</p>
                <span className="mt-2 inline-block rounded border px-2 py-0.5 font-mono text-[9px] tracking-widest" style={{ borderColor: `${payload.accent}66`, color: payload.accent }}>
                  {payload.category.toUpperCase()}
                </span>
              </div>
              <button
                type="button"
                onClick={() => toggle(payload.id)}
                aria-pressed={mounted.has(payload.id)}
                className="flex items-center gap-2 rounded-lg border px-4 py-2 font-mono text-[11px] font-bold tracking-[0.18em] transition-colors"
                style={{
                  borderColor: mounted.has(payload.id) ? C.green : 'rgba(0,161,255,0.5)',
                  background: mounted.has(payload.id) ? 'rgba(0,255,136,0.12)' : 'rgba(0,161,255,0.12)',
                  color: mounted.has(payload.id) ? C.green : C.cyan,
                }}
              >
                {mounted.has(payload.id) ? <Check size={14} aria-hidden /> : <Plus size={14} aria-hidden />}
                {mounted.has(payload.id) ? 'MOUNTED ON BUS' : 'MOUNT TO BUS'}
              </button>
            </div>

            <dl className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {payload.specs.map((s) => (
                <div key={s.label} className="rounded-lg border border-white/[0.07] bg-black/30 px-3 py-2">
                  <dt className="font-mono text-[9px] uppercase tracking-widest text-white/40">{s.label}</dt>
                  <dd className="mt-0.5 font-mono text-[12px] font-semibold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 rounded-lg border p-3" style={{ borderColor: `${payload.accent}44`, background: `${payload.accent}0D` }}>
              <div className="font-mono text-[9px] uppercase tracking-widest" style={{ color: payload.accent }}>
                Key feature
              </div>
              <p className="mt-1 text-sm leading-relaxed text-white/80">{payload.keyFeature}</p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className={LABEL}>Applications</span>
              {payload.applications.map((a) => (
                <span key={a} className="rounded-full border border-white/12 px-2.5 py-0.5 font-mono text-[10px] text-white/65">
                  {a}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* ---------------- Bus calculator ---------------- */}
        <aside className={`${PANEL} content-start p-4 xl:sticky xl:top-[84px] xl:self-start`} aria-label="Bus compatibility and power budget calculator">
          <div className="flex items-center gap-2">
            <Gauge size={14} className="text-[#00A1FF]" aria-hidden />
            <h2 className={LABEL}>Bus compatibility · power budget</h2>
          </div>

          <ul className="mt-3 space-y-1.5">
            {PAYLOADS.map((p) => {
              const on = mounted.has(p.id);
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => toggle(p.id)}
                    aria-pressed={on}
                    className="flex w-full items-center gap-2.5 rounded-lg border px-2.5 py-2 text-left transition-colors"
                    style={{ borderColor: on ? `${p.accent}88` : 'rgba(255,255,255,0.08)', background: on ? `${p.accent}12` : 'transparent' }}
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border" style={{ borderColor: on ? p.accent : 'rgba(255,255,255,0.25)', background: on ? p.accent : 'transparent' }}>
                      {on && <Check size={11} className="text-black" aria-hidden />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-mono text-[11px] font-semibold text-white">{p.name}</span>
                      <span className="block font-mono text-[9px] text-white/40">
                        {p.massKg} kg · {p.peakPowerW} W · {p.volumeU}U
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 space-y-3">
            <Meter label="TOTAL MASS" icon={<Scale size={11} />} value={budget.massKg} max={LIMITS.massKg} unit="kg" />
            <Meter label="PEAK POWER" icon={<Zap size={11} />} value={budget.powerW} max={LIMITS.peakPowerW} unit="W" decimals={0} />
            <Meter label="BUS VOLUME" icon={<Box size={11} />} value={budget.volumeU} max={LIMITS.volumeU} unit="U" />
            <Meter label="DOWNLINK LOAD" icon={<Database size={11} />} value={budget.downlinkGb} max={Math.round(DOWNLINK_CAPACITY_GB_DAY)} unit="GB/d" decimals={1} />
          </div>

          <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/30 p-3">
            <div className={LABEL}>Daily data volume</div>
            <div className="mt-1 flex items-baseline gap-1.5 font-mono">
              <span className="text-2xl font-bold tabular-nums text-white">{budget.downlinkGb.toFixed(1)}</span>
              <span className="text-[10px] tracking-widest text-white/50">GB/DAY</span>
            </div>
            <div className="mt-1 font-mono text-[10px] text-white/45">
              {budget.savedGb > 0
                ? `RAW ${budget.rawGb.toFixed(1)} GB → EDGE-AI FILTERED · −${budget.savedGb.toFixed(1)} GB (${Math.round(EDGE_FILTER_SAVING * 100)}% on imaging payloads)`
                : budget.count > 0
                  ? `RAW ${budget.rawGb.toFixed(1)} GB · mount NeuralCore-E2 to filter on-orbit`
                  : 'NO PAYLOADS MOUNTED'}
            </div>
          </div>

          <div
            role="status"
            aria-live="polite"
            className="mt-4 rounded-lg border p-3"
            style={{
              borderColor: `${statusColor}88`,
              background: budget.status.tone === 'idle' ? 'rgba(255,255,255,0.03)' : `${statusColor}14`,
            }}
          >
            <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-wider" style={{ color: statusColor }}>
              {budget.status.tone === 'ok' ? <ShieldCheck size={16} aria-hidden /> : budget.status.tone === 'bad' ? <ShieldAlert size={16} aria-hidden /> : <Gauge size={16} aria-hidden />}
              {budget.status.label}
            </div>
            {budget.violations.slice(1).map((v) => (
              <div key={v} className="mt-1 font-mono text-[10px] text-[#FF4D4D]">
                + {v}
              </div>
            ))}
            {budget.status.tone === 'bad' && (
              <div className="mt-1 font-mono text-[10px] text-white/55">
                {budget.ratios.power > 1 ? `Peak power over by ${(budget.powerW - LIMITS.peakPowerW).toFixed(0)} W. ` : ''}
                {budget.ratios.volume > 1 ? `Volume over by ${(budget.volumeU - LIMITS.volumeU).toFixed(1)}U. ` : ''}
                {budget.ratios.mass > 1 ? `Mass over by ${(budget.massKg - LIMITS.massKg).toFixed(1)} kg. ` : ''}
                Unmount a payload to continue.
              </div>
            )}
            {budget.status.tone === 'ok' &&
              budget.warnings.map((w) => (
                <div key={w} className="mt-1 font-mono text-[10px] text-[#FC6A18]">
                  ⚠ {w}
                </div>
              ))}
          </div>

          <div className="mt-4 grid gap-2">
            {canDeploy ? (
              <Link
                href={deployHref}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#00FF88]/60 bg-[#00FF88]/12 py-2.5 font-mono text-xs font-bold tracking-[0.18em] text-[#00FF88] shadow-[0_0_24px_rgba(0,255,136,0.12)] transition-colors hover:bg-[#00FF88]/20"
              >
                <Rocket size={14} aria-hidden /> DEPLOY IN CONSTELLATION
              </Link>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/12 py-2.5 font-mono text-xs font-bold tracking-[0.18em] text-white/35"
              >
                <Rocket size={14} aria-hidden /> DEPLOY IN CONSTELLATION
              </button>
            )}
            {payload.taskable ? (
              <Link
                href={taskHref}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#FC6A18]/50 bg-[#FC6A18]/10 py-2 font-mono text-[11px] font-bold tracking-[0.16em] text-[#FC6A18] transition-colors hover:bg-[#FC6A18]/20"
              >
                OPEN TASKING · {payload.name.toUpperCase()}
              </Link>
            ) : (
              <div className="rounded-lg border border-white/10 py-2 text-center font-mono text-[10px] tracking-wider text-white/35">
                {payload.name.toUpperCase()} IS A COMMS PAYLOAD · NO IMAGING TASKING
              </div>
            )}
          </div>

          <p className="mt-3 font-mono text-[9px] leading-relaxed text-white/30">
            Limits: 24 kg · 320 W worst-case coincident peak · 16U. Per-payload volume, duty cycle, data rates and a
            downlink capacity of {Math.round(DOWNLINK_CAPACITY_GB_DAY)} GB/day (5 passes × 8 min × 800 Mbps) are reference
            assumptions, not datasheet values.
          </p>
        </aside>
      </main>
    </div>
  );
}
