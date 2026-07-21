"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hiring Manager Brief — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">Brief for hiring managers</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-neutral-600">{cv.title}</p>
        <p className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-7 text-neutral-700">{cv.summary}</p>
        <a href={`mailto:${cv.email}`} className="mt-8 inline-flex rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white">Schedule a chat</a>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
