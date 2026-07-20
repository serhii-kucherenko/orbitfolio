"use client";

import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const UA: Record<string, string> = {
  summary: "Про себе",
  experience: "Досвід",
  skills: "Навички",
  projects: "Проєкти",
  education: "Освіта",
  contact: "Контакт",
  highlights: "Показники",
  ai: "ШІ",
  backend: "Бекенд",
  frontend: "Фронтенд",
  infra: "Інфра",
  leadership: "Лідерство",
  years: "років досвіду",
  goals: "100 цілей",
};

export function Variant() {
  const reduce = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c1222] text-[#e2e8f0]">
      <Starfield density={100} color="#94a3b8" speed={reduce ? 0 : 0.05} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-8">
        <header className="grid gap-6 border-b border-slate-700 pb-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500">Dual Signal · V47</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
            <p className="mt-2 text-lg text-sky-300">{cv.title}</p>
          </div>
          <div className="flex flex-col justify-end text-right">
            <p className="text-sm text-slate-400">{cv.location}</p>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-yellow-500/80">Ванкувер · Канада</p>
          </div>
        </header>

        <section className="mt-12">
          <DualLabel en="Summary" ua={UA.summary} />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">{cv.summary}</p>
        </section>

        <section className="mt-12">
          <DualLabel en="Highlights" ua={UA.highlights} />
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cv.highlights.map((h) => (
              <div key={h.label} className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                <p className="text-2xl font-bold text-sky-400">{h.value}</p>
                <p className="text-[10px] uppercase text-slate-500">{h.label}</p>
                {h.label.includes("Years") && <p className="text-[9px] text-yellow-600/70">{UA.years}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <DualLabel en="Experience" ua={UA.experience} />
          <ol className="mt-6 space-y-10">
            {cv.experience.map((job) => (
              <li key={job.company} className="grid gap-4 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs text-sky-500">{job.period}</p>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-slate-400">{job.company}</p>
                  <p className="text-xs text-slate-600">{job.place}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 24)}>{b}</li>
                    ))}
                  </ul>
                </div>
                <span className="self-start rounded border border-yellow-700/30 px-2 py-1 font-[family-name:var(--font-mono)] text-[9px] text-yellow-600/80">
                  {UA.experience}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <DualLabel en="Skills" ua={UA.skills} />
          <div className="mt-6 space-y-6">
            {Object.entries(cv.skills).map(([k, items]) => (
              <div key={k}>
                <p className="flex items-baseline gap-3 text-[10px] uppercase tracking-widest text-sky-500">
                  {k}
                  <span className="text-yellow-600/70">{UA[k] ?? k}</span>
                </p>
                <p className="mt-2 text-sm text-slate-400">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <DualLabel en="Projects" ua={UA.projects} />
            <ul className="mt-4 space-y-4">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">
                    {p.name}
                  </a>
                  <p className="text-xs text-slate-500">{p.blurb}</p>
                </li>
              ))}
              <li>
                <Link href="/goals" className="text-sky-300 hover:underline">
                  100 Goals
                </Link>
                <span className="ml-2 text-[10px] text-yellow-600/70">({UA.goals})</span>
              </li>
            </ul>
          </div>
          <div>
            <DualLabel en="Education & Contact" ua={`${UA.education} · ${UA.contact}`} />
            <p className="mt-4 text-sm">{cv.education.degree}</p>
            <p className="text-slate-400">{cv.education.school}</p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={`mailto:${cv.email}`} className="block text-sky-300">{cv.email}</a>
              <p>{cv.phone}</p>
              <a href={cv.linkedin} target="_blank" rel="noreferrer" className="block">LinkedIn</a>
              <a href={cv.github} target="_blank" rel="noreferrer" className="block">GitHub</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function DualLabel({ en, ua }: { en: string; ua: string }) {
  return (
    <div className="flex items-baseline gap-4 border-l-2 border-sky-500 pl-4">
      <h2 className="font-[family-name:var(--font-display)] text-xl uppercase tracking-wide">{en}</h2>
      <span className="font-[family-name:var(--font-mono)] text-xs text-yellow-500/80">{ua}</span>
    </div>
  );
}
