"use client";

import React, { useState } from "react";
import { projectConfig, StageConfig } from "@/config/projectConfig";
import {
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  Layers,
  Radio,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";

export default function MissionLifecycle() {
  const [activeStageId, setActiveStageId] = useState<string>("define");

  const currentStage =
    projectConfig.stages.find((s) => s.id === activeStageId) ||
    projectConfig.stages[0];

  return (
    <section
      id="section-lifecycle"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 max-w-7xl mx-auto pointer-events-auto"
    >
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Stages Nav List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-aerogrid-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan" />
              <span>WAYPOINT 02 // LIFECYCLE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Deterministic Mission Phases
            </h2>
            <p className="text-aerogrid-secondary text-sm md:text-base leading-relaxed">
              Standardized four-stage execution pipeline eliminating launch bottlenecks and human operational latency.
            </p>
          </div>

          {/* Interactive Stage Selector Tabs */}
          <div className="space-y-2.5 pt-4">
            {projectConfig.stages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? "border-aerogrid-cyan bg-aerogrid-surface/90 shadow-cyan-sm"
                      : "border-white/10 bg-black/50 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                        isActive
                          ? "bg-aerogrid-cyan text-black"
                          : "bg-white/10 text-aerogrid-secondary group-hover:text-white"
                      }`}
                    >
                      {stage.index}
                    </span>
                    <div>
                      <div
                        className={`text-sm font-semibold transition-colors ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {stage.title}
                      </div>
                      <div className="text-xs text-aerogrid-secondary font-mono">
                        {stage.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-aerogrid-cyan/20 text-aerogrid-cyan border border-aerogrid-cyan/40"
                          : "bg-black/40 text-slate-400 border border-white/5"
                      }`}
                    >
                      QUALIFIED
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Stage Inspection Card */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 rounded-2xl border border-aerogrid-border bg-black/75 backdrop-blur-xl hud-corner-tl hud-corner-br shadow-card-glass space-y-6">
            {/* Header with Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
              <span className="font-mono text-xs text-aerogrid-cyan tracking-wider font-semibold">
                {currentStage.badge}
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>ISO 9001 / AS9100 QUALIFIED</span>
              </div>
            </div>

            {/* Stage Title and Description */}
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                {currentStage.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {currentStage.description}
              </p>
            </div>

            {/* Specifications Key-Value Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {currentStage.specs.map((spec, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg border border-white/10 bg-aerogrid-surface/70 hover:border-aerogrid-cyan/40 transition-colors"
                >
                  <div className="text-xs font-mono text-aerogrid-secondary uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-base font-mono font-semibold text-white mt-1">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Milestone Timeline */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-aerogrid-secondary">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-aerogrid-amber" />
                <span>EXECUTION SLA: <strong className="text-white">&lt; 15 MIN DEPLOY</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-aerogrid-cyan" />
                <span>FAULT TOLERANCE: <strong className="text-white">N+2 REDUNDANCY</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
