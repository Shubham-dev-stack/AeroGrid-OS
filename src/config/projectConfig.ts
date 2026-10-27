export interface MissionMetrics {
  unitsCount: number;
  revisitDisplay: string;
  totalCostMillions: number;
}

export interface StageConfig {
  id: string;
  index: string;
  title: string;
  timeline: string;
  subtitle: string;
  badge: string;
  description: string;
  specs: { label: string; value: string }[];
}

export interface PayloadConfig {
  id: string;
  codename: string;
  name: string;
  category: string;
  tag: string;
  desc: string;
  rangeGsd: string;
  massKg: number;
  weightKg: number;
  powerAvgW: number;
  powerPeakW: number;
  powerWatts: number;
  dataRate: string;
  features: string[];
  applications: string;
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

export interface CaseStudy {
  id: string;
  title: string;
  customer: string;
  fleet: string;
  revisit: string;
  outcome: string;
}

export const projectConfig = {
  metadata: {
    title: "AeroGrid OS",
    badge: "MISSION READY · 180 DAYS TO ORBIT",
    tagline: "ORBIT ON DEMAND. OWNED BY YOU.",
    headline: "Deploy a Sovereign Constellation in 180 Days.",
    subheadline: "From mission definition to live API in two quarters",
    description: "Standardized modular payloads, rideshare launch and autonomous orbit insertion, all under one fixed-cost contract with no overruns and no bespoke satellite program.",
    systemStatus: "LINK: NOMINAL · AES-256: LOCKED",
    version: "v4.0-ORBITAL",
    telemetryUptime: "99.999%",
    activeNodes: 180,
    constellationCoverage: "520 KM SUN-SYNCHRONOUS ORBIT"
  },
  valuePills: [
    { id: "01", value: "180 DAYS", label: "Contract to first light" },
    { id: "02", value: "−91%", label: "Total cost vs. legacy programs" },
    { id: "03", value: "10 Hz", label: "Live telemetry stream to your API" }
  ],
  theme: {
    accentColor: "#00A1FF", // Laser Electric Blue
    alertColor: "#FC6A18",  // Mars Orbital Orange
    glowColor: "#DAF2FF",   // High-light Bloom
    baseModelPath: "/assets/models/scene.glb",
  },
  stages: [
    {
      id: "define",
      index: "01",
      title: "Mission Definition & Orbit Synthesis",
      timeline: "T+0 to T+3 weeks",
      subtitle: "Area & Target Specs",
      badge: "STAGE 01 // ORBIT SYNTHESIS",
      description: "Our orbit synthesis engine converts your area of interest, revisit target and sensor mix into an optimized plane, phasing and fleet-size solution. Outputs locked mission architecture, link budget, and fixed-price quote in 21 days.",
      specs: [
        { label: "Synthesis Window", value: "21 Days Flat" },
        { label: "Target Orbit", value: "520 km SSO (97.5°)" },
        { label: "Phasing Optimization", value: "Autonomous Constellation Plan" },
        { label: "Fixed-Price Quote", value: "$3.2M / Satellite All-In" }
      ]
    },
    {
      id: "integrate",
      index: "02",
      title: "Modular Payload Assembly & AIT",
      timeline: "T+3 to T+20 weeks",
      subtitle: "Multi-Sensor Modules",
      badge: "STAGE 02 // FLIGHT-LINE AIT",
      description: "Qualified payload modules (optical, LWIR, SAR, edge-AI, RF) mount to a standardized 28 V / SpaceWire / Ethernet bus interface. Parallel thermal-vacuum, vibration and EMC testing on a flight-line cadence of one satellite every 6 days.",
      specs: [
        { label: "Bus Interface", value: "28V / SpaceWire / GigE" },
        { label: "Production Cadence", value: "1 Satellite / 6 Days" },
        { label: "AIT Protocols", value: "TVAC, Random Vibe, EMC" },
        { label: "Payload Modularity", value: "Zero Custom NRE Required" }
      ]
    },
    {
      id: "launch",
      index: "03",
      title: "Rideshare Launch & Autonomous Orbit Insertion",
      timeline: "T+20 to T+24 weeks",
      subtitle: "Dedicated Rideshare",
      badge: "STAGE 03 // VECTOR INSERTION",
      description: "Dedicated rideshare slot to 520 km SSO. Post-separation, onboard GNC autonomously detumbles, deploys solar arrays, acquires GNSS lock and executes electric-propulsion phasing burns with zero ground intervention.",
      specs: [
        { label: "Launch Slot", value: "Dedicated Rideshare 520 km" },
        { label: "GNC Autonomous Mode", value: "Auto Detumble & Deploy" },
        { label: "Propulsion", value: "High-ISP Electric Phasing" },
        { label: "Ground Intervention", value: "Zero (100% Autonomous)" }
      ]
    },
    {
      id: "ops",
      index: "04",
      title: "Real-time Cloud Operations & Direct-to-API Downlink",
      timeline: "T+24 weeks onward",
      subtitle: "Real-time Cloud Ops",
      badge: "STAGE 04 // ZERO-TRUST OPS",
      description: "Tasking requests enter via REST/gRPC and compile into on-orbit schedules in 90 seconds. Edge-AI-filtered products downlink over encrypted X-band and deliver to your cloud bucket or API in under 5 minutes from ground contact.",
      specs: [
        { label: "Tasking Compilation", value: "< 90 Seconds" },
        { label: "Downlink Encryption", value: "AES-256-GCM (CCSDS)" },
        { label: "Ground Pass Latency", value: "< 5 Mins to Cloud API" },
        { label: "Downlink Speed", value: "800 Mbps (1.2 Gbps Peak)" }
      ]
    }
  ] as StageConfig[],
  payloads: [
    {
      id: "hypereye",
      codename: "HyperEye-V2",
      tag: "HyperEye-V2",
      name: "Optical Multispectral Imager",
      category: "Optical Multispectral",
      desc: "Precision crop-stress mapping, infrastructure change detection, and defense order-of-battle optical reconnaissance.",
      rangeGsd: "0.5 m PAN / 2.0 m MS (8 bands), 12 km swath",
      massKg: 24,
      weightKg: 24,
      powerAvgW: 38,
      powerPeakW: 85,
      powerWatts: 38,
      dataRate: "1.4 Gbps raw → 180 Mbps compressed",
      features: ["0.5m PAN / 2.0m Multispectral", "8 Dispersed Spectral Bands", "12 km Swath Width", "1.4 Gbps DVB-S2X Downlink"],
      applications: "Precision crop-stress mapping, infrastructure change detection, defense order-of-battle imagery.",
      status: "ACTIVE"
    },
    {
      id: "thermoscan",
      codename: "ThermoScan-L3",
      tag: "ThermoScan-L3",
      name: "Thermal Infrared Radiometer",
      category: "Thermal Infrared (LWIR 8–12 µm)",
      desc: "Wildfire ignition & perimeter tracking, industrial heat-leak audits, and night-time vessel and vehicle detection.",
      rangeGsd: "30 m GSD, 60 km swath, NETD < 50 mK",
      massKg: 9.5,
      weightKg: 9.5,
      powerAvgW: 22,
      powerPeakW: 30,
      powerWatts: 22,
      dataRate: "85 Mbps",
      features: ["30m GSD LWIR (8–12 µm)", "60 km Swath Width", "NETD < 50 mK Thermal Sensitivity", "Automated Flame Segmentation"],
      applications: "Wildfire ignition & perimeter tracking, industrial heat-leak audits, night-time vessel and vehicle detection.",
      status: "ONLINE"
    },
    {
      id: "sentinel-sar",
      codename: "Sentinel-SAR X1",
      tag: "Sentinel-SAR X1",
      name: "Synthetic Aperture Radar",
      category: "Synthetic Aperture Radar (X-band, 9.65 GHz)",
      desc: "Day/night, all-weather maritime border surveillance, dark-vessel detection, flood extent mapping, and subsidence monitoring.",
      rangeGsd: "1.0 m stripmap (20 km swath) / 0.5 m spotlight (5×5 km)",
      massKg: 58,
      weightKg: 58,
      powerAvgW: 120,
      powerPeakW: 1200,
      powerWatts: 120,
      dataRate: "1.2 Gbps raw",
      features: ["X-band (9.65 GHz) Center Freq", "1.0m Stripmap / 0.5m Spotlight", "All-Weather Day/Night Penetration", "Dark-Vessel AIS Correlator"],
      applications: "Day/night, all-weather maritime border surveillance, dark-vessel detection, flood extent mapping, subsidence monitoring.",
      status: "ONLINE"
    },
    {
      id: "neuralcore",
      codename: "NeuralCore-E2",
      tag: "NeuralCore-E2",
      name: "Edge-AI Neural Processor",
      category: "Edge-AI Neural Inference",
      desc: "Onboard ship detection, flame detection and change triggers. Immediate tactical alert downlinks in minutes with 98% bandwidth reduction.",
      rangeGsd: "64 TOPS @ 15 W, < 200 ms inference",
      massKg: 1.8,
      weightKg: 1.8,
      powerAvgW: 15,
      powerPeakW: 25,
      powerWatts: 15,
      dataRate: "2 Mbps output (98% downlink reduction)",
      features: ["64 TOPS Dedicated Neural Engine", "< 200 ms Frame Inference", "Zero-Trust Encrypted Enclave", "Autonomous Cueing Pipeline"],
      applications: "Onboard ship detection, flame detection and change triggers. Immediate tactical alert downlinks in minutes.",
      status: "ONLINE"
    },
    {
      id: "linkmesh",
      codename: "LinkMesh-D2C",
      tag: "LinkMesh-D2C",
      name: "Direct-to-Cell RF Mesh",
      category: "Direct-to-Cell RF Mesh (3GPP NTN NB-IoT)",
      desc: "Backhaul for remote IoT sensors, asset trackers, and emergency SMS messaging where terrestrial cell coverage is absent.",
      rangeGsd: "~500 km beam footprint, 700–900 MHz",
      massKg: 14,
      weightKg: 14,
      powerAvgW: 60,
      powerPeakW: 110,
      powerWatts: 60,
      dataRate: "40 Mbps aggregate per satellite",
      features: ["3GPP Release 17 NTN Protocol", "700–900 MHz Frequency Band", "~500 km Ground Footprint Beam", "Decentralized Orbital Mesh Relay"],
      applications: "Backhaul for remote sensors, asset trackers and emergency SMS where terrestrial coverage is absent.",
      status: "STANDBY"
    }
  ] as PayloadConfig[],
  telemetryMetrics: [
    {
      id: "altitude",
      label: "Orbital Altitude",
      value: "520 km",
      unit: "SSO (97.5°)",
      numericVal: 520,
      maxVal: 600,
      status: "nominal",
      chartData: [519.8, 520.1, 520.0, 520.2, 520.0, 519.9, 520.1, 520.0]
    },
    {
      id: "velocity",
      label: "Orbital Velocity",
      value: "7.605 km/s",
      unit: "94.9 min period",
      numericVal: 7.605,
      maxVal: 8.0,
      status: "nominal",
      chartData: [7.605, 7.605, 7.605, 7.605, 7.605, 7.605, 7.605]
    },
    {
      id: "dod",
      label: "Battery DoD",
      value: "18%",
      unit: "Nominal (32% SAR Peak)",
      numericVal: 18,
      maxVal: 40,
      status: "optimal",
      chartData: [16, 17, 18, 18, 19, 18, 18, 18]
    },
    {
      id: "downlink",
      label: "X-Band Downlink",
      value: "800 Mbps",
      unit: "1.2 Gbps Peak (DVB-S2X)",
      numericVal: 800,
      maxVal: 1200,
      status: "nominal",
      chartData: [780, 795, 800, 810, 805, 800, 802]
    },
    {
      id: "solar-bus",
      label: "Solar Bus Output",
      value: "640 W",
      unit: "28V Regulated",
      numericVal: 640,
      maxVal: 700,
      status: "optimal",
      chartData: [620, 635, 640, 642, 640, 638, 640]
    }
  ] as TelemetryMetric[],
  groundStations: [
    { name: "Svalbard (SvalSat)", lat: "78.2°N", avgPass: "9.2 min", passesPerDay: 11, volumeGb: 55 },
    { name: "Inuvik", lat: "68.4°N", avgPass: "8.6 min", passesPerDay: 8, volumeGb: 52 },
    { name: "Punta Arenas", lat: "53.2°S", avgPass: "7.8 min", passesPerDay: 5, volumeGb: 47 },
    { name: "Troll (Antarctica)", lat: "72.0°S", avgPass: "9.0 min", passesPerDay: 10, volumeGb: 54 },
    { name: "Awarua (NZ)", lat: "46.5°S", avgPass: "7.2 min", passesPerDay: 4, volumeGb: 43 }
  ],
  caseStudies: [
    {
      id: "case-maritime",
      title: "Tactical Maritime & Border Surveillance",
      customer: "NATO Member State Coast Guard & Border Agency (1.2M km² EEZ)",
      fleet: "12 Satellites (8× Sentinel-SAR X1, 4× HyperEye-V2) + NeuralCore-E2",
      revisit: "60 Minutes full EEZ revisit",
      outcome: "94% dark-vessel detection rate for vessels ≥ 15m. Alert latency < 4 minutes. Cut unnecessary patrol sorties by 38% in Year 1."
    },
    {
      id: "case-disaster",
      title: "Critical Infrastructure & Disaster Early Warning",
      customer: "National Utility & Civil Protection Consortium (340,000 km² forest/grid)",
      fleet: "24 Satellites (12× ThermoScan-L3, 8× HyperEye-V2, 4× Sentinel-SAR X1)",
      revisit: "30 Minutes thermal layer revisit",
      outcome: "Wildfire ignitions ≥ 100 m² detected within 6 minutes. Smoke-penetrating SAR/LWIR fusion enables real-time evacuation coordination."
    },
    {
      id: "case-agriculture",
      title: "High-Frequency Environmental & Agricultural Intelligence",
      customer: "Agri-Insurance & Commodity Trading Group (3.1M hectares globally)",
      fleet: "4× HyperEye-V2 Satellites",
      revisit: "6 Hours (daylight-limited)",
      outcome: "Field-level crop-stress indices delivered every pass. Yield forecasts achieve ±4% accuracy 6 weeks pre-harvest; claims cycle reduced from weeks to 48 hrs."
    }
  ] as CaseStudy[],
  pricing: {
    unitName: "Satellites",
    unitCostMillions: 3.2, // $3.2M turn-key per satellite (build + rideshare + ground + 5yr ops)
    legacyUnitCostMillions: 38.0,
    legacyFixedOverheadMillions: 25.0,
    traditionalCostComparison: "$38M+ Sat + $25M Ground Program",
    platformCostComparison: "$3.2M All-In Fixed Cost (91% to 95% Savings)",
    slaGuaranteed: "99.99% Orbit Tasking & Downlink SLA",
    supportTier: "24/7 Global Space Operations Center Support",
    revisitTiers: [
      { revisit: "24 h", satsSarLwir: 1, satsOptical: 2, planes: "Single plane", aeroGridCost: "$3.2M", legacyCost: "$63M", savings: "94.9%" },
      { revisit: "6 h", satsSarLwir: 2, satsOptical: 4, planes: "1–2 planes", aeroGridCost: "$6.4M", legacyCost: "$101M", savings: "93.7%" },
      { revisit: "3 h", satsSarLwir: 4, satsOptical: 8, planes: "2 planes", aeroGridCost: "$12.8M", legacyCost: "$177M", savings: "92.8%" },
      { revisit: "1 h", satsSarLwir: 12, satsOptical: 24, planes: "4 planes × 3", aeroGridCost: "$38.4M", legacyCost: "$481M", savings: "92.0%" },
      { revisit: "30 min", satsSarLwir: 24, satsOptical: 48, planes: "6 planes × 4", aeroGridCost: "$76.8M", legacyCost: "$937M", savings: "91.8%" },
      { revisit: "15 min", satsSarLwir: 48, satsOptical: 96, planes: "8 planes × 6", aeroGridCost: "$153.6M", legacyCost: "$1,849M", savings: "91.7%" }
    ],
    guarantee: "One price. Build, launch, insurance, five years of operations. No change orders, no overruns."
  }
};

/**
 * Mathematical calculation for the Mission Calculator
 * Revisit equation: T_rev ≈ 24h / (N * k)
 * k = 2 for SAR / LWIR (day/night accesses)
 */
export function calculateMissionSpecs(
  sliderProgress: number,
  customUnitCost = projectConfig.pricing.unitCostMillions
): MissionMetrics {
  const clampedP = Math.max(0, Math.min(1, sliderProgress));

  // 1. Units/Satellites Count (Smooth exponential progression from 1 to 48 satellites)
  const unitsCount = Math.round(Math.pow(1 - clampedP, 3) * 47) + 1;

  // 2. Revisit Time in hours / minutes based on N
  // T_rev = 24 / (N * 2) hours
  const hoursRevisit = 24 / (unitsCount * 2);
  let revisitDisplay = "";
  if (hoursRevisit < 1) {
    const mins = Math.max(15, Math.round(hoursRevisit * 60));
    revisitDisplay = `${mins}M`;
  } else {
    revisitDisplay = `${Math.round(hoursRevisit * 10) / 10}H`;
  }

  // 3. Fixed Unit Cost ($3.2M per unit)
  const totalCostMillions = parseFloat((unitsCount * customUnitCost).toFixed(1));

  return { unitsCount, revisitDisplay, totalCostMillions };
}
