"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Grid, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function GridBackground() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (gridRef.current) {
      // Subtle rotation to simulate orbital reference plane
      gridRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <group position={[0, -2.2, 0]}>
      {/* 3D Aerospace Infinite Ground Grid */}
      <Grid
        position={[0, 0, 0]}
        args={[30, 30]}
        cellSize={0.8}
        cellThickness={0.8}
        cellColor="#003554"
        sectionSize={4}
        sectionThickness={1.2}
        sectionColor="#00A1FF"
        fadeDistance={28}
        fadeStrength={1.5}
        infiniteGrid
      />

      {/* Orbiting Tech Particles / Star Dust */}
      <group ref={gridRef}>
        <Sparkles
          count={120}
          scale={[22, 12, 22]}
          size={2.5}
          speed={0.3}
          opacity={0.6}
          color="#00A1FF"
        />
        <Sparkles
          count={40}
          scale={[18, 8, 18]}
          size={3.0}
          speed={0.2}
          opacity={0.4}
          color="#FC6A18"
        />
      </group>

      {/* Subtle depth fog ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <ringGeometry args={[6, 16, 64]} />
        <meshBasicMaterial
          color="#001829"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
