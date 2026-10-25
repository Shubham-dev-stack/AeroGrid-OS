"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollStore";

interface Waypoint {
  position: THREE.Vector3;
  target: THREE.Vector3;
}

// 8 Waypoints choreographed for EnduroSat 1:1 scrollytelling frames
const WAYPOINTS: Waypoint[] = [
  // Frame 1: Hero (Right-offset 3/4 perspective)
  {
    position: new THREE.Vector3(0.8, 0.3, 4.6),
    target: new THREE.Vector3(0.2, 0, 0),
  },
  // Frame 2: The Challenge & Solution (Slight pull-back for bold typography)
  {
    position: new THREE.Vector3(1.2, 0.5, 5.2),
    target: new THREE.Vector3(0.1, 0, 0),
  },
  // Frame 3: Two Steps Timeline (Horizontal alignment with payload bay)
  {
    position: new THREE.Vector3(-0.9, -0.2, 4.4),
    target: new THREE.Vector3(-0.1, 0, 0),
  },
  // Frame 4: Application / Payloads (Inspection zoom on sensor bay)
  {
    position: new THREE.Vector3(1.6, -0.3, 3.8),
    target: new THREE.Vector3(0.3, -0.1, 0.3),
  },
  // Frame 5: In-Flight Telemetry (Left placement to make room for right HUD dock)
  {
    position: new THREE.Vector3(-1.5, 0.2, 4.3),
    target: new THREE.Vector3(-0.3, 0.05, 0),
  },
  // Frame 6: Mission Calculator (Centered wide orbital view framed by 8vw numbers)
  {
    position: new THREE.Vector3(0, 0.6, 5.6),
    target: new THREE.Vector3(0, -0.05, 0),
  },
  // Frame 7: Cost of Space Data Comparison (Cinematic high-angle)
  {
    position: new THREE.Vector3(0.9, 1.0, 5.0),
    target: new THREE.Vector3(0, 0, 0),
  },
  // Frame 8: Footer CTA (Direct center overview)
  {
    position: new THREE.Vector3(0, 1.2, 4.8),
    target: new THREE.Vector3(0, 0, 0),
  },
];

export default function CameraRig() {
  const { camera, pointer } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const targetCameraPos = useRef(new THREE.Vector3(0.8, 0.3, 4.6));
  const targetLookAt = useRef(new THREE.Vector3(0.2, 0, 0));

  useFrame((_, delta) => {
    const p = Math.max(0, Math.min(1, scrollState.progress));

    // Calculate segment index across the 7 transitions (8 waypoints)
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
    const mouseOffsetX = pointer.x * 0.2;
    const mouseOffsetY = pointer.y * 0.12;

    const finalTargetPos = new THREE.Vector3(
      targetCameraPos.current.x + mouseOffsetX,
      targetCameraPos.current.y + mouseOffsetY,
      targetCameraPos.current.z
    );

    // Butter-smooth frame interpolation
    const lerpFactor = Math.min(1, delta * 4.5);
    camera.position.lerp(finalTargetPos, lerpFactor);
    currentLookAt.current.lerp(targetLookAt.current, lerpFactor);

    camera.lookAt(currentLookAt.current);
  });

  return null;
}
