"use client";

import { cv } from "@/data/cv";

/** Bauhaus / primary color blocks — geometric, light, not space */
export function Variant() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-black">
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-12">
        <aside className="bg-[#E30613] px-6 py-16 text-white lg:col-span-4 lg:min-h-screen">
          <p className="text-[10px] uppercase tracking-[0.4em]">Bauhaus CV</p>
          <h1 className="mt-8 font-[family-name:var(--font-display)] text-5xl font-bold leading-none">
            {cv.name}
          </h1>
          <p className="mt-6 text-lg">{cv.title}</p>
          <p className="mt-2 text-sm text-white/80">{cv.location}</p>
          <a
            href={`mailto:${cv.email}`}
            className="mt-10 inline-block bg-black px-4 py-3 text-sm font-semibold text-white"
          >
            Contact
          </a>
          <div className="mt-16 space-y-4">
            {cv.highlights.map((h) => (
              <div key={h.label} className="border-t border-white/30 pt-3">
                <p className="text-3xl font-bold">{h.value}</p>
                <p className="text-xs uppercase tracking-wider text-white/70">{h.label}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-8">
          <section className="border-b border-black bg-[#F4F1EA] px-6 py-12">
            <p className="max-w-2xl text-sm leading-relaxed">{cv.summary}</p>
          </section>

          <section className="bg-[#0047AB] px-6 py-12 text-white">
            <h2 className="text-[10px] uppercase tracking-[0.35em]">Experience</h2>
            <div className="mt-8 space-y-10">
              {cv.experience.map((job) => (
                <article key={job.company}>
                  <p className="text-xs text-white/60">{job.period}</p>
                  <h3 className="mt-1 text-2xl font-bold">{job.company}</h3>
                  <p className="text-sm">
                    {job.role} · {job.place}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/85">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 36)}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid sm:grid-cols-2">
            <div className="bg-[#F5D76E] px-6 py-10">
              <h2 className="text-[10px] uppercase tracking-[0.35em]">Skills</h2>
              {Object.entries(cv.skills).map(([group, items]) => (
                <div key={group} className="mt-4">
                  <p className="text-xs font-bold uppercase">{group}</p>
                  <p className="mt-1 text-sm leading-relaxed">{items.join(", ")}</p>
                </div>
              ))}
            </div>
            <div className="bg-black px-6 py-10 text-white">
              <h2 className="text-[10px] uppercase tracking-[0.35em]">Projects</h2>
              <ul className="mt-4 space-y-4">
                {cv.projects.map((p) => (
                  <li key={p.name}>
                    <a href={p.url} className="font-bold underline" target="_blank" rel="noreferrer">
                      {p.name}
                    </a>
                    <p className="text-sm text-white/70">{p.blurb}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-1 text-sm">
                <a className="block underline" href={cv.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="block underline" href={cv.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="block underline" href="/resume">
                  Resume
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
