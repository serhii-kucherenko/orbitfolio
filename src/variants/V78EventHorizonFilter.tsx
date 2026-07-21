"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Event Horizon Filter — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 50% 45%, transparent 18%, #000 62%)" }} />
        <h1 className="relative font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl">{cv.name}</h1>
        <p className="relative mt-5 text-lg text-zinc-300">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-zinc-300" /></section>
    </main>
  );
}
