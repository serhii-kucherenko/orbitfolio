"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [2.5, 1.2, 0.85]);
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.85, 1], [0, 1, 1, 0.9]);

  return (
    <main ref={ref} className="relative bg-black text-white" style={{ height: "350vh" }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <Starfield density={300} color="#fef08a" speed={reduce ? 0 : 0.25} className="opacity-30" />

        <motion.div
          style={{ scale: reduce ? 1 : ringScale }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full"
            style={{
              background: "radial-gradient(circle, transparent 42%, rgba(0,0,0,0.95) 43%, rgba(0,0,0,0.98) 55%, transparent 56%)",
              boxShadow: "0 0 120px rgba(250,204,21,0.15), inset 0 0 80px rgba(0,0,0,0.9)",
            }}
          />
          <div className="absolute h-[min(70vw,400px)] w-[min(70vw,400px)] rounded-full border border-yellow-500/20" />
        </motion.div>

        <motion.div
          style={{ opacity: reduce ? 1 : contentOpacity }}
          className="relative z-10 max-h-[85vh] max-w-lg overflow-y-auto rounded-full px-8 py-16 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-yellow-500/80">Event Horizon · V24</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl">{cv.name}</h1>
          <p className="mt-2 text-sm text-yellow-100/70">{cv.title}</p>
          <p className="mt-4 text-xs leading-relaxed text-white/60">{cv.summary}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {cv.highlights.map((h) => (
              <span key={h.label} className="text-[10px] text-yellow-400">
                {h.value}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-6 text-left text-xs">
            {cv.experience.map((job) => (
              <div key={job.company}>
                <p className="text-yellow-600">{job.period}</p>
                <p className="font-medium text-white/90">{job.role}</p>
                <p className="text-white/50">{job.company}</p>
                <ul className="mt-1 space-y-0.5 text-white/55">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 20)}>· {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-2 text-left text-[10px]">
            {Object.entries(cv.skills).map(([k, items]) => (
              <p key={k}>
                <span className="text-yellow-500">{k}: </span>
                {items.slice(0, 5).join(", ")}…
              </p>
            ))}
          </div>

          <ul className="mt-6 space-y-2 text-left text-xs">
            {cv.projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>

          <footer className="mt-8 text-[10px] text-white/50">
            <p>{cv.education.degree}</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
              <a href={cv.linkedin} target="_blank" rel="noreferrer">LI</a>
              <a href={cv.github} target="_blank" rel="noreferrer">GH</a>
              <Link href="/goals" className="text-yellow-400">Goals</Link>
            </div>
          </footer>
        </motion.div>
      </div>
    </main>
  );
}
