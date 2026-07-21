"use client";

import { cv } from "@/data/cv";

/** Dual narrative: recruiter cream vs engineer slate — no space */
export function Variant() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <section className="bg-[#F5F0E8] px-8 py-24 text-[#1c1917] lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">For hiring managers</p>
        <h1 className="mt-6 font-[family-name:var(--font-serif)] text-4xl leading-tight sm:text-5xl">
          {cv.name}
        </h1>
        <p className="mt-4 text-lg text-stone-700">{cv.title}</p>
        <p className="mt-2 text-sm text-stone-500">{cv.location}</p>
        <p className="mt-8 text-sm leading-relaxed text-stone-700">{cv.summary}</p>
        <div className="mt-10 grid grid-cols-2 gap-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-stone-300/80 bg-[#FBF8F3] p-4">
              <p className="font-[family-name:var(--font-display)] text-2xl">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-stone-500">{h.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 space-y-2 text-sm">
          <a className="block font-medium underline" href={`mailto:${cv.email}`}>
            {cv.email}
          </a>
          <a className="block underline" href={cv.linkedin} target="_blank" rel="noreferrer">
            LinkedIn profile
          </a>
          <a className="block underline" href="/resume">
            One-page resume
          </a>
        </div>
        <p className="mt-12 text-xs text-stone-400">Scroll the engineer log →</p>
      </section>

      <section className="bg-[#1e293b] px-8 py-24 text-slate-100">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-slate-400">
          Engineer log
        </p>
        <div className="mt-10 space-y-12">
          {cv.experience.map((job) => (
            <article key={job.company} className="border-l border-slate-600 pl-5">
              <p className="font-[family-name:var(--font-mono)] text-xs text-cyan-400/80">{job.period}</p>
              <h2 className="mt-2 text-xl font-semibold">{job.company}</h2>
              <p className="text-sm text-slate-300">
                {job.role} · {job.place}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300/90">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 36)}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-slate-400">
            Stack
          </h2>
          {Object.entries(cv.skills).map(([group, items]) => (
            <div key={group} className="mt-4">
              <p className="text-xs text-cyan-300/70">{group}</p>
              <p className="mt-1 text-sm text-slate-300">{items.join(" · ")}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-slate-400">
            Repos
          </h2>
          <ul className="mt-4 space-y-3">
            {cv.projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} className="text-cyan-300 underline" target="_blank" rel="noreferrer">
                  {p.name}
                </a>
                <p className="text-xs text-slate-400">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
