"use client";

import React, { useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { scrollToProgress } from "@/lib/scrollStore";
import { Menu, Square, X } from "lucide-react";

const NAV_LINKS = ["Space Service", "Satellites", "Careers"];

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

  return (
    <>
      {/* Top Minimalist Header */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto bg-black/40 backdrop-blur-md px-6 md:px-12 lg:px-20 py-4 transition-all border-b border-white/[0.06]">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToProgress(0)}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="font-mono text-base font-bold tracking-widest text-white uppercase group-hover:text-aerogrid-cyan transition-colors">
              AEROGRID
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-aerogrid-cyan animate-pulse" />
          </button>

          {/* Middle Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-xs tracking-wider uppercase text-slate-300">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={link}
                onClick={() => scrollToProgress(idx === 0 ? 0.25 : idx === 1 ? 0.48 : 0.86)}
                className="hover:text-white transition-colors relative py-1 cursor-pointer"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Right Action: Contact Button & Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToProgress(0.86)}
              className="px-5 py-2 rounded-full border border-white/20 bg-white/[0.04] hover:bg-aerogrid-cyan hover:text-black hover:border-aerogrid-cyan transition-all text-xs font-mono uppercase tracking-wider text-white cursor-pointer"
            >
              Contact
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-aerogrid-cyan transition-colors md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-3 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-slate-300">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={link}
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToProgress(idx === 0 ? 0.25 : idx === 1 ? 0.48 : 0.86);
                }}
                className="hover:text-aerogrid-cyan py-1 text-left"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Fixed Bottom Segmented Lifecycle Bar ([DESIGN] [AIT] [LAUNCH] [OPS]) */}
      <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex items-center bg-black/80 backdrop-blur-xl rounded-full border border-white/10 p-1.5 shadow-card-glass text-xs font-mono select-none">
        {LIFECYCLE_STAGES.map((stage) => {
          const isActive = activeLifecycle.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => {
                const targetP = (stage.range[0] + stage.range[1]) / 2;
                scrollToProgress(targetP);
              }}
              className={`px-4 sm:px-6 py-2 rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-aerogrid-cyan text-black font-bold shadow-cyan-sm"
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
