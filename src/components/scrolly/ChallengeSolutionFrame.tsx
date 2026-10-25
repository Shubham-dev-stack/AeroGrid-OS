"use client";

import React from "react";

export default function ChallengeSolutionFrame() {
  return (
    <section
      id="frame-challenge-solution"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* The Challenge */}
        <div className="pointer-events-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-aerogrid-amber/40 bg-aerogrid-amber/10 text-aerogrid-amber text-xs font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-amber animate-pulse" />
            <span>The Challenge</span>
          </div>

          <h2 className="text-[clamp(2.2rem,4.5vw,4.8rem)] font-bold uppercase tracking-tight leading-[1.05] text-slate-300">
            Constellations are{" "}
            <span className="text-white font-extrabold underline decoration-aerogrid-amber/50 decoration-2 underline-offset-8">
              prohibitively expensive
            </span>
            , tailor-built, have tedious supply chains, and are risky to manage.
          </h2>

          <p className="text-aerogrid-secondary text-sm sm:text-base font-mono max-w-lg leading-relaxed">
            Legacy aerospace requires 24-36 months of bespoke qualification, custom hardware integration, and multi-million dollar engineering overhead per launch.
          </p>
        </div>

        {/* The Solution */}
        <div className="pointer-events-auto space-y-6 lg:border-l lg:border-white/10 lg:pl-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-aerogrid-cyan/40 bg-aerogrid-cyan/10 text-aerogrid-cyan text-xs font-mono tracking-widest uppercase shadow-cyan-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan animate-pulse" />
            <span>The Solution</span>
          </div>

          <h2 className="text-[clamp(2.2rem,4.5vw,4.8rem)] font-bold uppercase tracking-tight leading-[1.05] text-white">
            <span className="text-aerogrid-cyan font-extrabold">
              Standardized satellites
            </span>{" "}
            and autonomous operations enable highly profitable space data businesses.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-mono max-w-lg leading-relaxed">
            Off-the-shelf flight heritage micro-busses, pre-qualified sensor bays, and algorithmic flight governance reduce deployment timelines from years to months.
          </p>
        </div>
      </div>
    </section>
  );
}
