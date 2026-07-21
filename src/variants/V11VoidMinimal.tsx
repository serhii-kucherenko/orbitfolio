"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cv } from "@/data/cv";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setCursor({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <main className="relative min-h-[300vh] bg-[#FAFAF8] text-[#111111]">
      {!reduce && (
        <div
          className="pointer-events-none fixed z-30 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
          style={{ left: `${cursor.x}%`, top: `${cursor.y}%` }}
          aria-hidden
        />
      )}

      <div className="flex min-h-screen flex-col justify-center px-8 sm:px-16">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.6em]"
        >
          Paper Void
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="mt-12 max-w-xl font-[family-name:var(--font-serif)] text-5xl font-normal leading-[1.1] tracking-tight sm:text-7xl"
        >
          {cv.name}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: 0.6, duration: 1.4 }}
          className="mt-10 text-sm tracking-wide"
        >
          {cv.title}
        </motion.p>
      </div>

      <div className="mx-auto max-w-xl space-y-32 px-8 pb-40 pt-[40vh] sm:px-16">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 0.55 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-sm leading-[2] tracking-wide"
        >
          {cv.summary}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap gap-8 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] opacity-40"
        >
          {cv.highlights.map((h) => (
            <span key={h.label}>
              {h.value} {h.label}
            </span>
          ))}
        </motion.div>

        <motion.section
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] opacity-30">
            Experience
          </p>
          <ol className="mt-12 space-y-20">
            {cv.experience.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] opacity-35">
                  {job.period}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-serif)] text-2xl">{job.role}</h3>
                <p className="mt-1 text-sm opacity-50">
                  {job.company} · {job.place}
                </p>
                <ul className="mt-6 space-y-4 text-sm leading-[1.9] opacity-60">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] opacity-30">
            Skills
          </p>
          <div className="mt-12 space-y-10">
            {Object.entries(cv.skills).map(([group, items]) => (
              <div key={group}>
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] opacity-35">
                  {group}
                </p>
                <p className="mt-3 text-sm leading-[1.9] opacity-55">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] opacity-30">
            Projects
          </p>
          <ul className="mt-12 space-y-10">
            {cv.projects.map((p) => (
              <li key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-[family-name:var(--font-serif)] text-xl opacity-70 hover:opacity-100"
                >
                  {p.name}
                </a>
                <p className="mt-2 text-sm leading-[1.9] opacity-50">{p.blurb}</p>
              </li>
            ))}
            <li>
              <Link href="/goals" className="font-[family-name:var(--font-serif)] text-xl opacity-70 hover:opacity-100">
                100 Goals
              </Link>
              <p className="mt-2 text-sm leading-[1.9] opacity-50">
                Living list of ambitions, craft, and impact.
              </p>
            </li>
          </ul>
        </motion.section>

        <motion.footer
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-2 text-sm opacity-45"
        >
          <p className="font-[family-name:var(--font-serif)] text-lg opacity-70">{cv.education.degree}</p>
          <p>{cv.education.school}</p>
          <div className="mt-8 space-y-1">
            <a href={`mailto:${cv.email}`} className="block hover:opacity-100">
              {cv.email}
            </a>
            <p>{cv.phone}</p>
            <p>{cv.location}</p>
          </div>
          <div className="mt-4 flex gap-6">
            <a href={cv.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-100">
              LinkedIn
            </a>
            <a href={cv.github} target="_blank" rel="noreferrer" className="hover:opacity-100">
              GitHub
            </a>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
