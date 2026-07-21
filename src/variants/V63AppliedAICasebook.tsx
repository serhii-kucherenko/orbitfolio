"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Applied AI Casebook — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Casebook</p>
        <h1 className="mt-3 font-[family-name:var(--font-serif)] text-5xl">{cv.name}</h1>
        <p className="mt-3 text-slate-600">{cv.title}</p>
        <p className="mt-6 text-sm leading-8 text-slate-600">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-10 px-6 pb-16">
        {cv.experience.map((job, i) => (
          <article key={job.company} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-wider text-slate-400">Case {String(i + 1).padStart(2, "0")} · {job.period}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.role}</h2>
            <p className="text-sm text-slate-500">{job.company} · {job.place}</p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-700">
              {job.bullets.map((b) => <li key={b.slice(0, 28)} className="pl-4 before:-ml-4 before:mr-2 before:content-['→']">{b}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-4xl space-y-12 px-6 pb-28">
        <SkillsCloud tone="light" />
        <ProjectLinks tone="light" />
        <ContactRow />
      </section>
    
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm opacity-55">
        {/* Education footer */}
        <p>
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </footer>
    </main>
  );
}
