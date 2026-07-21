"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Signal Noise Finale — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-zinc-500">signal / noise · finale</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-zinc-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="border border-white/10 p-4"><p className="text-2xl font-bold">{h.value}</p><p className="text-[10px] uppercase text-white/40">{h.label}</p></div>)}</div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="opacity-80" /></section>
    </main>
  );
}
