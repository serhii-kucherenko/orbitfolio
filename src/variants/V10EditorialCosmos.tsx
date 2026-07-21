"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";

const pullQuote =
  "Production AI for clinicians, not demos — architecture through on-call.";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-10 sm:py-12">
        <header className="border-b-4 border-double border-black pb-6">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black pb-3">
            <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.55em]">
              Editorial Press · Vol. X · {new Date().getFullYear()}
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.35em]">
              {cv.location}
            </p>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase leading-relaxed tracking-widest">
              Founding Engineer
              <br />
              Applied AI · Healthcare
            </p>
            <h1 className="text-center font-[family-name:var(--font-serif)] text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
              {cv.name}
            </h1>
            <p className="text-right font-[family-name:var(--font-mono)] text-[10px] uppercase leading-relaxed tracking-widest">
              Issue 01
              <br />
              Full Career Edition
            </p>
          </div>
          <p className="mt-4 border-t border-black pt-4 text-center font-[family-name:var(--font-serif)] text-xl italic sm:text-2xl">
            {cv.title}
          </p>
        </header>

        <div className="mt-10 grid gap-8 border-b border-black pb-10 lg:grid-cols-12">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 text-base leading-[1.75] first-letter:float-left first-letter:mr-3 first-letter:font-[family-name:var(--font-serif)] first-letter:text-6xl first-letter:leading-none"
          >
            {cv.summary}
          </motion.p>
          <blockquote className="relative border-l-4 border-black pl-6 lg:col-span-5 lg:pl-8">
            <p className="font-[family-name:var(--font-serif)] text-2xl leading-snug italic sm:text-3xl">
              &ldquo;{pullQuote}&rdquo;
            </p>
            <cite className="mt-4 block font-[family-name:var(--font-mono)] text-[10px] not-italic uppercase tracking-[0.3em]">
              — Editorial desk note
            </cite>
          </blockquote>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-px border border-black bg-black sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="bg-[#F7F4EF] px-4 py-5 text-center">
              <p className="font-[family-name:var(--font-serif)] text-3xl">{h.value}</p>
              <p className="mt-1 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest">
                {h.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-10 sm:columns-2 lg:columns-3">
          <h2 className="mb-6 break-inside-avoid border-b-2 border-black pb-2 font-[family-name:var(--font-serif)] text-3xl uppercase tracking-wide">
            Career Chronicle
          </h2>

          {cv.experience.map((job, i) => (
            <article key={`${job.company}-${job.period}`} className="mb-10 break-inside-avoid">
              <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.35em]">
                Article {String(i + 1).padStart(2, "0")} · {job.period}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-serif)] text-2xl leading-tight">{job.role}</h3>
              <p className="mt-1 text-sm italic">{job.company}</p>
              <p className="text-xs uppercase tracking-wider opacity-60">{job.place}</p>
              {job.bullets.map((b) => (
                <p key={b.slice(0, 40)} className="mt-3 text-sm leading-relaxed">
                  {b}
                </p>
              ))}
            </article>
          ))}

          <h2 className="mb-6 mt-4 break-inside-avoid border-b-2 border-black pb-2 font-[family-name:var(--font-serif)] text-3xl uppercase tracking-wide">
            Toolkit
          </h2>
          {Object.entries(cv.skills).map(([group, items]) => (
            <div key={group} className="mb-8 break-inside-avoid">
              <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.35em]">
                {group}
              </p>
              <p className="mt-2 text-sm leading-relaxed">{items.join(" · ")}</p>
            </div>
          ))}

          <h2 className="mb-6 mt-4 break-inside-avoid border-b-2 border-black pb-2 font-[family-name:var(--font-serif)] text-3xl uppercase tracking-wide">
            Selected Work
          </h2>
          {cv.projects.map((p) => (
            <div key={p.name} className="mb-8 break-inside-avoid">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="font-[family-name:var(--font-serif)] text-lg underline decoration-1 underline-offset-4 hover:opacity-70"
              >
                {p.name}
              </a>
              <p className="mt-2 text-sm leading-relaxed">{p.blurb}</p>
            </div>
          ))}

          <div className="mb-8 break-inside-avoid rounded-sm border border-black p-5">
            <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.35em]">
              Living list
            </p>
            <Link
              href="/goals"
              className="mt-2 block font-[family-name:var(--font-serif)] text-xl underline decoration-1 underline-offset-4"
            >
              100 Goals →
            </Link>
            <p className="mt-2 text-sm">Ambitions, craft, and impact — updated continuously.</p>
          </div>

          <footer className="mb-8 break-inside-avoid border-t-2 border-black pt-6">
            <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.35em]">
              Correspondence
            </p>
            <p className="mt-3 font-[family-name:var(--font-serif)] text-lg">{cv.education.degree}</p>
            <p className="text-sm">{cv.education.school}</p>
            <div className="mt-4 space-y-1 text-sm">
              <a href={`mailto:${cv.email}`} className="block underline underline-offset-2">
                {cv.email}
              </a>
              <p>{cv.phone}</p>
              <p>{cv.location}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href={cv.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                LinkedIn
              </a>
              <a href={cv.github} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                GitHub
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
