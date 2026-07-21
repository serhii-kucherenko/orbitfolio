"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Void Whisper — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-8 pt-24">
        <h1 className="font-[family-name:var(--font-serif)] text-5xl font-normal tracking-tight sm:text-7xl">{cv.name}</h1>
        <p className="mt-8 text-sm text-white/40">{cv.title}</p>
        <p className="mt-12 max-w-md text-sm leading-8 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-20 px-8 pb-32"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-white/50" /></section>
    </main>
  );
}
