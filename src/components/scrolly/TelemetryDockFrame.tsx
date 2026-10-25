"use client";

import React, { useEffect, useState } from "react";
import { Activity, Radio, Wifi, Zap } from "lucide-react";

export default function TelemetryDockFrame() {
  const [chargeRate, setChargeRate] = useState("4.2A");
  const [dod, setDod] = useState(30);
  const [dataRate, setDataRate] = useState("100 Mbps");
  const [txPower, setTxPower] = useState("30 dBm");

  // Subtle real-time orbital telemetry jitter
  useEffect(() => {
    const interval = setInterval(() => {
      const cr = (4.2 + (Math.random() - 0.5) * 0.15).toFixed(1);
      setChargeRate(`${cr}A`);

      const dodVal = Math.round(30 + (Math.random() - 0.5) * 2);
      setDod(dodVal);

      const dr = Math.round(100 + (Math.random() - 0.5) * 4);
      setDataRate(`${dr} Mbps`);

      const tx = (30 + (Math.random() - 0.5) * 0.3).toFixed(1);
      setTxPower(`${tx} dBm`);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="frame-telemetry"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Cinematic Title */}
        <div className="lg:col-span-6 pointer-events-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-aerogrid-cyan uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan animate-pulse" />
            <span>ORBITAL FLIGHT DYNAMICS</span>
          </div>

          <h2 className="text-[clamp(2.5rem,5.5vw,6rem)] font-extrabold uppercase tracking-tight text-white leading-none">
            In-Flight <br />
            Telemetry
          </h2>

          <p className="text-aerogrid-secondary text-base md:text-xl font-light max-w-lg leading-relaxed">
            Continuous health monitoring, automated thermal balance, and high-gain downlink tracking streamed 24/7 across 48 global ground relays.
          </p>
        </div>

        {/* Right Side: Floating Minimalist Aerospace HUD Card */}
        <div className="lg:col-span-6 lg:ml-auto w-full max-w-md pointer-events-auto">
          <div className="p-8 md:p-10 rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl shadow-card-glass space-y-7">
            {/* HUD Status Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white font-bold tracking-widest uppercase">
                  ACTIVE DOWNLINK
                </span>
              </div>
              <span className="text-aerogrid-cyan text-[11px]">BAND: X-BAND / UHF</span>
            </div>

            {/* Metrics List with Hairline Divider Lines */}
            <div className="space-y-5 font-mono">
              {/* Charge Rate */}
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <span className="text-xs text-aerogrid-secondary uppercase">Charge Rate</span>
                <span className="text-2xl font-bold text-white tracking-tight">{chargeRate}</span>
              </div>

              {/* Max DoD per Orbit with Progress Fill Line */}
              <div className="border-b border-white/10 pb-4 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-aerogrid-secondary uppercase">Max DoD per Orbit</span>
                  <span className="text-2xl font-bold text-aerogrid-amber tracking-tight">{dod}%</span>
                </div>
                {/* Thin progress line */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-aerogrid-cyan to-aerogrid-amber rounded-full transition-all duration-500"
                    style={{ width: `${dod}%` }}
                  />
                </div>
              </div>

              {/* Data Rate */}
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <span className="text-xs text-aerogrid-secondary uppercase">Data Rate</span>
                <span className="text-2xl font-bold text-aerogrid-cyan tracking-tight">{dataRate}</span>
              </div>

              {/* Tx Power */}
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-aerogrid-secondary uppercase">Tx Power</span>
                <span className="text-2xl font-bold text-white tracking-tight">{txPower}</span>
              </div>
            </div>

            {/* Bottom Avionics Status Bar */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-aerogrid-secondary">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Activity className="w-3.5 h-3.5" /> ALL SYSTEMS NOMINAL
              </span>
              <span>ATTITUDE: 3-AXIS LOCKED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
