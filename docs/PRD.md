# Product Requirements Document (PRD): AeroGrid OS
**High-Tech Aerospace & Mission Operations Showcase Platform**
*Design & Experience Architecture Reverse-Engineered from EnduroSat*

---

## 1. Executive Summary & Vision

### 1.1 Overview
**AeroGrid OS** is a cutting-edge, scrollytelling web platform designed for autonomous drone swarms, aerospace missions, and deep-tech hardware-as-a-service. It combines interactive 3D WebGL scenes, real-time telemetry HUD displays, modular mission configurators, and power-curve cost estimators to create an unforgettable experience for hackathons, investors, and technical evaluations.

### 1.2 Core Value Proposition
- **High-Impact Visual Storytelling:** Replaces generic static landing pages with cinematic 60fps 3D scrollytelling.
- **Universal Reusability:** Powered by a single `projectConfig.ts` schema, allowing developers to switch between Autonomous Drones, Satellite Constellations, AI GPU Clusters, or Robotics in under 15 minutes.
- **Interactive Technical Proof:** Incorporates genuine mathematical calculation models, interactive sliders, and live-feeling telemetry meters.

---

## 2. Target Audience & Hackathon Strategy

- **Hackathon Judges & Evaluators:** Blown away by 3D fidelity, custom cursors, buttery smooth scrolling, and realistic aerospace HUD aesthetics.
- **Enterprise / DeepTech Investors:** Conveys industrial maturity, engineering rigor, and transparent pricing.
- **Developers / Teams:** Clean, modular React/Next.js codebase that can serve as the universal frontend template for any complex project.

---

## 3. Design System & Tokens (EnduroSat Precision Spec)

### 3.1 Color Palette
```css
:root {
  --bg-primary: #000000;         /* Pure Canvas Obsidian */
  --bg-surface: #070B13;         /* Deep Void Blue */
  --bg-card: rgba(13, 20, 32, 0.65); /* Translucent Glass */
  
  --accent-cyan: #00A1FF;        /* Laser Electric Blue (Primary) */
  --accent-amber: #FC6A18;       /* Mars Orbital Orange (Secondary/Alert) */
  --accent-glow: #DAF2FF;        /* High-light Cyan Bloom */
  
  --text-primary: #FFFFFF;       /* Crisp White Display */
  --text-secondary: #787A85;     /* Technical Muted Gray */
  --text-dim: #4B5160;           /* Subtle Monospace Label */
  
  --border-subtle: #23232C;      /* Technical Wireframe Border */
  --border-active: #00A1FF;      /* Focused Element Outline */
}
```

### 3.2 Typography & Hierarchy
- **Primary Display Font:** Geometric Grotesque / Sans (Inter).
  - Headline Size: `clamp(2.5rem, 6.5vw, 7rem)`, weight `700`, uppercase, letter spacing `-0.03em`.
- **Technical & Telemetry Font:** Monospace (JetBrains Mono).
  - Telemetry Numbers: `clamp(1.5rem, 3.5vw, 4rem)`, weight `600`.
  - Micro Labels: `0.75rem / 12px`, uppercase, letter spacing `0.15em`.

---

## 4. Mathematical Formula for Interactive Calculator
*Reverse-engineered directly from EnduroSat's production bundle:*

```typescript
export interface MissionMetrics {
  unitsCount: number;
  revisitDisplay: string;
  totalCostMillions: number;
}

export function calculateMissionSpecs(sliderProgress: number): MissionMetrics {
  const clampedP = Math.max(0, Math.min(1, sliderProgress));
  
  // 1. Units/Satellites Count (4th-degree exponential decay)
  const unitsCount = Math.round(Math.pow(1 - clampedP, 4) * 599) + 1;
  
  // 2. Revisit Time Factor (Power 1.5 curve)
  const t = Math.round(Math.pow(1 - clampedP, 1.5) * 599) + 1;
  
  // 3. Format Revisit Time (Switches between Minutes and Hours)
  let revisitDisplay = "";
  if (t > 200) {
    const mins = Math.round((1 - (t - 200) / 400) * 59) + 1;
    revisitDisplay = `${mins}M`;
  } else {
    const hours = Math.round(((200 - t) / 200) * 47) + 1;
    revisitDisplay = `${hours}H`;
  }
  
  // 4. Fixed Unit Cost ($0.6 Million per unit)
  const unitBasePriceMillions = 0.6;
  const totalCostMillions = parseFloat((unitsCount * unitBasePriceMillions).toFixed(1));
  
  return { unitsCount, revisitDisplay, totalCostMillions };
}
```
