"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Telescope Monograph — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <section className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 pt-28 text-center">
        <div className="relative aspect-square w-[min(80vw,380px)] overflow-hidden rounded-full border border-white/20 shadow-[0_0_80px_rgba(125,211,252,0.25)]">
          <div className="absolute inset-[14%] rounded-full border border-white/15" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">{cv.name}</h1>
            <p className="mt-3 text-sm text-sky-200/80">{cv.title}</p>
          </div>
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="opacity-80" /></section>
    </main>
  );
}
