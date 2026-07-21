"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Proof Mosaic Light — asymmetric daylight mosaic of metrics, experience, craft, projects. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [a, b, c, d] = cv.highlights;

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#1a1a1a]">
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-20 sm:px-6 md:pt-24">
        <motion.div initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#c45c48]">Proof mosaic · daylight</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-6xl">
            {cv.name}
          </h1>
          <p className="mt-2 text-lg text-neutral-500">{cv.title}</p>
        </motion.div>

        <div className="mt-10 grid auto-rows-[minmax(110px,auto)] grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="col-span-2 row-span-2 flex flex-col justify-between rounded-[1.75rem] bg-[#1a1a1a] p-6 text-white md:col-span-3 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">Why hire</p>
            <p className="mt-4 text-sm leading-7 text-neutral-200 md:text-base">{cv.summary}</p>
            <a
              href={`mailto:${cv.email}`}
              className="mt-8 inline-flex w-fit rounded-full bg-[#c45c48] px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c48]"
            >
              Email to hire
            </a>
          </motion.div>

          <div className="rounded-[1.75rem] bg-[#c45c48] p-5 text-white md:col-span-2 md:p-6">
            <p className="text-4xl font-bold md:text-5xl">{a.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-white/75">{a.label}</p>
          </div>
          <div className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
            <p className="text-4xl font-bold md:text-5xl">{b.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-neutral-400">{b.label}</p>
          </div>
          <div className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-black/5 md:col-span-2 md:p-6">
            <p className="text-4xl font-bold md:text-5xl">{c.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-neutral-400">{c.label}</p>
          </div>
          <div className="rounded-[1.75rem] bg-[#e8b84a] p-5 text-[#1a1a1a] md:col-span-1 md:p-6">
            <p className="text-4xl font-bold md:text-5xl">{d.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-[#1a1a1a]/60">{d.label}</p>
          </div>
          <div className="col-span-2 flex items-center rounded-[1.75rem] bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 md:col-span-3">
            <ContactRow className="text-neutral-500" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6 md:pb-24">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-10">
          <h2 className="mb-8 text-2xl font-bold">Experience tiles</h2>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h2 className="mb-6 text-xl font-bold">Skills</h2>
            <SkillsCloud tone="light" />
          </div>
          <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
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
