"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** System Status Portfolio — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-emerald-400">STATUS · ALL SYSTEMS NOMINAL</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-zinc-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-8 space-y-2 font-[family-name:var(--font-mono)] text-xs">
          {cv.highlights.map((h) => <div key={h.label} className="flex justify-between border border-white/10 px-4 py-3"><span className="text-zinc-400">{h.label}</span><span className="text-emerald-300">{h.value} · OK</span></div>)}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-zinc-300" /></section>
    </main>
  );
}
