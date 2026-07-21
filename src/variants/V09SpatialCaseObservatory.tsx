"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Spatial Case Observatory — career cases as stations along a measured vertical route. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#050912] text-[#d7e3ff]">
      <header className="mx-auto max-w-5xl px-6 pb-10 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-sky-300/70">
          Observatory route · stations
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-7xl">{cv.name}</h1>
        <p className="mt-4 text-lg text-sky-100/70">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-sky-100/55">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="inline-block border border-sky-300/40 bg-sky-300/10 px-5 py-2.5 text-sm text-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Book observation time
          </a>
          <a href="/resume" className="inline-block border border-sky-300/25 px-5 py-2.5 text-sm text-sky-100/70">
            Logbook PDF
          </a>
          <ContactRow className="text-sky-100/60" />
        </div>
      </header>

      <section className="relative mx-auto max-w-5xl px-6 pb-8">
        <div aria-hidden className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-sky-400/25 sm:left-1/2" />
        <div className="space-y-10">
          {cv.experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: reduce ? 0 : 0.05 }}
              className={`relative grid gap-4 sm:grid-cols-2 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}
            >
              <div className="sm:px-8">
                <div
                  aria-hidden
                  className="absolute left-2 top-3 h-3 w-3 rounded-full border-2 border-sky-300 bg-[#050912] sm:left-[calc(50%-0.375rem)]"
                />
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-sky-300/50">
                  Station {String(i + 1).padStart(2, "0")} · {job.period}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{job.role}</h2>
                <p className="mt-1 text-sky-100/55">
                  {job.company} · {job.place}
                </p>
              </div>
              <div
                className="rounded-xl border border-sky-400/20 bg-sky-950/30 p-5"
                style={{
                  transform: reduce ? undefined : `perspective(900px) rotateY(${i % 2 === 0 ? -4 : 4}deg)`,
                }}
              >
                <ul className="space-y-2 text-sm leading-relaxed text-sky-50/70">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 24)}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-3 px-6 py-12 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border border-sky-400/15 px-4 py-5">
            <p className="text-2xl font-bold text-sky-200">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-sky-200/45">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-5xl gap-14 border-t border-sky-400/15 px-6 pb-28 pt-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-xl">Instruments</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-6 text-xl">Published sightings</h2>
          <ProjectLinks />
          <p className="mt-10 text-xs text-sky-200/35">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
