'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '@/lib/soundEngine';

export default function SoundToggle({ className = '' }: { className?: string }) {
  const [muted, setMuted] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMuted(soundEngine.isMuted());
  }, []);

  const handleToggle = () => {
    const isNowMuted = soundEngine.toggleMute();
    setMuted(isNowMuted);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      title={muted ? 'Enable tactical aerospace audio effects' : 'Mute tactical audio'}
      aria-label={muted ? 'Enable audio' : 'Mute audio'}
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider transition-all ${
        !muted
          ? 'bg-[#00FF88]/15 text-[#00FF88] border border-[#00FF88]/40 shadow-[0_0_15px_rgba(0,255,136,0.2)]'
          : 'bg-white/5 text-[#787A85] border border-white/10 hover:text-white hover:border-white/20'
      } ${className}`}
    >
      {!muted ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#00FF88] animate-pulse" />
          <span>AUDIO: ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#787A85]" />
          <span>AUDIO: OFF</span>
        </>
      )}
    </button>
  );
}
