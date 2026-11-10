"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { scrollToProgress } from "@/lib/scrollStore";
import SoundToggle from "@/components/ui/SoundToggle";
import { soundEngine } from "@/lib/soundEngine";
import { Menu, X, Command, Satellite } from "lucide-react";

const NAV_LINKS = [
  { label: "Mission Control", href: "/dashboard", badge: "LIVE HUD" },
  { label: "Simulator", href: "/simulator" },
  { label: "Payloads", href: "/payloads" },
  { label: "API Docs", href: "/docs" },
];

const LIFECYCLE_STAGES = [
  { id: "design", label: "DESIGN", range: [0, 0.35] },
  { id: "ait", label: "AIT", range: [0.35, 0.6] },
  { id: "launch", label: "LAUNCH", range: [0.6, 0.8] },
  { id: "ops", label: "OPS", range: [0.8, 1.0] },
];

export default function StickyNav() {
  const progress = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active lifecycle stage based on scroll progress
  const activeLifecycle =
    LIFECYCLE_STAGES.find(
      (s) => progress >= s.range[0] && progress < s.range[1]
    ) || LIFECYCLE_STAGES[0];

  const triggerCommandPalette = () => {
    soundEngine.playClick();
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  return (
    <>
      {/* Top Minimalist Header */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto bg-black/60 backdrop-blur-xl px-4 sm:px-8 lg:px-16 py-3.5 transition-all border-b border-white/[0.08]">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => soundEngine.playClick()}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-[#00A1FF]/10 border border-[#00A1FF]/40 flex items-center justify-center text-[#00A1FF] group-hover:scale-105 transition-transform">
              <Satellite className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-sm sm:text-base font-bold tracking-widest text-white uppercase group-hover:text-[#00A1FF] transition-colors">
                AEROGRID
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A1FF] animate-pulse" />
            </div>
          </Link>

          {/* Middle Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 font-sans text-xs tracking-wider uppercase text-slate-300">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => soundEngine.playClick()}
                className="hover:text-white transition-colors relative py-1 flex items-center gap-1.5"
              >
                {item.badge && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right Action: Command Palette, Sound Toggle & Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={triggerCommandPalette}
              title="Open Command Palette (Cmd+K)"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] hover:border-[#00A1FF]/40 hover:text-white text-slate-400 text-[10px] font-mono transition-all cursor-pointer"
            >
              <Command className="w-3 h-3 text-[#00A1FF]" />
              <span className="hidden sm:inline">⌘K</span>
            </button>

            {/* Tactical Sound Toggle */}
            <SoundToggle />

            {/* Contact / Tasking Button */}
            <Link
              href="/dashboard#tasking"
              onClick={() => soundEngine.playChirp()}
              className="hidden sm:inline-flex px-4 py-1.5 rounded-full border border-[#00A1FF]/40 bg-[#00A1FF]/10 hover:bg-[#00A1FF] hover:text-black transition-all text-xs font-mono uppercase tracking-wider text-[#00A1FF] font-bold cursor-pointer"
            >
              Task Fleet
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                soundEngine.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-1.5 text-white hover:text-[#00A1FF] transition-colors lg:hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-white/10 mt-3 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-slate-300">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  soundEngine.playClick();
                  setMobileMenuOpen(false);
                }}
                className="hover:text-[#00A1FF] py-1 flex items-center justify-between"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] text-[#00FF88] px-2 py-0.5 rounded bg-[#00FF88]/10">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Fixed Bottom Segmented Lifecycle Bar ([DESIGN] [AIT] [LAUNCH] [OPS]) */}
      <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex items-center bg-black/85 backdrop-blur-xl rounded-full border border-white/10 p-1.5 shadow-card-glass text-xs font-mono select-none">
        {LIFECYCLE_STAGES.map((stage) => {
          const isActive = activeLifecycle.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => {
                soundEngine.playClick();
                const targetP = (stage.range[0] + stage.range[1]) / 2;
                scrollToProgress(targetP);
              }}
              className={`px-3 sm:px-5 py-1.5 rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-[#00A1FF] text-black font-bold shadow-[0_0_15px_rgba(0,161,255,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              )}
              <span>{stage.label}</span>
            </button>
          );
        })}
      </aside>
    </>
  );
}
