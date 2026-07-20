/**
 * Overwrites remaining generic variants with structurally unique UIs.
 * node scripts/generate-unique-batch.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");

const header = (title) => `"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** ${title} */
export function Variant() {
  const reduce = useReducedMotion();
`;

const files = {
  V11VoidMinimal: `${header("Void Minimal")}
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Starfield density={28} color="#f8fafc" speed={0.015} interactive={false} />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-8 pt-24">
        <motion.h1 initial={reduce?false:{opacity:0}} animate={{opacity:1}} transition={{duration:1.4}} className="font-[family-name:var(--font-serif)] text-5xl font-normal tracking-tight sm:text-7xl">{cv.name}</motion.h1>
        <motion.p initial={reduce?false:{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:1}} className="mt-8 text-sm text-white/40">{cv.title}</motion.p>
        <motion.p initial={reduce?false:{opacity:0}} animate={{opacity:1}} transition={{delay:0.7,duration:1}} className="mt-12 max-w-md text-sm leading-8 text-white/55">{cv.summary}</motion.p>
      </div>
      <section className="relative z-10 mx-auto max-w-3xl space-y-20 px-8 pb-32">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-white/50" />
      </section>
    </main>
  );
}
`,

  V12HoloDeck: `${header("Holo Deck")}
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030b12] text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.06) 3px)"}} />
      <Starfield density={100} color="#22d3ee" speed={0.1} />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] text-cyan-400">HOLO // PROJECT</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl" style={{textShadow:"0 0 24px rgba(34,211,238,0.45)"}}>{cv.name}</h1>
        <p className="mt-3 text-cyan-200/70">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm text-cyan-50/60">{cv.summary}</p>
        <div className="mt-14 space-y-6">
          {cv.experience.map((job,i)=>(
            <motion.div key={job.company} initial={reduce?false:{opacity:0,x:i%2?-40:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="border border-cyan-400/30 bg-cyan-950/20 p-6 backdrop-blur-md" style={{clipPath:"polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)"}}>
              <p className="text-xs text-cyan-400/70">{job.period}</p>
              <h3 className="mt-1 text-xl">{job.role} · {job.company}</h3>
              <ul className="mt-3 space-y-1 text-sm text-cyan-50/70">{job.bullets.map(b=><li key={b.slice(0,24)}>{b}</li>)}</ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-16"><SkillsCloud /><div className="mt-10"><ProjectLinks /><ContactRow className="mt-8 text-cyan-200" /></div></div>
      </div>
    </main>
  );
}
`,

  V13GalaxyRail: `${header("Galaxy Rail")}
  return (
    <main className="relative min-h-screen bg-[#07041a] text-white">
      <Starfield density={180} color="#e9d5ff" speed={0.2} />
      <div className="relative z-10 pt-28">
        <div className="px-6">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-violet-200/70">{cv.title} — scroll sideways through the career rail</p>
          <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
        </div>
        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8">
          {cv.experience.map((job)=>(
            <article key={job.company} className="w-[min(85vw,420px)] shrink-0 snap-center rounded-3xl border border-fuchsia-300/20 bg-fuchsia-950/20 p-6 backdrop-blur">
              <p className="text-xs text-fuchsia-200/60">{job.period}</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">{job.company}</h2>
              <p className="mt-1 text-sm text-white/70">{job.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/60">{job.bullets.map(b=><li key={b.slice(0,20)}>{b}</li>)}</ul>
            </article>
          ))}
          <article className="w-[min(85vw,420px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"><h2 className="font-[family-name:var(--font-display)] text-2xl">Skills</h2><div className="mt-4"><SkillsCloud /></div></article>
          <article className="w-[min(85vw,420px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"><h2 className="font-[family-name:var(--font-display)] text-2xl">Projects</h2><div className="mt-4"><ProjectLinks /><ContactRow className="mt-8" /></div></article>
        </div>
      </div>
    </main>
  );
}
`,

  V15AsciiOrbit: `${header("ASCII Orbit")}
  const art = \`
      .  *  .  ★  .
   .    SERHII    .
 *   KUCHERENKO   *
   .   ◯———◯   .
      *  .  *
\`;
  return (
    <main className="min-h-screen bg-[#001405] px-4 pb-24 pt-28 font-[family-name:var(--font-mono)] text-[#3dff7a]">
      <pre className="mx-auto max-w-3xl overflow-x-auto text-[10px] leading-tight sm:text-xs">{art}</pre>
      <div className="mx-auto mt-8 max-w-3xl">
        <h1 className="text-2xl text-white sm:text-4xl">{cv.name}</h1>
        <p className="mt-2">{cv.title}</p>
        <p className="mt-6 text-sm leading-relaxed text-[#3dff7a]/80">{cv.summary}</p>
        <pre className="mt-10 whitespace-pre-wrap text-xs leading-6">{cv.experience.map(j=>\`[\${j.period}]\\n\${j.role} @ \${j.company}\\n\${j.bullets.map(b=>"  * "+b).join("\\n")}\`).join("\\n\\n")}</pre>
        <div className="mt-10 text-sm"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-6 text-[#3dff7a]" /></div></div>
      </div>
    </main>
  );
}
`,

  V16SynthwaveOrbit: `${header("Synthwave Orbit")}
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1a0533] text-white">
      <div className="absolute inset-x-0 bottom-0 h-[55vh]" style={{background:"linear-gradient(transparent,#ff006e33), repeating-linear-gradient(to right, transparent 0 39px, #ff006e55 39px 40px), repeating-linear-gradient(to top, transparent 0 39px, #00f5d455 39px 40px)", transform:"perspective(500px) rotateX(58deg)", transformOrigin:"bottom"}} />
      <Starfield density={90} color="#ff9eee" speed={0.12} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-tight sm:text-7xl" style={{WebkitTextStroke:"1px #ff9eee", color:"transparent", textShadow:"0 0 30px #ff006e"}}>{cv.name}</h1>
        <p className="mt-4 text-lg text-pink-200">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/65">{cv.summary}</p>
        <section className="mt-16"><ExperienceList tone="dark" /></section>
        <section className="mt-16"><SkillsCloud /><div className="mt-10"><ProjectLinks /><ContactRow className="mt-8" /></div></section>
      </div>
    </main>
  );
}
`,

  V17ClinicCosmos: `${header("Clinic Cosmos")}
  return (
    <main className="min-h-screen bg-[#071416] text-[#e7fbf7]">
      <Starfield density={80} color="#5eead4" speed={0.05} />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 pb-28 pt-28 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-400/80">Healthcare AI · calm systems</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
          <p className="mt-3 text-teal-100/70">{cv.title}</p>
          <p className="mt-6 text-sm leading-relaxed text-white/60">{cv.summary}</p>
          <ContactRow className="mt-8 text-teal-200" />
        </aside>
        <div className="space-y-12 rounded-[2rem] border border-teal-500/20 bg-teal-950/20 p-8 backdrop-blur">
          <ExperienceList tone="dark" />
          <SkillsCloud />
          <ProjectLinks />
        </div>
      </div>
    </main>
  );
}
`,

  V21SnapChapters: `${header("Snap Chapters")}
  const chapters = [
    { title: cv.name, body: cv.title },
    { title: "Signal", body: cv.summary },
    ...cv.experience.map(j=>({ title: j.company, body: j.bullets[0] })),
    { title: "Skills", body: Object.values(cv.skills).flat().slice(0,12).join(" · ") },
  ];
  return (
    <main className="h-[100svh] snap-y snap-mandatory overflow-y-auto bg-[#030712]">
      <Starfield density={120} color="#c4b5fd" speed={0.08} />
      {chapters.map((c,i)=>(
        <section key={c.title+i} className="relative z-10 flex h-[100svh] snap-start flex-col justify-center px-8">
          <p className="text-xs tracking-[0.35em] text-white/40">{String(i+1).padStart(2,"0")}</p>
          <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl sm:text-6xl">{c.title}</h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">{c.body}</p>
          {i===chapters.length-1 && <div className="mt-10 max-w-3xl"><ProjectLinks /><ContactRow className="mt-8" /></div>}
        </section>
      ))}
    </main>
  );
}
`,

  V25TelemetryTape: `${header("Telemetry Tape")}
  const tape = [...cv.skills.ai, ...cv.skills.backend, ...cv.highlights.map(h=>h.value+" "+h.label)].join("   ·   ");
  return (
    <main className="min-h-screen bg-[#020617] text-sky-100">
      <div className="fixed top-16 z-20 w-full overflow-hidden border-y border-sky-400/30 bg-sky-950/50 py-2 font-[family-name:var(--font-mono)] text-xs text-sky-300">
        <div className="animate-[marquee_40s_linear_infinite] whitespace-nowrap pl-[100%]">{tape}   {tape}</div>
      </div>
      <style>{\`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }\`}</style>
      <Starfield density={100} color="#7dd3fc" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-36">
        <p className="font-[family-name:var(--font-mono)] text-xs text-sky-400">SAT-01 // UPLINK OK</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl">{cv.name}</h1>
        <p className="mt-3">{cv.title}</p>
        <p className="mt-6 text-sm text-white/60">{cv.summary}</p>
        <div className="mt-12 space-y-4 font-[family-name:var(--font-mono)] text-xs">
          {cv.experience.map(j=>(
            <div key={j.company} className="rounded border border-sky-500/20 bg-black/40 p-4">
              <p className="text-sky-400">[{j.period}] {j.company}</p>
              <p className="mt-1 text-white/80">{j.role}</p>
              <p className="mt-2 text-white/50">{j.bullets[0]}</p>
            </div>
          ))}
        </div>
        <div className="mt-12"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-8" /></div></div>
      </div>
    </main>
  );
}
`,

  V26CreditRoll: `${header("Credit Roll")}
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-amber-50">
      <Starfield density={40} color="#fbbf24" speed={0.02} />
      <div className={\`relative z-10 mx-auto max-w-lg px-6 pt-[40vh] pb-[50vh] text-center \${reduce?"":"animate-[credits_60s_linear_infinite]"}\`}>
        <style>{\`@keyframes credits { from { transform: translateY(0); } to { transform: translateY(-70%); } }\`}</style>
        <p className="text-xs tracking-[0.4em] text-amber-200/60">A CAREER BY</p>
        <h1 className="mt-6 font-[family-name:var(--font-serif)] text-5xl">{cv.name}</h1>
        <p className="mt-4 text-amber-100/70">{cv.title}</p>
        <p className="mt-10 text-sm leading-relaxed text-white/55">{cv.summary}</p>
        {cv.experience.map(j=>(
          <div key={j.company} className="mt-14">
            <p className="text-xs text-amber-200/50">{j.period}</p>
            <h2 className="mt-2 text-2xl">{j.company}</h2>
            <p className="mt-1 text-sm text-white/60">{j.role}</p>
          </div>
        ))}
        <div className="mt-16 text-left"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-8 justify-center" /></div></div>
      </div>
    </main>
  );
}
`,

  V28BlueprintEng: `${header("Blueprint Eng")}
  return (
    <main className="min-h-screen bg-[#0a1628] text-sky-100" style={{backgroundImage:"linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)", backgroundSize:"32px 32px"}}>
      <div className="mx-auto max-w-5xl px-6 pb-28 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-sky-400">SHEET 01 / REV C / ENGINEER</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide">{cv.name}</h1>
        <p className="mt-3 border border-sky-400/40 px-3 py-1 inline-block text-sm">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-sky-100/70">{cv.summary}</p>
        <div className="mt-12 grid gap-4 border border-sky-400/30 p-4 md:grid-cols-2">
          {cv.experience.map(j=>(
            <div key={j.company} className="border border-sky-400/20 p-4">
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-sky-400">{j.period}</p>
              <h3 className="mt-1 text-lg">{j.company}</h3>
              <p className="text-sm text-sky-100/60">{j.role}</p>
              <p className="mt-2 text-xs text-sky-100/50">{j.bullets[0]}</p>
            </div>
          ))}
        </div>
        <div className="mt-12"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-8 text-sky-200" /></div></div>
      </div>
    </main>
  );
}
`,

  V29TronLattice: `${header("Tron Lattice")}
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000814] text-cyan-50">
      <div className="absolute inset-x-0 bottom-0 h-[50vh] opacity-80" style={{background:"linear-gradient(#00f0ff22,transparent), repeating-linear-gradient(90deg,#00f0ff33 0 1px,transparent 1px 48px), repeating-linear-gradient(#00f0ff33 0 1px,transparent 1px 48px)", transform:"perspective(600px) rotateX(60deg)", transformOrigin:"bottom"}} />
      <Starfield density={70} color="#00f0ff" speed={0.14} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl" style={{textShadow:"0 0 20px #00f0ff"}}>{cv.name}</h1>
        <p className="mt-4 text-cyan-300">{cv.title}</p>
        <p className="mt-6 text-sm text-white/60">{cv.summary}</p>
        <section className="mt-14"><ExperienceList tone="dark" /></section>
        <section className="mt-14"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-8" /></div></section>
      </div>
    </main>
  );
}
`,

  V38BrutalOrbit: `${header("Brutal Orbit")}
  return (
    <main className="min-h-screen bg-[#111] text-white">
      <Starfield density={35} color="#f87171" speed={0.01} />
      <div className="relative z-10 px-4 pb-24 pt-28 sm:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-[14vw] leading-[0.85] font-extrabold uppercase tracking-tighter">{cv.name.split(" ")[0]}</h1>
        <h1 className="font-[family-name:var(--font-display)] text-[14vw] leading-[0.85] font-extrabold uppercase tracking-tighter text-red-500">{cv.name.split(" ")[1]}</h1>
        <p className="mt-8 max-w-xl border-4 border-white p-4 text-lg font-bold uppercase">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm text-white/70">{cv.summary}</p>
        <div className="mt-16 space-y-8">
          {cv.experience.map(j=>(
            <div key={j.company} className="border-4 border-white p-5">
              <p className="text-xs uppercase">{j.period}</p>
              <h3 className="mt-1 text-2xl font-black uppercase">{j.company}</h3>
              <p className="mt-2 text-sm">{j.bullets[0]}</p>
            </div>
          ))}
        </div>
        <div className="mt-12"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-8" /></div></div>
      </div>
    </main>
  );
}
`,
};

// V14 Planet with R3F - special
files.V14PlanetStage = `"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
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
        <meshStandardMaterial color="#38bdf8" roughness={0.45} metalness={0.35} emissive="#0ea5e9" emissiveIntensity={0.15} />
      </mesh>
      {cv.projects.map((_, i) => {
        const a = (i / cv.projects.length) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * 2.2, Math.sin(a * 1.3) * 0.4, Math.sin(a) * 2.2]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#fde68a" emissive="#fbbf24" emissiveIntensity={0.5} />
          </mesh>
        );
      })}
    </Float>
  );
}

export function Variant() {
  const reduce = useReducedMotion();
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
        </div>
        <div className="flex flex-col justify-center px-8 py-16 pt-28 lg:pt-16">
          <motion.h1 initial={reduce?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl">{cv.name}</motion.h1>
          <p className="mt-4 text-sky-200/80">{cv.title}</p>
          <p className="mt-6 text-sm leading-relaxed text-white/60">{cv.summary}</p>
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
`;

files.V18CodeRain = `"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    let w=0,h=0,raf=0;
    const cols: number[] = [];
    const resize=()=>{w=c.width=c.clientWidth;h=c.height=c.clientHeight; const n=Math.floor(w/14); cols.length=n; for(let i=0;i<n;i++) cols[i]=Math.random()*h;};
    const draw=()=>{ctx.fillStyle="rgba(2,11,6,0.12)";ctx.fillRect(0,0,w,h);ctx.fillStyle="#4ade80";ctx.font="12px monospace";
      cols.forEach((y,i)=>{const ch=cv.name[(i+Math.floor(y))%cv.name.length]||"0";ctx.fillText(ch,i*14,y);cols[i]=y>h+Math.random()*80?0:y+(reduce?0:10);});
      if(!reduce) raf=requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener("resize",resize);
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[reduce]);
  return (
    <main className="relative min-h-screen bg-[#020b06] text-green-100">
      <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-50" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl text-green-300">{cv.name}</h1>
        <p className="mt-3 text-green-200/70">{cv.title}</p>
        <p className="mt-6 text-sm text-green-100/60">{cv.summary}</p>
        <section className="mt-14 rounded-2xl border border-green-500/20 bg-black/60 p-6 backdrop-blur"><ExperienceList tone="dark" /></section>
        <section className="mt-10"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-8 text-green-200" /></div></section>
      </div>
    </main>
  );
}
`;

files.V45InfiniteCanvas = `"use client";

import { useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import Link from "next/link";

export function Variant() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const nodes = [
    { x: 0, y: 0, title: cv.name, body: cv.title, w: 320 },
    { x: 380, y: -40, title: "Summary", body: cv.summary, w: 360 },
    ...cv.experience.map((j, i) => ({ x: (i % 2) * 420 - 80, y: 220 + i * 200, title: j.company, body: j.bullets[0], w: 340 })),
    { x: -360, y: 120, title: "Skills", body: cv.skills.ai.slice(0, 6).join(", "), w: 300 },
    { x: 500, y: 280, title: "Projects", body: cv.projects.map((p) => p.name).join(" · "), w: 300 },
  ];
  return (
    <main className="relative h-[100svh] overflow-hidden bg-[#020617] text-white">
      <Starfield density={260} speed={0.03} />
      <p className="absolute left-4 top-24 z-20 text-xs text-white/50">Drag to pan the canvas</p>
      <div
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => { drag.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y }; (e.target as HTMLElement).setPointerCapture?.(e.pointerId); }}
        onPointerMove={(e) => { if (!drag.current) return; setPos({ x: drag.current.px + (e.clientX - drag.current.x), y: drag.current.py + (e.clientY - drag.current.y) }); }}
        onPointerUp={() => { drag.current = null; }}
      >
        <div className="absolute left-1/2 top-1/2" style={{ transform: \`translate(calc(-50% + \${pos.x}px), calc(-50% + \${pos.y}px))\` }}>
          {nodes.map((n) => (
            <div key={n.title} className="absolute rounded-2xl border border-sky-400/30 bg-sky-950/40 p-5 backdrop-blur" style={{ width: n.w, transform: \`translate(\${n.x}px, \${n.y}px)\` }}>
              <h2 className="font-[family-name:var(--font-display)] text-xl">{n.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-white/65">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-auto absolute bottom-6 left-6 z-30 flex gap-3 text-sm">
        <a href={\`mailto:\${cv.email}\`} className="rounded-full bg-sky-300 px-4 py-2 text-black">Email</a>
        <Link href="/goals" className="rounded-full border border-white/30 px-4 py-2">Goals</Link>
      </div>
    </main>
  );
}
`;

files.V49GoalsRing = `"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { goals } from "@/data/goals";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion();
  const ring = goals.slice(0, 36);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c0a09] text-amber-50">
      <Starfield density={160} color="#fbbf24" speed={0.08} />
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center px-6 pt-28">
        <div className="relative flex h-[min(70vw,420px)] w-[min(70vw,420px)] items-center justify-center">
          {ring.map((g, i) => {
            const a = (i / ring.length) * Math.PI * 2;
            const r = 48;
            return (
              <span key={g.id} title={g.title} className="absolute h-2 w-2 rounded-full bg-amber-300" style={{ left: \`\${50 + Math.cos(a) * r}%\`, top: \`\${50 + Math.sin(a) * r}%\` }} />
            );
          })}
          <motion.div initial={reduce?false:{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} className="text-center">
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
            <p className="mt-3 text-amber-100/70">{cv.title}</p>
            <Link href="/goals" className="mt-6 inline-block text-sm text-amber-300 underline underline-offset-4">Explore all 100 goals →</Link>
          </motion.div>
        </div>
        <p className="mt-10 max-w-2xl text-center text-sm text-white/55">{cv.summary}</p>
      </div>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow />
      </section>
    </main>
  );
}
`;

for (const [name, src] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, `${name}.tsx`), src);
  console.log("wrote", name);
}
console.log("batch done", Object.keys(files).length);
