"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollStore";

const MODEL_PATH = "/models/scene.glb";

export default function ModelViewer() {
  const satelliteGroupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(MODEL_PATH);

  // 1. Solid Aerospace Base Mesh
  const solidModel = useMemo(() => {
    const clone = gltf.scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    clone.position.sub(center);
    if (maxDim > 0) {
      clone.scale.setScalar(2.4 / maxDim);
    }

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
          mat.color = new THREE.Color("#080f1d");
          mat.roughness = 0.25;
          mat.metalness = 0.85;
          mat.envMapIntensity = 2.0;
          mesh.material = mat;
        }
      }
    });

    return clone;
  }, [gltf]);

  // 2. Signature EnduroSat Holographic Blue Wireframe Overlay
  const wireframeModel = useMemo(() => {
    const clone = gltf.scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    clone.position.sub(center);
    if (maxDim > 0) {
      // Scale slightly larger than solid mesh to prevent z-fighting
      clone.scale.setScalar(2.404 / maxDim);
    }

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#00A1FF"),
          wireframe: true,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
      }
    });

    return clone;
  }, [gltf]);

  // Continuous micro-hover and scroll-driven rotation
  useFrame((state, delta) => {
    if (!satelliteGroupRef.current) return;
    const t = state.clock.getElapsedTime();
    const p = scrollState.progress;

    // Organic micro-attitude oscillation
    satelliteGroupRef.current.position.y = 0.9 + Math.sin(t * 0.9) * 0.04;

    // Camera/scroll synchronization: smoothly spin & pitch
    const targetRotY = -0.3 + t * 0.06 + p * Math.PI * 1.5;
    const targetRotX = 0.15 + Math.sin(t * 0.5) * 0.03 + p * 0.4;
    const targetRotZ = -0.1 + Math.cos(t * 0.4) * 0.02 - p * 0.2;

    satelliteGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      satelliteGroupRef.current.rotation.y,
      targetRotY,
      delta * 3.5
    );
    satelliteGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      satelliteGroupRef.current.rotation.x,
      targetRotX,
      delta * 3.5
    );
    satelliteGroupRef.current.rotation.z = THREE.MathUtils.lerp(
      satelliteGroupRef.current.rotation.z,
      targetRotZ,
      delta * 3.5
    );
  });

  return (
    <group
      ref={satelliteGroupRef}
      position={[1.8, 0.9, 0]} // Positioned in top-right in Hero
      dispose={null}
    >
      <primitive object={solidModel} />
      <primitive object={wireframeModel} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
