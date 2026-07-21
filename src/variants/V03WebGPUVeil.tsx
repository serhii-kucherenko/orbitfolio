"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** WebGPU Veil — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#0a0f1c] text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-40" style={{ background: "linear-gradient(120deg, rgba(34,211,238,0.15), transparent 40%, rgba(125,211,252,0.12))" }} aria-hidden />
      <section className="relative mx-auto grid min-h-screen max-w-6xl items-end gap-10 px-6 pb-16 pt-28 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Veil · spatial atmosphere</p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-6xl font-bold leading-[0.9] sm:text-8xl">{cv.name}</h1>
          <p className="mt-6 text-lg text-cyan-100/80">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-cyan-100/70" />
        </div>
        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/60">Outcomes</p>
          <ul className="mt-6 space-y-4">
            {cv.highlights.map((h) => (
              <li key={h.label} className="flex items-baseline justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/50">{h.label}</span>
                <strong className="text-2xl text-cyan-200">{h.value}</strong>
              </li>
            ))}
          </ul>
        </aside>
      </section>
      <section className="relative mx-auto max-w-5xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <div className="grid gap-10 md:grid-cols-2"><SkillsCloud /><ProjectLinks /></div>
      </section>
    </main>
  );
}
