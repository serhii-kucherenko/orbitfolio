"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Proof Mosaic Light — bento mosaic of proof tiles on airy paper white */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [a, b, c, d] = cv.highlights;

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#171717]">
      <section className="mx-auto max-w-6xl px-4 pb-8 pt-16 md:px-6 md:pt-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-rose-600">Proof mosaic</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-6xl">
            {cv.name}
          </h1>
          <p className="mt-2 text-lg text-neutral-500">{cv.title}</p>
        </motion.div>

        <div className="mt-10 grid auto-rows-[minmax(120px,auto)] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <div className="col-span-2 row-span-2 rounded-3xl bg-[#171717] p-6 text-white md:p-8">
            <p className="text-sm text-neutral-400">Why hire</p>
            <p className="mt-4 text-sm leading-7 text-neutral-200 md:text-base">{cv.summary}</p>
            <a
              href={`mailto:${cv.email}`}
              className="mt-8 inline-flex rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
            >
              Email to hire
            </a>
          </div>
          <div className="rounded-3xl bg-rose-500 p-5 text-white md:p-6">
            <p className="text-4xl font-bold md:text-5xl">{a.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-rose-100">{a.label}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-neutral-200 md:p-6">
            <p className="text-4xl font-bold md:text-5xl">{b.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-neutral-400">{b.label}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-neutral-200 md:p-6">
            <p className="text-4xl font-bold md:text-5xl">{c.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-neutral-400">{c.label}</p>
          </div>
          <div className="rounded-3xl bg-amber-400 p-5 text-neutral-900 md:p-6">
            <p className="text-4xl font-bold md:text-5xl">{d.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-amber-900/70">{d.label}</p>
          </div>
        </div>

        <ContactRow className="mt-8 text-neutral-500" />
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-12 md:px-6 md:pb-24">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 md:p-10">
          <h2 className="mb-8 text-2xl font-bold">Experience tiles</h2>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 md:p-8">
            <h2 className="mb-6 text-xl font-bold">Skills</h2>
            <SkillsCloud tone="light" />
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 md:p-8">
            <h2 className="mb-6 text-xl font-bold">Projects</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm text-neutral-500">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
