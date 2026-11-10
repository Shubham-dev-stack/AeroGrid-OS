'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  Radio,
  Signal,
  ChevronRight,
  X,
  Play,
  CheckCircle2,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { soundEngine } from '@/lib/soundEngine';

/* ------------------------------------------------------------------ */
/* Canonical 520 km SSO Orbit & 5 Ground Stations (matches telemetry API) */
/* ------------------------------------------------------------------ */

const DEG = Math.PI / 180;
const R_EARTH_KM = 6371;
const OMEGA_EARTH_RAD_S = 7.2921159e-5;
const ALT_KM = 520;
const INCLINATION_DEG = 97.5;
const ORBIT_PERIOD_S = 94.9 * 60;
const MISSION_EPOCH_MS = Date.UTC(2026, 0, 15, 0, 0, 0);
const RAAN_DEG = 40;
const ELEVATION_MASK_DEG = 5;
const SCAN_STEP_S = 15;
const SCAN_HORIZON_S = 12 * 3600;

interface StationDef {
  id: string;
  name: string;
  lat: number;
  lon: number;
  coordLabel: string;
  passesPerDay: number;
  volumeGb: number;
}

const STATIONS: StationDef[] = [
  { id: 'SVALSAT', name: 'Svalbard SvalSat', lat: 78.2297, lon: 15.4077, coordLabel: '78.2°N, 15.4°E', passesPerDay: 11, volumeGb: 55 },
  { id: 'INUVIK', name: 'Inuvik', lat: 68.3607, lon: -133.7217, coordLabel: '68.4°N, 133.7°W', passesPerDay: 8, volumeGb: 52 },
  { id: 'PUNTA_ARENAS', name: 'Punta Arenas', lat: -53.1638, lon: -70.9171, coordLabel: '53.2°S, 70.9°W', passesPerDay: 5, volumeGb: 47 },
  { id: 'TROLL', name: 'Troll Antarctica', lat: -72.0119, lon: 2.535, coordLabel: '72.0°S, 2.5°E', passesPerDay: 10, volumeGb: 54 },
  { id: 'AWARUA', name: 'Awarua (NZ)', lat: -46.5283, lon: 168.6761, coordLabel: '46.5°S, 168.7°E', passesPerDay: 4, volumeGb: 43 },
];

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

function geodeticToEcef(latDeg: number, lonDeg: number): Vec3 {
  const lat = latDeg * DEG;
  const lon = lonDeg * DEG;
  return {
    x: R_EARTH_KM * Math.cos(lat) * Math.cos(lon),
    y: R_EARTH_KM * Math.cos(lat) * Math.sin(lon),
    z: R_EARTH_KM * Math.sin(lat),
  };
}

const STATION_ECEF = STATIONS.map((s) => geodeticToEcef(s.lat, s.lon));

function satelliteEcef(tSec: number): Vec3 {
  const elapsedS = tSec - MISSION_EPOCH_MS / 1000;
  const rawPhase = elapsedS / ORBIT_PERIOD_S;
  const phase = rawPhase - Math.floor(rawPhase);
  const u = 2 * Math.PI * phase;
  const inc = INCLINATION_DEG * DEG;
  const raan = RAAN_DEG * DEG;
  const r = R_EARTH_KM + ALT_KM;

  const xi = r * (Math.cos(raan) * Math.cos(u) - Math.sin(raan) * Math.sin(u) * Math.cos(inc));
  const yi = r * (Math.sin(raan) * Math.cos(u) + Math.cos(raan) * Math.sin(u) * Math.cos(inc));
  const zi = r * Math.sin(u) * Math.sin(inc);

  const theta = OMEGA_EARTH_RAD_S * elapsedS;
  return {
    x: xi * Math.cos(theta) + yi * Math.sin(theta),
    y: -xi * Math.sin(theta) + yi * Math.cos(theta),
    z: zi,
  };
}

function elevationDeg(sat: Vec3, station: Vec3): number {
  const dx = sat.x - station.x;
  const dy = sat.y - station.y;
  const dz = sat.z - station.z;
  const range = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const stationNorm = Math.sqrt(station.x ** 2 + station.y ** 2 + station.z ** 2);
  const sinEl = (dx * station.x + dy * station.y + dz * station.z) / (range * stationNorm);
  return (Math.asin(Math.max(-1, Math.min(1, sinEl))) / DEG);
}

interface ComputedPass {
  key: string;
  station: StationDef;
  aosMs: number;
  durationMin: number;
  maxElevationDeg: number;
  activeNow: boolean;
}

function computeUpcomingPasses(nowMs: number, limit = 6): ComputedPass[] {
  const nowSec = Math.floor(nowMs / 1000);
  const results: ComputedPass[] = [];

  // Check active contact right now
  const curSat = satelliteEcef(nowSec);
  const activeFlags = STATION_ECEF.map((st, idx) => {
    const el = elevationDeg(curSat, st);
    if (el >= ELEVATION_MASK_DEG) {
      let maxEl = el;
      let los = nowSec;
      while (los < nowSec + 1200) {
        const nextEl = elevationDeg(satelliteEcef(los), st);
        if (nextEl < ELEVATION_MASK_DEG) break;
        maxEl = Math.max(maxEl, nextEl);
        los += SCAN_STEP_S;
      }
      results.push({
        key: `${STATIONS[idx].id}-active-${nowSec}`,
        station: STATIONS[idx],
        aosMs: nowSec * 1000,
        durationMin: Math.max(1.0, Math.round(((los - nowSec) / 60) * 10) / 10),
        maxElevationDeg: Math.round(maxEl * 10) / 10,
        activeNow: true,
      });
      return true;
    }
    return false;
  });

  // Scan next 12h for upcoming AOS passes
  const t0 = Math.floor(nowSec / SCAN_STEP_S) * SCAN_STEP_S;
  const prevVisible = [...activeFlags];

  for (let t = t0 + SCAN_STEP_S; t <= t0 + SCAN_HORIZON_S && results.length < limit; t += SCAN_STEP_S) {
    const sat = satelliteEcef(t);
    for (let j = 0; j < STATION_ECEF.length; j++) {
      const visible = elevationDeg(sat, STATION_ECEF[j]) >= ELEVATION_MASK_DEG;
      if (visible && !prevVisible[j]) {
        let los = t;
        let maxEl = 0;
        while (los < t + 1200) {
          const el = elevationDeg(satelliteEcef(los), STATION_ECEF[j]);
          if (el < ELEVATION_MASK_DEG) break;
          maxEl = Math.max(maxEl, el);
          los += SCAN_STEP_S;
        }
        results.push({
          key: `${STATIONS[j].id}-${t}`,
          station: STATIONS[j],
          aosMs: t * 1000,
          durationMin: Math.round(((los - t) / 60) * 10) / 10,
          maxElevationDeg: Math.round(maxEl * 10) / 10,
          activeNow: false,
        });
        if (results.length >= limit) break;
      }
      prevVisible[j] = visible;
    }
  }

  return results;
}

interface LiveRfStatus {
  source: 'LIVE' | 'LOCAL';
  linkState: string;
  rateMbps: number;
  snrDb: number;
}

export default function PassPredictorDrawer() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'SCHEDULE' | 'SIMULATION'>('SCHEDULE');
  const [nowMs, setNowMs] = useState<number>(() => Date.now());
  const [passes, setPasses] = useState<ComputedPass[]>([]);
  const [rfStatus, setRfStatus] = useState<LiveRfStatus>({
    source: 'LOCAL',
    linkState: 'STANDBY',
    rateMbps: 0,
    snrDb: 4.2,
  });

  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Show floating trigger only on non-home, non-dashboard pages to prevent HUD collisions
  const showFloatingTrigger = pathname !== '/' && pathname !== '/dashboard';

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  }, []);

  // Recompute orbital pass schedule on mount and periodically
  const recomputePasses = useCallback(() => {
    const t = Date.now();
    setNowMs(t);
    setPasses(computeUpcomingPasses(t, 6));
  }, []);

  useEffect(() => {
    recomputePasses();
    const secTimer = setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    const orbitTimer = setInterval(() => {
      recomputePasses();
    }, 30000);

    return () => {
      clearInterval(secTimer);
      clearInterval(orbitTimer);
    };
  }, [recomputePasses]);

  // Listen to custom open event (triggered from CommandPalette, Dashboard AosPill, or iframe) and Escape
  useEffect(() => {
    const handleOpen = () => {
      soundEngine.playClick();
      recomputePasses();
      setIsOpen(true);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };

    window.addEventListener('aerogrid:open-pass-predictor', handleOpen);
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('aerogrid:open-pass-predictor', handleOpen);
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, recomputePasses]);

  // Fetch live RF metrics from /api/v1/telemetry while drawer is open
  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;

    const fetchTel = async () => {
      try {
        const res = await fetch('/api/v1/telemetry', { cache: 'no-store' });
        if (!res.ok) throw new Error('status');
        const data = await res.json();
        if (!cancelled && data?.rf) {
          setRfStatus({
            source: 'LIVE',
            linkState: data.rf.linkState || 'STANDBY',
            rateMbps: data.rf.activeRateMbps ?? 0,
            snrDb: data.rf.snrDb ?? 4.2,
          });
        }
      } catch {
        if (!cancelled) {
          setRfStatus((prev) => ({ ...prev, source: 'LOCAL' }));
        }
      }
    };

    void fetchTel();
    const id = setInterval(() => void fetchTel(), 4000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [isOpen]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const formatCountdown = (targetMs: number) => {
    const diffSec = Math.max(0, Math.round((targetMs - nowMs) / 1000));
    const h = Math.floor(diffSec / 3600);
    const m = Math.floor((diffSec % 3600) / 60);
    const s = diffSec % 60;
    if (h > 0) return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const startSimulation = () => {
    if (simulationRunning) return;
    clearTimers();
    setSimulationRunning(true);
    setSimulationStep(1);
    soundEngine.playClick();

    timersRef.current.push(
      setTimeout(() => {
        setSimulationStep(2);
        soundEngine.playChirp();
      }, 1000),
      setTimeout(() => {
        setSimulationStep(3);
        soundEngine.playChirp();
      }, 2100),
      setTimeout(() => {
        setSimulationStep(4);
        soundEngine.playChirp();
        setSimulationRunning(false);
      }, 3300)
    );
  };

  const nextPass = passes[0];

  return (
    <>
      {/* Subpage Floating AOS Radar Pill (hidden on '/' and '/dashboard' to prevent overlap) */}
      {showFloatingTrigger && nextPass && (
        <div className="fixed bottom-5 right-5 z-40 pointer-events-auto">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              recomputePasses();
              setIsOpen(true);
            }}
            className="group flex items-center gap-3 px-3.5 py-2 rounded-full border border-[#00A1FF]/40 bg-black/85 hover:bg-[#080D17] backdrop-blur-xl shadow-[0_0_25px_rgba(0,161,255,0.2)] transition-all cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  nextPass.activeNow ? 'bg-[#00A1FF]' : 'bg-[#00FF88]'
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  nextPass.activeNow ? 'bg-[#00A1FF]' : 'bg-[#00FF88]'
                }`}
              />
            </span>
            <div className="text-left font-mono">
              <div className="text-[9px] text-slate-400 uppercase tracking-widest leading-none">
                {nextPass.activeNow ? 'LINK ACTIVE' : 'NEXT AOS'} · {nextPass.station.id}
              </div>
              <div className="text-xs font-bold text-white leading-none mt-1 group-hover:text-[#00A1FF] transition-colors tabular-nums">
                {nextPass.activeNow ? `EL ${nextPass.maxElevationDeg}°` : `T- ${formatCountdown(nextPass.aosMs)}`}
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#00A1FF] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* Slide-over Orbital Pass Predictor Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Orbital Pass Predictor"
          className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 h-full w-full max-w-lg bg-[#070B14] border-l border-[#00A1FF]/30 shadow-[-10px_0_40px_rgba(0,0,0,0.85)] flex flex-col z-[9999]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00A1FF]/15 border border-[#00A1FF]/40 text-[#00A1FF]">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-sans font-extrabold text-white text-base leading-tight">
                      Orbital Pass Predictor
                    </h3>
                    <span
                      className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${
                        rfStatus.source === 'LIVE'
                          ? 'border-[#00FF88]/40 bg-[#00FF88]/10 text-[#00FF88]'
                          : 'border-[#00A1FF]/40 bg-[#00A1FF]/10 text-[#00A1FF]'
                      }`}
                    >
                      {rfStatus.source === 'LIVE' ? 'API LIVE' : '520KM KEPLER'}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-slate-400 tracking-wider uppercase mt-0.5">
                    AG-01 · 520 km SSO (97.5°) · X-Band 8.2 GHz
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close pass predictor"
                className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-white/10 px-6 pt-3 gap-6 font-mono text-xs">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  setActiveTab('SCHEDULE');
                }}
                className={`pb-3 font-semibold transition-all cursor-pointer ${
                  activeTab === 'SCHEDULE'
                    ? 'text-[#00A1FF] border-b-2 border-[#00A1FF]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                12h Ground Passes ({passes.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  setActiveTab('SIMULATION');
                }}
                className={`pb-3 font-semibold transition-all cursor-pointer ${
                  activeTab === 'SIMULATION'
                    ? 'text-[#00A1FF] border-b-2 border-[#00A1FF]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                X-Band Handshake Test
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {activeTab === 'SCHEDULE' ? (
                <>
                  {nextPass && (
                    <div
                      className={`p-4 rounded-xl border space-y-3 ${
                        nextPass.activeNow
                          ? 'border-[#00A1FF]/50 bg-[#00A1FF]/[0.07]'
                          : 'border-[#00FF88]/30 bg-[#00FF88]/[0.04]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border flex items-center gap-1.5 ${
                            nextPass.activeNow
                              ? 'text-[#00A1FF] bg-[#00A1FF]/15 border-[#00A1FF]/30'
                              : 'text-[#00FF88] bg-[#00FF88]/10 border-[#00FF88]/20'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                              nextPass.activeNow ? 'bg-[#00A1FF]' : 'bg-[#00FF88]'
                            }`}
                          />
                          {nextPass.activeNow ? 'ACTIVE CONTACT WINDOW' : 'NEXT IMMINENT PASS'}
                        </span>
                        <span className="font-mono text-xs font-bold text-white tabular-nums flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {nextPass.activeNow ? 'DOWNLINKING' : `AOS T- ${formatCountdown(nextPass.aosMs)}`}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-sans font-bold text-lg text-white">
                          {nextPass.station.name}
                        </h4>
                        <p className="font-mono text-xs text-slate-400">
                          {nextPass.station.coordLabel} · {nextPass.station.passesPerDay} passes/day · AES-256-GCM
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 font-mono text-xs">
                        <div>
                          <div className="text-[10px] text-slate-500">MAX ELEVATION</div>
                          <div className="text-white font-bold">{nextPass.maxElevationDeg}°</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500">DURATION</div>
                          <div className="text-white font-bold">{nextPass.durationMin} MIN</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500">PASS VOLUME</div>
                          <div className="text-[#00FF88] font-bold">~{nextPass.station.volumeGb} GB</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Upcoming Passes List */}
                  <div className="space-y-2.5 pt-1">
                    <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Queued 12-Hour Visibility Windows
                    </div>

                    {passes.slice(1).map((pass) => (
                      <div
                        key={pass.key}
                        className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#00A1FF]/35 transition-all space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans font-bold text-sm text-white">
                            {pass.station.name}
                          </span>
                          <span className="font-mono text-xs text-[#00A1FF] font-semibold tabular-nums">
                            T- {formatCountdown(pass.aosMs)}
                          </span>
                        </div>
                        <div className="font-mono text-[11px] text-slate-400 flex items-center justify-between">
                          <span>{pass.station.coordLabel}</span>
                          <span>Max El: {pass.maxElevationDeg}° · {pass.durationMin} min</span>
                        </div>
                        <div className="flex items-center justify-between pt-1.5 border-t border-white/5 font-mono text-[10px] text-slate-500">
                          <span>X-Band 8.2 GHz (800 Mbps DVB-S2X)</span>
                          <span className="text-slate-300 font-semibold">~{pass.station.volumeGb} GB</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2.5 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">TARGET STATION</span>
                      <span className="text-[#00A1FF] font-bold">
                        {nextPass ? nextPass.station.name.toUpperCase() : 'SVALBARD SVALSAT'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">RF DOWNLINK</span>
                      <span className="text-white font-bold">8.2 GHz X-BAND · DVB-S2X</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">LINK MARGIN / SNR</span>
                      <span className="text-[#00FF88] font-bold">
                        +{rfStatus.snrDb} dB · {rfStatus.rateMbps > 0 ? `${rfStatus.rateMbps} Mbps LIVE` : '800 Mbps NOMINAL'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">CIPHER SUITE</span>
                      <span className="text-white font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#00A1FF]" />
                        AES-256-GCM (CCSDS)
                      </span>
                    </div>
                  </div>

                  {/* Step Progress Indicators */}
                  <div className="space-y-2.5 font-mono text-xs">
                    {[
                      '1. 8.2 GHz X-Band Carrier Lock & Doppler Compensation',
                      '2. DVB-S2X Frame Sync & AES-256-GCM Session Auth',
                      '3. Solid-State Payload Downlink (800 Mbps Burst)',
                      '4. Direct-to-Cloud S3 Bucket Delivery (< 5 min SLA)',
                    ].map((label, i) => {
                      const active = simulationStep >= i + 1;
                      return (
                        <div
                          key={label}
                          className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
                            active
                              ? 'border-[#00FF88]/40 bg-[#00FF88]/10 text-white'
                              : 'border-white/5 bg-white/[0.01] text-slate-500'
                          }`}
                        >
                          <span>{label}</span>
                          {active && <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={startSimulation}
                    disabled={simulationRunning}
                    className={`w-full py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      simulationRunning
                        ? 'bg-slate-800 text-slate-400 border border-white/10'
                        : 'bg-[#00A1FF] hover:bg-[#008fe3] text-black shadow-[0_0_25px_rgba(0,161,255,0.4)]'
                    }`}
                  >
                    {simulationRunning ? (
                      <>
                        <Signal className="w-4 h-4 animate-pulse" />
                        <span>Executing X-Band Handshake...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Simulate Ground Station Pass</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-black/60 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00FF88]" />
                5 POLAR &amp; MID-LAT GROUND NODES
              </span>
              <span className="text-[#00A1FF] font-semibold">94.9 MIN PERIOD</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
