"use client";

import React from "react";
import RazorText from "@/components/ui/RazorText";
import { Check, Cpu, Layers, ShieldCheck, Wrench } from "lucide-react";

export default function BlueprintAitFrame() {
  return (
    <section
      id="frame-ait"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Massive Razor Typography */}
        <div className="lg:col-span-6 pointer-events-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-aerogrid-cyan/40 bg-aerogrid-cyan/10 text-aerogrid-cyan text-xs font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan animate-pulse" />
            <span>STAGE 02 // AIT QUALIFICATION</span>
          </div>

          <RazorText>
            <h2 className="text-[clamp(2.5rem,5.5vw,6rem)] font-extrabold uppercase tracking-tight text-white leading-[0.95]">
              Payload Integration <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                & Space Qualification
              </span>
            </h2>
          </RazorText>

          <RazorText delay={150}>
            <p className="text-aerogrid-secondary text-base sm:text-lg font-light max-w-xl leading-relaxed">
              Disassembled modular avionics boards and solar arrays tested under rigorous space environments before fairing mating.
            </p>
          </RazorText>

          {/* Qualification Badges */}
          <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs">
            <div className="px-3.5 py-2 rounded-lg border border-white/10 bg-black/60 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-aerogrid-cyan" />
              <span>TVAC THERMAL VACUUM: <strong>PASS</strong></span>
            </div>
            <div className="px-3.5 py-2 rounded-lg border border-white/10 bg-black/60 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-emerald-400" />
              <span>RANDOM VIBRATION: <strong>14.2 Grms</strong></span>
            </div>
          </div>
        </div>

        {/* Right Side: CAD Exploded Blueprint Inspection Card */}
        <div className="lg:col-span-6 lg:ml-auto w-full max-w-lg pointer-events-auto">
          <div className="p-8 rounded-2xl border border-aerogrid-cyan/30 bg-black/80 backdrop-blur-xl shadow-cyan-sm space-y-6 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-white font-bold uppercase tracking-wider">
                CAD EXPLODED HARNESS MANIFEST
              </span>
              <span className="text-aerogrid-cyan text-[11px]">ISO-7 CLEANROOM</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">01. Central Avionics Core</span>
                <span className="text-white font-semibold">Dual ARM Cortex-R5</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">02. Triple-Junction Solar Array</span>
                <span className="text-aerogrid-cyan font-semibold">32.2% Efficiency</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">03. High-Rate X-Band Transmitter</span>
                <span className="text-white font-semibold">120 Mbps Downlink</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">04. Reaction Wheels & Magnetorquers</span>
                <span className="text-emerald-400 font-semibold">&lt; 0.015° Pointing</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-aerogrid-secondary border-t border-white/10 flex items-center justify-between">
              <span>INTERFACE: AEROGRID BUS V4</span>
              <span className="text-aerogrid-amber">SWAP-C OPTIMIZED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
