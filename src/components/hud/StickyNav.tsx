"use client";

import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ArrowRight, Square, Zap } from "lucide-react";

export default function StickyNav() {
  const progress = useScrollProgress();

  const scrollToCalculator = () => {
    const el = document.getElementById("frame-calculator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto bg-black/60 backdrop-blur-xl border-b border-white/10 px-6 md:px-16 lg:px-24 py-4 transition-all">
      <div className="max-w-[1700px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#frame-hero" className="flex items-center gap-3 group">
          <div className="w-2.5 h-2.5 rounded-full bg-aerogrid-cyan animate-pulse shadow-cyan-sm" />
          <span className="font-mono text-sm font-bold tracking-widest text-white uppercase group-hover:text-aerogrid-glow transition-colors">
            AEROGRID
          </span>
          <span className="text-[10px] font-mono text-aerogrid-cyan border border-aerogrid-cyan/30 px-2 py-0.5 rounded-full bg-aerogrid-cyan/10 hidden sm:inline-block">
            SPACE SERVICE
          </span>
        </a>

        {/* Right CTA Button */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <span className="hidden md:inline-block text-[11px] text-aerogrid-secondary">
            PROGRESS: <strong className="text-white">{Math.round(progress * 100)}%</strong>
          </span>

          <button
            onClick={scrollToCalculator}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/[0.04] hover:border-aerogrid-cyan hover:bg-aerogrid-cyan hover:text-black transition-all text-xs font-mono uppercase tracking-wider text-white"
          >
            <Square className="w-2 h-2 text-aerogrid-cyan group-hover:text-black fill-current transition-colors" />
            <span>Design your mission</span>
          </button>
        </div>
      </div>

      {/* Thin Bottom Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-aerogrid-cyan via-aerogrid-glow to-aerogrid-amber transition-all duration-75"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
    </header>
  );
}
