"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Telescope Focus Index — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="relative aspect-square w-[min(88vw,440px)] overflow-hidden rounded-full border border-white/20 shadow-[0_0_80px_rgba(125,211,252,0.25)]">
          <div className="absolute inset-[12%] rounded-full border border-white/15" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">{cv.name}</h1>
            <p className="mt-3 text-sm text-sky-200/80">{cv.title}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-10 text-center">
        <p className="text-sm leading-7 text-white/60">{cv.summary}</p>
        <ContactRow className="justify-center text-sky-200/70" />
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
      </section>
    </main>
  );
}
