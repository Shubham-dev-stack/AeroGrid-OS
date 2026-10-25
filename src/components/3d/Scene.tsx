"use client";

import React, { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import GridBackground from "./GridBackground";
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
        far={100}
        position={[0, 1.2, 5.8]}
      />

      {/* Cinematic Aerospace Lighting Setup */}
      {/* 1. Deep Space Ambient */}
      <ambientLight color="#0a0f1d" intensity={1.2} />

      {/* 2. Key Sun Light */}
      <directionalLight
        position={[8, 10, 6]}
        color="#ffffff"
        intensity={2.4}
        castShadow={false}
      />

      {/* 3. Laser Cyan Accent Rim Light */}
      <directionalLight
        position={[-8, -3, -5]}
        color="#00A1FF"
        intensity={4.2}
      />

      {/* 4. Mars Amber Thruster/Subtle Backlight */}
      <directionalLight
        position={[4, -5, -4]}
        color="#FC6A18"
        intensity={2.2}
      />

      {/* 5. Top Zenith Fill */}
      <directionalLight
        position={[0, 12, 0]}
        color="#38bdf8"
        intensity={0.8}
      />

      {/* 3D Scene Geometry & Camera Rig */}
      <Suspense fallback={null}>
        <GridBackground />
        <ModelViewer />
        <CameraRig />
      </Suspense>
    </>
  );
}
