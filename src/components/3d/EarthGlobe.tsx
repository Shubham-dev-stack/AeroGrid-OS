"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollStore";

// Razor-sharp Electric Cyan Atmospheric Fresnel Rim Shader
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

  // Razor-sharp grazing angle Fresnel power curve
  float fresnel = pow(1.0 - max(0.0, dotNV), 3.8) * 2.4;

  // Upper/sunward horizon bias so the lit edge glows intensely
  float horizonBias = max(0.15, normal.y * 0.45 + normal.x * 0.45 + 0.4);
  float intensity = fresnel * horizonBias;

  // Electric Cyan #00A1FF with laser blooming intensity
  vec3 glowColor = vec3(0.0, 0.63, 1.0);
  gl_FragColor = vec4(glowColor, intensity);
}
`;

export default function EarthGlobe() {
  const earthGroupRef = useRef<THREE.Group>(null);
  const surfaceMeshRef = useRef<THREE.Mesh>(null);
  const cloudsMeshRef = useRef<THREE.Mesh>(null);
  const groundStationsRef = useRef<THREE.Group>(null);
  const constellationGroupRef = useRef<THREE.Group>(null);

  // Load satellite textures
  const [surfaceTexture, cloudsTexture] = useTexture([
    "/textures/america-north-2k.webp",
    "/textures/clouds.webp",
  ]);

  // Apply maximum anisotropic filtering (16x) for razor-sharp fidelity without pixelation
  surfaceTexture.colorSpace = THREE.SRGBColorSpace;
  surfaceTexture.anisotropy = 16;
  surfaceTexture.generateMipmaps = true;
  surfaceTexture.minFilter = THREE.LinearMipmapLinearFilter;
  surfaceTexture.magFilter = THREE.LinearFilter;

  cloudsTexture.colorSpace = THREE.SRGBColorSpace;
  cloudsTexture.anisotropy = 16;
  cloudsTexture.generateMipmaps = true;
  cloudsTexture.minFilter = THREE.LinearMipmapLinearFilter;
  cloudsTexture.magFilter = THREE.LinearFilter;

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

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const p = Math.max(0, Math.min(1, scrollState.progress));

    if (!earthGroupRef.current) return;

    // Strict Stage Visibility Management:
    // Earth is hidden during Act 3 (Payload Integration / Exploded CAD Grid at 0.45 < p <= 0.60)
    if (p > 0.45 && p <= 0.60) {
      earthGroupRef.current.visible = false;
    } else {
      earthGroupRef.current.visible = true;

      // Position choreography:
      // In Hero (p < 0.25): positioned precisely at the bottom-left horizon [-3.5, -4.2, -5]
      if (p < 0.25) {
        earthGroupRef.current.position.set(-3.5, -4.2, -5);
      }
      // Atmosphere Dive (0.25 <= p <= 0.45): smoothly moves closer for the dive effect
      else if (p >= 0.25 && p <= 0.45) {
        const diveProg = (p - 0.25) / 0.2;
        earthGroupRef.current.position.set(
          -3.5 + diveProg * 1.5,
          -4.2 + diveProg * 1.8,
          -5 + diveProg * 2.0
        );
      }
      // Orbit & SpaceOps (p > 0.60): low orbit backdrop
      else {
        earthGroupRef.current.position.set(-2.0, -3.2, -2.5);
      }
    }

    // Slow cinematic axial Earth rotation
    if (surfaceMeshRef.current) {
      surfaceMeshRef.current.rotation.y = t * 0.015 + p * 0.5;
    }
    if (cloudsMeshRef.current) {
      cloudsMeshRef.current.rotation.y = t * 0.02 + p * 0.58;
    }

    // Ground Station beacons pulse during SpaceOps stage (p >= 0.70)
    if (groundStationsRef.current) {
      groundStationsRef.current.visible = p >= 0.70;
      const s = 1.0 + Math.sin(t * 4) * 0.15;
      groundStationsRef.current.scale.set(s, s, s);
    }

    if (constellationGroupRef.current) {
      constellationGroupRef.current.rotation.y = t * 0.025;
    }
  });

  return (
    <group ref={earthGroupRef} position={[-3.5, -4.2, -5]}>
      {/* 1. Main Solid Earth Globe - Realistic Day/Night Contrast */}
      <mesh ref={surfaceMeshRef}>
        <sphereGeometry args={[4.8, 64, 64]} />
        <meshStandardMaterial
          map={surfaceTexture}
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* 2. Floating Parallax Cloud Layer */}
      <mesh ref={cloudsMeshRef}>
        <sphereGeometry args={[4.84, 64, 64]} />
        <meshStandardMaterial
          map={cloudsTexture}
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Razor-Sharp Electric Cyan Atmospheric Rim Glow (#00A1FF) */}
      <mesh material={atmosphereMaterial}>
        <sphereGeometry args={[5.02, 64, 64]} />
      </mesh>

      {/* 4. Glowing Ground Station Beacons (Eagle-1 & Svalbard) for SpaceOps */}
      <group ref={groundStationsRef}>
        {/* Beacon 1: Eagle-1 (North America) */}
        <group position={[1.4, 2.8, 3.7]}>
          <mesh>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#00A1FF" />
          </mesh>
          <mesh>
            <ringGeometry args={[0.08, 0.12, 32]} />
            <meshBasicMaterial
              color="#00A1FF"
              transparent
              opacity={0.8}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>

        {/* Beacon 2: Svalbard Arctic Station */}
        <group position={[-0.4, 4.6, 1.2]}>
          <mesh>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#FC6A18" />
          </mesh>
          <mesh>
            <ringGeometry args={[0.08, 0.12, 32]} />
            <meshBasicMaterial
              color="#FC6A18"
              transparent
              opacity={0.8}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </group>

      {/* 5. Minimalist Orbital Constellation Rings */}
      <group ref={constellationGroupRef}>
        <mesh rotation={[Math.PI / 2.3, 0.4, 0]}>
          <torusGeometry args={[5.5, 0.006, 16, 100]} />
          <meshBasicMaterial color="#00A1FF" transparent opacity={0.35} />
        </mesh>
        <mesh rotation={[0.8, -0.6, 0.2]}>
          <torusGeometry args={[6.0, 0.006, 16, 100]} />
          <meshBasicMaterial color="#00A1FF" transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  );
}
