'use client';

/**
 * AeroGrid OS · Developer Documentation & Live API Playground
 * Interactive cURL, TypeScript, Python, gRPC console with live endpoint test runner.
 */

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Terminal,
  Code2,
  Copy,
  Check,
  Send,
  Play,
  Key,
  ShieldCheck,
  Activity,
  Satellite,
  ChevronRight,
  RefreshCw,
  FileText,
  Layers,
  Globe,
  Radio,
  Zap,
  Sparkles,
} from 'lucide-react';

type Lang = 'curl' | 'ts' | 'python' | 'grpc';

interface EndpointDoc {
  id: string;
  method: 'GET' | 'POST';
  path: string;
  title: string;
  badge: string;
  description: string;
  auth: string;
  rateLimit: string;
  requestBodyExample?: Record<string, any>;
  snippets: Record<Lang, string>;
}

const ENDPOINTS: EndpointDoc[] = [
  {
    id: 'telemetry',
    method: 'GET',
    path: '/api/v1/telemetry',
    title: 'Spacecraft State & Live Telemetry',
    badge: '10 Hz STREAM',
    description:
      'Retrieves the real-time Keplerian orbit state vector, instantaneous latitude/longitude, solar array generation, battery depth-of-discharge (DoD), eclipse state, and next ground-station pass window.',
    auth: 'Optional for public read / Bearer token for sovereign fleets',
    rateLimit: '120 requests / min',
    snippets: {
      curl: `curl -X GET "https://aerogrid.space/api/v1/telemetry" \\
  -H "Accept: application/json" \\
  -H "x-aerogrid-client: sovereign-api-v1"`,
      ts: `import { AeroGridClient } from '@aerogrid/sdk';

const client = new AeroGridClient({ apiKey: process.env.AEROGRID_API_KEY });
const telemetry = await client.telemetry.get('AeroGrid-01');

console.log(\`Alt: \${telemetry.orbit.altitudeKm} km\`);
console.log(\`Lat/Lon: \${telemetry.orbit.latitudeDeg}, \${telemetry.orbit.longitudeDeg}\`);
console.log(\`Next AOS: \${telemetry.groundPass.nextStation} in \${telemetry.groundPass.countdownSec}s\`);`,
      python: `import httpx

async with httpx.AsyncClient() as client:
    resp = await client.get("https://aerogrid.space/api/v1/telemetry")
    data = resp.json()

print(f"Spacecraft: {data['spacecraft']['name']}")
print(f"Velocity: {data['orbit']['velocityKmS']} km/s")
print(f"Battery DoD: {data['power']['batteryDoDPercent']}%")`,
      grpc: `syntax = "proto3";
package aerogrid.telemetry.v1;

service TelemetryService {
  rpc GetSpacecraftState (TelemetryRequest) returns (TelemetryResponse);
  rpc StreamTelemetry (StreamRequest) returns (stream TelemetryFrame);
}

message TelemetryFrame {
  string spacecraft_id = 1;
  double altitude_km = 2;
  double latitude_deg = 3;
  double longitude_deg = 4;
  double solar_bus_watts = 5;
  bool is_sunlit = 6;
}`,
    },
  },
  {
    id: 'tasking',
    method: 'POST',
    path: '/api/v1/tasking',
    title: 'Schedule On-Demand Tasking Pass',
    badge: '90s COMPILE SLA',
    description:
      'Submits an agile tasking pass request over an Area of Interest (AOI). Compiles execution commands into on-orbit schedules in < 90 seconds and signs response with an HMAC-SHA256 cryptographic verification token.',
    auth: 'Required (Bearer Token / x-aerogrid-token)',
    rateLimit: '20 requests / min',
    requestBodyExample: {
      aoiName: 'Strait of Hormuz',
      payloadType: 'Sentinel-SAR X1',
      priority: 'URGENT_TACTICAL',
    },
    snippets: {
      curl: `curl -X POST "https://aerogrid.space/api/v1/tasking" \\
  -H "Content-Type: application/json" \\
  -H "x-aerogrid-token: YOUR_SECRET_TOKEN" \\
  -d '{
    "aoiName": "Strait of Hormuz",
    "payloadType": "Sentinel-SAR X1",
    "priority": "URGENT_TACTICAL"
  }'`,
      ts: `const res = await fetch('https://aerogrid.space/api/v1/tasking', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-aerogrid-token': process.env.AEROGRID_API_KEY!,
  },
  body: JSON.stringify({
    aoiName: 'Strait of Hormuz',
    payloadType: 'Sentinel-SAR X1',
    priority: 'URGENT_TACTICAL',
  }),
});

const task = await res.json();
console.log('Task ID:', task.taskId);
console.log('Est Pass in:', task.schedule.estimatedPassInMinutes, 'min');
console.log('Crypto Token:', task.verification.token);`,
      python: `import httpx

payload = {
    "aoiName": "Strait of Hormuz",
    "payloadType": "Sentinel-SAR X1",
    "priority": "URGENT_TACTICAL",
}

headers = {"Content-Type": "application/json", "x-aerogrid-token": "YOUR_SECRET_TOKEN"}

resp = httpx.post("https://aerogrid.space/api/v1/tasking", json=payload, headers=headers)
task = resp.json()
print("Task Created:", task["taskId"])
print("Signature:", task["verification"]["token"])`,
      grpc: `syntax = "proto3";
package aerogrid.tasking.v1;

service TaskingService {
  rpc SubmitTasking (TaskingRequest) returns (TaskingConfirmation);
  rpc VerifyTasking (VerifyRequest) returns (VerifyResponse);
}

message TaskingRequest {
  string aoi_name = 1;
  string payload_type = 2; // e.g., "Sentinel-SAR X1"
  enum Priority { ROUTINE = 0; URGENT_TACTICAL = 1; }
  Priority priority = 3;
}`,
    },
  },
  {
    id: 'constellation',
    method: 'GET',
    path: '/api/v1/constellation',
    title: 'Sovereign Fleet Status & Health Matrix',
    badge: '12-NODE MATRIX',
    description:
      'Queries health, orbital phase slots, battery status, mounted sensors, and current active targets for all 12 sovereign constellation orbital nodes in real-time.',
    auth: 'Public / Client Token',
    rateLimit: '60 requests / min',
    snippets: {
      curl: `curl -X GET "https://aerogrid.space/api/v1/constellation" \\
  -H "Accept: application/json"`,
      ts: `const res = await fetch('https://aerogrid.space/api/v1/constellation');
const fleet = await res.json();

console.log(\`Constellation: \${fleet.constellationId}\`);
console.log(\`Nodes Online: \${fleet.nodesOnline} / \${fleet.totalNodes}\`);
fleet.satellites.forEach(sat => {
  console.log(\`\${sat.name} | \${sat.status} | \${sat.mountedPayload} | Bat: \${sat.batteryPct}%\`);
});`,
      python: `import requests

resp = requests.get("https://aerogrid.space/api/v1/constellation")
data = resp.json()

print(f"Online: {data['nodesOnline']} / {data['totalNodes']}")
for sat in data['satellites']:
    print(f"{sat['name']}: {sat['status']} [{sat['activeAOI']}]")`,
      grpc: `syntax = "proto3";
package aerogrid.constellation.v1;

service FleetService {
  rpc GetFleetMatrix (FleetQuery) returns (FleetState);
}

message FleetState {
  string constellation_id = 1;
  int32 nodes_online = 2;
  repeated SatelliteNode satellites = 3;
}`,
    },
  },
];

export default function DocsPage() {
  const [selectedEndpointId, setSelectedEndpointId] = useState<string>('telemetry');
  const [activeLang, setActiveLang] = useState<Lang>('curl');
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);

  // Live Playground State
  const [isRunning, setIsRunning] = useState(false);
  const [liveResponse, setLiveResponse] = useState<any>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [taskParams, setTaskParams] = useState({
    aoiName: 'Strait of Hormuz',
    payloadType: 'Sentinel-SAR X1',
    priority: 'URGENT_TACTICAL',
  });

  // Terminal Simulator State
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string; time: string }>>([
    {
      cmd: 'aerogrid status',
      output: 'AEROGRID CONSTELLATION ONLINE · 12/12 NODES OPERATIONAL · ENCRYPTION: AES-256-GCM',
      time: '14:20:01',
    },
  ]);
  const [cliInput, setCliInput] = useState('');

  const activeDoc = ENDPOINTS.find((e) => e.id === selectedEndpointId) || ENDPOINTS[0];

  const copyToClipboard = (text: string, isResult = false) => {
    navigator.clipboard.writeText(text);
    if (isResult) {
      setCopiedResult(true);
      setTimeout(() => setCopiedResult(false), 2000);
    } else {
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2000);
    }
  };

  // Run live endpoint test against actual local Next.js server
  const runLiveTest = async () => {
    setIsRunning(true);
    setLiveResponse(null);
    setStatusCode(null);
    setLatencyMs(null);

    const t0 = performance.now();
    try {
      if (activeDoc.method === 'GET') {
        const res = await fetch(activeDoc.path, { cache: 'no-store' });
        const data = await res.json();
        const t1 = performance.now();
        setStatusCode(res.status);
        setLatencyMs(Math.round(t1 - t0));
        setLiveResponse(data);
      } else {
        const res = await fetch(activeDoc.path, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(taskParams),
        });
        const data = await res.json();
        const t1 = performance.now();
        setStatusCode(res.status);
        setLatencyMs(Math.round(t1 - t0));
        setLiveResponse(data);
      }
    } catch (err: any) {
      const t1 = performance.now();
      setStatusCode(500);
      setLatencyMs(Math.round(t1 - t0));
      setLiveResponse({ error: 'Endpoint unreachable or network error', details: err?.message });
    } finally {
      setIsRunning(false);
    }
  };

  const executeCliCommand = (command: string) => {
    const trimmed = command.trim();
    if (!trimmed) return;

    let output = '';
    const now = new Date().toTimeString().split(' ')[0];

    if (trimmed === 'clear') {
      setTerminalHistory([]);
      setCliInput('');
      return;
    } else if (trimmed === 'help' || trimmed === 'aerogrid') {
      output = `AeroGrid Aerospace CLI v2.4
Commands:
  aerogrid status                - Display sovereign constellation health
  aerogrid telemetry             - Print live 520km SSO orbital state vector
  aerogrid task --aoi <AOI>      - Schedule on-demand satellite tasking
  aerogrid fleet                 - List all 12 operational space nodes
  clear                          - Clear terminal display`;
    } else if (trimmed === 'aerogrid status') {
      output = `STATUS: NOMINAL (GREEN)
CONSTELLATION: AeroGrid-Sovereign-Prime (12x 16U Nodes)
ORBIT: 520 km SSO · 97.5° Inclination · T=94.9 min
ENCRYPTION: AES-256-GCM / SpaceWire Link
SLA COMPLIANCE: 99.98% Guaranteed Revisit < 45m`;
    } else if (trimmed === 'aerogrid telemetry') {
      output = `SPACECRAFT: AeroGrid-01
ALTITUDE: 520.12 km | VELOCITY: 7.605 km/s
LAT: +24.8192° | LON: +055.1294° (ASCENDING)
SOLAR BUS: 638 W | BATTERY DoD: 18.2% | ECLIPSE: FALSE
NEXT GROUND PASS: SVALBARD (SvalSat) in 04:12`;
    } else if (trimmed.startsWith('aerogrid task')) {
      output = `[UPLINK INITIATED] Tasking request compiled into on-orbit schedule in 42s.
TASK ID: AG-TASK-8492
AOI: Strait of Hormuz (Lat 26.56°, Lon 56.25°)
ASSIGNED NODE: AeroGrid-03 (Sentinel-SAR X1)
HMAC VERIFICATION: SHA256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1f`;
    } else if (trimmed === 'aerogrid fleet') {
      output = `FLEET MATRIX (12/12 ONLINE):
AG-01: Sentinel-SAR X1   [HEALTHY]     AOI: Strait of Malacca
AG-02: HyperEye-V2       [HEALTHY]     AOI: Suez Canal
AG-03: Sentinel-SAR X1   [HEALTHY]     AOI: Bab-el-Mandeb
AG-04: ThermoScan-L3     [HEALTHY]     AOI: Amazon Basin
AG-05: NeuralCore-E2     [DOWNLINKING] AOI: Baltic Sea
AG-06: LinkMesh-D2C      [HEALTHY]     AOI: North Sea Grid`;
    } else {
      output = `Unknown command: '${trimmed}'. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: trimmed, output, time: now }]);
    setCliInput('');
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-white flex flex-col font-sans selection:bg-[#00A1FF]/30">
      {/* Top Header */}
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
              DEVELOPER API & SDK
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-xs font-mono uppercase bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/40 hover:bg-[#00FF88]/20 transition-all px-3 py-1.5 rounded-full"
          >
            <Activity className="w-3.5 h-3.5" />
            MISSION CONTROL
          </Link>
          <Link
            href="/payloads"
            className="flex items-center gap-2 text-xs font-mono uppercase bg-[#00A1FF]/10 text-[#00A1FF] border border-[#00A1FF]/40 hover:bg-[#00A1FF]/20 transition-all px-3 py-1.5 rounded-full"
          >
            <Satellite className="w-3.5 h-3.5" />
            PAYLOADS CAD
          </Link>
        </div>
      </header>

      {/* Main Grid */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: API Sidebar (3 Cols) */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-[#080C14] border border-white/10 rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00A1FF] uppercase tracking-wider font-semibold">
              <Code2 className="w-4 h-4" /> Core API Endpoints
            </div>

            <div className="space-y-1.5">
              {ENDPOINTS.map((endpoint) => {
                const isSelected = selectedEndpointId === endpoint.id;
                return (
                  <button
                    key={endpoint.id}
                    onClick={() => {
                      setSelectedEndpointId(endpoint.id);
                      setLiveResponse(null);
                      setStatusCode(null);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-[#0D1527] border-[#00A1FF] shadow-[0_0_20px_rgba(0,161,255,0.15)]'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          endpoint.method === 'GET'
                            ? 'bg-[#00FF88]/15 text-[#00FF88] border border-[#00FF88]/30'
                            : 'bg-[#FC6A18]/15 text-[#FC6A18] border border-[#FC6A18]/30'
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <span className="text-[9px] font-mono text-[#787A85]">{endpoint.badge}</span>
                    </div>
                    <div className="font-bold text-xs text-white truncate">{endpoint.title}</div>
                    <div className="text-[11px] font-mono text-[#787A85] truncate mt-0.5">{endpoint.path}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Authentication & Security Card */}
          <div className="bg-[#080C14] border border-white/10 rounded-2xl p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#00FF88] font-bold">
              <Key className="w-4 h-4" /> Security & Auth
            </div>
            <p className="text-[11px] text-[#9BA1B0] leading-relaxed">
              All requests are authenticated via cryptographic header tokens or signed HMAC-SHA256 nonces.
            </p>
            <div className="bg-black/60 border border-white/10 p-2.5 rounded-lg text-[10px] text-[#00A1FF] truncate">
              x-aerogrid-token: sha256_live_...
            </div>
          </div>
        </aside>

        {/* Center Column: Documentation & Code Snippets (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#080C14] border border-white/10 rounded-2xl p-6 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs font-mono px-2.5 py-0.5 rounded font-bold ${
                    activeDoc.method === 'GET'
                      ? 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/40'
                      : 'bg-[#FC6A18]/20 text-[#FC6A18] border border-[#FC6A18]/40'
                  }`}
                >
                  {activeDoc.method}
                </span>
                <span className="font-mono text-sm font-bold text-white">{activeDoc.path}</span>
              </div>
              <h1 className="text-2xl font-extrabold text-white">{activeDoc.title}</h1>
              <p className="text-sm text-[#9BA1B0] mt-2 leading-relaxed">{activeDoc.description}</p>
            </div>

            {/* Request Meta */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs border-t border-b border-white/10 py-3">
              <div>
                <span className="text-[#787A85] block text-[10px] uppercase">AUTHENTICATION</span>
                <span className="text-white font-medium">{activeDoc.auth}</span>
              </div>
              <div>
                <span className="text-[#787A85] block text-[10px] uppercase">RATE LIMIT</span>
                <span className="text-[#00FF88] font-medium">{activeDoc.rateLimit}</span>
              </div>
            </div>

            {/* Code Snippets Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10">
                  {(['curl', 'ts', 'python', 'grpc'] as Lang[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveLang(lang)}
                      className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded transition-colors ${
                        activeLang === lang
                          ? 'bg-[#00A1FF] text-black font-bold'
                          : 'text-[#787A85] hover:text-white'
                      }`}
                    >
                      {lang === 'ts' ? 'TypeScript' : lang.toUpperCase()}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => copyToClipboard(activeDoc.snippets[activeLang])}
                  className="flex items-center gap-1.5 text-xs font-mono text-[#787A85] hover:text-white transition-colors bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-[#00FF88]" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedSnippet ? 'COPIED' : 'COPY'}
                </button>
              </div>

              <div className="relative bg-black rounded-xl border border-white/10 p-4 font-mono text-xs overflow-x-auto text-[#CBD0DC]">
                <pre>{activeDoc.snippets[activeLang]}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Playground (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#080C14] border border-white/10 rounded-2xl p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00FF88] font-bold">
                <Play className="w-3.5 h-3.5" /> Live Test Console
              </div>
              <button
                onClick={runLiveTest}
                disabled={isRunning}
                className="flex items-center gap-1.5 bg-[#00FF88] text-black hover:bg-[#7CFFB2] disabled:opacity-50 text-xs font-mono font-bold px-3 py-1.5 rounded-full transition-all"
              >
                {isRunning ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
                {isRunning ? 'SENDING...' : 'SEND REQUEST'}
              </button>
            </div>

            {/* Request Builder for POST */}
            {activeDoc.method === 'POST' && (
              <div className="space-y-3 font-mono text-xs border border-white/10 bg-white/[0.02] p-4 rounded-xl">
                <span className="text-[10px] text-[#787A85] uppercase tracking-wider block">
                  Request Payload (JSON)
                </span>
                <div className="space-y-2">
                  <div>
                    <label className="text-[11px] text-[#9BA1B0] block mb-1">Target AOI</label>
                    <select
                      value={taskParams.aoiName}
                      onChange={(e) => setTaskParams({ ...taskParams, aoiName: e.target.value })}
                      className="w-full bg-black border border-white/20 rounded px-2.5 py-1.5 text-white"
                    >
                      <option value="Strait of Hormuz">Strait of Hormuz (Maritime)</option>
                      <option value="Bab-el-Mandeb">Bab-el-Mandeb (Red Sea)</option>
                      <option value="Taiwan Strait">Taiwan Strait (Border/EEZ)</option>
                      <option value="Suez Canal Corridor">Suez Canal Corridor</option>
                      <option value="Panama Canal">Panama Canal</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-[#9BA1B0] block mb-1">Sensor Payload</label>
                    <select
                      value={taskParams.payloadType}
                      onChange={(e) => setTaskParams({ ...taskParams, payloadType: e.target.value })}
                      className="w-full bg-black border border-white/20 rounded px-2.5 py-1.5 text-white"
                    >
                      <option value="Sentinel-SAR X1">Sentinel-SAR X1 (Radar)</option>
                      <option value="HyperEye-V2">HyperEye-V2 (0.5m Optical)</option>
                      <option value="ThermoScan-L3">ThermoScan-L3 (LWIR)</option>
                      <option value="NeuralCore-E2">NeuralCore-E2 (Edge AI)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Response Output Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#787A85] flex items-center gap-2">
                  Response Output
                  {statusCode && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                        statusCode >= 200 && statusCode < 300
                          ? 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/40'
                          : 'bg-red-500/20 text-red-400 border border-red-500/40'
                      }`}
                    >
                      {statusCode} {statusCode === 200 ? 'OK' : statusCode === 201 ? 'CREATED' : 'ERROR'}
                    </span>
                  )}
                  {latencyMs && <span className="text-[10px] text-[#00A1FF]">{latencyMs} ms</span>}
                </span>

                {liveResponse && (
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(liveResponse, null, 2), true)}
                    className="text-[11px] text-[#787A85] hover:text-white flex items-center gap-1"
                  >
                    {copiedResult ? <Check className="w-3 h-3 text-[#00FF88]" /> : <Copy className="w-3 h-3" />}
                    {copiedResult ? 'COPIED' : 'COPY'}
                  </button>
                )}
              </div>

              <div className="relative bg-black rounded-xl border border-white/10 p-4 font-mono text-[11px] min-h-[220px] max-h-[360px] overflow-y-auto text-[#00FF88]">
                {liveResponse ? (
                  <pre className="whitespace-pre-wrap">{JSON.stringify(liveResponse, null, 2)}</pre>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center text-[#787A85] py-12 space-y-2">
                    <Terminal className="w-6 h-6 opacity-40" />
                    <span>Click &quot;Send Request&quot; above to execute a live query against the API.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Interactive CLI Terminal Simulator (12 Cols) */}
        <div className="lg:col-span-12 bg-[#080C14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-5 py-3.5 border-b border-white/10 bg-[#0A0F1D] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00A1FF]" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                AeroGrid Aerospace CLI Sandbox
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-[#787A85]">
              <span>TYPE &apos;help&apos; FOR AVAILABLE COMMANDS</span>
            </div>
          </div>

          <div className="p-5 font-mono text-xs bg-black/90 min-h-[200px] max-h-[300px] overflow-y-auto space-y-3">
            {terminalHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-[#00A1FF]">
                  <span className="text-[#787A85]">[{item.time}]</span>
                  <span>aerogrid-terminal:~$</span>
                  <span className="text-white font-bold">{item.cmd}</span>
                </div>
                <div className="text-[#CBD0DC] whitespace-pre-wrap pl-6 border-l border-white/10">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                executeCliCommand(cliInput);
              }}
              className="flex items-center gap-2 text-[#00FF88] pt-2"
            >
              <span>aerogrid-terminal:~$</span>
              <input
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="Try: aerogrid status, aerogrid telemetry, aerogrid task, aerogrid fleet, clear"
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs"
              />
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#05070B] py-6 px-6 text-center text-xs font-mono text-[#787A85] mt-12">
        AEROGRID OS DEVELOPER SUITE · REST / gRPC v1.4 · TLS 1.3 / AES-256 ENCRYPTED
      </footer>
    </div>
  );
}
