"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/providers/SmoothScroll";
import StickyNav from "@/components/hud/StickyNav";
import CustomCursor from "@/components/hud/CustomCursor";
import HeroFrame from "@/components/scrolly/HeroFrame";
import ChallengeSolutionFrame from "@/components/scrolly/ChallengeSolutionFrame";
import TwoStepsTimelineFrame from "@/components/scrolly/TwoStepsTimelineFrame";
import ApplicationPayloadsFrame from "@/components/scrolly/ApplicationPayloadsFrame";
import TelemetryDockFrame from "@/components/scrolly/TelemetryDockFrame";
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

        {/* Minimalist Sticky Header (Z-50) */}
        <StickyNav />

        {/* 1:1 EnduroSat Fullscreen Scrollytelling Frames (Z-10) */}
        <div className="relative z-10">
          <HeroFrame />
          <ChallengeSolutionFrame />
          <TwoStepsTimelineFrame />
          <ApplicationPayloadsFrame />
          <TelemetryDockFrame />
          <FixedCostCalculatorFrame />
          <CostComparisonFrame />
          <FooterCtaFrame />
        </div>
      </main>
    </SmoothScroll>
  );
}
