"use client";

import React, { useEffect, useRef, useState } from "react";

interface RazorTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * EnduroSat Invisible Razor Mask Text Reveal
 * Animates text spans up from translateY(115%) to translateY(0%) with expo.out easing
 */
export default function RazorText({ children, className = "", delay = 0 }: RazorTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        style={{
          transform: isVisible ? "translateY(0%)" : "translateY(115%)",
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
