"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Agent Swarm Field — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-indigo-50">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 28 }, (_, i) => (
          <motion.span key={i} className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70" style={{ left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%` }} animate={reduce ? undefined : { x: [0, (i % 5) * 8 - 16, 0], y: [0, (i % 4) * 6 - 12, 0] }} transition={{ duration: 3 + (i % 5), repeat: Infinity }} />
        ))}
      </div>
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Agent swarm · human lead</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-indigo-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-cyan-100/70" />
      </section>
    </main>
  );
}
