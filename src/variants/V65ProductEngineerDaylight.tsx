"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Product Engineer Daylight — bright product studio layout with crisp hire path */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f0f7ff] text-[#0c2340]">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#bfdbfe_0%,_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-20 md:pt-28">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-sky-700"
          >
            Product engineer · daylight studio
          </motion.p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-6xl">
            {cv.name}
          </h1>
          <p className="mt-3 text-xl text-sky-900/70">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-sky-900/65">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Let’s build together
            </a>
            <ContactRow className="text-sky-800" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.05 * i }}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-sky-100"
            >
              <p className="text-3xl font-bold text-sky-700">{h.value}</p>
              <p className="mt-1 text-xs text-sky-900/50">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-5xl px-6 pb-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-sky-100 md:p-12">
          <h2 className="mb-8 text-2xl font-bold">Product chapters</h2>
          <ExperienceList tone="light" />
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-sky-100">
          <h2 className="mb-6 text-xl font-bold">Craft stack</h2>
          <SkillsCloud tone="light" />
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-sky-100">
          <h2 className="mb-6 text-xl font-bold">Labs & repos</h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 text-sm text-sky-900/50">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
