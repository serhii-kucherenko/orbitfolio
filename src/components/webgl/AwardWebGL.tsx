"use client";

import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Group, Mesh, Points } from "three";
import * as THREE from "three";

type StageProps = {
  accent: string;
  className?: string;
  label: string;
  reduce: boolean;
  fallback: ReactNode;
  children: ReactNode;
};

/** Client-only WebGL mount with reduced-motion CSS fallback — never traps scroll. */
export function WebGLStage({ accent, className, label, reduce, fallback, children }: StageProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (reduce || !mounted) {
    return (
      <div className={className} aria-label={label} role="img">
        {fallback}
      </div>
    );
  }

  return (
    <div className={className} aria-label={label} role="img">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.2, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <color attach="background" args={["#00000000"]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 5, 6]} intensity={1.35} color={accent} />
        <pointLight position={[-3, -1, 2]} intensity={0.55} color="#ffffff" />
        {children}
      </Canvas>
    </div>
  );
}

function SpinGroup({
  speed = 0.18,
  children,
}: {
  speed?: number;
  children: ReactNode;
}) {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });
  return <group ref={ref}>{children}</group>;
}

/** Soft museum alcoves orbiting a lit core — for Scroll Alcove Museum. */
export function SceneAlcove({ accent }: { accent: string }) {
  return (
    <>
      <Stars radius={40} depth={30} count={500} factor={2.2} fade speed={0.4} />
      <Float speed={1.2} floatIntensity={0.35} rotationIntensity={0.15}>
        <mesh>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshStandardMaterial color={accent} metalness={0.35} roughness={0.4} emissive={accent} emissiveIntensity={0.15} />
        </mesh>
      </Float>
      <SpinGroup speed={0.12}>
        {[0, 1, 2, 3, 4].map((index) => {
          const angle = (index / 5) * Math.PI * 2;
          return (
            <mesh key={index} position={[Math.cos(angle) * 2.1, Math.sin(angle * 1.3) * 0.35, Math.sin(angle) * 2.1]}>
              <boxGeometry args={[0.55, 0.7, 0.18]} />
              <meshStandardMaterial color="#2a2218" metalness={0.2} roughness={0.65} />
            </mesh>
          );
        })}
      </SpinGroup>
    </>
  );
}

/** Evidence planet with orbiting proof moons — Orbital Proof Sphere. */
export function SceneOrbitProof({ accent }: { accent: string }) {
  const moons = useMemo(
    () =>
      [0, 1, 2, 3].map((index) => ({
        radius: 1.7 + index * 0.28,
        size: 0.12 + index * 0.03,
        speed: 0.35 + index * 0.08,
        y: (index - 1.5) * 0.22,
      })),
    [],
  );
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <Stars radius={50} depth={28} count={650} factor={2.5} fade speed={0.3} />
      <Float speed={1} floatIntensity={0.4} rotationIntensity={0.2}>
        <mesh>
          <sphereGeometry args={[1.15, 48, 48]} />
          <meshStandardMaterial color={accent} metalness={0.45} roughness={0.35} />
        </mesh>
      </Float>
      <group ref={group}>
        {moons.map((moon, index) => (
          <mesh key={index} position={[moon.radius, moon.y, 0]}>
            <sphereGeometry args={[moon.size, 16, 16]} />
            <meshStandardMaterial color="#f8fafc" emissive={accent} emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
      {[1.55, 2.05, 2.55].map((radius) => (
        <mesh key={radius} rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[radius, 0.008, 8, 96]} />
          <meshBasicMaterial color={accent} transparent opacity={0.35} />
        </mesh>
      ))}
    </>
  );
}

/** Translucent distorting veil — WebGPU Veil (WebGL stand-in with MeshDistort). */
export function SceneVeil({ accent }: { accent: string }) {
  return (
    <>
      <Stars radius={36} depth={20} count={400} factor={2} fade speed={0.25} />
      <Float speed={0.8} floatIntensity={0.5} rotationIntensity={0.3}>
        <mesh scale={1.8}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color={accent}
            transparent
            opacity={0.55}
            distort={0.35}
            speed={1.6}
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
      </Float>
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.7} roughness={0.2} />
      </mesh>
    </>
  );
}

/** Camera-like corridor of proof panels — Cinematic Flythrough. */
export function SceneFlythrough({ accent }: { accent: string }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.z = ((state.clock.elapsedTime * 0.55) % 6) - 3;
  });

  return (
    <>
      <fog attach="fog" args={["#05070c", 3, 12]} />
      <group ref={ref}>
        {Array.from({ length: 8 }, (_, index) => (
          <mesh key={index} position={[(index % 2 ? 1.4 : -1.4), 0, -index * 1.4]}>
            <planeGeometry args={[1.1, 1.6]} />
            <meshStandardMaterial
              color={index % 2 ? accent : "#1e293b"}
              emissive={accent}
              emissiveIntensity={index % 2 ? 0.25 : 0.05}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 14]} />
        <meshStandardMaterial color="#0b1220" metalness={0.4} roughness={0.8} />
      </mesh>
    </>
  );
}

/** Single moving spotlight over a sculptural form — Spotlight Installation. */
export function SceneSpotlight({ accent }: { accent: string }) {
  const light = useRef<THREE.SpotLight>(null);
  useFrame((state) => {
    if (!light.current) return;
    const t = state.clock.elapsedTime;
    light.current.position.x = Math.sin(t * 0.55) * 2.4;
    light.current.position.z = Math.cos(t * 0.4) * 2.2;
  });

  return (
    <>
      <ambientLight intensity={0.08} />
      <spotLight ref={light} intensity={3.2} angle={0.35} penumbra={0.6} color={accent} castShadow />
      <mesh position={[0, -0.2, 0]} rotation={[0.2, 0.4, 0]}>
        <torusKnotGeometry args={[0.7, 0.22, 128, 24]} />
        <meshStandardMaterial color="#1a1610" metalness={0.55} roughness={0.35} />
      </mesh>
      <mesh position={[0, -1.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.4, 48]} />
        <meshStandardMaterial color="#0a0806" roughness={0.9} />
      </mesh>
    </>
  );
}

/** Instanced-feeling particle fleet around a command core — Particle Fleet. */
export function SceneParticleFleet({ accent }: { accent: string }) {
  const points = useRef<Points>(null);
  const positions = useMemo(() => {
    const count = 420;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.15;
  });

  return (
    <>
      <Float speed={1.1} floatIntensity={0.3}>
        <mesh>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.35} metalness={0.5} roughness={0.25} />
        </mesh>
      </Float>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={accent} size={0.035} sizeAttenuation transparent opacity={0.85} />
      </points>
    </>
  );
}

/** Soft atmospheric orb with noise distortion — Shader Atmosphere. */
export function SceneAtmosphere({ accent }: { accent: string }) {
  return (
    <>
      <Stars radius={55} depth={40} count={800} factor={3} fade speed={0.2} />
      <Float speed={0.6} floatIntensity={0.45} rotationIntensity={0.1}>
        <mesh scale={1.6}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial color={accent} distort={0.28} speed={1.2} roughness={0.45} metalness={0.25} />
        </mesh>
      </Float>
      <mesh scale={2.05}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={accent} transparent opacity={0.08} wireframe />
      </mesh>
    </>
  );
}

/** Monumental monolith with scanning light — Mouse Reveal Monolith. */
export function SceneMonolith({ accent }: { accent: string }) {
  const beam = useRef<Mesh>(null);
  useFrame((state) => {
    if (!beam.current) return;
    beam.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.9;
  });

  return (
    <>
      <mesh>
        <boxGeometry args={[0.9, 2.4, 0.35]} />
        <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh ref={beam} position={[0, 0, 0.22]}>
        <planeGeometry args={[0.82, 0.12]} />
        <meshBasicMaterial color={accent} transparent opacity={0.75} />
      </mesh>
      <Stars radius={30} depth={18} count={300} factor={2} fade speed={0.35} />
    </>
  );
}

/** Planet stage for dossier hero — Planetary Dossier. */
export function ScenePlanetary({ accent }: { accent: string }) {
  const planet = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (planet.current) planet.current.rotation.y += delta * 0.22;
  });

  return (
    <>
      <Stars radius={48} depth={26} count={600} factor={2.4} fade speed={0.28} />
      <mesh ref={planet}>
        <sphereGeometry args={[1.35, 48, 48]} />
        <meshStandardMaterial color={accent} metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2.6, 0.2, 0]}>
        <torusGeometry args={[1.95, 0.04, 12, 100]} />
        <meshStandardMaterial color="#f8fafc" emissive={accent} emissiveIntensity={0.4} metalness={0.6} roughness={0.3} />
      </mesh>
    </>
  );
}

/** Champion warp core — Centurion homepage atmosphere. */
export function SceneCenturion({ accent }: { accent: string }) {
  const core = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * 0.25;
      core.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <>
      <Stars radius={60} depth={35} count={900} factor={2.8} fade speed={0.35} />
      <mesh ref={core}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial color={accent} metalness={0.55} roughness={0.28} emissive={accent} emissiveIntensity={0.2} />
      </mesh>
      <SpinGroup speed={0.28}>
        {[0, 1, 2].map((index) => (
          <mesh key={index} rotation={[Math.PI / 2, 0, (index * Math.PI) / 3]}>
            <torusGeometry args={[1.7 + index * 0.22, 0.012, 8, 120]} />
            <meshBasicMaterial color={accent} transparent opacity={0.45 - index * 0.1} />
          </mesh>
        ))}
      </SpinGroup>
    </>
  );
}

/** CSS fallbacks when WebGL is off — keep layout stable. */
export function FallbackGlow({ accent }: { accent: string }) {
  return (
    <div
      className="h-full w-full"
      style={{
        background: `radial-gradient(circle at 40% 35%, ${accent}55, transparent 55%), radial-gradient(circle at 70% 70%, ${accent}22, transparent 50%)`,
      }}
      aria-hidden
    />
  );
}
