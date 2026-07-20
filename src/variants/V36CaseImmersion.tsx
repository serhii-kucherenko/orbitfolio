"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow } from "@/components/CvBlocks";

type Slide = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  body: string[];
  accent: string;
};

const SLIDES: Slide[] = [
  {
    id: "intro",
    tag: "Case 00",
    title: cv.name,
    subtitle: cv.title,
    body: [cv.summary],
    accent: "#38bdf8",
  },
  ...cv.experience.map((job, i) => ({
    id: job.company,
    tag: `Case ${String(i + 1).padStart(2, "0")}`,
    title: job.company,
    subtitle: `${job.role} · ${job.period}`,
    body: [job.place, ...job.bullets],
    accent: ["#22d3ee", "#34d399", "#fbbf24", "#fb7185"][i % 4],
  })),
  ...cv.projects.slice(0, 3).map((p, i) => ({
    id: p.name,
    tag: `Signal ${i + 1}`,
    title: p.name,
    subtitle: "Open source",
    body: [p.blurb],
    accent: "#a3e635",
  })),
];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [idx, setIdx] = useState(0);
  const slide = SLIDES[idx];

  const next = useCallback(() => setIdx((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
      <Starfield density={200} color="#ffffff" speed={0.08} />
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col justify-end p-8 sm:p-16"
          style={{
            background: `radial-gradient(ellipse 100% 80% at 50% 100%, ${slide.accent}18, transparent 70%)`,
          }}
        >
          <p className="text-xs uppercase tracking-[0.4em]" style={{ color: slide.accent }}>
            {slide.tag} · case immersion
          </p>
          <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-none sm:text-7xl lg:text-8xl">
            {slide.title}
          </h1>
          <p className="mt-4 text-xl text-white/70">{slide.subtitle}</p>
          <ul className="mt-8 max-w-2xl space-y-3 text-sm leading-relaxed text-white/80">
            {slide.body.map((line) => (
              <li key={line.slice(0, 50)}>{line}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-between">
        <div className="flex gap-2">
          <button type="button" onClick={prev} className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wider hover:bg-white/10">
            Prev
          </button>
          <button type="button" onClick={next} className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wider hover:bg-white/10">
            Next
          </button>
        </div>
        <span className="font-[family-name:var(--font-mono)] text-xs text-white/40">
          {idx + 1} / {SLIDES.length}
        </span>
        <div className="hidden gap-3 sm:flex">
          <a href={`mailto:${cv.email}`} className="text-xs underline-offset-4 hover:underline">
            {cv.email}
          </a>
          <Link href="/goals" className="text-xs underline-offset-4 hover:underline">
            Goals
          </Link>
          <ContactRow className="text-xs" />
        </div>
      </div>
    </main>
  );
}
