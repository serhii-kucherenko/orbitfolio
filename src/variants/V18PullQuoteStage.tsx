"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Pull Quote Stage — oversized outcome quotes interrupt a calm long-form narrative */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const quotes = cv.highlights.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">Pull quote stage</p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl"
        >
          {cv.name}
        </motion.h1>
        <p className="mt-3 text-stone-600">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm leading-8 text-stone-600">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            Continue the conversation
          </a>
          <ContactRow className="text-stone-600" />
        </div>
      </section>

      <section className="space-y-0 border-y border-stone-200">
        {quotes.map((h, i) => (
          <blockquote
            key={h.label}
            className={`mx-auto max-w-4xl px-6 py-16 ${i % 2 === 1 ? "bg-stone-900 text-stone-50" : ""}`}
          >
            <p className="font-[family-name:var(--font-serif)] text-3xl leading-snug sm:text-4xl">
              “{h.value} {h.label.toLowerCase()}.”
            </p>
            <footer className={`mt-4 text-xs uppercase tracking-[0.3em] ${i % 2 === 1 ? "text-stone-400" : "text-stone-500"}`}>
              Measured outcome · {i + 1} of {quotes.length}
            </footer>
          </blockquote>
        ))}
      </section>

      <section className="mx-auto max-w-3xl space-y-16 px-6 py-20">
        <div>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl">The long story</h2>
          <div className="mt-10">
            <ExperienceList tone="light" />
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl">Craft</h2>
            <div className="mt-6">
              <SkillsCloud tone="light" />
            </div>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl">Published work</h2>
            <div className="mt-6">
              <ProjectLinks tone="light" />
            </div>
            <p className="mt-10 text-sm text-stone-500">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
