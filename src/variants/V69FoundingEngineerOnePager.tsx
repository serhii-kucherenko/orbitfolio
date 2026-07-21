"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Founding Engineer One Pager — compressed pitch with every CV detail retained. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const skillFlat = Object.values(cv.skills).flat();

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <article className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <header className="border-b-2 border-zinc-900 pb-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-black tracking-tight sm:text-5xl"
              >
                {cv.name}
              </motion.h1>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-zinc-600">{cv.title}</p>
            </div>
            <div className="text-right text-xs leading-5 text-zinc-600">
              <p>{cv.location}</p>
              <a className="underline-offset-2 hover:underline" href={`mailto:${cv.email}`}>
                {cv.email}
              </a>
              <p>
                <a className="underline-offset-2 hover:underline" href={cv.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                {" · "}
                <a className="underline-offset-2 hover:underline" href={cv.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-700">{cv.summary}</p>

          <div
            data-hire-proof
            className="mt-6 grid gap-px border border-zinc-300 bg-zinc-300 sm:grid-cols-3"
            aria-label="one-pager who / what / proof"
          >
            <div className="bg-zinc-50 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">Who</p>
              <p className="mt-1 text-xs font-semibold">{cv.name}</p>
            </div>
            <div className="bg-zinc-50 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">What</p>
              <p className="mt-1 text-xs leading-5">Founding engineer · full-stack · applied AI · 10+ yrs</p>
            </div>
            <div className="bg-zinc-50 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">Proof</p>
              <p className="mt-1 text-xs leading-5">
                {cv.highlights.map((h) => `${h.value} ${h.label}`).slice(0, 2).join(" · ")}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="inline-block bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Hire founding engineer
            </a>
            <a
              href="/resume"
              className="inline-block border border-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              One-pager / resume
            </a>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-px border-b border-zinc-900 bg-zinc-900 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="bg-white px-3 py-4">
              <p className="text-xl font-bold">{h.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">{h.label}</p>
            </div>
          ))}
        </section>

        <section className="border-b border-zinc-200 py-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Experience</h2>
          <div className="mt-4 space-y-5">
            {cv.experience.map((job) => (
              <div key={`${job.company}-${job.period}`} className="grid gap-1 sm:grid-cols-[7.5rem_1fr]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">{job.period}</p>
                <div>
                  <p className="text-sm font-semibold">
                    {job.role} · {job.company}
                  </p>
                  <p className="text-xs text-zinc-500">{job.place}</p>
                  <ul className="mt-2 space-y-1 text-xs leading-relaxed text-zinc-700">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 28)} className="relative pl-3 before:absolute before:left-0 before:content-['–']">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-zinc-200 py-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Skills</h2>
          <p className="mt-3 text-xs leading-6 text-zinc-700">{skillFlat.join(" · ")}</p>
        </section>

        <section className="border-b border-zinc-200 py-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Projects</h2>
          <ul className="mt-3 space-y-2">
            {cv.projects.map((p) => (
              <li key={p.name} className="text-xs leading-relaxed">
                <a href={p.url} target="_blank" rel="noreferrer" className="font-semibold underline-offset-2 hover:underline">
                  {p.name}
                </a>
                <span className="text-zinc-600"> — {p.blurb}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="pt-6">
          <ContactRow className="text-xs text-zinc-600" />
          <p className="mt-3 text-[11px] text-zinc-500">
            {cv.education.degree} · {cv.education.school}
          </p>
        </footer>
      </article>
    </main>
  );
}
