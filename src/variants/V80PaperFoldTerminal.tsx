"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Paper Fold Terminal — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-slate-500">fold://terminal</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold" style={{ transform: "perspective(600px) rotateX(8deg)" }}>{cv.name}</h1>
        <p className="mt-3 text-slate-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
