"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/providers/SmoothScroll";
import StickyNav from "@/components/hud/StickyNav";
import HeroSection from "@/components/scrolly/HeroSection";
import MissionLifecycle from "@/components/scrolly/MissionLifecycle";
import PayloadSelector from "@/components/configurator/PayloadSelector";
import TelemetryHUD from "@/components/hud/TelemetryHUD";
import MissionCalculator from "@/components/configurator/MissionCalculator";
import FooterSection from "@/components/scrolly/FooterSection";

// Client-only dynamic WebGL Canvas to prevent SSR hydration errors
const CanvasContainer = dynamic(
  () => import("@/components/3d/CanvasContainer"),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-black text-white selection:bg-aerogrid-cyan/30 selection:text-aerogrid-glow">
        {/* Fixed WebGL 3D Canvas in background (Camera waypoints linked to scroll) */}
        <CanvasContainer />

        {/* Sticky Aerospace HUD Stage Navigator */}
        <StickyNav />

        {/* Scrollytelling Interactive UI Sections (Pointer events enabled for cards) */}
        <div className="relative z-10">
          <HeroSection />
          <MissionLifecycle />
          <PayloadSelector />
          <TelemetryHUD />
          <MissionCalculator />
          <FooterSection />
        </div>
      </main>
    </SmoothScroll>
  );
}
