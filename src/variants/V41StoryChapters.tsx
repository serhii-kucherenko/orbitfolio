"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ProjectLinks } from "@/components/CvBlocks";

const CHAPTERS = [
  {
    num: "I",
    title: "Origin Signal",
    subtitle: cv.name,
    body: cv.summary,
    accent: "#0ea5e9",
  },
  {
    num: "II",
    title: "Healthcare Frontier",
    subtitle: cv.experience[0].company,
    body: cv.experience[0].bullets.join(" "),
    accent: "#14b8a6",
  },
  {
    num: "III",
    title: "Global Velocity",
    subtitle: `${cv.experience[1].company} · ${cv.experience[2].company}`,
    body: `${cv.experience[1].bullets[0]} ${cv.experience[2].bullets[0]}`,
    accent: "#f59e0b",
  },
  {
    num: "IV",
    title: "Founding Years",
    subtitle: cv.experience[3].company,
    body: cv.experience[3].bullets.join(" "),
    accent: "#ef4444",
  },
  {
    num: "V",
    title: "Open Orbit",
    subtitle: "Projects & Contact",
    body: cv.projects.map((p) => p.name).join(" · "),
    accent: "#6366f1",
  },
];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main ref={containerRef} className="relative bg-[#050810] text-white">
      <div className="fixed inset-0 z-0">
        <Starfield density={150} color="#64748b" speed={0.03} />
      </div>

      <div className="fixed left-0 right-0 top-0 z-30 h-1 bg-white/10">
        {!reduce && (
          <motion.div className="h-full bg-sky-400" style={{ width: progressWidth }} />
        )}
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-sky-400">story chapters · v41</p>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-7xl">{cv.name}</h1>
        <p className="mt-4 text-xl text-white/70">{cv.title}</p>
        <p className="mt-8 text-sm text-white/40">Scroll to read five chapters</p>
      </section>

      {CHAPTERS.map((ch, i) => (
        <section
          key={ch.num}
          className="relative z-10 flex min-h-screen items-center px-6 py-24"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[120px_1fr]"
          >
            <div className="font-[family-name:var(--font-serif)] text-6xl opacity-30" style={{ color: ch.accent }}>
              {ch.num}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ color: ch.accent }}>
                Chapter {ch.num}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{ch.title}</h2>
              <p className="mt-3 text-lg text-white/60">{ch.subtitle}</p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75">{ch.body}</p>
              {i === CHAPTERS.length - 1 && (
                <div className="mt-10 space-y-4">
                  <ProjectLinks tone="dark" />
                  <div className="flex gap-4">
                    <a href={`mailto:${cv.email}`} className="rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-black">
                      Email
                    </a>
                    <Link href="/goals" className="rounded-full border border-white/30 px-5 py-2 text-sm">
                      100 Goals
                    </Link>
                  </div>
                  <ContactRow />
                </div>
              )}
            </div>
          </motion.div>
        </section>
      ))}
    </main>
  );
}
