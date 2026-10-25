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
  const groundStationsRef = useRef<THREE.Group>(null);
  const constellationGroupRef = useRef<THREE.Group>(null);

  // Load satellite textures
  const [surfaceTexture, cloudsTexture, terrainMap] = useTexture([
    "/textures/america-north-2k.webp",
    "/textures/clouds.webp",
    "/textures/map05.webp",
  ]);

  surfaceTexture.colorSpace = THREE.SRGBColorSpace;
  cloudsTexture.colorSpace = THREE.SRGBColorSpace;
  terrainMap.colorSpace = THREE.SRGBColorSpace;

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

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const p = scrollState.progress;

    // Visibility toggling according to the 5 cinematic acts:
    // Earth is visible in Act 1, 2 (p <= 0.45), hidden in Act 3 (0.45 < p <= 0.60), and visible in Act 4, 5, 6 (p > 0.60)
    if (earthGroupRef.current) {
      if (p > 0.45 && p <= 0.60) {
        earthGroupRef.current.visible = false;
      } else {
        earthGroupRef.current.visible = true;
      }
    }

    // Slow organic Earth rotation
    if (surfaceMeshRef.current) {
      surfaceMeshRef.current.rotation.y = t * 0.02 + p * 0.6;
    }
    if (cloudsMeshRef.current) {
      cloudsMeshRef.current.rotation.y = t * 0.026 + p * 0.7;
    }

    // Tactical coastline terrain map is visible during Act 2 dive (0.25 to 0.45)
    if (terrainDiveRef.current) {
      terrainDiveRef.current.visible = p >= 0.22 && p <= 0.46;
    }

    // Ground Station beacons (Eagle-1, ksat-sg34) pulse during SpaceOps stage (0.75 - 0.90)
    if (groundStationsRef.current) {
      groundStationsRef.current.visible = p >= 0.72;
      const s = 1.0 + Math.sin(t * 4) * 0.15;
      groundStationsRef.current.scale.set(s, s, s);
    }

    if (constellationGroupRef.current) {
      constellationGroupRef.current.rotation.y = t * 0.03;
    }
  });

  return (
    <group ref={earthGroupRef} position={[-1.2, -1.8, 0]}>
      {/* 1. Main Solid Earth Globe */}
      <mesh ref={surfaceMeshRef}>
        <sphereGeometry args={[4.8, 64, 64]} />
        <meshStandardMaterial
          map={surfaceTexture}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* 2. Floating Parallax Cloud Sphere */}
      <mesh ref={cloudsMeshRef}>
        <sphereGeometry args={[4.85, 64, 64]} />
        <meshStandardMaterial
          map={cloudsTexture}
          transparent
          opacity={0.82}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Glowing Fresnel Atmospheric Halo (Electric Cyan #00A1FF) */}
      <mesh material={atmosphereMaterial}>
        <sphereGeometry args={[5.06, 64, 64]} />
      </mesh>

      {/* 4. High-Res Coastline Terrain Map + Tactical Grid Overlay (Act 2 Dive) */}
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
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[3.2, 2.2, 16, 12]} />
          <meshBasicMaterial
            color="#00A1FF"
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>
        <mesh position={[0.2, 0.1, 0.03]}>
          <ringGeometry args={[0.2, 0.22, 32]} />
          <meshBasicMaterial color="#00A1FF" transparent opacity={0.8} />
        </mesh>
      </group>

      {/* 5. Glowing Ground Station Beacons (Eagle-1, ksat-sg34) for SpaceOps */}
      <group ref={groundStationsRef}>
        {/* Beacon 1: Eagle-1 (North America) */}
        <group position={[1.4, 2.8, 3.7]}>
          <mesh>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#00A1FF" />
          </mesh>
          <mesh>
            <ringGeometry args={[0.1, 0.14, 32]} />
            <meshBasicMaterial color="#00A1FF" transparent opacity={0.7} side={THREE.DoubleSide} />
          </mesh>
        </group>

        {/* Beacon 2: ksat-sg34 (Svalbard Arctic Ground Station) */}
        <group position={[-0.4, 4.6, 1.2]}>
          <mesh>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#FC6A18" />
          </mesh>
          <mesh>
            <ringGeometry args={[0.1, 0.14, 32]} />
            <meshBasicMaterial color="#FC6A18" transparent opacity={0.7} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </group>

      {/* 6. Orbital Constellation Shell Rings */}
      <group ref={constellationGroupRef}>
        <mesh rotation={[Math.PI / 2.3, 0.4, 0]}>
          <torusGeometry args={[5.6, 0.008, 16, 100]} />
          <meshBasicMaterial color="#00A1FF" transparent opacity={0.45} />
        </mesh>
        <mesh rotation={[0.8, -0.6, 0.2]}>
          <torusGeometry args={[6.1, 0.008, 16, 100]} />
          <meshBasicMaterial color="#00A1FF" transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
}
