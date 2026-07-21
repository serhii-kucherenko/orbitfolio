"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Clinic Aurora — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#f0fdfa] text-teal-950">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-teal-700">Steals healthcare trust + atmospheric restraint</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-teal-800/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-teal-900/70">{cv.summary}</p>
        <a href={`mailto:${cv.email}`} className="mt-8 inline-flex rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white">Book a conversation</a>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
