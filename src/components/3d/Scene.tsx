"use client";

import React, { Suspense } from "react";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import GridBackground from "./GridBackground";
import ModelViewer from "./ModelViewer";
import CameraRig from "./CameraRig";

export default function Scene() {
  return (
    <>
      {/* Cinematic Perspective Camera */}
      <PerspectiveCamera
        makeDefault
        fov={45}
        near={0.1}
        far={100}
        position={[0.8, 0.3, 4.6]}
      />

      {/* Cinematic Aerospace Studio Lighting */}
      {/* 1. Deep Space Ambient */}
      <ambientLight color="#0b1324" intensity={1.4} />

      {/* 2. Key Sun Directional Light */}
      <directionalLight
        position={[8, 12, 8]}
        color="#ffffff"
        intensity={2.8}
        castShadow={false}
      />

      {/* 3. Laser Cyan Accent Rim Light */}
      <directionalLight
        position={[-10, -4, -6]}
        color="#00A1FF"
        intensity={4.5}
      />

      {/* 4. Mars Amber Backlight */}
      <directionalLight
        position={[6, -6, -5]}
        color="#FC6A18"
        intensity={2.5}
      />

      {/* 5. Top Zenith Atmospheric Fill */}
      <directionalLight
        position={[0, 15, 0]}
        color="#38bdf8"
        intensity={1.0}
      />

      {/* 6. Front Fill Light for High-Tech Metallic Sheen */}
      <directionalLight
        position={[0, 0, 10]}
        color="#cbd5e1"
        intensity={0.9}
      />

      {/* 3D Scene Geometry, Grid, and Camera Rig */}
      <Suspense fallback={null}>
        <Environment preset="city" />
        <GridBackground />
        <ModelViewer />
        <CameraRig />
      </Suspense>
    </>
  );
}
