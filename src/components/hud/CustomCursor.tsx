"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if target or parent has custom cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest("[data-cursor]");
      if (cursorEl) {
        const text = cursorEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        const clickable = target.closest("button, a, input, [role='button']");
        if (clickable) {
          setIsHovered(true);
          setCursorText("");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      className="fixed pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out select-none"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      aria-hidden="true"
    >
      {/* Outer Follower Ring / Pill */}
      <div
        className={`flex items-center justify-center transition-all duration-200 rounded-full border ${
          cursorText
            ? "px-3.5 py-1.5 bg-aerogrid-cyan text-black font-mono font-bold text-[10px] tracking-widest border-aerogrid-glow shadow-cyan-glow scale-110"
            : isHovered
            ? "w-11 h-11 border-aerogrid-cyan/80 bg-aerogrid-cyan/15 shadow-cyan-sm scale-110"
            : "w-7 h-7 border-white/40 bg-white/5"
        }`}
      >
        {cursorText ? (
          <span>{cursorText.toUpperCase()}</span>
        ) : (
          /* Center dot */
          <div
            className={`rounded-full transition-all duration-150 ${
              isHovered ? "w-1.5 h-1.5 bg-aerogrid-cyan" : "w-1 h-1 bg-white"
            }`}
          />
        )}
      </div>
    </aside>
  );
}
