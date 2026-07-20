"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Void side */}
        <section className="relative flex flex-col justify-center bg-[#000000] px-8 py-20 text-white lg:px-14">
          <Starfield density={120} color="#64748b" speed={reduce ? 0 : 0.06} />
          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500">Split Horizon · V08 · Void</p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
            <p className="mt-4 text-lg text-slate-400">{cv.title}</p>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-slate-500">{cv.summary}</p>
            <div className="mt-12 space-y-6 opacity-40">
              {Object.entries(cv.skills).slice(0, 2).map(([k, items]) => (
                <div key={k}>
                  <p className="text-[10px] uppercase tracking-widest">{k}</p>
                  <p className="mt-1 text-xs">{items.slice(0, 4).join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof side */}
        <section className="relative flex flex-col justify-center bg-[#f0f9ff] px-8 py-20 text-[#0c4a6e] lg:px-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(14,165,233,0.08) 25%, transparent 25%)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-[0.5em] text-sky-600">Proof</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {cv.highlights.map((h) => (
                <motion.div
                  key={h.label}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-sky-200 bg-white p-4 shadow-sm"
                >
                  <p className="font-[family-name:var(--font-display)] text-3xl text-sky-700">{h.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-sky-500">{h.label}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="mt-12 text-sm font-semibold uppercase tracking-widest">Experience</h2>
            <ol className="mt-4 space-y-6">
              {cv.experience.map((job) => (
                <li key={job.company} className="border-l-2 border-sky-300 pl-4">
                  <p className="text-[10px] text-sky-500">{job.period}</p>
                  <p className="font-semibold">{job.role}</p>
                  <p className="text-sm text-sky-800/70">{job.company} · {job.place}</p>
                  <ul className="mt-2 space-y-1 text-xs leading-relaxed text-sky-900/80">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 24)}>✓ {b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-widest">Skills</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {Object.values(cv.skills)
                .flat()
                .map((s) => (
                  <span key={s} className="rounded-full bg-sky-100 px-2 py-1 text-[10px] text-sky-800">
                    {s}
                  </span>
                ))}
            </div>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-widest">Projects</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="font-medium text-sky-700 hover:underline">
                    {p.name}
                  </a>
                  <span className="text-sky-600/70"> — {p.blurb}</span>
                </li>
              ))}
            </ul>

            <footer className="mt-10 border-t border-sky-200 pt-6 text-xs">
              <p>{cv.education.degree}, {cv.education.school}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={`mailto:${cv.email}`}>{cv.email}</a>
                <span>{cv.phone}</span>
                <span>{cv.location}</span>
                <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
                <Link href="/goals" className="text-sky-600">100 Goals</Link>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
