"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Float,
  Environment,
  ContactShadows,
  PresentationControls,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

function PhoneModel() {
  const mesh = useRef<THREE.Group>(null);

  // Rotate the phone slightly
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={mesh}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Simple phone frame representation */}
        <mesh scale={[1, 2, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#0f172a"
            roughness={0.1}
            metalness={0.8}
          />

          {/* Screen */}
          <mesh position={[0, 0, 0.51]} scale={[0.9, 0.9, 1]}>
            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#3b82f6"
              emissiveIntensity={0.2}
            />

            {/* Use HTML for the screen content to show the "App" */}
            <Html
              transform
              occlude
              position={[0, 0, 0.01]}
              distanceFactor={1.2}
              style={{
                width: "320px",
                height: "640px",
                background: "#020617",
                borderRadius: "32px",
                overflow: "hidden",
              }}
            >
              <div className="w-full h-full p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-electric-blue/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-electric-blue" />
                  </div>
                  <div className="w-12 h-4 bg-white/10 rounded-full" />
                </div>

                <div className="w-full h-32 rounded-2xl glassmorphism border-white/10 flex flex-col p-4 gap-2">
                  <div className="w-20 h-3 bg-white/20 rounded-full" />
                  <div className="w-full h-20 bg-emerald-safe/10 rounded-xl relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-emerald-safe animate-ping" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 rounded-2xl bg-white/5" />
                  <div className="h-16 rounded-2xl bg-white/5" />
                </div>

                <div className="mt-auto h-16 w-full rounded-2xl bg-danger-red shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center font-bold text-white text-xl animate-pulse">
                  SOS
                </div>
              </div>
            </Html>
          </mesh>
        </mesh>
      </Float>
    </group>
  );
}

export default function PhoneCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />

        <PresentationControls
          global
          snap
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        >
          <PhoneModel />
        </PresentationControls>

        <Environment preset="city" />
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
        />
      </Canvas>
    </div>
  );
}
