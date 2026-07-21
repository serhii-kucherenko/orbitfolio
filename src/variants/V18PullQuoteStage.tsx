"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Pull Quote Stage — oversized outcome quotes interrupt a calm long-form career narrative. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [first, ...rest] = cv.experience;
  const quotes = [
    { value: cv.highlights[0].value, line: "load time cut across a live product surface." },
    { value: cv.highlights[2].value, line: "saved yearly through architecture redesign." },
    { value: cv.highlights[3].value, line: "engineers led from pilot to multi-org delivery." },
  ] as const;

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#1c1917]">
      <header className="mx-auto max-w-3xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">Pull quote stage · long form</p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl"
        >
          {cv.name}
        </motion.h1>
        <p className="mt-3 text-stone-600">{cv.title}</p>
        <p className="mt-8 text-sm leading-8 text-stone-600">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            Continue the conversation
          </a>
          <ContactRow className="text-stone-600" />
        </div>
      </header>

      <blockquote className="border-y border-stone-300 bg-white px-6 py-16">
        <p className="mx-auto max-w-3xl font-[family-name:var(--font-serif)] text-3xl leading-snug sm:text-5xl">
          “{quotes[0].value} {quotes[0].line}”
        </p>
        <footer className="mx-auto mt-5 max-w-3xl text-[10px] uppercase tracking-[0.3em] text-stone-500">
          Interrupt · measured outcome 01
        </footer>
      </blockquote>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Chapter · {first.period}</p>
        <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl">
          {first.role} · {first.company}
        </h2>
        <p className="mt-2 text-sm text-stone-500">{first.place}</p>
        <ul className="mt-6 space-y-3 text-sm leading-7 text-stone-700">
          {first.bullets.map((b) => (
            <li key={b.slice(0, 28)}>{b}</li>
          ))}
        </ul>
      </section>

      <blockquote className="bg-stone-900 px-6 py-16 text-stone-50">
        <p className="mx-auto max-w-3xl font-[family-name:var(--font-serif)] text-3xl leading-snug sm:text-5xl">
          “{quotes[1].value} {quotes[1].line}”
        </p>
        <footer className="mx-auto mt-5 max-w-3xl text-[10px] uppercase tracking-[0.3em] text-stone-400">
          Interrupt · measured outcome 02
        </footer>
      </blockquote>

      <section className="mx-auto max-w-3xl space-y-12 px-6 py-14">
        {rest.map((job) => (
          <article key={`${job.company}-${job.period}`}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{job.period}</p>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-2xl">
              {job.role} · {job.company}
            </h2>
            <p className="mt-1 text-sm text-stone-500">{job.place}</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-700">
              {job.bullets.map((b) => (
                <li key={b.slice(0, 28)}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <blockquote className="border-y border-stone-300 bg-white px-6 py-16">
        <p className="mx-auto max-w-3xl font-[family-name:var(--font-serif)] text-3xl leading-snug sm:text-5xl">
          “{quotes[2].value} {quotes[2].line}”
        </p>
        <footer className="mx-auto mt-5 max-w-3xl text-[10px] uppercase tracking-[0.3em] text-stone-500">
          Interrupt · measured outcome 03
        </footer>
      </blockquote>

      <section className="mx-auto grid max-w-3xl gap-12 px-6 py-16 md:grid-cols-2">
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
      </section>
    </main>
  );
}
