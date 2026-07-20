"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const [first, ...rest] = cv.name.split(" ");

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const splitX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["0%", "-18%", "18%", "0%"]);
  const splitY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-8%", "0%"]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const summaryOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  return (
    <main ref={ref} className="relative bg-black text-white" style={{ minHeight: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <Starfield density={80} color="#ffffff" speed={reduce ? 0 : 0.04} />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex flex-1 items-center justify-center overflow-hidden px-4">
            <div className="relative w-full max-w-6xl">
              <motion.div
                style={{ x: reduce ? 0 : splitX, y: reduce ? 0 : splitY }}
                className="flex flex-col items-center sm:flex-row sm:justify-between"
              >
                <span className="font-[family-name:var(--font-display)] text-[clamp(3rem,15vw,12rem)] font-black leading-none tracking-tighter text-white">
                  {first}
                </span>
                <span className="font-[family-name:var(--font-display)] text-[clamp(3rem,15vw,12rem)] font-black leading-none tracking-tighter text-[#0ea5e9]">
                  {rest.join(" ")}
                </span>
              </motion.div>
              <motion.p
                style={{ opacity: subtitleOpacity }}
                className="mt-6 text-center text-sm uppercase tracking-[0.4em] text-white/50"
              >
                Kinetic Type · V07 · {cv.title}
              </motion.p>
            </div>
          </div>

          <motion.div
            style={{ opacity: summaryOpacity }}
            className="mx-auto max-w-3xl px-6 pb-24"
          >
            <p className="text-center text-sm leading-relaxed text-white/60">{cv.summary}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {cv.highlights.map((h) => (
                <span key={h.label} className="text-xs uppercase tracking-wider text-sky-400">
                  {h.value} {h.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-3xl space-y-16 px-6 pb-32 pt-8">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl">Experience</h2>
          <ol className="mt-8 space-y-10">
            {cv.experience.map((job) => (
              <li key={job.company}>
                <p className="text-xs text-sky-500">{job.period}</p>
                <h3 className="text-xl font-semibold">{job.role} · {job.company}</h3>
                <p className="text-sm text-white/50">{job.place}</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 30)}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl">Skills</h2>
          <div className="mt-6 space-y-4">
            {Object.entries(cv.skills).map(([k, items]) => (
              <p key={k} className="text-sm">
                <span className="text-sky-500">{k}: </span>
                {items.join(", ")}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl">Projects</h2>
          <ul className="mt-6 space-y-4">
            {cv.projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                  {p.name}
                </a>
                <p className="text-sm text-white/55">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </div>

        <footer className="border-t border-white/10 pt-8 text-sm text-white/60">
          <p>{cv.education.degree} — {cv.education.school}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href={`mailto:${cv.email}`}>{cv.email}</a>
            <span>{cv.phone}</span>
            <span>{cv.location}</span>
            <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
            <Link href="/goals" className="text-sky-400">100 Goals</Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
