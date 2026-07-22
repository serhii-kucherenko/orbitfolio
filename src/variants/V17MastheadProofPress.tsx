"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Masthead Proof Press — daily-paper hierarchy: evidence above ornament. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#ece9e1] text-[#1a1a1a] overflow-x-hidden">
      <header className="border-b-4 border-black px-4 pb-4 pt-20 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em]">
          <span>{cv.location}</span>
          <span>Vol. 10 · Evidence edition · morning press</span>
        </div>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-4 max-w-6xl text-center font-[family-name:var(--font-serif)] text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl md:text-8xl"
        >
          {cv.name}
        </motion.h1>
        <p className="mx-auto mt-3 max-w-6xl text-center text-sm uppercase tracking-[0.2em] text-black/55">
          {cv.title}
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl gap-px border-b border-black bg-black sm:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <motion.article
            key={h.label}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : i * 0.05 }}
            className="bg-[#ece9e1] px-4 py-6"
          >
            <p className="font-[family-name:var(--font-serif)] text-3xl font-bold">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-black/50">{h.label}</p>
          </motion.article>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-[1.4fr_0.8fr] sm:px-8">
        <div>
          <p className="font-[family-name:var(--font-serif)] text-2xl italic leading-snug text-black/80">
            {cv.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="bg-black px-5 py-2.5 text-sm font-semibold text-[#ece9e1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Assign the story
            </a>
            <a
              href="/resume"
              className="border border-black px-5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Press kit PDF
            </a>
            <ContactRow className="items-center text-black/60" />
          </div>
        </div>
        <aside className="border border-black/20 bg-white p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">Front page briefs</p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            {cv.experience.slice(0, 3).map((job) => (
              <li key={job.company} className="border-b border-black/10 pb-3 last:border-0">
                <span className="font-semibold">{job.company}</span>
                <span className="text-black/45"> — {job.bullets[0]}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl columns-1 gap-10 px-4 pb-10 sm:columns-2 sm:px-8">
        <h2 className="mb-6 break-after-avoid font-[family-name:var(--font-serif)] text-3xl">Career copy desk</h2>
        <ExperienceList tone="light" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 border-t border-black px-4 py-16 sm:grid-cols-2 sm:px-8">
        <div>
          <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl">Toolbox</h2>
          <SkillsCloud tone="light" />
        </div>
        <div>
          <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl">Published work</h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 text-xs uppercase tracking-widest text-black/45">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
      <footer className="border-t-2 border-black px-4 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-7 text-black/60">
            Morning-press hierarchy with Lenis smooth reading — evidence leads, ornament follows.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-black/45">
            Colophon · Vol. 17 · {cv.location}
          </p>
        </div>
      </footer>
    
      <footer className="border-t border-black/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-black/55">
          Masthead proof press needs editorial density past the headline.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-black/35">
          Lab · depth floor · 115
        </p>
      </footer>
</main>
    </SmoothScroll>
  );
}
