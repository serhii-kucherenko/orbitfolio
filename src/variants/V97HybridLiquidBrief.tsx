"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Liquid Brief — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#111113] text-zinc-100">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 pt-24">
        <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">Steals liquid headline craft + hiring-manager brevity</p>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mt-4 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-7xl" style={{ backgroundImage: "linear-gradient(120deg,#e2e8f0,#94a3b8,#f8fafc,#64748b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{cv.name}</motion.h1>
        <p className="mt-6 text-xl text-zinc-300">{cv.title}</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{cv.summary}</p>
        <a href={`mailto:${cv.email}`} className="mt-8 inline-flex w-fit rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-black">Talk</a>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="opacity-80" /></section>
    </main>
  );
}
