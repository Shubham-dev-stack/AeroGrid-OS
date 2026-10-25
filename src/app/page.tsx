"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/providers/SmoothScroll";
import StickyNav from "@/components/hud/StickyNav";
import CustomCursor from "@/components/hud/CustomCursor";
import HeroFrame from "@/components/scrolly/HeroFrame";
import TwoStepsTimelineFrame from "@/components/scrolly/TwoStepsTimelineFrame";
import ApplicationPayloadsFrame from "@/components/scrolly/ApplicationPayloadsFrame";
import BlueprintAitFrame from "@/components/scrolly/BlueprintAitFrame";
import TelemetryDockFrame from "@/components/scrolly/TelemetryDockFrame";
import SpaceOpsFrame from "@/components/scrolly/SpaceOpsFrame";
import FixedCostCalculatorFrame from "@/components/scrolly/FixedCostCalculatorFrame";
import CostComparisonFrame from "@/components/scrolly/CostComparisonFrame";
import FooterCtaFrame from "@/components/scrolly/FooterCtaFrame";

// Dynamic WebGL 3D Canvas
const CanvasContainer = dynamic(
  () => import("@/components/3d/CanvasContainer"),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-black text-white selection:bg-aerogrid-cyan/30 selection:text-aerogrid-glow overflow-x-hidden">
        {/* Custom Aerospace Floating Cursor */}
        <CustomCursor />

        {/* Fixed 3D WebGL Canvas Layer (Z-0, pointer-events-none) */}
        <CanvasContainer />

        {/* Minimalist Sticky Header (Z-50) & Segmented Bottom Dock */}
        <StickyNav />

        {/* 1:1 EnduroSat 6-Act Cinematic Scrollytelling Sequence (Z-10) */}
        <div className="relative z-10">
          {/* Act 1: Orbit & Hero ("SPACE MISSIONS MADE SIMPLE") */}
          <HeroFrame />

          {/* Act 1.5: "YOUR MISSION IN TWO STEPS" / "IN JUST 6 MONTHS" */}
          <TwoStepsTimelineFrame />

          {/* Act 2: Atmosphere Dive & "01 DEFINE YOUR REQUIREMENTS" */}
          <ApplicationPayloadsFrame />

          {/* Act 3: Exploded CAD Blueprint Assembly (AIT Stage) */}
          <BlueprintAitFrame />

          {/* Act 4: Rocket Fairing Separation & In-Flight Telemetry */}
          <TelemetryDockFrame />

          {/* Act 5: SpaceOps Cloud Operations Hub & 3D Glass HUD */}
          <SpaceOpsFrame />

          {/* Act 6: Fixed Cost Constellation Calculator & USD/GB Disruption */}
          <FixedCostCalculatorFrame />
          <CostComparisonFrame />

          {/* Final Act: "Get to orbit today" Footer CTA */}
          <FooterCtaFrame />
        </div>
      </main>
    </SmoothScroll>
  );
}
