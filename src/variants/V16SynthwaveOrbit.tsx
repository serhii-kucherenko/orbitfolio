"use client";

import { cv } from "@/data/cv";

/** LinkedIn-style clean recruiter page — professional, light, dense proof */
export function Variant() {
  return (
    <main className="min-h-screen bg-[#F3F2EF] text-[#191919]">
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 text-sm">
          <span className="font-semibold text-[#0A66C2]">Orbitfolio Profile</span>
          <a href={`mailto:${cv.email}`} className="rounded-full bg-[#0A66C2] px-4 py-1.5 font-semibold text-white">
            Message
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <section className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
          <div className="h-24 bg-gradient-to-r from-[#0A66C2] to-[#004182]" />
          <div className="px-6 pb-6">
            <div className="-mt-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#0A66C2] text-2xl font-bold text-white">
              SK
            </div>
            <h1 className="mt-3 text-2xl font-semibold">{cv.name}</h1>
            <p className="text-base text-black/80">{cv.title}</p>
            <p className="mt-1 text-sm text-black/55">
              {cv.location} · <a className="text-[#0A66C2]" href={cv.linkedin} target="_blank" rel="noreferrer">Contact info</a>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={`mailto:${cv.email}`} className="rounded-full bg-[#0A66C2] px-4 py-1.5 text-sm font-semibold text-white">
                Open to work
              </a>
              <a href="/resume" className="rounded-full border border-[#0A66C2] px-4 py-1.5 text-sm font-semibold text-[#0A66C2]">
                Resume
              </a>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="mt-3 text-sm leading-relaxed text-black/75">{cv.summary}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cv.highlights.map((h) => (
              <div key={h.label}>
                <p className="text-xl font-semibold">{h.value}</p>
                <p className="text-xs text-black/50">{h.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="mt-4 space-y-6">
            {cv.experience.map((job) => (
              <article key={job.company} className="border-b border-black/5 pb-6 last:border-0">
                <h3 className="font-semibold">{job.role}</h3>
                <p className="text-sm">{job.company}</p>
                <p className="text-xs text-black/50">
                  {job.period} · {job.place}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/75">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 36)}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.values(cv.skills)
              .flat()
              .map((s) => (
                <span key={s} className="rounded-full bg-[#EAF3FA] px-3 py-1 text-xs font-medium text-[#0A66C2]">
                  {s}
                </span>
              ))}
          </div>
        </section>

        <section className="mt-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Featured</h2>
          <ul className="mt-4 space-y-3">
            {cv.projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} className="font-semibold text-[#0A66C2]" target="_blank" rel="noreferrer">
                  {p.name}
                </a>
                <p className="text-sm text-black/65">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
