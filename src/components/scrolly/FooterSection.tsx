"use client";

import React from "react";
import { projectConfig } from "@/config/projectConfig";
import {
  Code,
  Globe,
  Radio,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative border-t border-white/10 bg-black/90 backdrop-blur-xl px-6 md:px-16 py-16 text-xs font-mono text-aerogrid-secondary pointer-events-auto">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-aerogrid-cyan animate-pulse shadow-cyan-sm" />
              <span className="text-white font-bold text-base tracking-widest uppercase">
                {projectConfig.metadata.title}
              </span>
            </div>
            <p className="text-slate-400 font-sans text-sm max-w-md leading-relaxed">
              {projectConfig.metadata.description}
            </p>
            <div className="flex items-center gap-3 text-[11px] text-aerogrid-cyan">
              <Terminal className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURE // ENDUROSAT REVERSE-ENGINEERED</span>
            </div>
          </div>

          {/* Col 2: Telemetry Specifications */}
          <div className="space-y-2.5">
            <div className="text-white font-semibold uppercase tracking-wider text-[11px]">
              SYSTEM HEALTH
            </div>
            <div className="space-y-1.5 text-slate-400">
              <div>STATUS: <span className="text-emerald-400">{projectConfig.metadata.systemStatus}</span></div>
              <div>AVAILABILITY: <span className="text-white">{projectConfig.metadata.telemetryUptime}</span></div>
              <div>VERSION: <span className="text-white">{projectConfig.metadata.version}</span></div>
              <div>ENCRYPTION: <span className="text-aerogrid-cyan">AES-256-GCM / PQ</span></div>
            </div>
          </div>

          {/* Col 3: Constellation Specs */}
          <div className="space-y-2.5">
            <div className="text-white font-semibold uppercase tracking-wider text-[11px]">
              CONSTELLATION OPS
            </div>
            <div className="space-y-1.5 text-slate-400">
              <div>NODES ACTIVE: <span className="text-white">{projectConfig.metadata.activeNodes}</span></div>
              <div>BANDWIDTH: <span className="text-white">120 MBPS DUAL LINK</span></div>
              <div>BUS PROTOCOL: <span className="text-white">UNIVERSAL BUS V4</span></div>
              <div>GROUND STATIONS: <span className="text-aerogrid-amber">48 GLOBAL RELAYS</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} {projectConfig.metadata.title}. ALL AIRSPACE & ORBITAL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-emerald-400">● 60 FPS WEBGL ACTIVE</span>
            <span>LENIS GSAP SYNCED</span>
            <span className="text-aerogrid-cyan">ORBITAL WAYPOINTS 5/5</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
