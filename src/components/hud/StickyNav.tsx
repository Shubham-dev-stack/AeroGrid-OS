"use client";

import React, { useEffect, useState } from "react";
import { projectConfig } from "@/config/projectConfig";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Activity, Clock, Navigation, Radio, Terminal, Zap } from "lucide-react";

const STAGES = [
  { id: "hero", index: "01", label: "OVERVIEW", anchor: "#section-hero" },
  { id: "lifecycle", index: "02", label: "LIFECYCLE", anchor: "#section-lifecycle" },
  { id: "payloads", index: "03", label: "PAYLOADS", anchor: "#section-payloads" },
  { id: "telemetry", index: "04", label: "TELEMETRY", anchor: "#section-telemetry" },
  { id: "calculator", index: "05", label: "CALCULATOR", anchor: "#section-calculator" },
];

export default function StickyNav() {
  const progress = useScrollProgress();
  const [utcTime, setUtcTime] = useState("");

  // Live UTC Aerospace Mission Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const iso = now.toISOString().substring(11, 19);
      setUtcTime(`${iso} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Determine active stage based on progress
  let activeIndex = 0;
  if (progress >= 0.82) activeIndex = 4;
  else if (progress >= 0.62) activeIndex = 3;
  else if (progress >= 0.38) activeIndex = 2;
  else if (progress >= 0.16) activeIndex = 1;
  else activeIndex = 0;

  const handleStageClick = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Header Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto bg-black/75 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-7 h-7 rounded border border-aerogrid-cyan/60 bg-aerogrid-cyan/10 shadow-cyan-sm">
              <Zap className="w-4 h-4 text-aerogrid-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-widest text-white uppercase">
                {projectConfig.metadata.title}
              </span>
              <span className="text-[10px] font-mono text-aerogrid-cyan tracking-wider">
                AUTONOMOUS MISSION FLEET OS
              </span>
            </div>
            <span className="hidden lg:inline-flex items-center gap-1.5 ml-3 px-2 py-0.5 rounded border border-aerogrid-cyan/30 text-aerogrid-cyan bg-aerogrid-cyan/10 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan animate-pulse" />
              {projectConfig.metadata.badge}
            </span>
          </div>

          {/* Center Stage Quick Nav (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 border border-white/10 bg-aerogrid-surface/80 rounded-lg p-1 font-mono text-xs">
            {STAGES.map((stage, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleStageClick(stage.anchor)}
                  className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-aerogrid-cyan text-black font-semibold shadow-cyan-sm"
                      : "text-aerogrid-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="opacity-70 text-[10px]">{stage.index}</span>
                  <span>{stage.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right System Telemetry Status */}
          <div className="flex items-center gap-4 font-mono text-xs">
            <div className="hidden xl:flex items-center gap-2 text-aerogrid-secondary">
              <Clock className="w-3.5 h-3.5 text-aerogrid-cyan" />
              <span className="text-white font-medium">{utcTime || "00:00:00 UTC"}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{projectConfig.metadata.systemStatus}</span>
            </div>

            <button
              onClick={() => handleStageClick("#section-calculator")}
              className="px-4 py-1.5 rounded border border-aerogrid-cyan/80 bg-aerogrid-cyan text-black font-semibold tracking-wider hover:bg-aerogrid-glow transition-all shadow-cyan-sm text-xs font-mono"
            >
              DEPLOY MISSION
            </button>
          </div>
        </div>

        {/* Global Progress Line Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-aerogrid-border">
          <div
            className="h-full bg-gradient-to-r from-aerogrid-cyan via-aerogrid-glow to-aerogrid-amber transition-all duration-75"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      </header>

      {/* Floating Bottom Mission Telemetry Tracker (Dock) */}
      <aside className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto hidden md:flex items-center gap-6 px-6 py-2.5 rounded-full border border-white/10 bg-black/80 backdrop-blur-xl shadow-card-glass text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-aerogrid-secondary uppercase text-[10px]">MISSION PROGRESS:</span>
          <span className="text-aerogrid-cyan font-bold">{Math.round(progress * 100)}%</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="flex items-center gap-2">
          <span className="text-aerogrid-secondary uppercase text-[10px]">ACTIVE STAGE:</span>
          <span className="text-white font-semibold">{STAGES[activeIndex].label}</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="flex items-center gap-2">
          <span className="text-aerogrid-secondary uppercase text-[10px]">NODES ONLINE:</span>
          <span className="text-emerald-400 font-bold">{projectConfig.metadata.activeNodes}</span>
        </div>
      </aside>
    </>
  );
}
