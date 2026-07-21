"use client";

import { cv } from "@/data/cv";

/** Children's-book style chapter story — warm illustration feel, not space */
export function Variant() {
  const chapters = [
    {
      n: "I",
      title: "The spark",
      body: `${cv.education.degree} · ${cv.education.school}. Then a decade of shipping.`,
    },
    ...cv.experience.map((job, i) => ({
      n: ["II", "III", "IV", "V"][i] ?? String(i + 2),
      title: job.company,
      body: `${job.role} (${job.period}). ${job.bullets.join(" ")}`,
    })),
    {
      n: "Now",
      title: "Vancouver",
      body: `${cv.title}. ${cv.summary}`,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF8F0] text-[#3D2914]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] text-amber-800/50">
          A career in chapters
        </p>
        <h1 className="mt-4 text-center font-[family-name:var(--font-serif)] text-5xl leading-tight">
          {cv.name}
        </h1>
        <p className="mt-3 text-center text-sm text-amber-900/60">{cv.title}</p>

        <div className="mt-16 space-y-16">
          {chapters.map((ch) => (
            <article key={ch.n} className="relative border-l-4 border-amber-700/30 pl-8">
              <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-amber-800 text-[10px] font-bold text-[#FFF8F0]">
                {ch.n}
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl">{ch.title}</h2>
              <p className="mt-4 text-base leading-8 text-amber-950/75">{ch.body}</p>
            </article>
          ))}
        </div>

        <section className="mt-20 rounded-3xl bg-[#F5E6D3] p-8">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl">The toolkit</h2>
          {Object.entries(cv.skills).map(([group, items]) => (
            <div key={group} className="mt-4">
              <p className="text-xs uppercase tracking-wider text-amber-800/50">{group}</p>
              <p className="mt-1 text-sm leading-relaxed">{items.join(" · ")}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl">Works in the world</h2>
          <ul className="mt-4 space-y-3">
            {cv.projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} className="font-semibold underline" target="_blank" rel="noreferrer">
                  {p.name}
                </a>
                <p className="text-sm text-amber-900/60">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          {cv.highlights.map((h) => (
            <span key={h.label} className="rounded-full border border-amber-800/20 px-4 py-2">
              <strong>{h.value}</strong> {h.label}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <a className="underline" href={`mailto:${cv.email}`}>
            {cv.email}
          </a>
          <a className="underline" href={cv.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="underline" href="/resume">
            Resume
          </a>
        </div>
      </div>
    </main>
  );
}
