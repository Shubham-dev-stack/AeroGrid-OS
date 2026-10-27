/**
 * AeroGrid OS · Web Audio API Cybernetic Sound Engine
 * Programmatic synthesizer for tactile aerospace clicks, telemetry chirps,
 * orbital warp sweeps, and ambient space drone. Zero audio files required.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private ambientGain: GainNode | null = null;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private muted: boolean = true; // Default muted for browser autoplay compliance
  private initialized: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aerogrid_audio_muted');
      // If user previously unmuted, we record preference
      if (saved === 'false') {
        this.muted = false;
      }
    }
  }

  private ensureContext(): boolean {
    if (typeof window === 'undefined') return false;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return false;
      this.ctx = new AudioCtx();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : 1, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return true;
  }

  public init(): void {
    if (this.initialized) return;
    if (this.ensureContext()) {
      this.initialized = true;
      if (!this.muted) {
        this.startAmbient();
      }
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('aerogrid_audio_muted', String(this.muted));
    }

    if (!this.muted) {
      this.ensureContext();
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
        this.masterGain.gain.setTargetAtTime(1, this.ctx.currentTime, 0.05);
      }
      this.startAmbient();
      this.playChirp();
    } else {
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
        this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
      }
      this.stopAmbient();
    }
    return this.muted;
  }

  /**
   * Crisp, tactile cybernetic click for buttons, tabs, sliders
   */
  public playClick(): void {
    if (this.muted || !this.ensureContext() || !this.ctx || !this.masterGain) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(950, t);
    osc.frequency.exponentialRampToValueAtTime(320, t + 0.035);

    gain.gain.setValueAtTime(0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.04);
  }

  /**
   * Sci-fi telemetry confirmation chirp for data refresh, pass acquisition, token verify
   */
  public playChirp(): void {
    if (this.muted || !this.ensureContext() || !this.ctx || !this.masterGain) return;

    const t = this.ctx.currentTime;

    // Harmonic 1
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(1240, t);
    osc1.frequency.exponentialRampToValueAtTime(1860, t + 0.08);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1860, t);
    osc2.frequency.exponentialRampToValueAtTime(2480, t + 0.08);

    gain.gain.setValueAtTime(0.06, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.09);
    osc2.stop(t + 0.09);
  }

  /**
   * Resonant low-to-high frequency warp sound for "Deploy in Constellation" / launch
   */
  public playWarp(): void {
    if (this.muted || !this.ensureContext() || !this.ctx || !this.masterGain) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(680, t + 0.35);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, t);
    filter.frequency.exponentialRampToValueAtTime(2400, t + 0.35);
    filter.Q.setValueAtTime(4, t);

    gain.gain.setValueAtTime(0.09, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.4);
  }

  /**
   * Alert chime for margin budget exceed or dark vessel detection
   */
  public playAlert(): void {
    if (this.muted || !this.ensureContext() || !this.ctx || !this.masterGain) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(580, t);
    osc.frequency.setValueAtTime(440, t + 0.06);

    gain.gain.setValueAtTime(0.05, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.15);
  }

  /**
   * Sub-bass ambient space hum (55Hz + 110Hz harmonic)
   */
  public startAmbient(): void {
    if (this.muted || !this.ensureContext() || !this.ctx || !this.masterGain) return;
    if (this.ambientOsc1) return; // Already playing

    try {
      const t = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, t);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.025, t + 1.5); // Gentle fade in

      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(55, t); // A1 note sub-drone

      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientOsc2.type = 'triangle';
      this.ambientOsc2.frequency.setValueAtTime(110.5, t); // Subtle detune for space beat

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, t);

      this.ambientOsc1.connect(filter);
      this.ambientOsc2.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.masterGain);

      this.ambientOsc1.start(t);
      this.ambientOsc2.start(t);
    } catch {
      // Ignore audio policy errors
    }
  }

  public stopAmbient(): void {
    if (this.ambientOsc1 && this.ctx && this.ambientGain) {
      try {
        const t = this.ctx.currentTime;
        this.ambientGain.gain.cancelScheduledValues(t);
        this.ambientGain.gain.setTargetAtTime(0, t, 0.3);
        setTimeout(() => {
          this.ambientOsc1?.stop();
          this.ambientOsc2?.stop();
          this.ambientOsc1?.disconnect();
          this.ambientOsc2?.disconnect();
          this.ambientOsc1 = null;
          this.ambientOsc2 = null;
        }, 400);
      } catch {
        this.ambientOsc1 = null;
        this.ambientOsc2 = null;
      }
    }
  }
}

// Export singleton instance
export const soundEngine = new SoundEngine();
