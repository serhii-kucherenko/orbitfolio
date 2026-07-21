"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Aurora Motion Ledger — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#04101a] text-emerald-50">
      {!reduce && <motion.div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 h-[50vh] opacity-40" style={{ background: "linear-gradient(120deg, transparent, rgba(52,211,153,0.35), rgba(56,189,248,0.25), transparent)" }} animate={{ x: ["-10%", "10%", "-10%"] }} transition={{ duration: 12, repeat: Infinity }} />}
      <section className="relative mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-300/70">Aurora ledger · Vancouver</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-emerald-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="relative mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-emerald-100/70" /></section>
    </main>
  );
}
