"use client";

import React, { useEffect, useState } from "react";
import { projectConfig, TelemetryMetric } from "@/config/projectConfig";
import {
  Activity,
  ArrowUpRight,
  Battery,
  Cpu,
  Flame,
  Radio,
  RefreshCw,
  Signal,
  Wifi,
  Zap,
} from "lucide-react";

export default function TelemetryHUD() {
  const [metrics, setMetrics] = useState<TelemetryMetric[]>(projectConfig.telemetryMetrics);
  const [lastHeartbeat, setLastHeartbeat] = useState<number>(Date.now());
  const [dynamicTemp, setDynamicTemp] = useState<number>(34.2);
  const [dynamicBusVolts, setDynamicBusVolts] = useState<number>(28.4);

  // Live aerospace telemetry jitter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((m) => {
          let delta = (Math.random() - 0.48) * 0.08;
          let newNumeric = m.numericVal;
          let newValueStr = m.value;

          if (m.id === "charge-rate") {
            newNumeric = +(m.numericVal + delta * 0.4).toFixed(2);
            newValueStr = `${newNumeric}A`;
          } else if (m.id === "dod") {
            newNumeric = Math.round(m.numericVal + delta * 0.5);
            newValueStr = `${newNumeric}%`;
          } else if (m.id === "downlink") {
            newNumeric = Math.round(m.numericVal + (Math.random() - 0.5) * 3);
            newValueStr = `${newNumeric} Mbps`;
          } else if (m.id === "rf-power") {
            newNumeric = +(m.numericVal + delta * 0.2).toFixed(1);
            newValueStr = `${newNumeric} dBm`;
          }

          const newChartData = [...m.chartData.slice(1), newNumeric];
          return {
            ...m,
            numericVal: newNumeric,
            value: newValueStr,
            chartData: newChartData,
          };
        })
      );

      setDynamicTemp(+(34.2 + (Math.random() - 0.5) * 0.4).toFixed(1));
      setDynamicBusVolts(+(28.4 + (Math.random() - 0.5) * 0.15).toFixed(2));
      setLastHeartbeat(Date.now());
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="section-telemetry"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 max-w-7xl mx-auto pointer-events-auto"
    >
      <div className="max-w-4xl space-y-6">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-aerogrid-cyan uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan animate-ping" />
            <span>WAYPOINT 04 // LIVE TELEMETRY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Orbital & In-Flight Telemetry
          </h2>
          <p className="text-aerogrid-secondary text-sm md:text-base leading-relaxed">
            Sub-millisecond packet telemetry streamed through AeroGrid Ground Stations. Encrypted bi-directional avionics health.
          </p>
        </div>

        {/* Master Telemetry Display Card */}
        <div className="p-8 md:p-10 rounded-2xl border border-aerogrid-border bg-black/80 backdrop-blur-xl hud-corner-tl hud-corner-br shadow-card-glass space-y-8">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-cyan-sm" />
              <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                AVIONICS BUS STREAM
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-aerogrid-cyan">
                FEC REED-SOLOMON
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-aerogrid-secondary">
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-aerogrid-cyan" />
                <span className="text-white">LINK MARGIN: +14.2 dB</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>BER: &lt; 10⁻⁹</span>
              </div>
            </div>
          </div>

          {/* Primary 4 Telemetry Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m) => {
              const percentage = Math.min(100, Math.round((m.numericVal / m.maxVal) * 100));

              // Compute simple SVG polyline points for sparkline
              const minVal = Math.min(...m.chartData);
              const maxVal = Math.max(...m.chartData) || 1;
              const range = maxVal - minVal || 1;
              const points = m.chartData
                .map((val, i) => {
                  const x = (i / (m.chartData.length - 1)) * 90;
                  const y = 28 - ((val - minVal) / range) * 22;
                  return `${x},${y}`;
                })
                .join(" ");

              return (
                <div
                  key={m.id}
                  className="p-5 rounded-xl border border-white/10 bg-aerogrid-surface/80 hover:border-aerogrid-cyan/50 transition-colors space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-aerogrid-secondary uppercase">
                      {m.label}
                    </span>
                    <span className="text-[10px] font-mono text-aerogrid-cyan px-1.5 py-0.5 rounded bg-aerogrid-cyan/10">
                      {m.unit}
                    </span>
                  </div>

                  <div className="text-3xl font-mono font-bold text-white tracking-tight">
                    {m.value}
                  </div>

                  {/* Sparkline Graphic */}
                  <div className="h-8 w-full">
                    <svg viewBox="0 0 90 30" className="w-full h-full overflow-visible">
                      <polyline
                        fill="none"
                        stroke="#00A1FF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={points}
                      />
                    </svg>
                  </div>

                  {/* Level Gauge Bar */}
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-aerogrid-cyan to-aerogrid-glow rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-aerogrid-secondary">
                      <span>LOAD</span>
                      <span className="text-white font-semibold">{percentage}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Secondary Subsystem Readouts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 border-t border-white/10 font-mono text-xs">
            <div className="flex items-center gap-3">
              <Flame className="w-4 h-4 text-aerogrid-amber" />
              <div>
                <div className="text-[10px] text-aerogrid-secondary">CORE TEMPERATURE</div>
                <div className="font-semibold text-white">{dynamicTemp}°C NOMINAL</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Zap className="w-4 h-4 text-aerogrid-cyan" />
              <div>
                <div className="text-[10px] text-aerogrid-secondary">MAIN BUS VOLTAGE</div>
                <div className="font-semibold text-white">{dynamicBusVolts}V REGULATED</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Signal className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-[10px] text-aerogrid-secondary">ATTITUDE JITTER</div>
                <div className="font-semibold text-white">&lt; 0.018° 3-AXIS</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Radio className="w-4 h-4 text-aerogrid-cyan" />
              <div>
                <div className="text-[10px] text-aerogrid-secondary">GROUND PASS DURATION</div>
                <div className="font-semibold text-white">12m 45s WINDOW</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
