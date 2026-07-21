"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** System Status Portfolio — career as an ops status page with green health signals */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const services = [
    { name: "Applied AI delivery", status: "Operational" },
    { name: "Founding ownership", status: "Operational" },
    { name: "Team leadership", status: "Operational" },
    { name: "Production reliability", status: "Operational" },
  ];

  return (
    <main className="min-h-screen bg-[#f0fdf4] text-[#052e16]">
      <div className="border-b border-emerald-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <span
              className={`inline-block size-2.5 rounded-full bg-emerald-500 ${reduce ? "" : "animate-pulse"}`}
              aria-hidden
            />
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] text-emerald-700">
              All systems operational
            </p>
          </div>
          <p className="text-xs text-emerald-800/60">{cv.location}</p>
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-6 pb-10 pt-16">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          {cv.name}
        </motion.h1>
        <p className="mt-3 text-xl text-emerald-900/70">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-emerald-900/65">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          >
            Page the engineer
          </a>
          <ContactRow className="text-emerald-800/80" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-emerald-700">
          Service health
        </h2>
        <div className="overflow-hidden rounded-lg border border-emerald-200 bg-white">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`flex items-center justify-between gap-4 px-5 py-4 ${i > 0 ? "border-t border-emerald-100" : ""}`}
            >
              <span className="text-sm font-medium">{s.name}</span>
              <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-emerald-600">
                <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 px-6 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="rounded-lg border border-emerald-200 bg-white p-4 shadow-sm">
            <p className="text-3xl font-bold text-emerald-800">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-emerald-700/55">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 py-16">
        <div>
          <h2 className="mb-8 text-2xl font-bold">Incident-free history</h2>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Capabilities</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Deployed work</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm text-emerald-800/55">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
