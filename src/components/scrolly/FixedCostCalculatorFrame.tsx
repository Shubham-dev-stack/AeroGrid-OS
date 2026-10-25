"use client";

import React, { useMemo, useState } from "react";
import { calculateMissionSpecs } from "@/config/projectConfig";
import { ArrowDown, DollarSign, Layers, Rocket } from "lucide-react";

export default function FixedCostCalculatorFrame() {
  // sliderVal in [0, 1]
  const [sliderVal, setSliderVal] = useState<number>(0.38);

  const specs = useMemo(() => {
    return calculateMissionSpecs(sliderVal);
  }, [sliderVal]);

  return (
    <section
      id="frame-calculator"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="space-y-16">
        {/* Top Header */}
        <div className="pointer-events-auto text-center space-y-3 max-w-3xl mx-auto">
          <div className="text-xs font-mono text-aerogrid-cyan uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan" />
            <span>FIXED COST CONSTELATION MODEL</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5.5vw,6rem)] font-extrabold uppercase tracking-tight text-white leading-none">
            Calculate Your Mission
          </h2>
          <p className="text-aerogrid-secondary text-sm md:text-base font-mono">
            Adjust target revisit latency to calculate constellation count and guaranteed turnkey deployment budget.
          </p>
        </div>

        {/* 3-Column EnduroSat Calculator Layout: Massive Left & Right Numbers */}
        <div className="pointer-events-auto border-t border-b border-white/10 py-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Massive Satellites Number */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-1">
              <div className="text-[clamp(3.8rem,8vw,7.5rem)] font-extrabold font-mono text-white tracking-tight leading-none">
                {specs.unitsCount}
              </div>
              <div className="text-xs font-mono text-aerogrid-cyan tracking-widest uppercase font-semibold">
                SATELLITES
              </div>
            </div>

            {/* Center: Custom Range Slider with Revisit Display */}
            <div
              data-cursor="drag"
              className="lg:col-span-4 px-4 py-6 space-y-6 text-center cursor-grab active:cursor-grabbing"
            >
              <div className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md">
                <span className="text-xs font-mono text-slate-300">
                  Revisit time:{" "}
                  <strong className="text-aerogrid-amber text-sm font-bold ml-1">
                    {specs.revisitDisplay}
                  </strong>
                </span>
              </div>

              {/* Minimalist Range Track */}
              <div className="relative py-2">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.005"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-aerogrid-cyan border border-white/10 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-aerogrid-secondary">
                <span className="text-aerogrid-amber">&larr; Continuous (1M)</span>
                <span>Sparse (48H) &rarr;</span>
              </div>
            </div>

            {/* Right: Massive Total Cost Number */}
            <div className="lg:col-span-4 text-center lg:text-right space-y-1">
              <div className="text-[clamp(3.8rem,8vw,7.5rem)] font-extrabold font-mono text-aerogrid-cyan tracking-tight leading-none">
                ${specs.totalCostMillions}M
              </div>
              <div className="text-xs font-mono text-slate-400 tracking-widest uppercase font-semibold">
                TOTAL MISSION COST
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Turnkey Guarantee Bar */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-aerogrid-secondary">
          <div>
            UNIT BASE PRICE: <strong className="text-white">$0.6M FIXED</strong>
          </div>
          <div>
            LAUNCH INTEGRATION: <strong className="text-emerald-400">INCLUDED</strong>
          </div>
          <div>
            OPERATIONS & DOWNLINK: <strong className="text-aerogrid-cyan">ALL-INCLUSIVE</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
