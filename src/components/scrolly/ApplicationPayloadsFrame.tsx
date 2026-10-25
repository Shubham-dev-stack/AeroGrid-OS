"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ChevronRight, Zap } from "lucide-react";

interface PayloadItem {
  id: string;
  category: "sensing" | "connectivity";
  name: string;
  img: string;
  resolution: string;
  band: string;
  applications: string;
  mass: string;
  power: string;
}

const PAYLOAD_ITEMS: PayloadItem[] = [
  {
    id: "hyperspectral",
    category: "sensing",
    name: "Hyperspectral",
    img: "/payloads/hyperspectral.png",
    resolution: "30m GSD @ 500km",
    band: "VNIR / SWIR (400-2500nm)",
    applications: "Mineral exploration, vegetation biochemical mapping, emission monitoring",
    mass: "4.2 kg",
    power: "28 W",
  },
  {
    id: "multispectral",
    category: "sensing",
    name: "Multispectral",
    img: "/payloads/multispectral.png",
    resolution: "1.2m GSD @ 500km",
    band: "8 Narrow Spectral Bands",
    applications: "Precision agriculture, water quality, urban infrastructure change",
    mass: "2.1 kg",
    power: "18 W",
  },
  {
    id: "sar",
    category: "sensing",
    name: "Synthetic Aperture Radar",
    img: "/payloads/sar.png",
    resolution: "Sub-1m Stripmap",
    band: "X-Band / C-Band High Power",
    applications: "All-weather day/night maritime reconnaissance, subsidence tracking",
    mass: "8.5 kg",
    power: "120 W Peak",
  },
  {
    id: "thermal",
    category: "sensing",
    name: "Thermal Infrared",
    img: "/payloads/thermal.png",
    resolution: "15m NETD < 50mK",
    band: "LWIR 8-14 µm Calibrated",
    applications: "Wildfire early detection, industrial thermal pollution, night tracking",
    mass: "1.8 kg",
    power: "14 W",
  },
  {
    id: "optical",
    category: "sensing",
    name: "VHR Optical",
    img: "/payloads/optical.png",
    resolution: "0.5m Native Sub-Meter",
    band: "RGB + Panchromatic",
    applications: "Defense intelligence, asset verification, border surveillance",
    mass: "3.4 kg",
    power: "22 W",
  },
  {
    id: "mesh-5g",
    category: "connectivity",
    name: "5G IoT Relay",
    img: "/payloads/optical.png",
    resolution: "Global Non-Terrestrial",
    band: "3GPP Rel-17 NTN / S-band",
    applications: "Direct-to-cell IoT telemetry, emergency maritime messaging",
    mass: "1.5 kg",
    power: "35 W",
  },
  {
    id: "laser-comms",
    category: "connectivity",
    name: "Optical Laser Crosslink",
    img: "/payloads/hyperspectral.png",
    resolution: "10 Gbps Intersatellite",
    band: "1550nm Laser Terminal",
    applications: "Zero-latency constellation inter-satellite mesh routing",
    mass: "3.8 kg",
    power: "45 W",
  },
];

export default function ApplicationPayloadsFrame() {
  const [activeCategory, setActiveCategory] = useState<"sensing" | "connectivity">("sensing");
  const [selectedPayloadId, setSelectedPayloadId] = useState<string>("hyperspectral");

  const filteredPayloads = PAYLOAD_ITEMS.filter((p) => p.category === activeCategory);
  const selectedPayload =
    PAYLOAD_ITEMS.find((p) => p.id === selectedPayloadId) || filteredPayloads[0];

  return (
    <section
      id="frame-payloads"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="space-y-12">
        {/* Top Header & Category Filter Pills */}
        <div className="pointer-events-auto flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <div className="text-xs font-mono text-aerogrid-cyan uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan" />
              <span>APPLICATIONS & SENSORS</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5.5vw,6rem)] font-extrabold uppercase tracking-tight text-white leading-none">
              Select Your Application
            </h2>
          </div>

          {/* Category Toggle Pills */}
          <div className="flex items-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/10 font-mono text-xs">
            <button
              onClick={() => {
                setActiveCategory("sensing");
                setSelectedPayloadId("hyperspectral");
              }}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === "sensing"
                  ? "bg-aerogrid-cyan text-black font-semibold shadow-cyan-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Remote Sensing
            </button>
            <button
              onClick={() => {
                setActiveCategory("connectivity");
                setSelectedPayloadId("mesh-5g");
              }}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === "connectivity"
                  ? "bg-aerogrid-cyan text-black font-semibold shadow-cyan-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Connectivity
            </button>
          </div>
        </div>

        {/* Horizontal Slider of Circular Hardware Badges (Tagged with data-cursor="drag") */}
        <div
          data-cursor="drag"
          className="pointer-events-auto overflow-x-auto pb-6 pt-2 scrollbar-none flex items-center gap-6 cursor-grab active:cursor-grabbing"
        >
          {filteredPayloads.map((item) => {
            const isSelected = item.id === selectedPayloadId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedPayloadId(item.id)}
                className={`flex-shrink-0 group flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 w-56 ${
                  isSelected
                    ? "border-aerogrid-cyan bg-white/[0.06] shadow-cyan-glow scale-105"
                    : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/[0.02]"
                }`}
              >
                {/* Circular Hardware Preview Badge */}
                <div className="relative w-28 h-28 rounded-full border border-white/15 p-2 flex items-center justify-center bg-black/80 overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-aerogrid-cyan/15 rounded-full pointer-events-none" />
                  )}
                </div>

                <span className="text-sm font-bold uppercase tracking-tight text-white font-sans">
                  {item.name}
                </span>
                <span className="text-[11px] font-mono text-aerogrid-cyan mt-1">
                  {item.resolution}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Payload Detail Minimalist Drawer */}
        <div className="pointer-events-auto border-t border-white/10 pt-6">
          <div className="grid md:grid-cols-4 gap-6 font-mono text-xs">
            <div>
              <div className="text-[10px] text-aerogrid-secondary uppercase">PAYLOAD NAME</div>
              <div className="text-base font-bold text-white mt-1 uppercase font-sans">
                {selectedPayload.name}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-aerogrid-secondary uppercase">SPECTRAL / RF BAND</div>
              <div className="text-sm font-semibold text-aerogrid-cyan mt-1">
                {selectedPayload.band}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-aerogrid-secondary uppercase">APPLICATIONS</div>
              <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                {selectedPayload.applications}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-aerogrid-secondary uppercase">SWaP BUDGET</div>
              <div className="text-sm font-bold text-white mt-1">
                {selectedPayload.mass} / {selectedPayload.power}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
