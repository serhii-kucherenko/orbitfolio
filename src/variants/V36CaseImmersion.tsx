"use client";

import { cv } from "@/data/cv";

/** Longform case immersion — one company chapter at a time, light */
export function Variant() {
  return (
    <main className="bg-[#FAFAFA] text-[#171717]">
      <header className="mx-auto max-w-3xl px-6 pb-20 pt-28">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Case immersion</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl">{cv.name}</h1>
        <p className="mt-4 text-lg text-neutral-600">{cv.title}</p>
        <p className="mt-6 text-sm leading-relaxed text-neutral-600">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          {cv.highlights.map((h) => (
            <div key={h.label}>
              <p className="text-2xl font-semibold">{h.value}</p>
              <p className="text-xs text-neutral-500">{h.label}</p>
            </div>
          ))}
        </div>
      </header>

      {cv.experience.map((job, i) => (
        <section
          key={job.company}
          className="flex min-h-[100svh] flex-col justify-center border-t border-neutral-200 px-6 py-24"
        >
          <div className="mx-auto w-full max-w-3xl">
            <p className="font-[family-name:var(--font-mono)] text-xs text-neutral-400">
              Chapter {String(i + 1).padStart(2, "0")} / {String(cv.experience.length).padStart(2, "0")}
            </p>
            <p className="mt-6 font-[family-name:var(--font-display)] text-7xl font-bold text-neutral-200 sm:text-9xl">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{job.company}</h2>
            <p className="mt-2 text-neutral-600">
              {job.role} · {job.period}
            </p>
            <p className="text-sm text-neutral-500">{job.place}</p>
            <ul className="mt-10 space-y-4 text-base leading-relaxed text-neutral-700">
              {job.bullets.map((b) => (
                <li key={b.slice(0, 40)} className="border-l-2 border-neutral-300 pl-4">
                  {b}
                </li>
              ))}
            </ul>
            {i < cv.experience.length - 1 && (
              <p className="mt-16 text-xs uppercase tracking-[0.3em] text-neutral-400">
                Scroll for next chapter
              </p>
            )}
          </div>
        </section>
      ))}

      <section className="border-t border-neutral-200 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Skills & work</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {Object.entries(cv.skills).map(([group, items]) => (
              <div key={group}>
                <p className="text-xs uppercase tracking-wider text-neutral-400">{group}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{items.join(", ")}</p>
              </div>
            ))}
          </div>
          <ul className="mt-12 space-y-4">
            {cv.projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} className="font-medium underline" target="_blank" rel="noreferrer">
                  {p.name}
                </a>
                <p className="text-sm text-neutral-600">{p.blurb}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <a href={`mailto:${cv.email}`} className="underline">
              {cv.email}
            </a>
            <a href={cv.linkedin} className="underline" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="/resume" className="underline">
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
