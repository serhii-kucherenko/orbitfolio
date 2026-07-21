"use client";

import { cv } from "@/data/cv";

/** Brutalist newsprint — white paper, black ink, stamp CTA */
export function Variant() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <p className="border-4 border-black px-3 py-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest inline-block">
          Brutal press · unpaid internship not accepted
        </p>
        <h1 className="mt-8 font-[family-name:var(--font-display)] text-[14vw] font-black uppercase leading-[0.8] tracking-tighter">
          {cv.name.split(" ")[0]}
          <br />
          {cv.name.split(" ")[1]}
        </h1>
        <p className="mt-8 max-w-xl border-4 border-black p-4 text-lg font-bold uppercase leading-snug">
          {cv.title} · {cv.location}
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed">{cv.summary}</p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border-4 border-black p-4">
              <p className="font-[family-name:var(--font-display)] text-4xl font-black">{h.value}</p>
              <p className="mt-2 text-xs font-bold uppercase">{h.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="border-b-4 border-black pb-2 text-2xl font-black uppercase">Experience</h2>
          <div className="mt-6 space-y-10">
            {cv.experience.map((job) => (
              <article key={job.company} className="border-4 border-black p-5">
                <p className="text-xs font-bold uppercase">{job.period}</p>
                <h3 className="mt-2 text-2xl font-black uppercase">{job.company}</h3>
                <p className="mt-1 text-sm font-bold uppercase">{job.role}</p>
                <p className="text-xs uppercase text-black/60">{job.place}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 36)} className="grid grid-cols-[1rem_1fr] gap-2">
                      <span>■</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-4 border-black p-5 sm:grid-cols-2">
          {Object.entries(cv.skills).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-black uppercase">{group}</p>
              <p className="mt-2 text-sm leading-relaxed">{items.join(", ")}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="border-b-4 border-black pb-2 text-2xl font-black uppercase">Work</h2>
          <ul className="mt-4 space-y-3">
            {cv.projects.map((p) => (
              <li key={p.name} className="border-b-2 border-black pb-3">
                <a href={p.url} className="text-lg font-black uppercase underline" target="_blank" rel="noreferrer">
                  {p.name}
                </a>
                <p className="text-sm">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        <a
          href={`mailto:${cv.email}`}
          className="mt-14 inline-block rotate-[-1.5deg] border-4 border-black bg-black px-6 py-4 text-xl font-black uppercase tracking-tight text-white shadow-[8px_8px_0_#000]"
        >
          Hire now — {cv.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold uppercase">
          <a className="underline" href={cv.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="underline" href={cv.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="underline" href="/resume">
            Resume
          </a>
        </div>
      </div>
    </main>
  );
}
