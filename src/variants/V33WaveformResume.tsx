"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Waveform Resume — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#061018] text-sky-50">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Waveform</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-sky-100/75">{cv.title}</p>
        <div className="mt-10 flex h-24 items-end gap-1" aria-hidden>
          {Array.from({ length: 48 }, (_, i) => (
            <motion.span key={i} className="w-full rounded-sm bg-sky-400" animate={reduce ? { height: "30%" } : { height: [`${20 + (i % 5) * 10}%`, `${55 + (i % 4) * 10}%`, `${20 + (i % 5) * 10}%`] }} transition={{ duration: 1.2 + (i % 3) * 0.2, repeat: Infinity }} />
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-sky-200/70" /></section>
    </main>
  );
}
