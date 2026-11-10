'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Satellite,
  Compass,
  Cpu,
  FileCode2,
  Volume2,
  Zap,
  ArrowRight,
  Radio,
  Layers,
  Crosshair,
  X,
} from 'lucide-react';
import { soundEngine } from '@/lib/soundEngine';
import { projectConfig } from '@/config/projectConfig';

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'NAVIGATION' | 'FLEET & PAYLOADS' | 'TACTICAL ACTIONS';
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Listen for Cmd+K / Ctrl+K or explicit custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => {
          const next = !prev;
          if (next) soundEngine.playClick();
          return next;
        });
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleOpenEvent = () => {
      soundEngine.playClick();
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('aerogrid:open-command-palette', handleOpenEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('aerogrid:open-command-palette', handleOpenEvent);
    };
  }, [isOpen]);

  // Reset & focus search input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 40);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items: CommandItem[] = useMemo(() => {
    return [
      // Navigation
      {
        id: 'nav-home',
        title: 'Space Service 60FPS Platform',
        subtitle: 'Sovereign orbit presentation · 180 Days · 520 km SSO',
        category: 'NAVIGATION',
        icon: Compass,
        badge: 'HOME',
        action: () => router.push('/'),
      },
      {
        id: 'nav-dashboard',
        title: 'Mission Control Dashboard',
        subtitle: 'Live telemetry (AG-01), ground track map & AES-256 tasking HUD',
        category: 'NAVIGATION',
        icon: Satellite,
        badge: 'LIVE HUD',
        action: () => router.push('/dashboard'),
      },
      {
        id: 'nav-simulator',
        title: 'Walker-Delta Orbit Synthesizer',
        subtitle: 'Constellation plane optimization & analytical revisit solver',
        category: 'NAVIGATION',
        icon: Zap,
        badge: 'SIMULATOR',
        action: () => router.push('/simulator'),
      },
      {
        id: 'nav-payloads',
        title: 'Modular Sensor Payloads',
        subtitle: '5 standardized bus payloads, sensor HUD & 16U power budget',
        category: 'NAVIGATION',
        icon: Cpu,
        badge: '5 MODULES',
        action: () => router.push('/payloads'),
      },
      {
        id: 'nav-docs',
        title: 'Aerospace API Suite & Docs',
        subtitle: 'REST / gRPC telemetry schemas & live endpoint sandbox',
        category: 'NAVIGATION',
        icon: FileCode2,
        badge: 'API DOCS',
        action: () => router.push('/docs'),
      },

      // Canonical Fleet & Payloads (aligned with projectConfig & /api/v1/constellation)
      {
        id: 'fleet-ag01-sar',
        title: 'AeroGrid-01 (AG-01) · Sentinel-SAR X1',
        subtitle: 'Plane-A · 520 km SSO (97.5°) · X-band 9.65 GHz all-weather radar',
        category: 'FLEET & PAYLOADS',
        icon: Radio,
        badge: 'TASK SAR',
        action: () => router.push('/dashboard?payloads=sar'),
      },
      {
        id: 'fleet-ag03-hypereye',
        title: 'AeroGrid-03 (AG-03) · HyperEye-V2',
        subtitle: 'Plane-A · 0.5m PAN / 2.0m 8-band multispectral (12 km swath)',
        category: 'FLEET & PAYLOADS',
        icon: Radio,
        badge: 'TASK OPT',
        action: () => router.push('/dashboard?payloads=hypereye'),
      },
      {
        id: 'fleet-ag06-thermoscan',
        title: 'AeroGrid-06 (AG-06) · ThermoScan-L3',
        subtitle: 'Plane-B · LWIR 8–12 µm · 30m GSD · NETD < 50 mK thermal core',
        category: 'FLEET & PAYLOADS',
        icon: Radio,
        badge: 'TASK LWIR',
        action: () => router.push('/dashboard?payloads=thermo'),
      },
      {
        id: 'payload-neuralcore',
        title: 'NeuralCore-E2 · Edge-AI Processor',
        subtitle: '64 TOPS @ 15W · < 200ms on-orbit inference · 98% downlink reduction',
        category: 'FLEET & PAYLOADS',
        icon: Cpu,
        badge: 'EDGE AI',
        action: () => router.push('/dashboard?payloads=neural'),
      },
      {
        id: 'payload-linkmesh',
        title: 'LinkMesh-D2C · Direct-to-Cell NTN',
        subtitle: '3GPP Rel-17 NB-IoT · 700–900 MHz · ~500 km beam footprint',
        category: 'FLEET & PAYLOADS',
        icon: Radio,
        badge: 'NTN MESH',
        action: () => router.push('/payloads'),
      },

      // Tactical Actions
      {
        id: 'act-pass-predictor',
        title: 'Open Orbital Pass Predictor',
        subtitle: 'Inspect upcoming AOS windows across SvalSat, Inuvik, Punta Arenas, Troll & Awarua',
        category: 'TACTICAL ACTIONS',
        icon: Crosshair,
        badge: 'RF PASSES',
        action: () => {
          window.dispatchEvent(new CustomEvent('aerogrid:open-pass-predictor'));
        },
      },
      {
        id: 'act-audio',
        title: 'Toggle Cybernetic Sound Engine',
        subtitle: 'Switch tactical Web Audio chirps & ambient low-orbit drone',
        category: 'TACTICAL ACTIONS',
        icon: Volume2,
        badge: 'AUDIO',
        action: () => {
          soundEngine.toggleMute();
        },
      },
      {
        id: 'act-export',
        title: 'Export Sovereign Constellation Ephemeris',
        subtitle: 'Download 520 km SSO orbital parameters, payload suite & ground segment JSON',
        category: 'TACTICAL ACTIONS',
        icon: Layers,
        badge: 'JSON',
        action: () => {
          soundEngine.playChirp();
          const ephemeris = {
            constellation: 'AeroGrid Sovereign Constellation',
            generatedAt: new Date().toISOString(),
            deliverySlaDays: 180,
            turnkeyCostPerSatelliteUsdMillions: projectConfig.pricing.unitCostMillions,
            orbit: {
              regime: 'Sun-Synchronous Orbit (SSO)',
              altitudeKm: 520,
              inclinationDeg: 97.5,
              periodMin: 94.9,
              velocityKmS: 7.605,
              planes: 4,
              satellitesPerPlane: 3,
              totalSatellites: 12,
            },
            rfSubsystem: {
              downlinkBand: 'X-Band 8.2 GHz (DVB-S2X)',
              nominalRateMbps: 800,
              peakRateMbps: 1200,
              encryption: 'AES-256-GCM',
            },
            groundStations: projectConfig.groundStations,
          };
          const blob = new Blob([JSON.stringify(ephemeris, null, 2)], {
            type: 'application/json',
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `aerogrid_sovereign_ephemeris_${Date.now()}.json`;
          a.click();
          URL.revokeObjectURL(url);
        },
      },
    ];
  }, [router]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems.length]);

  const handleSelect = (item: CommandItem) => {
    soundEngine.playChirp();
    setIsOpen(false);
    item.action();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredItems.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      soundEngine.playClick();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      soundEngine.playClick();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="AeroGrid Tactical Command Palette"
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 sm:pt-24 px-4 bg-black/80 backdrop-blur-md"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-[#080D17] border border-[#00A1FF]/40 rounded-2xl shadow-[0_0_50px_rgba(0,161,255,0.25)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Top Search Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-5 h-5 text-[#00A1FF] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AeroGrid routes, payloads, orbit actions..."
            className="flex-1 bg-transparent text-white placeholder-slate-500 font-mono text-sm focus:outline-none"
          />
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
              ESC
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close command palette"
              className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Command Items List */}
        <div className="max-h-[400px] overflow-y-auto p-2 space-y-0.5">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 font-mono text-xs">
              No matching aerospace commands found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;
              const prevCat = idx > 0 ? filteredItems[idx - 1].category : null;
              const showCat = item.category !== prevCat;

              return (
                <React.Fragment key={item.id}>
                  {showCat && (
                    <div className="px-3 pt-2.5 pb-1 font-mono text-[9px] tracking-[0.18em] text-[#00A1FF]/70 uppercase">
                      {item.category}
                    </div>
                  )}
                  <div
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#00A1FF]/15 border border-[#00A1FF]/40 shadow-[0_0_15px_rgba(0,161,255,0.12)]'
                        : 'hover:bg-white/[0.03] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-2 rounded-lg border transition-colors shrink-0 ${
                          isSelected
                            ? 'bg-[#00A1FF]/20 border-[#00A1FF]/50 text-[#00A1FF]'
                            : 'bg-white/5 border-white/10 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-sans font-semibold text-sm text-white truncate">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10 shrink-0">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="font-mono text-[11px] text-slate-400 truncate">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 text-[#00A1FF] shrink-0 transition-transform ${
                        isSelected ? 'translate-x-0.5 opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                </React.Fragment>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-2.5 border-t border-white/10 bg-black/60 font-mono text-[10px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Execute</span>
            <span>ESC Close</span>
          </div>
          <div className="text-[#00A1FF] font-semibold tracking-wider">
            520 KM SSO · AEROGRID OS
          </div>
        </div>
      </div>
    </div>
  );
}
