"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Hybrid Command Cases — command-palette density + employer case-file depth. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const commands = [
    { k: "▸ identity", href: "#identity" },
    { k: "▸ cases", href: "#cases" },
    { k: "▸ systems", href: "#systems" },
    { k: "▸ open-source", href: "#open-source" },
    { k: "▸ contact", href: "#contact" },
  ] as const;

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#0e1012] text-[#f4efe6]">
      <div className="mx-auto grid min-h-screen max-w-6xl lg:grid-cols-[240px_1fr]">
        <aside className="border-b border-amber-300/25 bg-[#0a0c0e] p-6 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-amber-300/70">
            cmd / case index · {cv.location}
          </p>
          <p className="mt-4 font-[family-name:var(--font-mono)] text-xs text-amber-200">
            {reduce ? "AUTO · OFF" : "AUTO · READY"}
          </p>
          <nav className="mt-8 space-y-2 font-[family-name:var(--font-mono)] text-sm text-amber-100/80">
            {commands.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="block rounded px-2 py-1.5 hover:bg-amber-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
              >
                {c.k}
              </a>
            ))}
          </nav>
          <div className="mt-10 space-y-3 border-t border-amber-300/20 pt-6 font-[family-name:var(--font-mono)] text-[11px] text-amber-200/70">
            {cv.highlights.map((h) => (
              <p key={h.label}>
                <span className="text-amber-100">{h.value}</span> :: {h.label}
              </p>
            ))}
          </div>
          <a
            href={`mailto:${cv.email}`}
            className="mt-8 inline-block border border-amber-300 px-3 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            open hire channel
          </a>
          <a
            href="/resume"
            className="mt-3 inline-block border border-amber-300/40 px-3 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-amber-100/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            print case file
          </a>
        </aside>

        <div className="min-w-0">
          <header id="identity" className="scroll-mt-8 border-b border-amber-300/25 px-6 py-16 sm:px-10">
            <p className="text-amber-300/80">{cv.title}</p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black leading-none sm:text-7xl"
            >
              {cv.name}
            </motion.h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-stone-300">{cv.summary}</p>
            <ContactRow className="mt-8 text-amber-100/70" />
          </header>

          <section id="cases" className="scroll-mt-8 px-6 py-14 sm:px-10">
            <h2 className="mb-10 text-3xl font-black">Employer case history</h2>
            <div className="space-y-8">
              {cv.experience.map((job, i) => (
                <article key={`${job.company}-${job.period}`} className="border border-amber-300/20 bg-[#14181c] p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-amber-300/60">
                    <span>CASE {String(i + 1).padStart(2, "0")}</span>
                    <span>{job.period}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">
                    {job.role} · {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-stone-400">{job.place}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-300">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 28)} className="pl-4 relative before:absolute before:left-0 before:content-['›'] before:text-amber-300">
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="systems" className="scroll-mt-8 border-t border-amber-300/25 px-6 py-14 sm:px-10">
            <h2 className="mb-8 text-3xl font-black">System inventory</h2>
            <SkillsCloud />
          </section>

          <section id="open-source" className="scroll-mt-8 border-t border-amber-300/25 px-6 py-14 sm:px-10">
            <h2 className="mb-8 text-3xl font-black">Project files</h2>
            <ProjectLinks />
          </section>

          <section id="contact" className="scroll-mt-8 border-t border-amber-300/25 px-6 py-12 sm:px-10">
            <ContactRow className="text-amber-100/70" />
            <p className="mt-6 text-sm text-stone-500">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </section>
        </div>
      </div>
      
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Command cases hybrid — palette jumps still land on complete evidence drawers.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Hybrid ladder craft now means structure, not a motion wrapper around a thin resume.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Who, what, and proof stay reachable in under ten seconds after the effects settle.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Eta · hybrid · craft depth 130
        </p>
      </footer>
</main>
    </SmoothScroll>
  );
}
