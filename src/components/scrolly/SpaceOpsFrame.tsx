"use client";

import React, { useState } from "react";
import RazorText from "@/components/ui/RazorText";
import { Activity, ArrowUpRight, Globe, Radio, Server, Signal, Terminal, Wifi } from "lucide-react";

export default function SpaceOpsFrame() {
  const [activeTab, setActiveTab] = useState<"command" | "monitor" | "access">("command");

  return (
    <section
      id="frame-spaceops"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Cloud-Based Mission Ops Hub */}
        <div className="lg:col-span-6 pointer-events-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-aerogrid-cyan/40 bg-aerogrid-cyan/10 text-aerogrid-cyan text-xs font-mono tracking-widest uppercase shadow-cyan-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan animate-pulse" />
            <span>STAGE 04 // SPACE OPERATIONS</span>
          </div>

          <RazorText>
            <h2 className="text-[clamp(2.5rem,5.5vw,6rem)] font-extrabold uppercase tracking-tight text-white leading-[0.95]">
              Cloud-Based <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Mission Operations Hub
              </span>
            </h2>
          </RazorText>

          <RazorText delay={150}>
            <p className="text-aerogrid-secondary text-base sm:text-lg font-light max-w-xl leading-relaxed">
              Command your constellation with event-driven autonomous tasking. Direct cloud integrations route raw telemetry into your analytics pipeline.
            </p>
          </RazorText>

          {/* Operation Status Badges */}
          <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs">
            <div className="px-3.5 py-2 rounded-lg border border-white/10 bg-black/60 flex items-center gap-2">
              <Globe className="w-4 h-4 text-aerogrid-cyan" />
              <span>GROUND NETWORK: <strong>48 STATIONS</strong></span>
            </div>
            <div className="px-3.5 py-2 rounded-lg border border-white/10 bg-black/60 flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" />
              <span>PASS LATENCY: <strong>&lt; 18ms END-TO-END</strong></span>
            </div>
          </div>
        </div>

        {/* Right Side: Floating Glass Mission Control Console Overlay */}
        <div className="lg:col-span-6 lg:ml-auto w-full max-w-lg pointer-events-auto">
          <div className="p-8 rounded-2xl border border-white/15 bg-black/80 backdrop-blur-xl shadow-card-glass space-y-6 font-mono text-xs">
            {/* Header with Live Status */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold tracking-wider uppercase">SPACEOPS LIVE CONSOLE</span>
              </div>
              <span className="text-[11px] text-aerogrid-cyan">UTC 01:04:18</span>
            </div>

            {/* Active Passes & Ground Stations */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Signal className="w-4 h-4 text-aerogrid-cyan" />
                  <div>
                    <div className="text-white font-semibold">KSAT-SG34 (Svalbard)</div>
                    <div className="text-[10px] text-slate-400">AOS in 04m 12s | Elevation 68°</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-aerogrid-cyan/20 text-aerogrid-cyan font-bold text-[10px]">
                  SCHEDULED
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Radio className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-white font-semibold">EAGLE-1 (North America)</div>
                    <div className="text-[10px] text-slate-400">ACTIVE DOWNLINK | 120 Mbps</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                  DOWNLINKING
                </span>
              </div>
            </div>

            {/* Event-driven Task Queue */}
            <div className="border-t border-white/10 pt-4 space-y-2">
              <div className="text-[10px] text-aerogrid-secondary uppercase">
                AUTONOMOUS FLEET TASK QUEUE
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                  <div className="text-slate-400">TASK #1492</div>
                  <div className="text-white font-semibold">Thermal Area Scan</div>
                </div>
                <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                  <div className="text-slate-400">TASK #1493</div>
                  <div className="text-white font-semibold">Laser Crosslink Hop</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
