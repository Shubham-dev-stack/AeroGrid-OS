"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setScrollProgress } from "@/lib/scrollStore";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis scroll events with GSAP ScrollTrigger & WebGL scrollState
    const handleScroll = (e: any) => {
      ScrollTrigger.update();
      
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const totalScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const computedProgress = e.progress !== undefined ? e.progress : scrollY / totalScroll;
      
      setScrollProgress(computedProgress, e.velocity || 0);
    };

    lenis.on("scroll", handleScroll);

    // Sync Lenis RAF with GSAP Ticker for frame synchronization
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Force initial update
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
