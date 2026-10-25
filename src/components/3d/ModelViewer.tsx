"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollStore";

const MODEL_PATH = "/models/scene.glb";

export default function ModelViewer() {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(MODEL_PATH);

  // Clone scene to avoid mutation conflicts across hot reloads
  const modelScene = useMemo(() => {
    const clone = gltf.scene.clone(true);
    
    // Compute bounding box to normalize scale and centering
    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Center geometry at origin
    clone.position.sub(center);
    
    // Scale to appropriate viewport dimensions (approx ~2.6 units)
    if (maxDim > 0) {
      const targetScale = 2.8 / maxDim;
      clone.scale.setScalar(targetScale);
    }

    // Traverse materials to ensure high-fidelity PBR metallic sheen
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.roughness = Math.min(mat.roughness ?? 0.35, 0.45);
          mat.metalness = Math.max(mat.metalness ?? 0.7, 0.65);
          mat.envMapIntensity = 1.6;
        }
      }
    });

    return clone;
  }, [gltf]);

  // Subtle 60 FPS micro-hover and scroll-driven rotation dynamics
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const p = scrollState.progress;

    // Gentle organic floating oscillation
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.05;

    // Dynamic rotation: base idle spin + smooth scroll influence
    const targetRotY = t * 0.08 + p * Math.PI * 1.8;
    const targetRotX = Math.sin(t * 0.5) * 0.04 + p * 0.3;
    const targetRotZ = Math.cos(t * 0.6) * 0.03 - p * 0.2;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      delta * 3.0
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      delta * 3.0
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetRotZ,
      delta * 3.0
    );
  });

  return (
    <group ref={groupRef} position={[0.4, 0, 0]} dispose={null}>
      <primitive object={modelScene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
