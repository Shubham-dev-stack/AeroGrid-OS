"use client";

import React, { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import EarthGlobe from "./EarthGlobe";
import ModelViewer from "./ModelViewer";
import CameraRig from "./CameraRig";

export default function Scene() {
  return (
    <>
      {/* Cinematic Camera */}
      <PerspectiveCamera
        makeDefault
        fov={45}
        near={0.1}
        far={200}
        position={[0, 0, 7.5]}
      />

      {/* Cinematic Deep Space Lighting */}
      <ambientLight color="#060c18" intensity={1.5} />

      {/* Key Sunlight shining from top-right towards Earth & Satellite */}
      <directionalLight
        position={[14, 12, 10]}
        color="#ffffff"
        intensity={3.5}
        castShadow={false}
      />

      {/* Laser Cyan Accent Rim Light */}
      <directionalLight
        position={[-12, -4, -6]}
        color="#00A1FF"
        intensity={5.0}
      />

      {/* Mars Amber Subtle Accent Backlight */}
      <directionalLight
        position={[8, -8, -5]}
        color="#FC6A18"
        intensity={2.6}
      />

      {/* Top Zenith Fill */}
      <directionalLight
        position={[0, 16, 2]}
        color="#38bdf8"
        intensity={1.0}
      />

      <Suspense fallback={null}>
        <EarthGlobe />
        <ModelViewer />
        <CameraRig />
      </Suspense>
    </>
  );
}
