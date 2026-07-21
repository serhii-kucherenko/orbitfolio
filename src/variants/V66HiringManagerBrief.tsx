"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hiring Manager Brief — one-page executive memo a manager can forward today */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const bullets = [
    { label: "Role fit", value: "Founding / staff-adjacent full-stack with applied AI depth" },
    { label: "Proof", value: "YC healthcare AI, 85% load cut, $78K infra savings" },
    { label: "Team", value: "Leads 2–6 engineers; mentors to senior" },
    { label: "Availability", value: "Open to hire conversations · Vancouver remote" },
  ];

  return (
    <main className="min-h-screen bg-[#e8ecf1] text-[#1a2332]">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        <motion.article
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-slate-300 bg-white"
        >
          <header className="border-b border-slate-200 bg-slate-50 px-6 py-4 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  Internal brief · hiring manager
                </p>
                <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
                  {cv.name}
                </h1>
              </div>
              <p className="border border-slate-400 px-2 py-1 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-slate-600">
                Forwardable
              </p>
            </div>
          </header>

          <div className="px-6 py-8 md:px-10">
            <p className="text-sm font-semibold text-slate-800">Re: Candidate for founding full-stack / AI engineer</p>
            <p className="mt-1 text-sm text-slate-500">{cv.title}</p>
            <p className="mt-5 text-sm leading-7 text-slate-600">{cv.summary}</p>

            <div className="mt-8 border border-slate-200">
              {bullets.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid gap-1 px-4 py-3 sm:grid-cols-[120px_1fr] ${i > 0 ? "border-t border-slate-100" : ""} ${i % 2 === 0 ? "bg-slate-50/80" : "bg-white"}`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{row.label}</p>
                  <p className="text-sm text-slate-800">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 border-y border-slate-200 py-6 sm:grid-cols-4">
              {cv.highlights.map((h) => (
                <div key={h.label} className="text-center sm:text-left">
                  <p className="text-2xl font-bold text-slate-900">{h.value}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">{h.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${cv.email}`}
                className="bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                Email candidate
              </a>
              <a
                href="/resume"
                className="border border-slate-400 px-5 py-2.5 text-sm text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
              >
                Attach resume
              </a>
              <ContactRow className="text-slate-600" />
            </div>
          </div>
        </motion.article>

        <section className="mt-12 space-y-14">
          <div>
            <h2 className="mb-8 text-xl font-bold">Appendix A — Experience</h2>
            <ExperienceList tone="light" />
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-lg font-bold">Appendix B — Skills</h2>
              <SkillsCloud tone="light" />
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold">Appendix C — Projects</h2>
              <ProjectLinks tone="light" />
              <p className="mt-10 text-sm text-slate-500">
                {cv.education.degree} · {cv.education.school}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
