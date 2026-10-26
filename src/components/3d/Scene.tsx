"use client";

import React, { Suspense, useEffect, useMemo } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import EarthGlobe from "./EarthGlobe";
import ModelViewer from "./ModelViewer";
import CameraRig from "./CameraRig";

// Selective Bloom effect: turns wireframe edges & atmospheric rim into sharp glowing laser lines
function CinematicBloom() {
  const { gl, scene, camera, size } = useThree();

  const composer = useMemo(() => {
    const comp = new EffectComposer(gl);
    comp.renderToScreen = true;

    // 1. Scene Render Pass
    const renderPass = new RenderPass(scene, camera);
    comp.addPass(renderPass);

    // 2. Selective Unreal Bloom Pass
    // Threshold: 0.85 (only bright highlights/emissive elements bloom)
    // Strength: 0.75 (subtle, crisp laser glow without washing out scene)
    // Radius: 0.4 (tight, razor-sharp halos)
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.width, size.height),
      0.75, // strength / intensity
      0.4,  // radius
      0.85  // threshold
    );
    comp.addPass(bloomPass);

    // 3. Color Space Output Pass
    const outputPass = new OutputPass();
    comp.addPass(outputPass);

    return comp;
  }, [gl, scene, camera, size.width, size.height]);

  useEffect(() => {
    composer.setSize(size.width, size.height);
  }, [composer, size.width, size.height]);

  // Hook into render loop with priority 1 to take over canvas rendering
  useFrame(() => {
    gl.autoClear = false;
    gl.clear();
    composer.render();
  }, 1);

  return null;
}

export default function Scene() {
  return (
    <>
      {/* Cinematic Default Camera */}
      <PerspectiveCamera
        makeDefault
        fov={45}
        near={0.1}
        far={200}
        position={[0, 0, 7.5]}
      />

      {/* Cinematic Deep Space Lighting */}
      {/* Subtle pitch-black ambient fill so night side remains dark */}
      <ambientLight color="#020612" intensity={0.6} />

      {/* Key Sunlight shining from top-right onto Earth & Satellite */}
      <directionalLight
        position={[15, 12, 10]}
        color="#ffffff"
        intensity={3.2}
        castShadow={false}
      />

      {/* Electric Cyan Accent Rim Light */}
      <directionalLight
        position={[-12, -4, -6]}
        color="#00A1FF"
        intensity={4.8}
      />

      {/* Mars Amber Subtle Accent Backlight */}
      <directionalLight
        position={[8, -8, -5]}
        color="#FC6A18"
        intensity={2.2}
      />

      {/* Top Zenith Sky Fill */}
      <directionalLight
        position={[0, 16, 2]}
        color="#00A1FF"
        intensity={0.8}
      />

      <Suspense fallback={null}>
        <EarthGlobe />
        <ModelViewer />
        <CameraRig />
      </Suspense>

      {/* Cinematic Bloom Postprocessing */}
      <CinematicBloom />
    </>
  );
}
