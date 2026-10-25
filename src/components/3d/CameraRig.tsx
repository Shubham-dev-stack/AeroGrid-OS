"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollStore";

interface Waypoint {
  position: THREE.Vector3;
  target: THREE.Vector3;
}

const WAYPOINTS: Waypoint[] = [
  // Stage 01: Hero & System Overview (Front 3/4 perspective)
  {
    position: new THREE.Vector3(0, 1.2, 5.8),
    target: new THREE.Vector3(0, 0, 0),
  },
  // Stage 02: Mission Lifecycle (Zoom towards chassis bay & avionics)
  {
    position: new THREE.Vector3(-2.4, 0.7, 3.3),
    target: new THREE.Vector3(-0.2, 0.1, 0.2),
  },
  // Stage 03: Modular Payloads (Close-up of sensor turret & optics)
  {
    position: new THREE.Vector3(2.2, -0.4, 2.7),
    target: new THREE.Vector3(0.3, -0.15, 0.8),
  },
  // Stage 04: In-Flight Telemetry HUD (Elevated dynamic side angle)
  {
    position: new THREE.Vector3(3.2, 1.8, 3.8),
    target: new THREE.Vector3(-0.4, 0.2, -0.2),
  },
  // Stage 05: Mission Calculator & Constellation (Wide orbital vantage)
  {
    position: new THREE.Vector3(0, 4.6, 7.8),
    target: new THREE.Vector3(0, -0.3, 0),
  },
];

export default function CameraRig() {
  const { camera, pointer } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const targetCameraPos = useRef(new THREE.Vector3(0, 1.2, 5.8));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    const p = Math.max(0, Math.min(1, scrollState.progress));

    // Calculate segment index across the 4 transitions (5 waypoints)
    const numSegments = WAYPOINTS.length - 1;
    const scaledP = p * numSegments;
    const segIndex = Math.min(Math.floor(scaledP), numSegments - 1);
    const segProgress = scaledP - segIndex;

    // Smooth cubic ease for segment transitions
    const eased =
      segProgress < 0.5
        ? 4 * segProgress * segProgress * segProgress
        : 1 - Math.pow(-2 * segProgress + 2, 3) / 2;

    const wpA = WAYPOINTS[segIndex];
    const wpB = WAYPOINTS[segIndex + 1];

    // Compute base position & target along spline segment
    targetCameraPos.current.lerpVectors(wpA.position, wpB.position, eased);
    targetLookAt.current.lerpVectors(wpA.target, wpB.target, eased);

    // Subtle interactive mouse parallax
    const mouseOffsetX = pointer.x * 0.25;
    const mouseOffsetY = pointer.y * 0.15;

    const finalTargetPos = new THREE.Vector3(
      targetCameraPos.current.x + mouseOffsetX,
      targetCameraPos.current.y + mouseOffsetY,
      targetCameraPos.current.z
    );

    // Butter-smooth frame interpolation (rate ~ 4.5 * delta)
    const lerpFactor = Math.min(1, delta * 4.5);
    camera.position.lerp(finalTargetPos, lerpFactor);
    currentLookAt.current.lerp(targetLookAt.current, lerpFactor);

    camera.lookAt(currentLookAt.current);
  });

  return null;
}
