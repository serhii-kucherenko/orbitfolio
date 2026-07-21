"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Spotlight Installation — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-24 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: reduce ? "rgba(250,204,21,0.15)" : "radial-gradient(circle, rgba(250,204,21,0.35), transparent 70%)" }}
        />
        <p className="relative text-[10px] uppercase tracking-[0.35em] text-amber-200/70">Installation · one claim</p>
        <h1 className="relative mt-5 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl">{cv.name}</h1>
        <p className="relative mt-4 text-lg text-amber-50/80">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="relative mt-10 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-amber-200/20 bg-amber-400/5 px-4 py-5">
              <p className="text-2xl font-bold text-amber-200">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-amber-100/50">{h.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-amber-100/70" />
      </section>
    </main>
  );
}
