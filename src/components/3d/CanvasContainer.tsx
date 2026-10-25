"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function CanvasContainer() {
  return (
    <div
      id="aerogrid-webgl-canvas"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black select-none"
      aria-hidden="true"
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={[1, 2]}
        camera={{ position: [0, 1.2, 5.8], fov: 45 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
