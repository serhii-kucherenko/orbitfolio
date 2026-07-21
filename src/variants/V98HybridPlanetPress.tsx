"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Planet Press — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#04060f] text-slate-100">
      <section className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 px-6 pb-12 pt-28 md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex justify-center"><div aria-hidden className="aspect-square w-[min(60vw,280px)] rounded-full border border-cyan-400/30" style={{ background: "radial-gradient(circle at 35% 30%, #67e8f9, #0e7490 55%, #082f49)" }} /></div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Steals spatial stagecraft + press hierarchy</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-cyan-100/80">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-cyan-100/70" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /></section>
    </main>
  );
}
