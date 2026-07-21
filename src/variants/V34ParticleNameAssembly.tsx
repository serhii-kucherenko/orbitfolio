"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Particle Name Assembly — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-cyan-50">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 40 }, (_, i) => (
          <motion.i key={i} className="absolute h-1 w-1 rounded-full bg-cyan-300" style={{ left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%` }} animate={reduce ? undefined : { x: [0, ((i % 5) - 2) * 20, 0], y: [0, ((i % 4) - 2) * 16, 0] }} transition={{ duration: 4 + (i % 3), repeat: Infinity }} />
        ))}
      </div>
      <section className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-24">
        <motion.h1 initial={reduce ? false : { opacity: 0, letterSpacing: "0.4em" }} animate={{ opacity: 1, letterSpacing: "-0.04em" }} transition={{ duration: 1.2 }} className="font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">{cv.name}</motion.h1>
        <p className="mt-5 text-xl text-cyan-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <ContactRow className="mt-8 text-cyan-100/70" />
      </section>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /></section>
    </main>
  );
}
