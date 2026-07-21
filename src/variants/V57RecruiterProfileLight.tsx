"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Recruiter Profile Light — daylight profile: role, metrics, contact in one glance. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const initials = cv.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <main className="min-h-screen bg-[#e8eef3] text-[#0f2430]">
      <header className="border-b border-[#b8c9d6] bg-gradient-to-br from-[#f7fafc] via-[#eef4f8] to-[#dce8ef]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="flex flex-wrap items-center gap-8">
            <motion.div
              aria-hidden
              initial={reduce ? false : { scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="grid size-28 place-items-center rounded-full bg-[#1a5f6b] font-[family-name:var(--font-display)] text-3xl font-bold text-white shadow-[0_0_0_8px_rgba(26,95,107,0.12)]"
            >
              {initials}
            </motion.div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#1a5f6b]">Available · founding engineer roles</p>
              <h1 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
                {cv.name}
              </h1>
              <p className="mt-2 text-lg text-[#0f2430]/70">{cv.title}</p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#0f2430]/65">{cv.summary}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="rounded-full bg-[#1a5f6b] px-6 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a5f6b]"
            >
              Email to hire
            </a>
            <a
              href="/resume"
              className="rounded-full border border-[#1a5f6b]/40 px-6 py-2.5 text-sm font-semibold text-[#1a5f6b]"
            >
              Printable resume
            </a>
            <ContactRow className="text-[#1a5f6b]" />
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-6 py-10 sm:grid-cols-4 lg:px-10">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : i * 0.05 }}
            className="border border-[#b8c9d6] bg-white px-4 py-6"
          >
            <p className="text-3xl font-bold text-[#1a5f6b]">{h.value}</p>
            <p className="mt-1 text-xs text-[#0f2430]/50">{h.label}</p>
          </motion.div>
        ))}
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-[1.45fr_0.9fr] lg:px-10">
        <section>
          <h2 className="mb-8 text-2xl font-bold">Experience</h2>
          <ExperienceList tone="light" />
        </section>
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <div className="border border-[#b8c9d6] bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">Skills</h2>
            <SkillsCloud tone="light" />
          </div>
          <div className="border border-[#b8c9d6] bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">Projects</h2>
            <ProjectLinks tone="light" />
          </div>
          <p className="text-sm text-[#0f2430]/50">
            {cv.education.degree}
            <br />
            {cv.education.school} · {cv.location}
          </p>
        </aside>
      </div>
    </main>
  );
}
