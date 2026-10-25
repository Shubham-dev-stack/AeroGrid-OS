# AeroGrid OS

> **High-Tech Aerospace & Autonomous Mission Operations Showcase Platform**  
> *Reverse-Engineered from EnduroSat's UI/UX Architecture*

![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-00A1FF?style=for-the-badge&logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-green?style=for-the-badge&logo=greensock)

---

## 🛰 Overview

**AeroGrid OS** is a cutting-edge scrollytelling web platform designed for autonomous drone swarms, satellite constellations, and aerospace mission operations. Built with Next.js 14 App Router, React Three Fiber, Lenis smooth scrolling, and GSAP ScrollTrigger, it delivers a 60 FPS interactive 3D hardware inspection experience with real-time telemetry meters and an algorithmic mission pricing calculator.

---

## ⚡ Core Features

- **Fixed 3D WebGL Canvas**: Procedural aerospace satellite & autonomous drone model featuring PBR materials, solar wings, rotating 3D LiDAR, optical gimbals, and pulsing ion thrusters.
- **Synchronized Camera Spline Waypoints**: Camera smoothly interpolates across 5 orbital vantage points tied to Lenis scroll progress.
- **Sticky Stage Navigator**: Real-time HUD progress bar, live UTC mission clock, and active stage tracking (Overview $\to$ Lifecycle $\to$ Payloads $\to$ Telemetry $\to$ Calculator).
- **Interactive Mission Lifecycle**: 4 qualification stages detailing area specs, hardware mating, autonomous launch, and flight ops.
- **Modular Payload Selector**: Interactive hardware module selector for Thermal IR, 3D LiDAR, 4K Multispectral, and 5G Mesh Relays with live mass and power budgets.
- **In-Flight Telemetry HUD**: Live packet jitter meters for Charge Rate, Battery DoD %, Downlink Mbps, and RF Transmit with dynamic SVG sparkline charts.
- **Algorithmic Mission Calculator**: Reverse-engineered exponential cost curve computing fleet size, revisit latency ($M$/$H$), and turnkey deployment cost.

---

## 📐 Mathematical Formulation

The mission calculator employs a 4th-degree exponential decay and power 1.5 curve reverse-engineered from satellite constellation orbit dynamics:

$$\text{units} = \mathrm{round}\left((1 - p)^4 \times 599\right) + 1$$
$$t = \mathrm{round}\left((1 - p)^{1.5} \times 599\right) + 1$$
$$\text{revisit} = \begin{cases} \mathrm{round}\left(\left(1 - \frac{t - 200}{400}\right) \times 59\right) + 1\text{M} & \text{if } t > 200 \\ \mathrm{round}\left(\frac{200 - t}{200} \times 47\right) + 1\text{H} & \text{if } t \le 200 \end{cases}$$
$$\text{Total Cost} = \text{units} \times \$0.6\text{M}$$

---

## 🎨 Design Tokens

| Token | Color Code | Application |
|:---|:---|:---|
| Canvas Obsidian | `#000000` | Pure background canvas |
| Deep Void Blue | `#070B13` | Surface background cards |
| Laser Cyan | `#00A1FF` | Primary action & accent glow |
| Mars Amber | `#FC6A18` | Alert & secondary highlight |
| Cyan Bloom | `#DAF2FF` | Active hover highlight |
| Monospace Font | JetBrains Mono | Telemetry numbers & micro labels |
| Display Font | Inter | Geometric headers & body |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v20 / v24)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Shubham-dev-stack/AeroGrid-OS.git
cd AeroGrid-OS

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm start
```

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Smooth Scroll**: Lenis, GSAP ScrollTrigger
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React

---

## 📜 License

MIT License © 2026 AeroGrid OS & Shubham.