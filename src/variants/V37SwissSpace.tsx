"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-sans)] text-black">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-12">
        <div className="grid grid-cols-12 gap-4 border-b border-black pb-4">
          <p className="col-span-12 text-[10px] uppercase tracking-[0.5em] sm:col-span-3">Swiss Grid</p>
          <p className="col-span-12 text-center text-[10px] uppercase tracking-[0.35em] opacity-40 sm:col-span-6">
            International Typographic Style · V37
          </p>
          <p className="col-span-12 text-right text-[10px] uppercase tracking-[0.35em] opacity-40 sm:col-span-3">
            {cv.location}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-4">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-span-9"
          >
            <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-bold leading-[0.88] tracking-[-0.04em]">
              {cv.name.split(" ").map((word, i) => (
                <span key={word} className={i === 1 ? "text-[#E30613]" : "block"}>
                  {word}
                </span>
              ))}
            </h1>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="col-span-12 flex flex-col justify-end lg:col-span-3"
          >
            <div className="border-l-4 border-[#E30613] pl-4">
              <p className="text-lg font-medium leading-snug">{cv.title}</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-4 border-t border-black/15 pt-8">
          <p className="col-span-12 text-sm leading-relaxed lg:col-span-5">{cv.summary}</p>
          <div className="col-span-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-7">
            {cv.highlights.map((h) => (
              <div key={h.label} className="border-t-2 border-[#E30613] pt-3">
                <p className="text-4xl font-bold tracking-tight">{h.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] opacity-50">{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-20">
          <div className="grid grid-cols-12 gap-4 border-b border-black pb-3">
            <h2 className="col-span-12 text-[10px] uppercase tracking-[0.45em] lg:col-span-3">Experience</h2>
            <div className="col-span-12 h-px bg-black/15 lg:col-span-9 lg:self-center" />
          </div>
          <ol className="mt-8 space-y-12">
            {cv.experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="grid grid-cols-12 gap-4 border-b border-black/10 pb-10">
                <div className="col-span-12 lg:col-span-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">{job.period}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider opacity-40">{job.place}</p>
                </div>
                <div className="col-span-12 lg:col-span-9">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {job.role}
                    <span className="text-[#E30613]"> · </span>
                    {job.company}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 40)} className="flex gap-3">
                        <span className="mt-2 h-px w-4 shrink-0 bg-[#E30613]" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 border-b border-black pb-3">
              <h2 className="col-span-12 text-[10px] uppercase tracking-[0.45em]">Skills</h2>
            </div>
            <div className="mt-8 space-y-8">
              {Object.entries(cv.skills).map(([group, items]) => (
                <div key={group}>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#E30613]">{group}</p>
                  <p className="mt-2 text-sm leading-relaxed">{items.join(" / ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 border-b border-black pb-3">
              <h2 className="col-span-12 text-[10px] uppercase tracking-[0.45em]">Work</h2>
            </div>
            <ul className="mt-8 space-y-6">
              {cv.projects.map((p) => (
                <li key={p.name} className="border-l border-black/15 pl-4">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-bold hover:text-[#E30613]"
                  >
                    {p.name}
                  </a>
                  <p className="mt-1 text-sm opacity-60">{p.blurb}</p>
                </li>
              ))}
              <li className="border-l border-[#E30613] pl-4">
                <Link href="/goals" className="text-lg font-bold hover:text-[#E30613]">
                  100 Goals →
                </Link>
                <p className="mt-1 text-sm opacity-60">Living list of ambitions, craft, and impact.</p>
              </li>
            </ul>
          </div>
        </section>

        <footer className="mt-20 grid grid-cols-12 gap-4 border-t-2 border-black pt-8">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.45em]">Contact</p>
            <p className="mt-4 text-sm">{cv.education.degree}</p>
            <p className="text-sm opacity-60">{cv.education.school}</p>
          </div>
          <div className="col-span-12 flex flex-wrap gap-x-6 gap-y-2 text-sm lg:col-span-8 lg:justify-end">
            <a href={`mailto:${cv.email}`} className="font-medium hover:text-[#E30613]">
              {cv.email}
            </a>
            <span>{cv.phone}</span>
            <span>{cv.location}</span>
            <a href={cv.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#E30613]">
              LinkedIn
            </a>
            <a href={cv.github} target="_blank" rel="noreferrer" className="hover:text-[#E30613]">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
