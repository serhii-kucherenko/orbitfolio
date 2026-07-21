"use client";

import { useState } from "react";
import { cv } from "@/data/cv";

/** Magazine cover stack — swipe/click through covers, light editorial */
export function Variant() {
  const covers = [
    {
      kicker: "Profile",
      headline: cv.name,
      deck: cv.title,
      body: cv.summary,
      tone: "bg-[#1a1a1a] text-[#f5f5f5]",
    },
    ...cv.experience.map((job, i) => ({
      kicker: `Issue ${String(i + 2).padStart(2, "0")}`,
      headline: job.company,
      deck: `${job.role} · ${job.period}`,
      body: job.bullets.join(" "),
      tone: i % 2 === 0 ? "bg-[#0c4a6e] text-sky-50" : "bg-[#7c2d12] text-orange-50",
    })),
    {
      kicker: "Toolkit",
      headline: "What I ship with",
      deck: "Skills across AI, backend, frontend, infra",
      body: Object.values(cv.skills).flat().slice(0, 20).join(" · "),
      tone: "bg-[#14532d] text-emerald-50",
    },
  ];
  const [i, setI] = useState(0);
  const c = covers[i];

  return (
    <main className="min-h-screen bg-[#E7E5E4] text-stone-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">Cover series</p>
        <div className={`mt-6 min-h-[70vh] rounded-sm p-8 shadow-2xl sm:p-12 ${c.tone}`}>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-70">{c.kicker}</p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-none sm:text-6xl">
            {c.headline}
          </h1>
          <p className="mt-4 text-lg opacity-80">{c.deck}</p>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed opacity-85">{c.body}</p>
          <div className="mt-12 flex flex-wrap gap-4 text-xs opacity-70">
            {cv.highlights.map((h) => (
              <span key={h.label}>
                {h.value} {h.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            disabled={i === 0}
            onClick={() => setI((n) => Math.max(0, n - 1))}
            className="rounded-full border border-stone-400 bg-white px-4 py-2 text-sm disabled:opacity-30"
          >
            Previous cover
          </button>
          <p className="font-[family-name:var(--font-mono)] text-xs text-stone-500">
            {i + 1} / {covers.length}
          </p>
          <button
            type="button"
            disabled={i === covers.length - 1}
            onClick={() => setI((n) => Math.min(covers.length - 1, n + 1))}
            className="rounded-full border border-stone-400 bg-white px-4 py-2 text-sm disabled:opacity-30"
          >
            Next cover
          </button>
        </div>

        <section className="mt-14 rounded-lg bg-white p-6">
          <h2 className="text-lg font-semibold">Projects & contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {cv.projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} className="font-medium underline" target="_blank" rel="noreferrer">
                  {p.name}
                </a>
                <span className="text-stone-500"> — {p.blurb}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
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
        </section>
      </div>
    </main>
  );
}
