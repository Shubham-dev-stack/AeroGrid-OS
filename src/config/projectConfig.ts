export interface MissionMetrics {
  unitsCount: number;
  revisitDisplay: string;
  totalCostMillions: number;
}

export interface StageConfig {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  specs: { label: string; value: string }[];
}

export interface PayloadConfig {
  id: string;
  name: string;
  tag: string;
  desc: string;
  weightKg: number;
  powerWatts: number;
  features: string[];
  status: "ONLINE" | "STANDBY" | "ACTIVE";
}

export interface TelemetryMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  numericVal: number;
  maxVal: number;
  status: "nominal" | "warning" | "optimal";
  chartData: number[];
}

export const projectConfig = {
  metadata: {
    title: "AeroGrid OS",
    badge: "MISSION READY v3.8",
    tagline: "Fixed Cost. Autonomous Swarm Deployment.",
    headline: "RAPID RESPONSE MISSIONS SIMPLIFIED",
    subheadline: "Next-Gen Autonomous Aerospace Infrastructure",
    description: "Deploy autonomous airborne fleets and satellite clusters in under 6 minutes. Standardized modular payloads, live orbital telemetry, and transparent algorithmic cost modeling.",
    systemStatus: "ALL SYSTEMS NOMINAL",
    version: "v3.8.4-PROD",
    telemetryUptime: "99.998%",
    activeNodes: 1420,
    constellationCoverage: "GLOBAL LOW-EARTH & SUB-ORBITAL"
  },
  theme: {
    accentColor: "#00A1FF", // Laser Electric Blue
    alertColor: "#FC6A18",  // Mars Orbital Orange
    glowColor: "#DAF2FF",   // High-light Bloom
    baseModelPath: "/models/scene.glb",
  },
  stages: [
    {
      id: "define",
      index: "01",
      title: "Define Requirements",
      subtitle: "Area & Target Specs",
      badge: "STAGE 01 // MISSION RECON",
      description: "Define geospatial bounding boxes, resolution constraints, and required revisit frequency with sub-meter spatial precision.",
      specs: [
        { label: "Target Area", value: "Up to 10,000 km²" },
        { label: "Temporal Resolution", value: "Continuous / On-Demand" },
        { label: "Spatial Resolution", value: "Sub-5cm GSD" },
        { label: "Tasking Latency", value: "< 90 Seconds" }
      ]
    },
    {
      id: "integrate",
      index: "02",
      title: "Payload Integration",
      subtitle: "Multi-Sensor Modules",
      badge: "STAGE 02 // HARDWARE MATING",
      description: "Plug-and-play standardized aerospace sensor bays. Thermal LWIR, LiDAR point clouds, 5G ad-hoc mesh, or multispectral arrays.",
      specs: [
        { label: "Interface Standard", value: "AeroGrid Universal Bus v4" },
        { label: "Bus Power Rail", value: "28V Regulated / 350W Peak" },
        { label: "Harness Swapping", value: "< 12 Minutes Hot-Plug" },
        { label: "Vibration Standard", value: "MIL-STD-810H Shock Tested" }
      ]
    },
    {
      id: "launch",
      index: "03",
      title: "Autonomous Launch",
      subtitle: "Rapid Fleet Scramble",
      badge: "STAGE 03 // VECTOR DEPLOYMENT",
      description: "Automated swarm scrambling and catapult or orbital injection. Zero human-in-the-loop coordination for instantaneous fleet takeoff.",
      specs: [
        { label: "Scramble Time", value: "< 180 Seconds" },
        { label: "Swarm Size", value: "1 to 500+ Coordinated Nodes" },
        { label: "Climb Rate", value: "32 m/s Vertical Vector" },
        { label: "Collision Avoidance", value: "Decentralized Swarm Mesh" }
      ]
    },
    {
      id: "ops",
      index: "04",
      title: "Mission Control Ops",
      subtitle: "Real-time Telemetry",
      badge: "STAGE 04 // FLIGHT GOVERNANCE",
      description: "Live bi-directional telemetry streaming, dynamic route recalculation, AI edge inference on-board, and real-time downlink feeds.",
      specs: [
        { label: "Telemetry Latency", value: "< 18ms End-to-End" },
        { label: "Encryption", value: "Post-Quantum Dilithium AES-256" },
        { label: "Ground Relays", value: "48 Global Ground Stations" },
        { label: "Edge Compute", value: "110 TOPS Neural Engine" }
      ]
    }
  ] as StageConfig[],
  payloads: [
    {
      id: "thermal",
      name: "Thermal IR Sensor",
      tag: "LWIR-800",
      desc: "Long-wave calibrated infrared optical array for high-contrast thermal signatures, wildfire tracking, and night stealth reconnaissance.",
      weightKg: 1.85,
      powerWatts: 14.2,
      features: ["640x512 Uncooled Microbolometer", "0.03°C Thermal Sensitivity", "8-14μm Spectral Band", "Onboard Radiometric Calibration"],
      status: "ONLINE"
    },
    {
      id: "lidar",
      name: "3D LiDAR Scanner",
      tag: "LIDAR-360X",
      desc: "Solid-state topological laser radar delivering dense point cloud generation at 400,000 pulses/sec through dense canopy and fog.",
      weightKg: 2.4,
      powerWatts: 32.5,
      features: ["400k pulses/sec Repetition", "150m Range @ 10% Albedo", "Multi-Return Capability (up to 4)", "Real-Time SLAM Point Reconstruction"],
      status: "ONLINE"
    },
    {
      id: "optical",
      name: "4K Multispectral",
      tag: "RGB-MS-900",
      desc: "Ultra-high resolution optical surveillance with 6 narrow spectral bands for agricultural NDVI, maritime vessel detection, and camouflage penetration.",
      weightKg: 1.2,
      powerWatts: 18.0,
      features: ["4K Global Shutter CMOS", "6 Dispersed Narrow Bands", "0.8cm GSD @ 100m AGL", "Real-Time Lossless HEVC Compression"],
      status: "ACTIVE"
    },
    {
      id: "relay",
      name: "5G Mesh Relay",
      tag: "RF-MESH-5G",
      desc: "Ad-hoc encrypted tactical communications transceiver establishing self-healing broadband networks for remote frontline teams.",
      weightKg: 0.95,
      powerWatts: 24.0,
      features: ["Sub-6GHz & mmWave Capable", "250 Mbps Dynamic Mesh Throughput", "Post-Quantum Encrypted Hop", "Autonomous Node Self-Healing"],
      status: "ONLINE"
    }
  ] as PayloadConfig[],
  telemetryMetrics: [
    {
      id: "charge-rate",
      label: "Charge Rate",
      value: "4.2A",
      unit: "Nominal",
      numericVal: 4.2,
      maxVal: 6.0,
      status: "nominal",
      chartData: [3.8, 3.9, 4.1, 4.0, 4.2, 4.2, 4.1, 4.3, 4.2]
    },
    {
      id: "dod",
      label: "Battery DoD",
      value: "28%",
      unit: "Per Cycle",
      numericVal: 28,
      maxVal: 100,
      status: "optimal",
      chartData: [22, 23, 25, 26, 27, 28, 28, 28, 28]
    },
    {
      id: "downlink",
      label: "Data Downlink",
      value: "120 Mbps",
      unit: "Active",
      numericVal: 120,
      maxVal: 150,
      status: "nominal",
      chartData: [98, 105, 112, 118, 120, 119, 121, 120, 122]
    },
    {
      id: "rf-power",
      label: "RF Transmit",
      value: "32 dBm",
      unit: "Encrypted",
      numericVal: 32,
      maxVal: 40,
      status: "nominal",
      chartData: [30, 31, 31, 32, 32, 32, 32, 33, 32]
    }
  ] as TelemetryMetric[],
  pricing: {
    unitName: "Swarm Nodes",
    unitCostMillions: 0.6, // Reverse-engineered default ($0.6M / unit for orbital/swarm scale)
    traditionalCostComparison: "$2,500 / hr",
    platformCostComparison: "$45 / hr",
    slaGuaranteed: "99.95% Task Completion SLA",
    supportTier: "24/7 Flight Operations Center Support"
  }
};

/**
 * Mathematical calculation for the Mission Calculator
 * Reverse-engineered directly from EnduroSat's production bundle.
 */
export function calculateMissionSpecs(
  sliderProgress: number,
  customUnitCost = projectConfig.pricing.unitCostMillions
): MissionMetrics {
  // sliderProgress is between 0.0 (maximum revisit frequency / fastest response) and 1.0 (minimum frequency)
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
  const totalCostMillions = parseFloat((unitsCount * customUnitCost).toFixed(1));

  return { unitsCount, revisitDisplay, totalCostMillions };
}
