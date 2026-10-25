import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aerogrid: {
          bg: "#000000",
          surface: "#070B13",
          card: "rgba(13, 20, 32, 0.65)",
          cyan: "#00A1FF",
          amber: "#FC6A18",
          glow: "#DAF2FF",
          primary: "#FFFFFF",
          secondary: "#787A85",
          dim: "#4B5160",
          border: "#23232C",
          "border-active": "#00A1FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "cyan-glow": "0 0 25px rgba(0, 161, 255, 0.35)",
        "cyan-sm": "0 0 10px rgba(0, 161, 255, 0.25)",
        "amber-glow": "0 0 25px rgba(252, 106, 24, 0.35)",
        "card-glass": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 20px 40px -15px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "cyan-gradient": "linear-gradient(135deg, #00A1FF 0%, #0047FF 100%)",
        "amber-gradient": "linear-gradient(135deg, #FC6A18 0%, #FF9E00 100%)",
        "radial-dark": "radial-gradient(circle at 50% 50%, rgba(7, 11, 19, 0.8) 0%, #000000 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
