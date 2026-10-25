"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollStore";

const MODEL_PATH = "/models/scene.glb";

export default function ModelViewer() {
  const masterGroupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(MODEL_PATH);

  // Sub-mesh references
  const detailsFrameRef = useRef<THREE.Object3D | null>(null);
  const gridRef = useRef<THREE.Object3D | null>(null);
  const drawFrameRef = useRef<THREE.Object3D | null>(null);
  const falconRef = useRef<THREE.Object3D | null>(null);
  const falconP1Ref = useRef<THREE.Object3D | null>(null);
  const falconP2Ref = useRef<THREE.Object3D | null>(null);
  const satRocketRef = useRef<THREE.Object3D | null>(null);
  const spaceopsRef = useRef<THREE.Object3D | null>(null);
  const spaceopsWrapperRef = useRef<THREE.Object3D | null>(null);

  // Initial base transforms to restore after animation
  const initialP1Pos = useRef(new THREE.Vector3());
  const initialP2Pos = useRef(new THREE.Vector3());
  const initialSatRocketPos = useRef(new THREE.Vector3());

  // Clone scene and setup materials
  const clonedScene = useMemo(() => {
    const clone = gltf.scene.clone(true);

    // Locate sub-meshes
    detailsFrameRef.current = clone.getObjectByName("details-frame") || null;
    gridRef.current = clone.getObjectByName("grid") || null;
    drawFrameRef.current = clone.getObjectByName("draw-frame") || null;
    falconRef.current = clone.getObjectByName("falcon") || null;
    falconP1Ref.current = clone.getObjectByName("falcon-p1") || null;
    falconP2Ref.current = clone.getObjectByName("falcon-p2") || null;
    satRocketRef.current = clone.getObjectByName("sat-rocket") || null;
    spaceopsRef.current = clone.getObjectByName("spaceops") || null;
    spaceopsWrapperRef.current = clone.getObjectByName("spaceops-wrapper") || null;

    if (falconP1Ref.current) initialP1Pos.current.copy(falconP1Ref.current.position);
    if (falconP2Ref.current) initialP2Pos.current.copy(falconP2Ref.current.position);
    if (satRocketRef.current) initialSatRocketPos.current.copy(satRocketRef.current.position);

    // Apply high-fidelity EnduroSat PBR and blueprint shaders
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const name = (mesh.name || "").toLowerCase();
        const parentName = (mesh.parent?.name || "").toLowerCase();

        // 1. Blueprint Wireframe for details-frame and draw-frame
        if (
          parentName.includes("details") ||
          name.includes("details") ||
          parentName.includes("draw") ||
          name.includes("draw") ||
          name.includes("blueprint")
        ) {
          if (mesh.material) {
            const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
            mat.color = new THREE.Color("#081226");
            mat.roughness = 0.25;
            mat.metalness = 0.9;
            mat.emissive = new THREE.Color("#003554");
            mat.emissiveIntensity = 0.4;
            mesh.material = mat;
          }
        }

        // 2. Isometric Blueprint Floor Grid
        if (name.includes("grid") || parentName.includes("grid")) {
          mesh.material = new THREE.MeshBasicMaterial({
            color: new THREE.Color("#00A1FF"),
            wireframe: true,
            transparent: true,
            opacity: 0.65,
          });
        }

        // 3. Rocket Fairing Shells
        if (name.includes("falcon") || parentName.includes("falcon")) {
          if (mesh.material) {
            const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
            mat.color = new THREE.Color("#1a202c");
            mat.roughness = 0.3;
            mat.metalness = 0.85;
            mesh.material = mat;
          }
        }

        // 4. Futuristic 3D Glass HUD SpaceOps
        if (name.includes("panel") || parentName.includes("spaceops") || name.includes("interface")) {
          mesh.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#001b33"),
            roughness: 0.1,
            metalness: 0.9,
            transparent: true,
            opacity: 0.88,
            emissive: new THREE.Color("#00A1FF"),
            emissiveIntensity: 0.6,
          });
        }
      }
    });

    return clone;
  }, [gltf]);

  // Cinematic 5-stage timeline execution in 60 FPS useFrame
  useFrame((state, delta) => {
    const p = Math.max(0, Math.min(1, scrollState.progress));
    const t = state.clock.getElapsedTime();

    const detailsFrame = detailsFrameRef.current;
    const grid = gridRef.current;
    const drawFrame = drawFrameRef.current;
    const falcon = falconRef.current;
    const falconP1 = falconP1Ref.current;
    const falconP2 = falconP2Ref.current;
    const satRocket = satRocketRef.current;
    const spaceops = spaceopsRef.current;
    const spaceopsWrapper = spaceopsWrapperRef.current;

    // -------------------------------------------------------------
    // ACT 1 & ACT 2: [0.0 - 0.45] HERO ORBIT & ATMOSPHERE DIVE
    // -------------------------------------------------------------
    if (p <= 0.45) {
      if (detailsFrame) {
        detailsFrame.visible = true;
        detailsFrame.position.set(1.69, 2.45 + Math.sin(t * 0.8) * 0.04, 12.69);
        detailsFrame.rotation.y = t * 0.05 + p * 0.8;
      }
      if (grid) grid.visible = false;
      if (drawFrame) drawFrame.visible = false;
      if (falcon) falcon.visible = false;
      if (spaceops) spaceops.visible = false;
      if (spaceopsWrapper) spaceopsWrapper.visible = false;
    }

    // -------------------------------------------------------------
    // ACT 3: [0.45 - 0.60] EXPLODED BLUEPRINT CAD ASSEMBLY (AIT STAGE)
    // -------------------------------------------------------------
    else if (p > 0.45 && p <= 0.6) {
      if (detailsFrame) detailsFrame.visible = false;
      if (grid) {
        grid.visible = true;
        grid.position.set(0.02, -3.0, 41.73);
      }
      if (drawFrame) {
        drawFrame.visible = true;
        drawFrame.position.set(0.05, -2.87 + Math.sin(t * 0.6) * 0.03, 41.78);
        drawFrame.rotation.y = Math.sin(t * 0.2) * 0.05;
      }
      if (falcon) falcon.visible = false;
      if (spaceops) spaceops.visible = false;
      if (spaceopsWrapper) spaceopsWrapper.visible = false;
    }

    // -------------------------------------------------------------
    // ACT 4: [0.60 - 0.75] ROCKET FAIRING SEPARATION (LAUNCH & DEPLOY)
    // -------------------------------------------------------------
    else if (p > 0.6 && p <= 0.75) {
      if (detailsFrame) detailsFrame.visible = false;
      if (grid) grid.visible = false;
      if (drawFrame) drawFrame.visible = false;
      if (spaceops) spaceops.visible = false;
      if (spaceopsWrapper) spaceopsWrapper.visible = false;

      if (falcon) {
        falcon.visible = true;
        falcon.position.set(-0.56, -2.25, 41.77);

        // Fairing separation animation begins at p >= 0.67
        if (p < 0.67) {
          if (falconP1) falconP1.position.copy(initialP1Pos.current);
          if (falconP2) falconP2.position.copy(initialP2Pos.current);
          if (satRocket) satRocket.position.copy(initialSatRocketPos.current);
        } else {
          // Smooth fairing outward separation curve
          const sepProgress = Math.min(1, (p - 0.67) / 0.07);
          const easeSep = 1 - Math.pow(1 - sepProgress, 3); // Cubic ease out

          if (falconP1) {
            falconP1.position.x = initialP1Pos.current.x - easeSep * 1.8;
            falconP1.rotation.z = -easeSep * 0.35;
          }
          if (falconP2) {
            falconP2.position.x = initialP2Pos.current.x + easeSep * 1.8;
            falconP2.rotation.z = easeSep * 0.35;
          }
          if (satRocket) {
            // Satellite emerges forward out of fairing
            satRocket.position.y = initialSatRocketPos.current.y + easeSep * 2.4;
            satRocket.rotation.y = t * 0.2;
          }
        }
      }
    }

    // -------------------------------------------------------------
    // ACT 5: [0.75 - 0.90] 3D FLOATING GLASS CONTROL PANEL (SPACE OPS)
    // -------------------------------------------------------------
    else if (p > 0.75 && p <= 0.9) {
      if (detailsFrame) detailsFrame.visible = false;
      if (grid) grid.visible = false;
      if (drawFrame) drawFrame.visible = false;
      if (falcon) falcon.visible = false;

      if (spaceops) {
        spaceops.visible = true;
        spaceops.position.set(1.4, 0.2 + Math.sin(t * 0.7) * 0.04, -7.5);
        spaceops.rotation.y = -0.15 + Math.sin(t * 0.3) * 0.03;
      }
      if (spaceopsWrapper) {
        spaceopsWrapper.visible = true;
      }
    }

    // -------------------------------------------------------------
    // ACT 6: [0.90 - 1.0] HIGH ORBIT CONSTELLATION & COST
    // -------------------------------------------------------------
    else {
      if (grid) grid.visible = false;
      if (drawFrame) drawFrame.visible = false;
      if (falcon) falcon.visible = false;
      if (spaceops) spaceops.visible = false;
      if (spaceopsWrapper) spaceopsWrapper.visible = false;

      if (detailsFrame) {
        detailsFrame.visible = true;
        detailsFrame.position.set(0.63, 8.91 + Math.sin(t * 0.8) * 0.05, 20.92);
        detailsFrame.rotation.y = t * 0.08;
      }
    }
  });

  return (
    <group ref={masterGroupRef} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
