"use client";

import React from "react";
import RazorText from "@/components/ui/RazorText";
import { ArrowDown } from "lucide-react";
import { scrollToProgress } from "@/lib/scrollStore";

export default function HeroFrame() {
  const scrollToCalculator = () => {
    scrollToProgress(0.86);
  };

  return (
    <section
      id="frame-hero"
      className="relative h-full flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-28 pb-12 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      {/* Top Status Pill */}
      <div className="pointer-events-auto">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-aerogrid-cyan/40 bg-aerogrid-cyan/10 backdrop-blur-md text-aerogrid-cyan text-xs font-mono tracking-wider shadow-cyan-sm">
          <span className="w-2 h-2 rounded-full bg-aerogrid-cyan animate-pulse" />
          <span className="font-semibold uppercase tracking-widest">
            Fixed Cost. Quick Access to Orbit
          </span>
        </div>
      </div>

      {/* Massive Display Typography with Invisible Razor Mask */}
      <div className="my-auto py-6 space-y-6 pointer-events-auto max-w-4xl">
        <RazorText>
          <h1 className="text-[clamp(2.8rem,7vw,7.5rem)] font-extrabold uppercase tracking-tight leading-[0.92] text-white">
            Space Missions <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
        </RazorText>

        <RazorText delay={120}>
          <p className="text-aerogrid-secondary text-base sm:text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
            Standardized satellite bus architecture, autonomous swarm coordination, and guaranteed fixed turnkey delivery.
          </p>
        </RazorText>
      </div>

      {/* Bottom Floating Technical Button */}
      <div className="pointer-events-auto flex items-center justify-between border-t border-white/10 pt-6">
        <button
          onClick={scrollToCalculator}
          className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-black/60 hover:border-aerogrid-cyan hover:bg-aerogrid-cyan/10 backdrop-blur-md transition-all text-xs font-mono tracking-widest uppercase text-white shadow-card-glass cursor-pointer"
        >
          <span>Design your mission</span>
          <div className="w-6 h-6 rounded-full bg-aerogrid-cyan/20 group-hover:bg-aerogrid-cyan flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-aerogrid-cyan group-hover:text-black transition-colors" />
          </div>
        </button>

        <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono text-aerogrid-secondary">
          <span>ORBIT: <strong className="text-white">520 KM SSO</strong></span>
          <span>FLIGHT MODEL: <strong className="text-aerogrid-cyan">GEN-4 MICRO-BUS</strong></span>
          <span>UPTIME: <strong className="text-emerald-400">99.99%</strong></span>
        </div>
      </div>
    </section>
  );
}
