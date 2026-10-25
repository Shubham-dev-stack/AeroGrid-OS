"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModelViewerProps {
  activePayload?: string;
}

export default function ModelViewer({ activePayload }: ModelViewerProps) {
  const craftRef = useRef<THREE.Group>(null);
  const lidarHeadRef = useRef<THREE.Mesh>(null);
  const antennaRef = useRef<THREE.Group>(null);
  const thrusterPlumeRef = useRef<THREE.Mesh>(null);
  const leftWingRef = useRef<THREE.Group>(null);
  const rightWingRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // 1. Idle micro-float and aerospace attitude hovering
    if (craftRef.current) {
      craftRef.current.position.y = Math.sin(t * 0.9) * 0.06;
      craftRef.current.rotation.z = Math.sin(t * 0.6) * 0.02;
      craftRef.current.rotation.x = Math.sin(t * 0.4) * 0.015;
    }

    // 2. Continuous 3D LiDAR scanner rotation
    if (lidarHeadRef.current) {
      lidarHeadRef.current.rotation.y += delta * 2.5;
    }

    // 3. Subtle tracking oscillation for High-Gain Antenna
    if (antennaRef.current) {
      antennaRef.current.rotation.x = Math.sin(t * 0.5) * 0.1 - 0.2;
      antennaRef.current.rotation.y = Math.cos(t * 0.3) * 0.15;
    }

    // 4. Pulsing Ion Thruster emissive glow
    if (thrusterPlumeRef.current) {
      const mat = thrusterPlumeRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = 2.0 + Math.sin(t * 8) * 0.6;
      }
    }
  });

  return (
    <group ref={craftRef} position={[0, 0, 0]} dispose={null}>
      {/* ---------------- 1. MAIN AEROSPACE CHASSIS ---------------- */}
      {/* Central Avionics Core */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 0.9, 1.8]} />
        <meshStandardMaterial
          color="#0b101d"
          metalness={0.88}
          roughness={0.22}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Cyber Wireframe Cage Outline */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.42, 0.92, 1.82]} />
        <meshBasicMaterial
          color="#00A1FF"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* MLI Gold Thermal Insulation Blanket Layer (Top & Side Foil) */}
      <mesh position={[0, 0.46, 0]}>
        <boxGeometry args={[1.3, 0.04, 1.6]} />
        <meshStandardMaterial
          color="#e5a93c"
          metalness={0.9}
          roughness={0.35}
        />
      </mesh>

      {/* Titanium Structural Keel / Spine */}
      <mesh position={[0, -0.46, 0]}>
        <boxGeometry args={[0.4, 0.06, 2.1]} />
        <meshStandardMaterial
          color="#232734"
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>

      {/* ---------------- 2. SENSOR & MODULAR PAYLOAD BAYS ---------------- */}
      {/* Forward Sensor Turret Pod */}
      <group position={[0, -0.25, 1.05]}>
        {/* Turret Base Mount */}
        <mesh>
          <cylinderGeometry args={[0.35, 0.42, 0.3, 32]} />
          <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* 3D LiDAR Rotating Sensor Head */}
        <mesh ref={lidarHeadRef} position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.26, 0.26, 0.22, 24]} />
          <meshStandardMaterial
            color="#080c14"
            metalness={0.95}
            roughness={0.1}
          />
          {/* Laser Emitter Aperture */}
          <mesh position={[0.24, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 0.08, 16]} />
            <meshStandardMaterial
              color="#00A1FF"
              emissive="#00A1FF"
              emissiveIntensity={3.0}
            />
          </mesh>
        </mesh>

        {/* Dual LWIR Thermal Optical Lenses */}
        <mesh position={[-0.18, 0.1, 0.18]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.1, 24]} />
          <meshStandardMaterial
            color="#FC6A18"
            emissive="#FC6A18"
            emissiveIntensity={1.5}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[0.18, 0.1, 0.18]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.1, 24]} />
          <meshStandardMaterial
            color="#00A1FF"
            emissive="#00A1FF"
            emissiveIntensity={1.8}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* ---------------- 3. DEPLOYABLE SOLAR WINGS ---------------- */}
      {/* Left Solar Array */}
      <group ref={leftWingRef} position={[-0.7, 0, 0]}>
        {/* Truss Arm Extender */}
        <mesh position={[-0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.9, 16]} />
          <meshStandardMaterial color="#4a5568" metalness={0.9} roughness={0.3} />
        </mesh>

        {/* Left Solar Panel Surface */}
        <mesh position={[-1.75, 0, 0]}>
          <boxGeometry args={[1.7, 0.03, 1.2]} />
          <meshStandardMaterial
            color="#0a192f"
            metalness={0.7}
            roughness={0.2}
            envMapIntensity={2.0}
          />
        </mesh>

        {/* Solar Cell Grid Lines / Cyan Accents */}
        <mesh position={[-1.75, 0.02, 0]}>
          <boxGeometry args={[1.68, 0.01, 1.18]} />
          <meshBasicMaterial
            color="#00A1FF"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Gold Backing Plate */}
        <mesh position={[-1.75, -0.02, 0]}>
          <boxGeometry args={[1.7, 0.01, 1.2]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.4} />
        </mesh>
      </group>

      {/* Right Solar Array */}
      <group ref={rightWingRef} position={[0.7, 0, 0]}>
        {/* Truss Arm Extender */}
        <mesh position={[0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.9, 16]} />
          <meshStandardMaterial color="#4a5568" metalness={0.9} roughness={0.3} />
        </mesh>

        {/* Right Solar Panel Surface */}
        <mesh position={[1.75, 0, 0]}>
          <boxGeometry args={[1.7, 0.03, 1.2]} />
          <meshStandardMaterial
            color="#0a192f"
            metalness={0.7}
            roughness={0.2}
            envMapIntensity={2.0}
          />
        </mesh>

        {/* Solar Cell Grid Lines / Cyan Accents */}
        <mesh position={[1.75, 0.02, 0]}>
          <boxGeometry args={[1.68, 0.01, 1.18]} />
          <meshBasicMaterial
            color="#00A1FF"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Gold Backing Plate */}
        <mesh position={[1.75, -0.02, 0]}>
          <boxGeometry args={[1.7, 0.01, 1.2]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.4} />
        </mesh>
      </group>

      {/* ---------------- 4. HIGH-GAIN RF DISH & COMMS ---------------- */}
      <group ref={antennaRef} position={[0, 0.6, -0.4]}>
        {/* Gimbal Pedestal */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.2, 16]} />
          <meshStandardMaterial color="#718096" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Parabolic Reflector Dish */}
        <mesh position={[0, 0.35, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <sphereGeometry args={[0.4, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
          <meshStandardMaterial
            color="#edf2f7"
            metalness={0.95}
            roughness={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Feed Horn Standoff */}
        <mesh position={[0, 0.45, 0.2]} rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.25, 12]} />
          <meshStandardMaterial
            color="#FC6A18"
            emissive="#FC6A18"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>

      {/* 5G Encrypted Whip Dipoles */}
      <mesh position={[-0.55, 0.55, 0.7]} rotation={[0.2, 0, -0.3]}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 8]} />
        <meshStandardMaterial color="#00A1FF" emissive="#00A1FF" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0.55, 0.55, 0.7]} rotation={[0.2, 0, 0.3]}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 8]} />
        <meshStandardMaterial color="#00A1FF" emissive="#00A1FF" emissiveIntensity={0.8} />
      </mesh>

      {/* ---------------- 5. ION PROPULSION & THRUSTER EXHAUST ---------------- */}
      <group position={[0, 0, -0.95]}>
        {/* Main Ion Engine Cowling */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.22, 0.35, 32]} />
          <meshStandardMaterial color="#1a202c" metalness={0.95} roughness={0.15} />
        </mesh>

        {/* Ion Thruster Core Grid */}
        <mesh position={[0, 0, -0.16]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial
            color="#00A1FF"
            emissive="#00A1FF"
            emissiveIntensity={3.5}
          />
        </mesh>

        {/* Glowing Exhaust Plume */}
        <mesh
          ref={thrusterPlumeRef}
          position={[0, 0, -0.55]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <coneGeometry args={[0.28, 0.8, 24, 1, true]} />
          <meshStandardMaterial
            color="#00A1FF"
            emissive="#00A1FF"
            emissiveIntensity={2.5}
            transparent
            opacity={0.65}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Lateral RCS Attitude Control Nozzles */}
        <mesh position={[-0.6, 0.3, 0.1]} rotation={[0, 0, Math.PI / 2]}>
          <coneGeometry args={[0.05, 0.1, 12]} />
          <meshStandardMaterial color="#a0aec0" metalness={0.9} />
        </mesh>
        <mesh position={[0.6, 0.3, 0.1]} rotation={[0, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.05, 0.1, 12]} />
          <meshStandardMaterial color="#a0aec0" metalness={0.9} />
        </mesh>
      </group>
    </group>
  );
}
