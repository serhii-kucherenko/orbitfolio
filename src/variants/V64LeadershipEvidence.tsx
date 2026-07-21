"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Leadership Evidence — navy case wall of people outcomes and delivery ownership */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const exhibits = [
    { tag: "Exhibit A", text: "Led 4 engineers from pilot to multi-org healthcare deployment" },
    { tag: "Exhibit B", text: "Promoted 5 engineers Junior → Senior through mentoring culture" },
    { tag: "Exhibit C", text: "Managed 3 cross-functional remote teams across time zones" },
    { tag: "Exhibit D", text: "Owned technical roadmap and engineering standards end-to-end" },
  ];

  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eef8]">
      <section className="border-b border-[#1e3a5f] bg-gradient-to-br from-[#0b1220] via-[#0f1b2e] to-[#132238]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#c9a227]">
            Leadership evidence board
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-6xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-3 text-lg text-[#93a8c4]">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#93a8c4]">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="rounded-sm bg-[#c9a227] px-5 py-2.5 text-sm font-bold text-[#0b1220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]"
            >
              Brief the hiring lead
            </a>
            <ContactRow className="text-[#c9a227]/80" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#c9a227]">
          People & delivery exhibits
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {exhibits.map((e, i) => (
            <motion.article
              key={e.tag}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.07 * i }}
              className="border border-[#1e3a5f] bg-[#0f1b2e] p-5"
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[#c9a227]">
                {e.tag}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#c5d4ea]">{e.text}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-[#1e3a5f] p-4">
              <p className="text-3xl font-bold text-[#c9a227]">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-[#6b82a0]">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 pb-24">
        <div>
          <h2 className="mb-8 text-2xl font-bold">Career docket</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Command skills</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Public builds</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-[#6b82a0]">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
