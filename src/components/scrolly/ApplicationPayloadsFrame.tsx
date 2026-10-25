"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";

interface SensorItem {
  id: string;
  category: "sensing" | "connectivity";
  name: string;
  tag: string;
  img: string;
  spec: string;
  desc: string;
}

const SENSOR_ITEMS: SensorItem[] = [
  {
    id: "hyperspectral",
    category: "sensing",
    name: "HYPERSPECTRAL",
    tag: "VNIR / SWIR",
    img: "/payloads/hyperspectral.png",
    spec: "30m GSD / 200+ Bands",
    desc: "Mineral discovery, water quality, and crop biochemical monitoring.",
  },
  {
    id: "multispectral",
    category: "sensing",
    name: "MULTISPECTRAL",
    tag: "8 SPECTRAL BANDS",
    img: "/payloads/multispectral.png",
    spec: "1.2m GSD Calibrated",
    desc: "Precision vegetation indices, land cover, and infrastructure audit.",
  },
  {
    id: "sar",
    category: "sensing",
    name: "SAR",
    tag: "X-BAND RADAR",
    img: "/payloads/sar.png",
    spec: "Sub-1m Stripmap",
    desc: "All-weather day & night optical cloud-penetrating surveillance.",
  },
  {
    id: "thermal",
    category: "sensing",
    name: "THERMAL",
    tag: "LWIR 8-14 µm",
    img: "/payloads/thermal.png",
    spec: "15m NETD < 50mK",
    desc: "Wildfire detection, industrial energy loss, and geothermal tracking.",
  },
  {
    id: "vhr",
    category: "sensing",
    name: "VHR OPTICAL",
    tag: "SUB-METER VIS",
    img: "/payloads/optical.png",
    spec: "0.5m Native GSD",
    desc: "High-resolution urban intelligence, asset verification, defense.",
  },
  {
    id: "mesh-5g",
    category: "connectivity",
    name: "5G RELAY",
    tag: "3GPP REL-17",
    img: "/payloads/optical.png",
    spec: "Direct-to-Cell NTN",
    desc: "Tactical emergency messaging and remote asset tracking.",
  },
  {
    id: "laser",
    category: "connectivity",
    name: "OPTICAL LASER",
    tag: "1550nm ISL",
    img: "/payloads/hyperspectral.png",
    spec: "10 Gbps Intersatellite",
    desc: "Zero-latency constellation optical mesh routing.",
  },
];

export default function ApplicationPayloadsFrame() {
  const [activeCategory, setActiveCategory] = useState<"sensing" | "connectivity">("sensing");
  const [selectedSensorId, setSelectedSensorId] = useState<string>("hyperspectral");

  const filteredSensors = SENSOR_ITEMS.filter((s) => s.category === activeCategory);
  const selectedSensor =
    SENSOR_ITEMS.find((s) => s.id === selectedSensorId) || filteredSensors[0];

  return (
    <section
      id="frame-payloads"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pointer-events-none select-none max-w-[1700px] mx-auto w-full"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: 01 / DEFINE / YOUR REQUIREMENTS (Matches Screenshot 5) */}
        <div className="lg:col-span-4 pointer-events-auto space-y-6">
          <div className="text-6xl md:text-8xl font-mono font-extrabold text-aerogrid-cyan leading-none">
            01
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
            Define <br />
            Your Requirements
          </h2>

          <p className="text-aerogrid-secondary text-sm md:text-base font-light leading-relaxed">
            Select your remote sensing or connectivity application. We configure the payload sensor, data budget, and optimal constellation orbit.
          </p>

          {/* Active Sensor Inspection Specs */}
          <div className="p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md space-y-3 font-mono">
            <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
              <span className="text-aerogrid-secondary uppercase">SELECTED MODULE</span>
              <span className="text-aerogrid-cyan font-bold">{selectedSensor.name}</span>
            </div>
            <div className="text-xs text-slate-300 font-sans leading-relaxed">
              {selectedSensor.desc}
            </div>
            <div className="text-[11px] text-aerogrid-amber pt-1">
              SPEC: {selectedSensor.spec}
            </div>
          </div>
        </div>

        {/* Right Column: SELECT YOUR APPLICATION & 5 Dark Blue Grid Boxes */}
        <div className="lg:col-span-8 pointer-events-auto space-y-6">
          {/* Header & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
              Select Your Application
            </h3>

            {/* Category Switch Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-full border border-white/10 bg-white/[0.04] font-mono text-xs">
              <button
                onClick={() => {
                  setActiveCategory("sensing");
                  setSelectedSensorId("hyperspectral");
                }}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeCategory === "sensing"
                    ? "bg-aerogrid-cyan text-black font-semibold shadow-cyan-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                REMOTE SENSING
              </button>
              <button
                onClick={() => {
                  setActiveCategory("connectivity");
                  setSelectedSensorId("mesh-5g");
                }}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeCategory === "connectivity"
                    ? "bg-aerogrid-cyan text-black font-semibold shadow-cyan-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                CONNECTIVITY
              </button>
            </div>
          </div>

          {/* 5 Dark Blue Grid Boxes (Matches Screenshot 5) */}
          <div
            data-cursor="drag"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {filteredSensors.map((item) => {
              const isSelected = item.id === selectedSensorId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedSensorId(item.id)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden group flex items-center gap-5 ${
                    isSelected
                      ? "border-aerogrid-cyan bg-[#071329] shadow-cyan-glow scale-[1.02]"
                      : "border-white/10 bg-[#060c18]/80 hover:border-white/20 hover:bg-[#071329]/60"
                  }`}
                >
                  {/* Circular Sensor Preview Thumbnail */}
                  <div className="relative w-20 h-20 rounded-full border border-white/10 p-2 flex items-center justify-center bg-black/60 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-aerogrid-cyan/20 rounded-full pointer-events-none" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-mono text-aerogrid-cyan font-semibold">
                      {item.tag}
                    </div>
                    <div className="text-base font-bold uppercase tracking-tight text-white font-sans">
                      {item.name}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {item.spec}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
