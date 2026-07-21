"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Redline Resume — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-red-600">REDLINE · EDIT PASS</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold decoration-red-500 decoration-4 underline-offset-8">{cv.name}</h1>
        <p className="mt-4 text-lg"><span className="bg-red-100 px-1">{cv.title}</span></p>
        <p className="mt-6 border-l-4 border-red-500 pl-4 text-sm leading-7 text-black/70">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
