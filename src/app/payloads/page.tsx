'use client';

/**
 * AeroGrid OS · Modular Payloads & Sensor CAD Architecture
 * Standardized 28V / SpaceWire / Ethernet Sovereign Bus Payloads
 */

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Eye,
  Radio,
  Flame,
  Cpu,
  Wifi,
  Layers,
  Zap,
  Weight,
  Maximize2,
  CheckCircle2,
  AlertTriangle,
  Download,
  Activity,
  ShieldCheck,
  ChevronRight,
  Gauge,
  Sliders,
  Crosshair,
} from 'lucide-react';

interface PayloadSpec {
  id: string;
  name: string;
  category: string;
  tagline: string;
  icon: any;
  accentColor: string;
  tag: string;
  gsdOrResolution: string;
  spectralRange: string;
  swathWidth: string;
  massKg: number;
  powerWatts: number;
  busVolumeU: number;
  dataRateMbps: number;
  interfaceProtocol: string;
  operatingTemp: string;
  trlLevel: string;
  features: string[];
  description: string;
}

const PAYLOAD_REGISTRY: PayloadSpec[] = [
  {
    id: 'hypereye',
    name: 'HyperEye-V2',
    category: 'High-Resolution Optical Reconnaissance',
    tagline: 'Sub-meter sovereign multispectral intelligence',
    icon: Eye,
    accentColor: '#00A1FF',
    tag: 'OPTICAL · 0.50m GSD',
    gsdOrResolution: '0.50 m @ 520 km SSO',
    spectralRange: '8 Bands: 450–900 nm (RGB + NIR + RedEdge)',
    swathWidth: '14.8 km cross-track',
    massKg: 4.8,
    powerWatts: 38,
    busVolumeU: 3.5,
    dataRateMbps: 200,
    interfaceProtocol: 'SpaceWire ECSS-E-ST-50-52C (Dual-link) / 28V Regulated',
    operatingTemp: '-25°C to +65°C operational',
    trlLevel: 'TRL-9 Flight Proven',
    features: [
      'Time-Delayed Integration (TDI) low-noise CMOS focal plane',
      'Dual athermal Schmidt-Cassegrain carbon-composite telescope',
      'Autonomous on-orbit modulation transfer function (MTF) calibration',
      'Onboard lossless JPEG-XS hardware compression ASIC',
    ],
    description:
      'HyperEye-V2 delivers tactical intelligence and precision spatial observation. Equipped with radiation-hardened TDI detectors, it captures razor-sharp sub-meter satellite imagery with zero motion blur at 7.6 km/s orbital velocity.',
  },
  {
    id: 'sentinel-sar',
    name: 'Sentinel-SAR X1',
    category: 'Synthetic Aperture Radar (SAR)',
    tagline: 'All-weather, 24/7 cloud-penetrating radar imaging',
    icon: Radio,
    accentColor: '#00FF88',
    tag: 'SAR · 1.0m RESOLUTION',
    gsdOrResolution: '1.0 m Spotlight / 3.0 m Stripmap',
    spectralRange: 'X-Band 9.65 GHz (3.1 cm wavelength)',
    swathWidth: '20 km (Spotlight) to 50 km (Stripmap)',
    massKg: 11.2,
    powerWatts: 240,
    busVolumeU: 6.0,
    dataRateMbps: 800,
    interfaceProtocol: '1000BASE-T Space Ethernet / 28V Switched Bus',
    operatingTemp: '-40°C to +80°C operational',
    trlLevel: 'TRL-9 Flight Proven',
    features: [
      'GaN solid-state active phased array antenna (AESA)',
      'Dual-polarization (HH + VV) for maritime oil slick and wake tracking',
      'Sub-centimeter interferometric repeat-pass phase coherence',
      'Deployable carbon-fiber planar reflector with automated tensioning',
    ],
    description:
      'Sentinel-SAR X1 penetrates dense tropical cloud cover, dust storms, and polar darkness. Designed for maritime sovereignty, EEZ enforcement, and border surveillance with sub-meter radar reflection mapping.',
  },
  {
    id: 'thermoscan',
    name: 'ThermoScan-L3',
    category: 'Cooled Long-Wave Infrared (LWIR)',
    tagline: 'Thermal signature tracking & early wildfire alert',
    icon: Flame,
    accentColor: '#FC6A18',
    tag: 'THERMAL · 3.2m GSD',
    gsdOrResolution: '3.2 m GSD @ 520 km',
    spectralRange: 'LWIR 8.0–12.5 µm (Calibrated Radiance)',
    swathWidth: '24.0 km continuous',
    massKg: 3.6,
    powerWatts: 28,
    busVolumeU: 2.5,
    dataRateMbps: 120,
    interfaceProtocol: 'SpaceWire ECSS / 28V Isolated Power',
    operatingTemp: '77 K detector via integrated micro-Stirling cooler',
    trlLevel: 'TRL-8 Space Qualified',
    features: [
      'Stirling micro-cryocooler maintaining 77 K detector focal plane',
      'Noise-Equivalent Temperature Difference (NETD) < 35 mK',
      'Instantaneous wildland fire perimeter & thermal plume extraction',
      'Industrial infrastructure heat leak & energy footprint classification',
    ],
    description:
      'ThermoScan-L3 continuously registers radiometric surface temperature with milli-kelvin thermal sensitivity. Identifies subterranean peat fires, wildfire ignition clusters, and active thermal anomalies even through heavy smoke layers.',
  },
  {
    id: 'neuralcore',
    name: 'NeuralCore-E2',
    category: 'Radiation-Tolerant Edge AI Co-Processor',
    tagline: 'Zero-latency autonomous computer vision on orbit',
    icon: Cpu,
    accentColor: '#9D00FF',
    tag: 'EDGE AI · 275 TOPS',
    gsdOrResolution: '275 TOPS INT8 / 68 TFLOPS FP16',
    spectralRange: 'Universal Deep Learning Accelerator (ONNX / TensorRT)',
    swathWidth: 'Line-rate payload processing (1.2 GB/s stream)',
    massKg: 0.9,
    powerWatts: 18,
    busVolumeU: 0.8,
    dataRateMbps: 1200,
    interfaceProtocol: 'PCIe Gen3 over SpaceVPX / 1000BASE-T',
    operatingTemp: '-40°C to +85°C latch-up immune',
    trlLevel: 'TRL-9 Flight Proven',
    features: [
      'Radiation-hardened neuromorphic tensor processing array',
      'Real-time YOLOv10-Space vessel detection & class identification',
      'Intelligent cloud-mask segmentation: filters out 78% of cloudy frames',
      'Autonomous downlink prioritization & encrypted tactical flash alerts',
    ],
    description:
      'NeuralCore-E2 transforms raw sensor data into actionable intelligence in orbit. Eliminates ground downlink bottlenecks by discarding uninformative cloud cover and running real-time target recognition in under 12 milliseconds.',
  },
  {
    id: 'linkmesh',
    name: 'LinkMesh-D2C',
    category: 'Direct-to-Cell & Tactical Mesh Gateway',
    tagline: 'Sovereign emergency comms & blue-force tracking',
    icon: Wifi,
    accentColor: '#00E5FF',
    tag: 'COMMS · 1,200 CHANNELS',
    gsdOrResolution: '3GPP Rel-17 NTN Compliant Gateway',
    spectralRange: 'S-band NTN (1980–2010 MHz) & UHF Tactical (400 MHz)',
    swathWidth: '1,200 km terrestrial footprint beam',
    massKg: 2.4,
    powerWatts: 55,
    busVolumeU: 2.0,
    dataRateMbps: 50,
    interfaceProtocol: 'Ethernet & SpaceWire Dual Host Router',
    operatingTemp: '-35°C to +75°C operational',
    trlLevel: 'TRL-8 Space Qualified',
    features: [
      '16-element digital beamforming electronically steered antenna',
      '1,200 simultaneous encrypted tactical voice / telemetry channels',
      'Direct unmodified smartphone emergency messaging compatibility',
      'Inter-satellite laser link (ISL) packet forwarding mesh',
    ],
    description:
      'LinkMesh-D2C establishes sovereign non-terrestrial network (NTN) communication links. Provides resilient command channels for defense assets, remote IoT sensor gateways, and disaster response teams cut off from ground networks.',
  },
];

const BUS_LIMITS = {
  maxMassKg: 24.0,
  maxPowerWatts: 320.0,
  maxVolumeU: 16.0,
};

export default function PayloadsPage() {
  const [selectedPayloadId, setSelectedPayloadId] = useState<string>('hypereye');
  const [mountedPayloads, setMountedPayloads] = useState<string[]>([
    'hypereye',
    'neuralcore',
  ]);
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation' | 'integration'>('overview');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activePayload = PAYLOAD_REGISTRY.find((p) => p.id === selectedPayloadId) || PAYLOAD_REGISTRY[0];

  // Bus Calculations
  const busStats = mountedPayloads.reduce(
    (acc, id) => {
      const p = PAYLOAD_REGISTRY.find((item) => item.id === id);
      if (p) {
        acc.mass += p.massKg;
        acc.power += p.powerWatts;
        acc.volume += p.busVolumeU;
        acc.dataVolumeGB += (p.dataRateMbps * 60 * 15) / (8 * 1024); // ~15 min imaging pass
      }
      return acc;
    },
    { mass: 0, power: 0, volume: 0, dataVolumeGB: 0 }
  );

  const isBusOverloaded =
    busStats.mass > BUS_LIMITS.maxMassKg ||
    busStats.power > BUS_LIMITS.maxPowerWatts ||
    busStats.volume > BUS_LIMITS.maxVolumeU;

  const togglePayloadMount = (id: string) => {
    if (mountedPayloads.includes(id)) {
      setMountedPayloads(mountedPayloads.filter((item) => item !== id));
    } else {
      setMountedPayloads([...mountedPayloads, id]);
    }
  };

  // Canvas Sensor Simulation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let tick = 0;

    const render = () => {
      tick++;
      const w = canvas.width;
      const h = canvas.height;

      // Dark background
      ctx.fillStyle = '#05070B';
      ctx.fillRect(0, 0, w, h);

      // Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      if (selectedPayloadId === 'hypereye') {
        // High-res Optical Simulation
        // Draw terrain contours
        ctx.strokeStyle = '#00A1FF33';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(w * 0.5 + Math.sin(tick * 0.02 + i) * 20, h * 0.5 + Math.cos(tick * 0.02 + i) * 15, 60 + i * 35, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Crosshairs
        ctx.strokeStyle = '#00A1FF';
        ctx.lineWidth = 1.5;
        const cx = w * 0.5;
        const cy = h * 0.5;
        ctx.beginPath();
        ctx.moveTo(cx - 30, cy);
        ctx.lineTo(cx + 30, cy);
        ctx.moveTo(cx, cy - 30);
        ctx.lineTo(cx, cy + 30);
        ctx.stroke();

        // Corner Reticles
        const rSize = 20;
        ctx.strokeRect(cx - 70, cy - 70, 140, 140);

        // Telemetry HUD text
        ctx.fillStyle = '#00A1FF';
        ctx.font = '11px monospace';
        ctx.fillText(`FOV: 14.8 KM | GSD: 0.50M | BAND: MULTISPECTRAL 8CH`, 20, 30);
        ctx.fillText(`TDI CADENCE: 12.4 KHZ | SNR: 142 DB | EXP: 1/8000s`, 20, 48);
        ctx.fillText(`LAT: +24.8192° | LON: +055.1294° | TIME: ${(tick * 0.05).toFixed(1)}s`, 20, h - 20);

      } else if (selectedPayloadId === 'sentinel-sar') {
        // SAR Radar Simulation
        const sweepY = (tick * 3) % h;
        // Radar Sweep Beam
        const grad = ctx.createLinearGradient(0, sweepY - 50, 0, sweepY);
        grad.addColorStop(0, 'rgba(0, 255, 136, 0)');
        grad.addColorStop(1, 'rgba(0, 255, 136, 0.35)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, Math.max(0, sweepY - 50), w, 50);

        // Sweep Line
        ctx.strokeStyle = '#00FF88';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, sweepY);
        ctx.lineTo(w, sweepY);
        ctx.stroke();

        // Synthetic Radar Return Blips
        const blips = [
          { x: w * 0.3, y: h * 0.4, label: 'VESSEL_ECHO_01 (182m)' },
          { x: w * 0.72, y: h * 0.65, label: 'COASTAL_RADAR_HARD' },
          { x: w * 0.55, y: h * 0.25, label: 'WAKE_DISTORTION' },
        ];

        blips.forEach((b) => {
          ctx.fillStyle = '#00FF88';
          ctx.beginPath();
          ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = 'rgba(0, 255, 136, 0.4)';
          ctx.beginPath();
          ctx.arc(b.x, b.y, 16 + Math.sin(tick * 0.1) * 4, 0, Math.PI * 2);
          ctx.stroke();

          ctx.font = '10px monospace';
          ctx.fillText(b.label, b.x + 12, b.y + 3);
        });

        // Overlay text
        ctx.fillStyle = '#00FF88';
        ctx.font = '11px monospace';
        ctx.fillText(`SAR X-BAND (9.65 GHz) | SPOTLIGHT MODE 1.0M`, 20, 30);
        ctx.fillText(`POLARIZATION: HH + VV | PHASE COHERENCE: 0.984`, 20, 48);
        ctx.fillText(`DOPPLER CENTROID: +340 HZ | BACKSCATTER: -14.2 dB`, 20, h - 20);

      } else if (selectedPayloadId === 'thermoscan') {
        // LWIR Thermal False Color Heatmap
        for (let i = 0; i < 4; i++) {
          const tx = w * 0.4 + i * 50;
          const ty = h * 0.45 + Math.sin(i + tick * 0.05) * 20;
          const heatGrad = ctx.createRadialGradient(tx, ty, 5, tx, ty, 70);
          heatGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          heatGrad.addColorStop(0.2, 'rgba(252, 106, 24, 0.8)');
          heatGrad.addColorStop(0.6, 'rgba(180, 20, 60, 0.4)');
          heatGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = heatGrad;
          ctx.beginPath();
          ctx.arc(tx, ty, 70, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#FC6A18';
          ctx.font = '10px monospace';
          ctx.fillText(`HOTSPOT_${i + 1}: ${(342.5 + i * 18.2).toFixed(1)} K`, tx - 30, ty - 45);
        }

        ctx.fillStyle = '#FC6A18';
        ctx.font = '11px monospace';
        ctx.fillText(`LWIR 8.0–12.5 µm | NETD: <35 mK | CRYOCOOLER: 77.2 K`, 20, 30);
        ctx.fillText(`CALIBRATED THERMAL ANOMALY PERIMETER DETECTED`, 20, 48);
        ctx.fillText(`SURFACE TEMP RANGE: -12.4°C TO +610.8°C`, 20, h - 20);

      } else if (selectedPayloadId === 'neuralcore') {
        // Edge AI Vision Inference Bounding Boxes
        const boxes = [
          { x: w * 0.25, y: h * 0.35, bw: 130, bh: 80, name: 'TANKER_VESSEL', conf: '99.2%' },
          { x: w * 0.62, y: h * 0.48, bw: 110, bh: 70, name: 'CARGO_CONTAINER', conf: '97.8%' },
        ];

        boxes.forEach((box) => {
          ctx.strokeStyle = '#9D00FF';
          ctx.lineWidth = 2;
          ctx.strokeRect(box.x, box.y, box.bw, box.bh);

          // Header Tag
          ctx.fillStyle = '#9D00FF';
          ctx.fillRect(box.x, box.y - 20, box.bw, 20);
          ctx.fillStyle = '#FFFFFF';
          ctx.font = '10px monospace';
          ctx.fillText(`${box.name} · ${box.conf}`, box.x + 6, box.y - 6);

          // Corner brackets
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 1;
          ctx.strokeRect(box.x - 2, box.y - 2, 8, 8);
          ctx.strokeRect(box.x + box.bw - 6, box.y + box.bh - 6, 8, 8);
        });

        // Scan HUD
        ctx.fillStyle = '#9D00FF';
        ctx.font = '11px monospace';
        ctx.fillText(`NEURALCORE-E2 ON-ORBIT INFERENCE: YOLOv10-SPACE`, 20, 30);
        ctx.fillText(`LATENCY: 8.4 MS | POWER: 18W | CLOUD FILTER: 81.4% SAVED`, 20, 48);
        ctx.fillText(`HARDWARE INT8 DLA ACTIVE · RAD-TOLERANT ECC ENGAGED`, 20, h - 20);

      } else if (selectedPayloadId === 'linkmesh') {
        // LinkMesh D2C Beamforming Pattern
        const cx = w * 0.5;
        const cy = h * 0.5;

        for (let ring = 1; ring <= 4; ring++) {
          ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 * (5 - ring)})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, ring * 45, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Steered beams
        for (let beam = 0; beam < 6; beam++) {
          const angle = (beam * Math.PI) / 3 + tick * 0.01;
          const bx = cx + Math.cos(angle) * 120;
          const by = cy + Math.sin(angle) * 120;

          ctx.strokeStyle = '#00E5FF';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(bx, by);
          ctx.stroke();

          ctx.fillStyle = '#00E5FF';
          ctx.beginPath();
          ctx.arc(bx, by, 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.font = '9px monospace';
          ctx.fillText(`CH_0${beam + 1} ACTIVE`, bx + 6, by + 4);
        }

        ctx.fillStyle = '#00E5FF';
        ctx.font = '11px monospace';
        ctx.fillText(`3GPP REL-17 NTN S-BAND BEAMFORMING GATEWAY`, 20, 30);
        ctx.fillText(`ACTIVE GROUND LINKS: 842 / 1,200 | MESH LATENCY: 22 MS`, 20, 48);
        ctx.fillText(`S-BAND DL: 2185.0 MHZ | UL: 2005.0 MHZ | EIRP: 34 dBW`, 20, h - 20);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedPayloadId]);

  const downloadDatasheet = () => {
    const data = {
      satelliteBusStandard: 'AeroGrid-28V-SpaceWire-Gen2',
      timestamp: new Date().toISOString(),
      activePayload: activePayload,
      mountedPayloads: mountedPayloads.map((id) => PAYLOAD_REGISTRY.find((p) => p.id === id)),
      busBudget: {
        totalMassKg: busStats.mass,
        maxMassKg: BUS_LIMITS.maxMassKg,
        totalPowerW: busStats.power,
        maxPowerW: BUS_LIMITS.maxPowerWatts,
        totalVolumeU: busStats.volume,
        maxVolumeU: BUS_LIMITS.maxVolumeU,
        status: isBusOverloaded ? 'MARGIN_EXCEEDED' : 'FLIGHT_QUALIFIED',
      },
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AEROGRID_PAYLOAD_DATASHEET_${activePayload.id.toUpperCase()}.json`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-white flex flex-col font-sans selection:bg-[#00A1FF]/30">
      {/* Top Aerospace Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-[#00A1FF]/20 bg-[#070B13]/90 backdrop-blur-md px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-[#787A85] hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            HOME
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-tight text-lg">
              AEROGRID<span className="text-[#00A1FF]">.</span>
            </span>
            <span className="text-[11px] font-mono uppercase bg-[#00A1FF]/10 text-[#00A1FF] border border-[#00A1FF]/30 px-2 py-0.5 rounded">
              MODULAR PAYLOAD ARCHITECTURE
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 text-xs font-mono text-[#787A85]">
          <span className="flex items-center gap-1.5 text-[#00FF88]">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            BUS STD: 28V DC · SpaceWire ECSS-E-ST-50-52C · GBE
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-xs font-mono uppercase bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/40 hover:bg-[#00FF88]/20 transition-all px-3 py-1.5 rounded-full"
          >
            <Activity className="w-3.5 h-3.5" />
            MISSION CONTROL
          </Link>
          <button
            onClick={downloadDatasheet}
            className="flex items-center gap-2 text-xs font-mono uppercase bg-[#00A1FF] text-black font-bold hover:bg-[#DAF2FF] transition-all px-3 py-1.5 rounded-full"
          >
            <Download className="w-3.5 h-3.5" />
            EXPORT SPECS (JSON)
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-8">
        {/* Hero Title & Live Bus Budget Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00A1FF] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" /> Flight-Qualified Modular Payloads · Zero Custom NRE
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Sovereign Orbital Payloads
            </h1>
            <p className="text-[#9BA1B0] text-sm md:text-base leading-relaxed max-w-2xl">
              Equip your sovereign satellite bus with swappable, pre-qualified optical, SAR, thermal,
              edge-AI, and direct-to-cell communication modules. All payloads feature universal mechanical,
              thermal, and electrical interfaces for rapid 6-day flightline integration.
            </p>
          </div>

          {/* Bus Margin Meter Card */}
          <div className="bg-[#0B101B]/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#787A85] flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-[#00A1FF]" /> Bus Allocation ({mountedPayloads.length}/5 Mounted)
              </span>
              <span
                className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                  isBusOverloaded
                    ? 'bg-[#FF3B30]/20 text-[#FF3B30] border border-[#FF3B30]/40'
                    : 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/40'
                }`}
              >
                {isBusOverloaded ? 'MARGIN EXCEEDED' : 'FLIGHT QUALIFIED'}
              </span>
            </div>

            {/* Mass Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#9BA1B0] flex items-center gap-1.5">
                  <Weight className="w-3 h-3 text-[#00A1FF]" /> Mass Budget
                </span>
                <span className={busStats.mass > BUS_LIMITS.maxMassKg ? 'text-red-400 font-bold' : 'text-white'}>
                  {busStats.mass.toFixed(1)} / {BUS_LIMITS.maxMassKg.toFixed(1)} kg
                </span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    busStats.mass > BUS_LIMITS.maxMassKg ? 'bg-red-500' : 'bg-[#00A1FF]'
                  }`}
                  style={{ width: `${Math.min(100, (busStats.mass / BUS_LIMITS.maxMassKg) * 100)}%` }}
                />
              </div>
            </div>

            {/* Power Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#9BA1B0] flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#00FF88]" /> Peak Power
                </span>
                <span className={busStats.power > BUS_LIMITS.maxPowerWatts ? 'text-red-400 font-bold' : 'text-white'}>
                  {busStats.power.toFixed(0)} / {BUS_LIMITS.maxPowerWatts.toFixed(0)} W
                </span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    busStats.power > BUS_LIMITS.maxPowerWatts ? 'bg-red-500' : 'bg-[#00FF88]'
                  }`}
                  style={{ width: `${Math.min(100, (busStats.power / BUS_LIMITS.maxPowerWatts) * 100)}%` }}
                />
              </div>
            </div>

            {/* Volume Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#9BA1B0] flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3 text-[#FC6A18]" /> Form Factor
                </span>
                <span className={busStats.volume > BUS_LIMITS.maxVolumeU ? 'text-red-400 font-bold' : 'text-white'}>
                  {busStats.volume.toFixed(1)} / {BUS_LIMITS.maxVolumeU.toFixed(1)} U
                </span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    busStats.volume > BUS_LIMITS.maxVolumeU ? 'bg-red-500' : 'bg-[#FC6A18]'
                  }`}
                  style={{ width: `${Math.min(100, (busStats.volume / BUS_LIMITS.maxVolumeU) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5-Payload Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {PAYLOAD_REGISTRY.map((payload) => {
            const Icon = payload.icon;
            const isSelected = selectedPayloadId === payload.id;
            const isMounted = mountedPayloads.includes(payload.id);

            return (
              <button
                key={payload.id}
                onClick={() => setSelectedPayloadId(payload.id)}
                className={`text-left p-4 rounded-xl border transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#0D1527] border-[#00A1FF] shadow-[0_0_25px_rgba(0,161,255,0.2)]'
                    : 'bg-[#080C14] border-white/10 hover:border-white/30'
                }`}
              >
                {/* Accent glow corner */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-20 transition-opacity"
                  style={{ backgroundColor: payload.accentColor }}
                />

                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${payload.accentColor}20`, color: payload.accentColor }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePayloadMount(payload.id);
                    }}
                    title={isMounted ? 'Unmount from satellite bus' : 'Mount onto satellite bus'}
                    className={`text-[9px] font-mono px-2 py-0.5 rounded cursor-pointer transition-colors ${
                      isMounted
                        ? 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/40'
                        : 'bg-white/5 text-[#787A85] hover:text-white'
                    }`}
                  >
                    {isMounted ? 'MOUNTED' : '+ MOUNT'}
                  </span>
                </div>

                <div className="font-bold text-sm text-white group-hover:text-[#00A1FF] transition-colors">
                  {payload.name}
                </div>
                <div className="text-[11px] font-mono text-[#787A85] mt-0.5 truncate">{payload.tag}</div>
              </button>
            );
          })}
        </div>

        {/* Active Payload Detail & Live Sensor Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Sensor HUD Simulator (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#080C14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Simulator Header */}
              <div className="px-5 py-3.5 border-b border-white/10 bg-[#0A0F1D] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4" style={{ color: activePayload.accentColor }} />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                    Live Sensor Synthesizer: {activePayload.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-[#787A85]">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" /> 60 FPS
                  </span>
                  <span>PROCEDURAL SIM</span>
                </div>
              </div>

              {/* Canvas Preview */}
              <div className="relative aspect-[16/10] bg-black">
                <canvas
                  ref={canvasRef}
                  width={640}
                  height={400}
                  className="w-full h-full object-cover block"
                />

                {/* Overlaid Sensor Spec Pill */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-right">
                  <div className="text-[10px] font-mono text-[#787A85]">SWATH COVERAGE</div>
                  <div className="text-xs font-bold text-white font-mono">{activePayload.swathWidth}</div>
                </div>
              </div>

              {/* Simulator Footer Metrics */}
              <div className="p-4 grid grid-cols-3 gap-3 bg-[#0A0F1D] border-t border-white/10 text-center font-mono text-xs">
                <div>
                  <div className="text-[10px] text-[#787A85] uppercase">RESOLUTION / GSD</div>
                  <div className="font-bold text-white mt-0.5">{activePayload.gsdOrResolution}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#787A85] uppercase">DOWNLINK DATA RATE</div>
                  <div className="font-bold text-[#00A1FF] mt-0.5">{activePayload.dataRateMbps} Mbps</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#787A85] uppercase">OPERATING TEMP</div>
                  <div className="font-bold text-[#00FF88] mt-0.5">{activePayload.operatingTemp.split(' ')[0]}</div>
                </div>
              </div>
            </div>

            {/* Feature Bullet Points */}
            <div className="bg-[#080C14] border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-mono uppercase text-[#787A85] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00A1FF]" /> Aerospace Flight Qualification Specs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activePayload.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#CBD0DC] bg-white/[0.02] border border-white/5 p-3 rounded-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Payload Engineering Specs (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#080C14] border border-white/10 rounded-2xl p-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#00A1FF] uppercase tracking-wider font-semibold">
                    {activePayload.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white font-bold">
                    {activePayload.trlLevel}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-white">{activePayload.name}</h2>
                <p className="text-xs text-[#787A85] font-mono mt-1">{activePayload.tagline}</p>
                <p className="text-sm text-[#9BA1B0] mt-3 leading-relaxed">{activePayload.description}</p>
              </div>

              {/* Technical Spec Matrix */}
              <div className="border-t border-b border-white/10 py-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#787A85]">Payload Mass</span>
                  <span className="text-white font-bold">{activePayload.massKg} kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#787A85]">Peak Power Draw</span>
                  <span className="text-white font-bold">{activePayload.powerWatts} W</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#787A85]">Bus Envelope Volume</span>
                  <span className="text-white font-bold">{activePayload.busVolumeU} U</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#787A85]">Spectral Coverage</span>
                  <span className="text-white font-bold text-right max-w-[200px] truncate">
                    {activePayload.spectralRange}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#787A85]">Standard Bus Interface</span>
                  <span className="text-[#00A1FF] font-bold text-right max-w-[220px] truncate">
                    {activePayload.interfaceProtocol}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => togglePayloadMount(activePayload.id)}
                  className={`w-full py-3 px-4 rounded-xl font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    mountedPayloads.includes(activePayload.id)
                      ? 'bg-red-500/15 border border-red-500/40 text-red-400 hover:bg-red-500/25'
                      : 'bg-[#00FF88] text-black hover:bg-[#7CFFB2]'
                  }`}
                >
                  {mountedPayloads.includes(activePayload.id) ? (
                    <>
                      <AlertTriangle className="w-4 h-4" /> Unmount from Sovereign Bus
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" /> Mount Payload onto Sovereign Bus
                    </>
                  )}
                </button>

                <Link
                  href="/dashboard"
                  className="w-full py-3 px-4 rounded-xl font-bold font-mono text-xs uppercase tracking-wider bg-[#00A1FF]/10 border border-[#00A1FF]/30 text-[#00A1FF] hover:bg-[#00A1FF]/20 flex items-center justify-center gap-2 transition-all"
                >
                  Schedule Pass in Mission Control <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sovereign Payload Philosophy Card */}
            <div className="bg-gradient-to-br from-[#0B1527] to-[#070B13] border border-[#00A1FF]/20 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00A1FF] font-bold">
                <Gauge className="w-4 h-4" /> 180-Day Fixed Flightline Assembly
              </div>
              <p className="text-xs text-[#9BA1B0] leading-relaxed">
                Every sensor module conforms to the AeroGrid universal mechanical harness. No bespoke structural
                redesign or launch requalification required — swap payloads up to T-60 days before rideshare encapsulation.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#05070B] py-8 px-6 text-center text-xs font-mono text-[#787A85] mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>AEROGRID OS · SOVEREIGN SATELLITE ARCHITECTURE · ITAR & ECSS COMPLIANT</div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Constellation Landing
            </Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Live Mission Control
            </Link>
            <a
              href="https://github.com/Shubham-dev-stack/AeroGrid-OS"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
