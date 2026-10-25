"use client";

import React from "react";
import { ArrowRight, Square, Terminal, Zap } from "lucide-react";

export default function FooterCtaFrame() {
  const scrollToCalculator = () => {
    const el = document.getElementById("frame-calculator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="frame-footer"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-32 pb-12 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      {/* Big Center CTA Block */}
      <div className="my-auto text-center space-y-8 pointer-events-auto max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aerogrid-cyan/40 bg-aerogrid-cyan/10 text-aerogrid-cyan text-xs font-mono tracking-widest uppercase shadow-cyan-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan animate-pulse" />
          <span>START YOUR MISSION</span>
        </div>

        <h2 className="text-[clamp(3.5rem,8vw,8.5rem)] font-extrabold uppercase tracking-tight text-white leading-[0.92]">
          Get to orbit <br />
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Today
          </span>
        </h2>

        <p className="text-aerogrid-secondary text-base sm:text-xl font-light max-w-xl mx-auto leading-relaxed">
          Configure your satellite payload requirements, select your launch window, and receive a guaranteed fixed-price mission proposal.
        </p>

        {/* Glowing Square Icon Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={scrollToCalculator}
            className="group relative flex items-center gap-4 px-8 py-4 rounded-full border border-aerogrid-cyan/60 bg-black hover:bg-aerogrid-cyan hover:border-aerogrid-glow transition-all duration-300 shadow-cyan-glow"
          >
            <div className="w-4 h-4 rounded-sm border-2 border-aerogrid-cyan group-hover:border-black group-hover:bg-black transition-colors flex items-center justify-center">
              <Square className="w-2.5 h-2.5 text-aerogrid-cyan group-hover:text-black fill-current" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-white group-hover:text-black transition-colors">
              Design your mission
            </span>
            <ArrowRight className="w-4 h-4 text-aerogrid-cyan group-hover:text-black transition-colors group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Minimalist Aerospace Footer Links */}
      <div className="pointer-events-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-aerogrid-secondary">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-aerogrid-cyan" />
          <span className="text-white font-bold tracking-widest uppercase">
            AEROGRID OS
          </span>
          <span className="text-white/30">|</span>
          <span>ENDUROSAT INSPIRED ARCHITECTURE</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#frame-hero"
            className="hover:text-white transition-colors"
          >
            BACK TO TOP &uarr;
          </a>
          <span className="text-white/20">/</span>
          <span>LAT: 37.7749° N, LON: 122.4194° W</span>
          <span className="text-white/20">/</span>
          <span className="text-emerald-400">STATUS: NOMINAL</span>
        </div>
      </div>
    </footer>
  );
}
