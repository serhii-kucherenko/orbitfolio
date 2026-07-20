"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Html } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Mesh } from "three";
import { cv } from "@/data/cv";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

function Planet() {
  const ref = useRef<Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.15;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.35, 48, 48]} />
        <meshStandardMaterial
          color="#38bdf8"
          roughness={0.45}
          metalness={0.35}
          emissive="#0ea5e9"
          emissiveIntensity={0.15}
        />
      </mesh>
      {cv.projects.map((p, i) => {
        const a = (i / cv.projects.length) * Math.PI * 2;
        const x = Math.cos(a) * 2.2;
        const y = Math.sin(a * 1.3) * 0.4;
        const z = Math.sin(a) * 2.2;
        return (
          <group key={p.name} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial color="#fde68a" emissive="#fbbf24" emissiveIntensity={0.5} />
            </mesh>
            <Html distanceFactor={8} style={{ pointerEvents: "none" }}>
              <span className="whitespace-nowrap rounded bg-black/70 px-1.5 py-0.5 font-mono text-[9px] text-amber-100">
                {p.name}
              </span>
            </Html>
          </group>
        );
      })}
    </Float>
  );
}

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="grid min-h-[70vh] lg:grid-cols-2">
        <div className="relative h-[50vh] lg:h-auto">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[4, 2, 3]} intensity={1.2} />
            {!reduce && <Stars radius={60} depth={40} count={1200} factor={3} saturation={0} fade />}
            <Planet />
          </Canvas>
          <p className="absolute bottom-4 left-4 font-[family-name:var(--font-mono)] text-[10px] text-sky-300/60">
            PROJECT MOONS IN ORBIT
          </p>
        </div>
        <div className="flex flex-col justify-center px-8 py-16 pt-28 lg:pt-16">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-4 text-sky-200/80">{cv.title}</p>
          <p className="mt-6 text-sm leading-relaxed text-white/60">{cv.summary}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {cv.highlights.slice(0, 4).map((h) => (
              <div key={h.label} className="rounded-xl border border-sky-400/20 bg-sky-950/30 px-3 py-2">
                <p className="font-[family-name:var(--font-display)] text-xl text-sky-200">{h.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/40">{h.label}</p>
              </div>
            ))}
          </div>
          <ContactRow className="mt-8" />
        </div>
      </div>
      <section className="mx-auto max-w-5xl space-y-16 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
      </section>
    </main>
  );
}
