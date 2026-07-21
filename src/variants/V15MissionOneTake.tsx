"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Mission One-Take — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#05080f] text-slate-50">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-24">
        <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="font-[family-name:var(--font-mono)] text-xs tracking-[0.4em] text-teal-300">MISSION // ONE-TAKE</motion.p>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">{cv.name}</motion.h1>
        <p className="mt-4 text-xl text-teal-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="rounded-xl border border-teal-400/20 bg-teal-950/40 p-4"><p className="text-2xl font-bold text-teal-200">{h.value}</p><p className="text-[10px] uppercase tracking-wider text-teal-200/50">{h.label}</p></div>)}</div>
        <ContactRow className="mt-10 text-teal-100/70" />
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /></section>
    </main>
  );
}
