"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Oversized Proof Type — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#09090b] text-zinc-50">
      <section className="px-4 pb-8 pt-28">
        <motion.h1 initial={reduce ? false : { x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="font-[family-name:var(--font-display)] text-[clamp(4rem,18vw,12rem)] font-black uppercase leading-[0.8] tracking-[-0.06em]">{cv.name.split(" ")[0]}</motion.h1>
        <motion.h1 initial={reduce ? false : { x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="font-[family-name:var(--font-display)] text-[clamp(4rem,18vw,12rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-zinc-500">{cv.name.split(" ")[1]}</motion.h1>
        <p className="mt-8 max-w-2xl px-2 text-lg text-zinc-300">{cv.title}</p>
        <p className="mt-4 max-w-2xl px-2 text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-zinc-300" /></section>
    </main>
  );
}
