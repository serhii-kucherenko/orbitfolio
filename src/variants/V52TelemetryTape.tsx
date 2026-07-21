"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Telemetry Tape — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#020617] text-lime-50">
      <div className="overflow-hidden border-y border-lime-400/20 bg-lime-950/30 py-2 font-[family-name:var(--font-mono)] text-xs text-lime-300/80">
        <motion.p animate={reduce ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="whitespace-nowrap">
          {cv.highlights.map((h) => `${h.label}: ${h.value}`).join("   ·   ")}   ·   {cv.title}   ·   {cv.location}   ·   {cv.highlights.map((h) => `${h.label}: ${h.value}`).join("   ·   ")}
        </motion.p>
      </div>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-24">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lime-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-lime-100/70" /></section>
    </main>
  );
}
