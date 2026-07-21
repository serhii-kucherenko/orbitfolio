"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Journey Map System — service-design timeline of career stages */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const stages = cv.experience.map((job, i) => ({
    n: String(i + 1).padStart(2, "0"),
    title: job.company,
    detail: `${job.role} · ${job.period}`,
  }));

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-indigo-600">Journey map · service design</p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-6xl"
        >
          {cv.name}
        </motion.h1>
        <p className="mt-3 text-lg text-slate-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Map a next step
          </a>
          <ContactRow className="text-indigo-700" />
        </div>
      </section>

      <section className="border-y border-indigo-100 bg-white">
        <div className="mx-auto max-w-5xl overflow-x-auto px-6 py-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Stage rail</h2>
          <ol className="mt-8 flex min-w-max gap-0">
            {stages.map((s, i) => (
              <li key={s.title} className="relative w-52 shrink-0 px-3">
                <div className="flex items-center">
                  <span className="grid size-10 place-items-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {s.n}
                  </span>
                  {i < stages.length - 1 && <span className="h-0.5 flex-1 bg-indigo-200" aria-hidden />}
                </div>
                <p className="mt-4 text-sm font-semibold">{s.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-6 py-12 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
            <p className="text-3xl font-bold text-indigo-700">{h.value}</p>
            <p className="mt-1 text-xs text-slate-500">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 pb-28">
        <div>
          <h2 className="text-2xl font-bold">Touchpoints</h2>
          <div className="mt-8">
            <ExperienceList tone="light" />
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Capabilities</h2>
            <div className="mt-6">
              <SkillsCloud tone="light" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Artifacts</h2>
            <div className="mt-6">
              <ProjectLinks tone="light" />
            </div>
            <p className="mt-10 text-sm text-slate-500">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
