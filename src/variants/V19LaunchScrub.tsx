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
  const rocketY = useTransform(scrollYProgress, [0, 1], ["100%", "-20%"]);
  const flameScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.8]);
  const stageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 1, 1, 0.3]);
  const heroOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  return (
    <main ref={ref} className="relative bg-[#0a0a0a]" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <Starfield density={180} color="#fb923c" speed={reduce ? 0 : 0.2} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-orange-950/40 to-transparent" />

        <motion.div style={{ opacity: stageOpacity }} className="relative z-10 flex h-full flex-col px-4 sm:px-8">
          <div className="flex items-center justify-between pt-8">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-orange-400">
              Launch Scrub · V19
            </p>
            <span className="font-[family-name:var(--font-mono)] text-xs text-orange-300">Scroll to launch</span>
          </div>

          <div className="relative mx-auto mt-8 h-2 w-full max-w-md overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full origin-left bg-gradient-to-r from-orange-600 to-yellow-400" style={{ scaleX: scrollYProgress }} />
          </div>

          <div className="relative flex-1">
            <motion.div
              style={{ y: reduce ? "20%" : rocketY }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center">
                <div className="h-16 w-10 rounded-t-full bg-gradient-to-b from-gray-200 to-gray-400" />
                <div className="h-24 w-14 bg-gradient-to-b from-orange-500 to-red-700" style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0 100%)" }} />
                {!reduce && (
                  <motion.div
                    style={{ scaleY: flameScale }}
                    className="h-12 w-6 origin-top bg-gradient-to-b from-yellow-400 via-orange-500 to-transparent opacity-80"
                  />
                )}
              </div>
            </motion.div>
          </div>

          <motion.div style={{ opacity: heroOpacity }} className="mx-auto max-w-2xl pb-16 text-center">
            <h1 className="font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl">{cv.name}</h1>
            <p className="mt-2 text-orange-200">{cv.title}</p>
          </motion.div>
        </motion.div>
      </div>

      <section className="relative z-20 mx-auto max-w-3xl space-y-16 px-6 pb-32 -mt-[200vh]">
        <Block title="Mission profile">
          <p className="text-sm leading-relaxed text-white/70">{cv.summary}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {cv.highlights.map((h) => (
              <span key={h.label} className="rounded border border-orange-500/30 px-2 py-1 text-xs text-orange-300">
                {h.value} {h.label}
              </span>
            ))}
          </div>
        </Block>

        <Block title="Flight log">
          <ol className="space-y-8">
            {cv.experience.map((job) => (
              <li key={job.company}>
                <p className="text-xs text-orange-500">{job.period}</p>
                <h3 className="font-semibold text-white">{job.role} · {job.company}</h3>
                <p className="text-xs text-white/50">{job.place}</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 24)}>▸ {b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Payload — skills">
          {Object.entries(cv.skills).map(([k, items]) => (
            <p key={k} className="mb-3 text-sm">
              <span className="text-orange-400">{k}: </span>
              {items.join(", ")}
            </p>
          ))}
        </Block>

        <Block title="Orbital projects">
          <ul className="space-y-3">
            {cv.projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noreferrer" className="text-orange-300 hover:underline">{p.name}</a>
                <p className="text-xs text-white/50">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Ground control">
          <p className="text-sm">{cv.education.degree} — {cv.education.school}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a href={`mailto:${cv.email}`}>{cv.email}</a>
            <span>{cv.phone}</span>
            <span>{cv.location}</span>
            <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
            <Link href="/goals" className="text-orange-400">100 Goals</Link>
          </div>
        </Block>
      </section>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-orange-500/20 bg-black/60 p-6 backdrop-blur">
      <h2 className="mb-4 text-xs uppercase tracking-widest text-orange-500">{title}</h2>
      {children}
    </div>
  );
}
