"use client";

import { Float, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb({ accent }: { accent: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.16;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.22} floatIntensity={0.45}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.25, 40, 40]} />
        <meshStandardMaterial color={accent} metalness={0.3} roughness={0.42} />
      </mesh>
      {[0, 1, 2, 3].map((index) => {
        const angle = index * Math.PI * 0.5;
        return (
          <mesh key={index} position={[Math.cos(angle) * 2.05, (index - 1.5) * 0.22, Math.sin(angle) * 2.05]}>
            <sphereGeometry args={[0.1 + index * 0.025, 14, 14]} />
            <meshStandardMaterial color="#f8fafc" emissive={accent} emissiveIntensity={0.45} />
          </mesh>
        );
      })}
    </Float>
  );
}

export function OrbitScene({ accent }: { accent: string }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 46 }}>
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <Stars radius={45} depth={25} count={700} factor={2.4} fade speed={0.35} />
      <Orb accent={accent} />
    </Canvas>
  );
}
