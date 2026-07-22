"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#proof", label: "Proof" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

/** Docs Sidebar Engineer — inspectable docs workspace with Lenis long-form scroll. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#0b1220] text-slate-100 overflow-x-hidden">
      <div className="mx-auto flex min-h-screen max-w-6xl">
        <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col border-r border-white/10 bg-[#070d18] px-4 py-24 md:flex">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-sky-300/70">
            docs / career · {cv.location}
          </p>
          <p className="mt-2 text-sm font-semibold text-white">{cv.name.split(" ")[0]}</p>
          <nav className="mt-8 space-y-1 text-sm">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded px-2 py-1.5 text-slate-400 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="mt-auto font-[family-name:var(--font-mono)] text-[10px] text-slate-500">v10.0.0 · stable</p>
        </aside>

        <div className="min-w-0 flex-1 px-5 pb-24 pt-24 sm:px-10">
          <header id="overview">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-sky-300/70">
              Package · founding-engineer
            </p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              {cv.name}
            </motion.h1>
            <p className="mt-3 text-lg text-sky-100/70">{cv.title}</p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300/80">{cv.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${cv.email}`}
                className="bg-sky-400 px-4 py-2 text-sm font-semibold text-[#0b1220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Open issue: hire
              </a>
              <a
                href="/resume"
                className="border border-sky-400/40 px-4 py-2 text-sm text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Export docs / resume
              </a>
              <span className="border border-white/15 px-3 py-2 font-[family-name:var(--font-mono)] text-xs text-slate-400">
                last published · {cv.location}
              </span>
            </div>
          </header>

          <section id="proof" className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cv.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : i * 0.06 }}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-5"
              >
                <p className="font-[family-name:var(--font-mono)] text-2xl text-sky-200">{h.value}</p>
                <p className="mt-1 text-xs text-slate-400">{h.label}</p>
              </motion.div>
            ))}
          </section>

          <section id="experience" className="mt-16">
            <h2 className="mb-6 border-b border-white/10 pb-3 text-xl font-semibold">Experience</h2>
            <ExperienceList tone="dark" />
          </section>

          <section id="skills" className="mt-16">
            <h2 className="mb-6 border-b border-white/10 pb-3 text-xl font-semibold">API surface</h2>
            <SkillsCloud />
          </section>

          <section id="projects" className="mt-16">
            <h2 className="mb-6 border-b border-white/10 pb-3 text-xl font-semibold">Examples</h2>
            <ProjectLinks />
          </section>

          <section id="contact" className="mt-16 border-t border-white/10 pt-8">
            <ContactRow className="text-sky-100/70" />
            <p className="mt-6 text-xs text-slate-500">
              {cv.education.degree} · {cv.education.school}
            </p>
          </section>
        </div>
      </div>
    </main>
    </SmoothScroll>
  );
}
