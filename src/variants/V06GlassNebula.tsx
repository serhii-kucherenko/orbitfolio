"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main
      className="relative min-h-screen overflow-hidden text-slate-800"
      style={{
        background: "linear-gradient(165deg, #fde8d8 0%, #fef3e2 25%, #e8f4fc 60%, #d4ebf7 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #fec89a 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, #90caf9 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <p className="text-center text-[10px] uppercase tracking-[0.45em] text-slate-500/80">Daylight Glass · V06</p>

        <motion.section
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 rounded-3xl border border-white/60 bg-white/40 p-8 shadow-lg shadow-orange-200/20 backdrop-blur-xl sm:p-12"
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-slate-900 sm:text-5xl">{cv.name}</h1>
          <p className="mt-2 text-lg text-slate-600">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-700/90">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {cv.highlights.map((h) => (
              <span
                key={h.label}
                className="rounded-full border border-white/70 bg-white/50 px-4 py-2 text-xs backdrop-blur-sm"
              >
                <span className="font-semibold text-slate-900">{h.value}</span>{" "}
                <span className="text-slate-500">{h.label}</span>
              </span>
            ))}
          </div>
        </motion.section>

        <section className="mt-10 space-y-6">
          <h2 className="px-2 text-[10px] uppercase tracking-[0.4em] text-slate-500">Experience</h2>
          {cv.experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-white/60 bg-white/35 p-8 shadow-md shadow-sky-200/15 backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-wider text-slate-400">{job.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {job.role} · {job.company}
              </h3>
              <p className="text-sm text-slate-500">{job.place}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 40)}>· {b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </section>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/60 bg-white/35 p-8 shadow-md shadow-orange-200/15 backdrop-blur-xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-500">Skills</h2>
            <div className="mt-6 space-y-5">
              {Object.entries(cv.skills).map(([group, items]) => (
                <div key={group}>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">{group}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/70 bg-white/45 px-3 py-1 text-xs backdrop-blur-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/60 bg-white/35 p-8 shadow-md shadow-sky-200/15 backdrop-blur-xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-500">Projects</h2>
            <ul className="mt-6 space-y-5">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-900 hover:text-sky-700"
                  >
                    {p.name}
                  </a>
                  <p className="mt-1 text-sm text-slate-600">{p.blurb}</p>
                </li>
              ))}
              <li>
                <Link href="/goals" className="font-medium text-slate-900 hover:text-sky-700">
                  100 Goals →
                </Link>
                <p className="mt-1 text-sm text-slate-600">Living list of ambitions, craft, and impact.</p>
              </li>
            </ul>
          </section>
        </div>

        <footer className="mt-10 rounded-3xl border border-white/60 bg-white/40 p-8 text-sm shadow-lg shadow-orange-200/20 backdrop-blur-xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500">Contact</p>
          <p className="mt-4 text-slate-800">
            {cv.education.degree} · {cv.education.school}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-slate-700">
            <a href={`mailto:${cv.email}`} className="hover:text-sky-700">
              {cv.email}
            </a>
            <span>{cv.phone}</span>
            <span>{cv.location}</span>
            <a href={cv.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-700">
              LinkedIn
            </a>
            <a href={cv.github} target="_blank" rel="noreferrer" className="hover:text-sky-700">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
