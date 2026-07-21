"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Instanced Particle Fleet — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-cyan-50">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 36 }, (_, i) => (
          <motion.i
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-cyan-300"
            style={{ left: `${(i * 19) % 100}%`, top: `${(i * 29) % 100}%` }}
            animate={reduce ? undefined : { opacity: [0.2, 1, 0.2], scale: [1, 1.6, 1] }}
            transition={{ duration: 2 + (i % 4), repeat: Infinity }}
          />
        ))}
      </div>
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Fleet · applied AI</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-cyan-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-cyan-100/70" />
      </section>
    
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm opacity-55">
        {/* Education footer */}
        <p>
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </footer>
    </main>
  );
}
