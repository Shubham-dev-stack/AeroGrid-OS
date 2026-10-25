"use client";

import { useEffect, useState } from "react";
import { scrollState } from "@/lib/scrollStore";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animId: number;

    const update = () => {
      // Check difference to prevent unnecessary renders
      if (Math.abs(scrollState.progress - progress) > 0.002) {
        setProgress(scrollState.progress);
      }
      animId = requestAnimationFrame(update);
    };

    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [progress]);

  return progress;
}
