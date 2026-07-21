"use client";

import { cv } from "@/data/cv";

/** Warm paper asymmetric proof mosaic — uneven blocks, not identical cards */
export function Variant() {
  const blocks: { size: string; title: string; body: string }[] = [
    { size: "sm:col-span-2 sm:row-span-2", title: cv.name, body: `${cv.title}\n${cv.summary}` },
    ...cv.highlights.map((h) => ({
      size: "sm:col-span-1",
      title: h.value,
      body: h.label,
    })),
    ...cv.experience.flatMap((job) =>
      job.bullets.slice(0, 2).map((b, i) => ({
        size: i === 0 ? "sm:col-span-2" : "sm:col-span-1",
        title: `${job.company}`,
        body: `${job.role} · ${job.period}\n${b}`,
      })),
    ),
    ...Object.entries(cv.skills).map(([group, items]) => ({
      size: "sm:col-span-1",
      title: group,
      body: items.slice(0, 8).join(" · "),
    })),
    ...cv.projects.map((p) => ({
      size: "sm:col-span-1",
      title: p.name,
      body: p.blurb,
    })),
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1c1917]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">Proof mosaic</p>
        <p className="mt-2 max-w-xl text-sm text-stone-600">
          Uneven blocks of evidence — not a uniform card grid. {cv.location}.
        </p>
        <div className="mt-10 grid auto-rows-fr gap-3 sm:grid-cols-3">
          {blocks.map((b, i) => (
            <div
              key={`${b.title}-${i}`}
              className={`${b.size} border border-stone-300/90 bg-[#FFFcf7] p-5 ${
                i === 0 ? "min-h-[280px]" : ""
              }`}
            >
              <h2
                className={`font-[family-name:var(--font-display)] leading-tight ${
                  i === 0 ? "text-3xl sm:text-4xl" : "text-xl"
                }`}
              >
                {b.title}
              </h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-stone-600">{b.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 border-t border-stone-300 pt-6 text-sm">
          <a className="underline" href={`mailto:${cv.email}`}>
            {cv.email}
          </a>
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
