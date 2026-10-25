"use client";

import React from "react";
import { projectConfig } from "@/config/projectConfig";
import {
  ArrowDown,
  ChevronRight,
  Cpu,
  Layers,
  Radio,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="section-hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-28 pb-16 max-w-7xl mx-auto pointer-events-auto"
    >
      <div className="max-w-3xl space-y-7">
        {/* Top Operational Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-aerogrid-cyan/40 bg-aerogrid-cyan/10 backdrop-blur-md text-aerogrid-cyan text-xs font-mono tracking-wider shadow-cyan-sm">
          <span className="w-2 h-2 rounded-full bg-aerogrid-cyan animate-ping" />
          <span className="font-semibold">{projectConfig.metadata.badge}</span>
          <span className="text-white/30">|</span>
          <span className="text-slate-300">{projectConfig.metadata.tagline}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[1.05] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          {projectConfig.metadata.headline}
        </h1>

        {/* Subtitle / Description */}
        <p className="text-aerogrid-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-sans font-normal">
          {projectConfig.metadata.description}
        </p>

        {/* Quick Aerospace Metric Badges */}
        <div className="flex flex-wrap gap-3 pt-1">
          <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/60 backdrop-blur-md flex items-center gap-2 font-mono text-xs">
            <Cpu className="w-3.5 h-3.5 text-aerogrid-cyan" />
            <span className="text-aerogrid-secondary">Scramble:</span>
            <span className="text-white font-semibold">&lt; 180s Takeoff</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/60 backdrop-blur-md flex items-center gap-2 font-mono text-xs">
            <Radio className="w-3.5 h-3.5 text-aerogrid-amber" />
            <span className="text-aerogrid-secondary">Latency:</span>
            <span className="text-white font-semibold">&lt; 18ms Real-Time</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/60 backdrop-blur-md flex items-center gap-2 font-mono text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-aerogrid-secondary">Reliability:</span>
            <span className="text-white font-semibold">{projectConfig.metadata.telemetryUptime}</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="pt-3 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollToSection("section-calculator")}
            className="group px-7 py-3.5 rounded-lg bg-aerogrid-cyan text-black font-semibold text-sm font-mono tracking-wider uppercase hover:bg-aerogrid-glow transition-all shadow-cyan-glow flex items-center gap-2"
          >
            <span>DESIGN MISSION</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollToSection("section-telemetry")}
            className="px-7 py-3.5 rounded-lg border border-aerogrid-border bg-black/60 hover:border-aerogrid-cyan/80 hover:bg-aerogrid-cyan/5 text-white font-mono text-sm tracking-wider uppercase transition-all backdrop-blur-md"
          >
            LIVE TELEMETRY
          </button>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="mt-auto pt-16 flex items-center justify-between text-xs font-mono text-aerogrid-secondary border-t border-white/10">
        <button
          onClick={() => scrollToSection("section-lifecycle")}
          className="flex items-center gap-3 hover:text-aerogrid-cyan transition-colors"
        >
          <ArrowDown className="w-4 h-4 text-aerogrid-cyan animate-bounce" />
          <span className="tracking-widest">SCROLL TO INSPECT FLIGHT SUBSYSTEMS</span>
        </button>

        <div className="hidden sm:flex items-center gap-4">
          <span>LAT: <strong className="text-white">37.7749° N</strong></span>
          <span>LON: <strong className="text-white">122.4194° W</strong></span>
          <span>ALT: <strong className="text-aerogrid-cyan">520 KM LEO</strong></span>
        </div>
      </div>
    </section>
  );
}
