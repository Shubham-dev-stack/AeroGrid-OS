"use client";

import React, { useState } from "react";
import { ArrowDownRight, TrendingDown, Zap } from "lucide-react";

export default function CostComparisonFrame() {
  const [activeMode, setActiveMode] = useState<"aerogrid" | "traditional">("aerogrid");

  return (
    <section
      id="frame-comparison"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="space-y-16">
        {/* Top Header */}
        <div className="pointer-events-auto space-y-3 max-w-2xl">
          <div className="text-xs font-mono text-aerogrid-cyan uppercase tracking-widest flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-emerald-400" />
            <span>COST OF SPACE DATA DISRUPTION</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5.5vw,6rem)] font-extrabold uppercase tracking-tight text-white leading-none">
            Space Data <br />
            Democratized
          </h2>
        </div>

        {/* Big Typographic Comparison Row */}
        <div className="pointer-events-auto border-t border-b border-white/10 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Traditional Space Cost */}
            <div
              onClick={() => setActiveMode("traditional")}
              className={`p-8 md:p-12 rounded-3xl border transition-all cursor-pointer ${
                activeMode === "traditional"
                  ? "border-red-500/40 bg-red-500/[0.04]"
                  : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="text-xs font-mono text-red-400 uppercase tracking-widest mb-3">
                TRADITIONAL SPACE SERVICE
              </div>
              <div className="text-[clamp(3rem,6vw,6.5rem)] font-extrabold font-mono text-red-400/90 tracking-tight leading-none">
                3000 <span className="text-2xl md:text-3xl font-light text-slate-400">USD/GB</span>
              </div>
              <p className="text-slate-400 text-sm font-mono mt-4 leading-relaxed">
                Bespoke satellite procurement, manual ground passes, high insurance premiums, and unpredictable launch delays.
              </p>
            </div>

            {/* EnduroSat / AeroGrid OS Cost */}
            <div
              onClick={() => setActiveMode("aerogrid")}
              className={`p-8 md:p-12 rounded-3xl border transition-all cursor-pointer ${
                activeMode === "aerogrid"
                  ? "border-aerogrid-cyan bg-aerogrid-cyan/[0.05] shadow-cyan-glow"
                  : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="text-xs font-mono text-aerogrid-cyan uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>AEROGRID CONSTELATION OS</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                  99.97% LOWER COST
                </span>
              </div>
              <div className="text-[clamp(3.5rem,7vw,7.5rem)] font-extrabold font-mono text-white tracking-tight leading-none">
                1 <span className="text-2xl md:text-3xl font-light text-aerogrid-cyan">USD/GB</span>
              </div>
              <p className="text-slate-300 text-sm font-mono mt-4 leading-relaxed">
                Standardized modular bus, automated laser/cloud relay network, high payload duty cycles, and fixed all-inclusive subscription.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Metric Bar */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-aerogrid-secondary">
          <div>
            SUBSCRIPTION MODEL: <strong className="text-white">PAY FOR DATA DELIVERED</strong>
          </div>
          <div>
            SECURITY: <strong className="text-aerogrid-cyan">ZERO-TRUST END-TO-END</strong>
          </div>
          <div>
            SCALABILITY: <strong className="text-emerald-400">ON-DEMAND CONSTELLATION BURST</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
