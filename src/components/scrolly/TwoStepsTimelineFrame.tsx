"use client";

import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function TwoStepsTimelineFrame() {
  const progress = useScrollProgress();

  // Progress relative to this frame (~0.35 to 0.55)
  const fillProgress = Math.max(0, Math.min(1, (progress - 0.35) / 0.18));
  const currentMonth = (fillProgress * 6).toFixed(1);

  return (
    <section
      id="frame-timeline"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="space-y-16">
        {/* Massive Center Headline over Earth */}
        <div className="pointer-events-auto text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-[clamp(2.8rem,7vw,7.5rem)] font-extrabold uppercase tracking-tight text-white leading-[0.92]">
            Your Mission in <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Two Steps
            </span>
          </h2>
        </div>

        {/* Timeline Bar: IN JUST 6 MONTHS */}
        <div className="pointer-events-auto max-w-3xl mx-auto w-full space-y-4">
          <div className="text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
              In Just 6 Months
            </span>
          </div>

          {/* Horizontal Progress Bar */}
          <div className="relative w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-aerogrid-cyan to-aerogrid-glow rounded-full transition-all duration-150 shadow-cyan-glow"
              style={{ width: `${Math.round(fillProgress * 100)}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="text-aerogrid-cyan font-bold">0 MONTHS</span>
            <span className="text-white font-semibold">
              MONTH {currentMonth} / 6
            </span>
            <span className="text-aerogrid-cyan font-bold">6 MONTHS</span>
          </div>
        </div>

        {/* 2 Big Steps Columns */}
        <div className="pointer-events-auto grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto w-full border-t border-white/10 pt-12">
          {/* Step 01 */}
          <div className="space-y-3">
            <div className="text-5xl md:text-7xl font-extrabold font-mono text-aerogrid-cyan leading-none">
              01
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
              Define <br />
              Your Requirements
            </h3>
            <p className="text-aerogrid-secondary text-sm md:text-base font-light leading-relaxed pt-2">
              Select your payload sensors, revisit cadence, and orbit plane. Our engineering team prepares your mission design in under 48 hours.
            </p>
          </div>

          {/* Step 02 */}
          <div className="space-y-3 md:border-l md:border-white/10 md:pl-12">
            <div className="text-5xl md:text-7xl font-extrabold font-mono text-aerogrid-amber leading-none">
              02
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
              Receive <br />
              Your Data
            </h3>
            <p className="text-aerogrid-secondary text-sm md:text-base font-light leading-relaxed pt-2">
              Automated space downlink to global ground relays directly to your cloud API with deterministic payload delivery guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
