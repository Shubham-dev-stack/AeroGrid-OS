"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollStore";

const ATMOSPHERE_VERTEX_SHADER = `
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;
}
`;

const ATMOSPHERE_FRAGMENT_SHADER = `
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  float dotNV = dot(normal, viewDir);
  // Fresnel glow at limb edge
  float intensity = pow(1.0 - max(0.0, dotNV), 3.0) * 1.35;
  vec3 glowColor = vec3(0.0, 0.63, 1.0); // Electric Cyan #00A1FF
  gl_FragColor = vec4(glowColor, intensity);
}
`;

export default function EarthGlobe() {
  const earthGroupRef = useRef<THREE.Group>(null);
  const surfaceMeshRef = useRef<THREE.Mesh>(null);
  const cloudsMeshRef = useRef<THREE.Mesh>(null);
  const terrainDiveRef = useRef<THREE.Group>(null);
  const constellationGroupRef = useRef<THREE.Group>(null);

  // Load high-res satellite maps
  const [surfaceTexture, cloudsTexture, terrainMap] = useTexture([
    "/textures/america-north-2k.webp",
    "/textures/clouds.webp",
    "/textures/map05.webp",
  ]);

  surfaceTexture.colorSpace = THREE.SRGBColorSpace;
  cloudsTexture.colorSpace = THREE.SRGBColorSpace;
  terrainMap.colorSpace = THREE.SRGBColorSpace;

  // Custom Atmosphere Fresnel Shader
  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: ATMOSPHERE_VERTEX_SHADER,
      fragmentShader: ATMOSPHERE_FRAGMENT_SHADER,
      blending: THREE.AdditiveBlending,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }, []);

  // Continuous subtle rotation & scroll-driven dynamics
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const p = scrollState.progress;

    // 1. Slow Earth rotation on Y-axis
    if (surfaceMeshRef.current) {
      surfaceMeshRef.current.rotation.y = t * 0.02 + p * 0.8;
    }

    // 2. Cloud layer rotates slightly faster for organic parallax
    if (cloudsMeshRef.current) {
      cloudsMeshRef.current.rotation.y = t * 0.026 + p * 0.9;
    }

    // 3. Constellation orbital rings slow spin
    if (constellationGroupRef.current) {
      constellationGroupRef.current.rotation.y = t * 0.04;
      constellationGroupRef.current.rotation.z = Math.sin(t * 0.1) * 0.05;
    }

    // 4. Atmosphere Dive Terrain Map opacity (Fades in during dive stage ~ 0.55 to 0.75)
    if (terrainDiveRef.current) {
      const diveFactor = Math.max(0, 1 - Math.abs(p - 0.65) / 0.16);
      terrainDiveRef.current.visible = diveFactor > 0.02;
    }
  });

  return (
    <group ref={earthGroupRef} position={[-1.2, -1.8, 0]}>
      {/* 1. Main Earth Solid Mesh */}
      <mesh ref={surfaceMeshRef}>
        <sphereGeometry args={[4.8, 64, 64]} />
        <meshStandardMaterial
          map={surfaceTexture}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* 2. Semi-Transparent Floating Cloud Layer */}
      <mesh ref={cloudsMeshRef}>
        <sphereGeometry args={[4.85, 64, 64]} />
        <meshStandardMaterial
          map={cloudsTexture}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Glowing Atmospheric Rim Halo (Fresnel Electric Cyan) */}
      <mesh material={atmosphereMaterial}>
        <sphereGeometry args={[5.06, 64, 64]} />
      </mesh>

      {/* 4. High-Res Satellite Coastline Terrain Patch for Atmosphere Dive (0.65 Progress) */}
      <group ref={terrainDiveRef} position={[0, 0, 4.82]} rotation={[-0.1, 0, 0]}>
        <mesh>
          <planeGeometry args={[3.2, 2.2, 32, 32]} />
          <meshStandardMaterial
            map={terrainMap}
            roughness={0.7}
            metalness={0.2}
            transparent
            opacity={0.92}
          />
        </mesh>

        {/* Tactical Coordinate Grid Overlay */}
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[3.2, 2.2, 16, 12]} />
          <meshBasicMaterial
            color="#00A1FF"
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>

        {/* Tactical Target Reticle Rings */}
        <mesh position={[0.2, 0.1, 0.03]}>
          <ringGeometry args={[0.2, 0.22, 32]} />
          <meshBasicMaterial color="#00A1FF" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.2, 0.1, 0.03]}>
          <ringGeometry args={[0.38, 0.39, 32]} />
          <meshBasicMaterial color="#00A1FF" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* 5. Orbital Constellation Shell Rings */}
      <group ref={constellationGroupRef}>
        {/* Orbit Ring 1 (SSO Polar 98 deg) */}
        <mesh rotation={[Math.PI / 2.3, 0.4, 0]}>
          <torusGeometry args={[5.6, 0.008, 16, 100]} />
          <meshBasicMaterial color="#00A1FF" transparent opacity={0.5} />
        </mesh>

        {/* Orbit Ring 2 (Equatorial / Inclined 45 deg) */}
        <mesh rotation={[0.8, -0.6, 0.2]}>
          <torusGeometry args={[6.1, 0.008, 16, 100]} />
          <meshBasicMaterial color="#00A1FF" transparent opacity={0.35} />
        </mesh>

        {/* Orbit Ring 3 (High-Altitude Crosslink) */}
        <mesh rotation={[-0.5, 0.8, -0.4]}>
          <torusGeometry args={[6.6, 0.008, 16, 100]} />
          <meshBasicMaterial color="#FC6A18" transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
}
