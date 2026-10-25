"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Clock, ShieldCheck } from "lucide-react";

export default function TwoStepsTimelineFrame() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section
      id="frame-timeline"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="space-y-16">
        {/* Top Tagline */}
        <div className="pointer-events-auto max-w-2xl space-y-3">
          <div className="text-xs font-mono text-aerogrid-cyan uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan" />
            <span>TWO SIMPLE STEPS TO ORBIT</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold uppercase tracking-tight text-white leading-none">
            From Requirements <br />
            To Live Constellation
          </h2>
        </div>

        {/* Minimalist Horizontal Timeline Architecture */}
        <div className="pointer-events-auto border-t border-b border-white/10 py-12">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Step 01 */}
            <div
              onClick={() => setActiveTab(1)}
              className={`md:col-span-4 p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 1
                  ? "border-aerogrid-cyan bg-white/[0.04] shadow-cyan-sm"
                  : "border-transparent hover:border-white/10"
              }`}
            >
              <div className="text-4xl md:text-6xl font-mono font-bold text-aerogrid-cyan">
                01
              </div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mt-3">
                Define your requirements
              </h3>
              <p className="text-aerogrid-secondary text-sm mt-2 font-mono leading-relaxed">
                Specify sensor resolution, target revisit frequency, orbital plane, and downlink bandwidth requirements.
              </p>
            </div>

            {/* Center Timeline Connector */}
            <div className="md:col-span-4 px-4 space-y-4 text-center">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                IN JUST 6 MONTHS
              </div>

              {/* Progress Line Bar */}
              <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-aerogrid-cyan via-aerogrid-glow to-aerogrid-amber rounded-full" />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-aerogrid-secondary">
                <span>MONTH 0 (MATING)</span>
                <span className="text-aerogrid-cyan font-bold">MONTH 3 (AIT)</span>
                <span>MONTH 6 (DATA OPS)</span>
              </div>
            </div>

            {/* Step 02 */}
            <div
              onClick={() => setActiveTab(2)}
              className={`md:col-span-4 p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 2
                  ? "border-aerogrid-cyan bg-white/[0.04] shadow-cyan-sm"
                  : "border-transparent hover:border-white/10"
              }`}
            >
              <div className="text-4xl md:text-6xl font-mono font-bold text-aerogrid-amber">
                02
              </div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mt-3">
                Receive your data
              </h3>
              <p className="text-aerogrid-secondary text-sm mt-2 font-mono leading-relaxed">
                Autonomous downlink to global ground stations directly into your AWS, GCP, or private server endpoints.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom SLA Indicators */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-aerogrid-secondary">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>FLIGHT PROVEN: <strong className="text-white">AS9100 QUALIFIED</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-aerogrid-cyan" />
            <span>DOWNLINK LATENCY: <strong className="text-white">&lt; 15 MINUTES</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-aerogrid-amber" />
            <span>GUARANTEE: <strong className="text-white">FIXED DELIVERY DATE</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
