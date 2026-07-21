"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#F0FDFA] text-[#134e4a]">
      <nav className="sticky top-0 z-20 border-b border-teal-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-tight text-teal-900">Clinic Product</p>
          <a
            href={`mailto:${cv.email}`}
            className="rounded-full bg-teal-700 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-teal-800"
          >
            Book a call
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-teal-600">
            Healthcare AI · Platform Engineering
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-teal-950 sm:text-5xl">
            {cv.name}
          </h1>
          <p className="mt-3 text-lg text-teal-700">{cv.title}</p>
          <p className="mt-6 text-base leading-relaxed text-teal-800/80">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white shadow-md shadow-teal-900/10 transition hover:bg-teal-800"
            >
              Schedule consultation
            </a>
            <a
              href={cv.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-teal-200 bg-white px-6 py-3 text-sm font-medium text-teal-800 transition hover:border-teal-300"
            >
              View credentials
            </a>
          </div>
        </motion.div>

        <section className="mt-16">
          <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-teal-600">Patient outcomes</h2>
          <p className="mt-1 text-sm text-teal-700/70">Measured impact across production deployments.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cv.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm shadow-teal-900/5"
              >
                <p className="text-3xl font-semibold text-teal-900">{h.value}</p>
                <p className="mt-1 text-sm text-teal-600">{h.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-teal-600">Clinical impact</h2>
          <p className="mt-1 text-sm text-teal-700/70">Career milestones with measurable results.</p>
          <div className="mt-8 space-y-6">
            {cv.experience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="rounded-2xl border border-teal-100 bg-white p-8 shadow-sm shadow-teal-900/5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-teal-500">{job.period}</p>
                    <h3 className="mt-1 text-xl font-semibold text-teal-950">{job.role}</h3>
                    <p className="text-sm text-teal-700">
                      {job.company} · {job.place}
                    </p>
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                    Verified
                  </span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-teal-800/90">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 40)} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-teal-600">Capabilities</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {Object.entries(cv.skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm shadow-teal-900/5"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-teal-500">{group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-teal-100 bg-teal-50/50 px-3 py-1 text-xs text-teal-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-teal-600">Research & tools</h2>
          <ul className="mt-8 space-y-4">
            {cv.projects.map((p) => (
              <li
                key={p.name}
                className="flex flex-col gap-1 rounded-2xl border border-teal-100 bg-white p-6 shadow-sm shadow-teal-900/5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-teal-900 hover:text-teal-700"
                  >
                    {p.name}
                  </a>
                  <p className="mt-1 text-sm text-teal-700/80">{p.blurb}</p>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 rounded-full border border-teal-200 px-4 py-2 text-xs font-medium text-teal-700 transition hover:bg-teal-50"
                >
                  View study
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-1 rounded-2xl border border-teal-100 bg-white p-6 shadow-sm shadow-teal-900/5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link href="/goals" className="text-lg font-semibold text-teal-900 hover:text-teal-700">
                  100 Goals
                </Link>
                <p className="mt-1 text-sm text-teal-700/80">Living list of ambitions, craft, and impact.</p>
              </div>
              <Link
                href="/goals"
                className="shrink-0 rounded-full border border-teal-200 px-4 py-2 text-xs font-medium text-teal-700 transition hover:bg-teal-50"
              >
                Open registry
              </Link>
            </li>
          </ul>
        </section>

        <footer className="mt-20 rounded-2xl border border-teal-100 bg-white p-8 shadow-sm shadow-teal-900/5">
          <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-teal-600">Contact clinic</h2>
          <p className="mt-4 text-sm text-teal-800">
            {cv.education.degree} · {cv.education.school}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={`mailto:${cv.email}`} className="font-medium text-teal-900 hover:underline">
              {cv.email}
            </a>
            <span className="text-teal-700">{cv.phone}</span>
            <span className="text-teal-700">{cv.location}</span>
            <a href={cv.linkedin} target="_blank" rel="noreferrer" className="text-teal-700 hover:underline">
              LinkedIn
            </a>
            <a href={cv.github} target="_blank" rel="noreferrer" className="text-teal-700 hover:underline">
              GitHub
            </a>
          </div>
          <a
            href={`mailto:${cv.email}`}
            className="mt-8 inline-block rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white shadow-md shadow-teal-900/10 transition hover:bg-teal-800"
          >
            Request appointment
          </a>
        </footer>
      </div>
    </main>
  );
}
