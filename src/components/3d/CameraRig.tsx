"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollStore";

interface FlightWaypoint {
  progress: number;
  position: THREE.Vector3;
  target: THREE.Vector3;
}

// Exact 5-stage camera waypoints derived from EnduroSat's embedded scene cameras
const CINEMATIC_WAYPOINTS: FlightWaypoint[] = [
  // Act 1 [0.0 - 0.25]: Hero Orbit (camera-1 looking at hero-sat-ref)
  {
    progress: 0.0,
    position: new THREE.Vector3(1.30, 1.22, 17.08),
    target: new THREE.Vector3(1.69, 2.45, 12.69),
  },
  {
    progress: 0.2,
    position: new THREE.Vector3(0.4, 0.8, 15.5),
    target: new THREE.Vector3(0.8, 1.5, 11.0),
  },
  // Act 2 [0.25 - 0.45]: Atmosphere Dive (zooming into Earth & coastline terrain)
  {
    progress: 0.35,
    position: new THREE.Vector3(-0.6, -0.8, 10.2),
    target: new THREE.Vector3(-1.0, -1.5, 4.8),
  },
  {
    progress: 0.45,
    position: new THREE.Vector3(-1.2, -1.8, 6.2),
    target: new THREE.Vector3(-1.2, -1.8, 4.82),
  },
  // Act 3 [0.45 - 0.60]: Exploded Blueprint Assembly (camera-7 at 45 deg over grid)
  {
    progress: 0.52,
    position: new THREE.Vector3(3.55, 2.59, 46.95),
    target: new THREE.Vector3(0.05, -2.87, 41.78),
  },
  {
    progress: 0.6,
    position: new THREE.Vector3(2.8, 3.2, 47.2),
    target: new THREE.Vector3(0.05, -2.5, 41.78),
  },
  // Act 4 [0.60 - 0.75]: Rocket Fairing Separation (camera-9 -> camera-12)
  {
    progress: 0.67,
    position: new THREE.Vector3(1.64, 3.94, 47.76), // Peering down into falcon-tube
    target: new THREE.Vector3(-0.56, -2.25, 41.77),
  },
  {
    progress: 0.75,
    position: new THREE.Vector3(1.86, 9.41, 24.52), // Fairings separate outward into orbit
    target: new THREE.Vector3(-0.56, 0.5, 38.0),
  },
  // Act 5 [0.75 - 0.90]: SpaceOps 3D Glass Control Panel (framing floating HUD)
  {
    progress: 0.82,
    position: new THREE.Vector3(0.8, 0.4, -4.2),
    target: new THREE.Vector3(1.4, 0.2, -7.5),
  },
  // Act 6 [0.90 - 1.0]: Constellation & Cost (High orbit panoramic vantage)
  {
    progress: 0.92,
    position: new THREE.Vector3(-0.41, 9.83, 28.53),
    target: new THREE.Vector3(0.63, 8.91, 20.92),
  },
  {
    progress: 1.0,
    position: new THREE.Vector3(0.2, 11.2, 29.5),
    target: new THREE.Vector3(0.63, 8.91, 20.92),
  },
];

export default function CameraRig() {
  const { camera, pointer } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(1.69, 2.45, 12.69));
  const targetCameraPos = useRef(new THREE.Vector3(1.30, 1.22, 17.08));
  const targetLookAt = useRef(new THREE.Vector3(1.69, 2.45, 12.69));

  useFrame((_, delta) => {
    const p = Math.max(0, Math.min(1, scrollState.progress));

    // Find surrounding waypoints
    let prevWP = CINEMATIC_WAYPOINTS[0];
    let nextWP = CINEMATIC_WAYPOINTS[CINEMATIC_WAYPOINTS.length - 1];

    for (let i = 0; i < CINEMATIC_WAYPOINTS.length - 1; i++) {
      if (p >= CINEMATIC_WAYPOINTS[i].progress && p <= CINEMATIC_WAYPOINTS[i + 1].progress) {
        prevWP = CINEMATIC_WAYPOINTS[i];
        nextWP = CINEMATIC_WAYPOINTS[i + 1];
        break;
      }
    }

    const range = nextWP.progress - prevWP.progress;
    const localP = range > 0 ? (p - prevWP.progress) / range : 0;

    // Smooth cubic easing
    const eased =
      localP < 0.5
        ? 4 * localP * localP * localP
        : 1 - Math.pow(-2 * localP + 2, 3) / 2;

    targetCameraPos.current.lerpVectors(prevWP.position, nextWP.position, eased);
    targetLookAt.current.lerpVectors(prevWP.target, nextWP.target, eased);

    // Subtle interactive mouse parallax
    const mouseOffsetX = pointer.x * 0.2;
    const mouseOffsetY = pointer.y * 0.15;

    const finalPos = new THREE.Vector3(
      targetCameraPos.current.x + mouseOffsetX,
      targetCameraPos.current.y + mouseOffsetY,
      targetCameraPos.current.z
    );

    // Butter-smooth 60 FPS interpolation
    const lerpSpeed = Math.min(1, delta * 4.5);
    camera.position.lerp(finalPos, lerpSpeed);
    currentLookAt.current.lerp(targetLookAt.current, lerpSpeed);

    camera.lookAt(currentLookAt.current);
  });

  return null;
}
