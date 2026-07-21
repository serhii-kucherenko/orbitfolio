"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Dual Narrative Console — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen md:grid md:grid-cols-2">
      <section className="bg-[#fafaf9] px-6 py-28 text-stone-900">
        <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">For hiring managers</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-stone-600">{cv.title}</p>
        <p className="mt-6 text-sm leading-7 text-stone-600">{cv.summary}</p>
        <div className="mt-8 grid grid-cols-2 gap-3">{cv.highlights.map((h) => <div key={h.label} className="border border-stone-200 p-3"><p className="text-xl font-bold">{h.value}</p><p className="text-[10px] uppercase text-stone-500">{h.label}</p></div>)}</div>
      </section>
      <section className="bg-[#0f172a] px-6 py-28 text-slate-100">
        <p className="font-[family-name:var(--font-mono)] text-xs text-sky-300">engineer@orbitfolio:~$</p>
        <pre className="mt-4 whitespace-pre-wrap font-[family-name:var(--font-mono)] text-xs leading-6 text-sky-100/80">{cv.experience.map((j) => `# ${j.company}\n${j.role} (${j.period})\n`).join("\n")}</pre>
        <ContactRow className="mt-8 text-sky-200/70" />
      </section>
      <section className="col-span-full mx-auto max-w-5xl space-y-14 bg-[#fafaf9] px-6 py-16 text-stone-900"><ExperienceList tone="light" /><div className="grid gap-10 md:grid-cols-2"><SkillsCloud tone="light" /><ProjectLinks tone="light" /></div></section>
    </main>
  );
}
