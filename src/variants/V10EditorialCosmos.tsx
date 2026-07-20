"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111827] text-[#f3f4f6]">
      <Starfield density={50} color="#9ca3af" speed={reduce ? 0 : 0.02} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-8">
        <header className="border-b-4 border-double border-gray-600 pb-8">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.5em] text-gray-500">
            Editorial Cosmos · V10 · Issue 01
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-none sm:text-7xl">{cv.name}</h1>
            <div className="flex flex-col justify-end border-l border-gray-700 pl-6">
              <p className="text-lg italic text-gray-400">{cv.title}</p>
              <p className="mt-2 text-xs text-gray-500">{cv.location}</p>
            </div>
          </div>
        </header>

        <div className="mt-10 columns-1 gap-10 sm:columns-2 lg:columns-3">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 break-inside-avoid text-sm leading-relaxed first-letter:float-left first-letter:mr-2 first-letter:font-[family-name:var(--font-display)] first-letter:text-5xl first-letter:leading-none first-letter:text-gray-300"
          >
            {cv.summary}
          </motion.p>

          <div className="mb-6 break-inside-avoid rounded border border-gray-700 bg-gray-900/50 p-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-500">By the numbers</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {cv.highlights.map((h) => (
                <div key={h.label}>
                  <p className="font-[family-name:var(--font-display)] text-2xl">{h.value}</p>
                  <p className="text-[9px] uppercase text-gray-500">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="mb-4 break-inside-avoid font-[family-name:var(--font-display)] text-2xl uppercase tracking-wide">
            Career chronicle
          </h2>
          {cv.experience.map((job) => (
            <article key={job.company} className="mb-8 break-inside-avoid">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">{job.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{job.role}</h3>
              <p className="text-sm italic text-gray-400">{job.company} · {job.place}</p>
              {job.bullets.map((b) => (
                <p key={b.slice(0, 30)} className="mt-3 text-sm leading-relaxed text-gray-300">
                  {b}
                </p>
              ))}
            </article>
          ))}

          <h2 className="mb-4 break-inside-avoid font-[family-name:var(--font-display)] text-2xl uppercase">Toolkit</h2>
          {Object.entries(cv.skills).map(([k, items]) => (
            <div key={k} className="mb-6 break-inside-avoid">
              <p className="text-[10px] uppercase tracking-widest text-gray-500">{k}</p>
              <p className="mt-2 text-sm leading-relaxed">{items.join(" · ")}</p>
            </div>
          ))}

          <h2 className="mb-4 break-inside-avoid font-[family-name:var(--font-display)] text-2xl uppercase">Selected work</h2>
          {cv.projects.map((p) => (
            <div key={p.name} className="mb-6 break-inside-avoid">
              <a href={p.url} target="_blank" rel="noreferrer" className="font-semibold underline-offset-2 hover:underline">
                {p.name}
              </a>
              <p className="mt-1 text-sm text-gray-400">{p.blurb}</p>
            </div>
          ))}

          <footer className="mb-6 break-inside-avoid border-t border-gray-700 pt-6 text-sm text-gray-400">
            <p>{cv.education.degree}</p>
            <p>{cv.education.school}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
              <span>{cv.phone}</span>
              <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
              <Link href="/goals">100 Goals →</Link>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
