"use client";

import { useState } from "react";
import { cv } from "@/data/cv";

/** Bilingual EN / UA layer toggle — newspaper strip, not space */
export function Variant() {
  const [lang, setLang] = useState<"en" | "ua">("en");
  const t =
    lang === "en"
      ? {
          eyebrow: "Dual signal · EN",
          title: cv.title,
          summary: cv.summary,
          exp: "Experience",
          skills: "Skills",
          work: "Selected work",
          hire: "Hire",
        }
      : {
          eyebrow: "Подвійний сигнал · UA",
          title: "Засновник full-stack інженер",
          summary:
            "Понад 10 років створення production-систем у SaaS, healthcare та fintech. Спеціалізація — applied AI: агенти, RAG, автоматизація.",
          exp: "Досвід",
          skills: "Навички",
          work: "Роботи",
          hire: "Звʼязок",
        };

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A]">
      <div className="border-b border-black/15 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">{t.eyebrow}</p>
          <div className="flex gap-1 rounded-full border border-black/15 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 ${lang === "en" ? "bg-black text-white" : ""}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("ua")}
              className={`rounded-full px-3 py-1 ${lang === "ua" ? "bg-black text-white" : ""}`}
            >
              UA
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14">
        <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-black/70">{t.title}</p>
        <p className="mt-2 text-sm text-black/45">{cv.location}</p>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-black/75">{t.summary}</p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-black/10 bg-white p-4">
              <p className="text-2xl font-semibold">{h.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-black/45">{h.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="border-b border-black/20 pb-2 text-sm font-semibold uppercase tracking-[0.2em]">
            {t.exp}
          </h2>
          <div className="mt-6 space-y-8">
            {cv.experience.map((job) => (
              <article key={job.company}>
                <p className="text-xs text-black/40">{job.period}</p>
                <h3 className="mt-1 text-xl font-semibold">{job.company}</h3>
                <p className="text-sm text-black/60">
                  {job.role} · {job.place}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/75">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 36)}>• {b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="border-b border-black/20 pb-2 text-sm font-semibold uppercase tracking-[0.2em]">
              {t.skills}
            </h2>
            {Object.entries(cv.skills).map(([group, items]) => (
              <div key={group} className="mt-4">
                <p className="text-xs uppercase text-black/40">{group}</p>
                <p className="mt-1 text-sm leading-relaxed">{items.join(", ")}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="border-b border-black/20 pb-2 text-sm font-semibold uppercase tracking-[0.2em]">
              {t.work}
            </h2>
            <ul className="mt-4 space-y-3">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} className="font-semibold underline" target="_blank" rel="noreferrer">
                    {p.name}
                  </a>
                  <p className="text-sm text-black/55">{p.blurb}</p>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${cv.email}`}
              className="mt-8 inline-block bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              {t.hire}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
