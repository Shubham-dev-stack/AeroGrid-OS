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

// Authentic EnduroSat cinematic camera flight sequence
const CINEMATIC_WAYPOINTS: FlightWaypoint[] = [
  // 0% (Hero): Earth horizon in bottom-left, holographic satellite in top-right
  {
    progress: 0.0,
    position: new THREE.Vector3(0.2, 0.4, 7.2),
    target: new THREE.Vector3(0.5, 0.2, 0),
  },
  // 20% (The Challenge): Orbiting Earth limb
  {
    progress: 0.2,
    position: new THREE.Vector3(-0.5, 0.2, 6.9),
    target: new THREE.Vector3(-0.1, 0.1, 0),
  },
  // 40% (Two Steps): Earth centered majestically with atmospheric glow
  {
    progress: 0.4,
    position: new THREE.Vector3(-1.2, -1.8, 7.8),
    target: new THREE.Vector3(-1.2, -1.8, 0),
  },
  // 50% (In Just 6 Months): Centered on Earth as cyan timeline fills
  {
    progress: 0.5,
    position: new THREE.Vector3(-1.2, -1.8, 7.4),
    target: new THREE.Vector3(-1.2, -1.8, 0),
  },
  // 65% (01 Define): Cinematic atmospheric DIVE towards terrain map & coordinate grid
  {
    progress: 0.65,
    position: new THREE.Vector3(-1.2, -1.8, 5.72),
    target: new THREE.Vector3(-1.2, -1.8, 4.82),
  },
  // 85% (Cost & Constellation): Pulls back into high orbit with constellation paths
  {
    progress: 0.85,
    position: new THREE.Vector3(-0.4, 0.8, 8.8),
    target: new THREE.Vector3(-0.8, -0.6, 0),
  },
  // 100% (Get to orbit today / Footer): High-orbit panoramic view
  {
    progress: 1.0,
    position: new THREE.Vector3(-0.6, 1.2, 8.2),
    target: new THREE.Vector3(-0.8, -0.4, 0),
  },
];

export default function CameraRig() {
  const { camera, pointer } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(0.5, 0.2, 0));
  const targetCameraPos = useRef(new THREE.Vector3(0.2, 0.4, 7.2));
  const targetLookAt = useRef(new THREE.Vector3(0.5, 0.2, 0));

  useFrame((_, delta) => {
    const p = Math.max(0, Math.min(1, scrollState.progress));

    // Find the two surrounding waypoints based on exact progress
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

    // Smooth cubic ease-in-out
    const eased =
      localP < 0.5
        ? 4 * localP * localP * localP
        : 1 - Math.pow(-2 * localP + 2, 3) / 2;

    targetCameraPos.current.lerpVectors(prevWP.position, nextWP.position, eased);
    targetLookAt.current.lerpVectors(prevWP.target, nextWP.target, eased);

    // Subtle interactive mouse parallax
    const mouseOffsetX = pointer.x * 0.18;
    const mouseOffsetY = pointer.y * 0.12;

    const finalPos = new THREE.Vector3(
      targetCameraPos.current.x + mouseOffsetX,
      targetCameraPos.current.y + mouseOffsetY,
      targetCameraPos.current.z
    );

    // 60 FPS smooth interpolation
    const lerpSpeed = Math.min(1, delta * 4.2);
    camera.position.lerp(finalPos, lerpSpeed);
    currentLookAt.current.lerp(targetLookAt.current, lerpSpeed);

    camera.lookAt(currentLookAt.current);
  });

  return null;
}
