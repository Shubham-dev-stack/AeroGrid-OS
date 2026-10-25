"use client";

import React, { useState } from "react";
import { projectConfig, PayloadConfig } from "@/config/projectConfig";
import {
  BatteryCharging,
  Check,
  CheckCircle2,
  Crosshair,
  Gauge,
  Radio,
  Scan,
  Sparkles,
  Weight,
  Zap,
} from "lucide-react";

export default function PayloadSelector() {
  const [selectedPayloadId, setSelectedPayloadId] = useState<string>("thermal");

  const currentPayload =
    projectConfig.payloads.find((p) => p.id === selectedPayloadId) ||
    projectConfig.payloads[0];

  return (
    <section
      id="section-payloads"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 max-w-7xl mx-auto pointer-events-auto"
    >
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Mission Bay Overview & Specs Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-aerogrid-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan" />
              <span>WAYPOINT 03 // MODULAR PAYLOADS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Standardized Sensor Architecture
            </h2>
            <p className="text-aerogrid-secondary text-sm md:text-base leading-relaxed">
              Equip swarms with modular intelligence packages. Hot-pluggable interfaces conform to the AeroGrid Universal Bus v4 standard.
            </p>
          </div>

          {/* Active Payload Detail Card */}
          <div className="p-6 md:p-8 rounded-2xl border border-aerogrid-cyan/40 bg-aerogrid-surface/90 backdrop-blur-xl shadow-cyan-sm space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-aerogrid-secondary uppercase">
                  ACTIVE MODULE
                </span>
                <div className="text-xl font-bold text-white uppercase tracking-tight">
                  {currentPayload.name}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-aerogrid-cyan px-2.5 py-1 rounded bg-aerogrid-cyan/15 border border-aerogrid-cyan/30">
                  {currentPayload.tag}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentPayload.desc}
            </p>

            {/* Hardware Constraints (Weight & Power) */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg border border-white/10 bg-black/60 flex items-center gap-3 font-mono">
                <Weight className="w-4 h-4 text-aerogrid-cyan" />
                <div>
                  <div className="text-[10px] text-aerogrid-secondary">PAYLOAD MASS</div>
                  <div className="text-sm font-bold text-white">{currentPayload.weightKg} kg</div>
                </div>
              </div>
              <div className="p-3 rounded-lg border border-white/10 bg-black/60 flex items-center gap-3 font-mono">
                <BatteryCharging className="w-4 h-4 text-aerogrid-amber" />
                <div>
                  <div className="text-[10px] text-aerogrid-secondary">AVG POWER DRAW</div>
                  <div className="text-sm font-bold text-white">{currentPayload.powerWatts} W</div>
                </div>
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-aerogrid-secondary uppercase tracking-wider">
                SUBSYSTEM CAPABILITIES
              </div>
              <div className="grid grid-cols-1 gap-2">
                {currentPayload.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-slate-300 font-mono"
                  >
                    <Check className="w-3.5 h-3.5 text-aerogrid-cyan flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 4-Module Selector Grid */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projectConfig.payloads.map((payload) => {
              const isSelected = payload.id === selectedPayloadId;
              return (
                <button
                  key={payload.id}
                  onClick={() => setSelectedPayloadId(payload.id)}
                  className={`p-6 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                    isSelected
                      ? "border-aerogrid-cyan bg-black/80 shadow-cyan-glow"
                      : "border-white/10 bg-black/50 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  {/* Subtle active glow indicator */}
                  {isSelected && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-aerogrid-cyan/15 rounded-full blur-2xl pointer-events-none" />
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-aerogrid-cyan">
                      {payload.tag}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                        isSelected
                          ? "bg-aerogrid-cyan text-black font-semibold"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {isSelected ? "ENGAGED" : "AVAILABLE"}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-aerogrid-glow transition-colors">
                    {payload.name}
                  </h3>

                  <p className="text-xs text-aerogrid-secondary mt-2 line-clamp-3 leading-relaxed">
                    {payload.desc}
                  </p>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-aerogrid-secondary">
                    <span>{payload.weightKg} kg</span>
                    <span className="text-aerogrid-cyan">{payload.powerWatts} W</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bus Interface Standard Banner */}
          <div className="p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-aerogrid-secondary">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-aerogrid-cyan" />
              <span>INTERFACE: <strong className="text-white">AeroGrid Universal Bus v4</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-emerald-400" />
              <span>HOT-SWAP: <strong className="text-white">&lt; 12 MINUTES</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
