"use client";

import React, { useMemo, useState } from "react";
import { calculateMissionSpecs, projectConfig } from "@/config/projectConfig";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock,
  DollarSign,
  HelpCircle,
  Layers,
  Rocket,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  Zap,
} from "lucide-react";

export default function MissionCalculator() {
  // sliderProgress goes from 0.0 (maximum revisit frequency / fastest response) to 1.0 (minimum frequency)
  const [sliderVal, setSliderVal] = useState<number>(0.35);

  const specs = useMemo(() => {
    return calculateMissionSpecs(sliderVal);
  }, [sliderVal]);

  return (
    <section
      id="section-calculator"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 max-w-7xl mx-auto pointer-events-auto"
    >
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-aerogrid-cyan uppercase tracking-widest">
            <Calculator className="w-4 h-4 text-aerogrid-cyan" />
            <span>WAYPOINT 05 // MISSION MODELING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            Algorithmic Mission Calculator
          </h2>
          <p className="text-aerogrid-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Configure target revisit frequency. The reverse-engineered exponential curve computes optimal constellation size and turnkey procurement cost.
          </p>
        </div>

        {/* Master Calculator Card */}
        <div className="p-8 md:p-12 rounded-2xl border border-aerogrid-border bg-black/85 backdrop-blur-xl hud-corner-tl hud-corner-br shadow-card-glass space-y-8">
          {/* 3 Metric Value Display Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* 1. Revisit Latency */}
            <div className="p-6 rounded-xl border border-white/10 bg-aerogrid-surface/90 relative overflow-hidden">
              <div className="text-xs font-mono text-aerogrid-secondary uppercase flex items-center justify-between">
                <span>REVISIT FREQUENCY</span>
                <Clock className="w-3.5 h-3.5 text-aerogrid-amber" />
              </div>
              <div className="text-4xl md:text-5xl font-mono font-bold text-aerogrid-amber mt-2 tracking-tight">
                {specs.revisitDisplay}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-2">
                Dynamic Temporal Cadence
              </div>
            </div>

            {/* 2. Units / Node Count */}
            <div className="p-6 rounded-xl border border-white/10 bg-aerogrid-surface/90 relative overflow-hidden">
              <div className="text-xs font-mono text-aerogrid-secondary uppercase flex items-center justify-between">
                <span>FLEET CONSTELLATION</span>
                <Layers className="w-3.5 h-3.5 text-aerogrid-cyan" />
              </div>
              <div className="text-4xl md:text-5xl font-mono font-bold text-white mt-2 tracking-tight">
                {specs.unitsCount}
              </div>
              <div className="text-[11px] font-mono text-aerogrid-cyan mt-2">
                Active Coordinated {projectConfig.pricing.unitName}
              </div>
            </div>

            {/* 3. Total Mission Cost */}
            <div className="p-6 rounded-xl border border-white/10 bg-aerogrid-surface/90 relative overflow-hidden">
              <div className="text-xs font-mono text-aerogrid-secondary uppercase flex items-center justify-between">
                <span>TOTAL CAPITAL COST</span>
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-4xl md:text-5xl font-mono font-bold text-emerald-400 mt-2 tracking-tight">
                ${specs.totalCostMillions}M
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-2">
                Fixed Turnkey Deployment
              </div>
            </div>
          </div>

          {/* Interactive Revisit Slider */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white uppercase font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-aerogrid-cyan" />
                ADJUST REVISIT LATENCY PARAMETER (EXPONENTIAL 4TH CURVE)
              </span>
              <span className="text-aerogrid-cyan font-bold">
                PROGRESS: {(sliderVal * 100).toFixed(0)}%
              </span>
            </div>

            {/* Custom Range Slider */}
            <div className="relative py-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.005"
                value={sliderVal}
                onChange={(e) => setSliderVal(parseFloat(e.target.value))}
                className="w-full h-3 bg-aerogrid-surface rounded-lg appearance-none cursor-pointer accent-aerogrid-cyan border border-white/10 focus:outline-none focus:ring-2 focus:ring-aerogrid-cyan"
              />
            </div>

            {/* Slider Legend */}
            <div className="flex items-center justify-between text-[11px] font-mono text-aerogrid-secondary">
              <span className="flex items-center gap-1 text-aerogrid-amber">
                &larr; Rapid Revisit (1M – 10M, Large Swarm)
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                Sparse Pass (24H – 48H, Lean Fleet) &rarr;
              </span>
            </div>
          </div>

          {/* Cost Comparison: Traditional vs AeroGrid Autonomous */}
          <div className="p-6 rounded-xl border border-white/10 bg-black/60 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-aerogrid-secondary uppercase">
                OPERATIONAL COST DISRUPTION (PER FLIGHT HOUR)
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                98.2% COST REDUCTION
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
              <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
                <div className="text-xs text-red-400/80 uppercase">Traditional Aircraft / Crew</div>
                <div className="text-2xl font-bold text-red-400 mt-1">
                  {projectConfig.pricing.traditionalCostComparison}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  High fuel, pilot fatigue, maintenance overhead
                </div>
              </div>

              <div className="p-4 rounded-lg border border-aerogrid-cyan/40 bg-aerogrid-cyan/10">
                <div className="text-xs text-aerogrid-cyan uppercase">AeroGrid Autonomous Fleet</div>
                <div className="text-2xl font-bold text-white mt-1">
                  {projectConfig.pricing.platformCostComparison}
                </div>
                <div className="text-[10px] text-emerald-400 mt-1">
                  Automated electric swarm, solar recharge, zero crew
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Manifest CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="text-xs font-mono text-aerogrid-secondary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{projectConfig.pricing.slaGuaranteed}</span>
            </div>

            <button
              onClick={() => alert(`Mission Configured:\nUnits: ${specs.unitsCount}\nRevisit: ${specs.revisitDisplay}\nEst. Budget: $${specs.totalCostMillions}M\nManifest Generated.`)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-aerogrid-cyan text-black font-semibold text-sm font-mono tracking-wider uppercase hover:bg-aerogrid-glow transition-all shadow-cyan-glow flex items-center justify-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              <span>DEPLOY MISSION FLEET</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
