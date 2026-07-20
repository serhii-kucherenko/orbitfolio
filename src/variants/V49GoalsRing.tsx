"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { goals, type Goal } from "@/data/goals";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

const CAT_COLOR: Record<string, string> = {
  career: "#38bdf8",
  health: "#4ade80",
  learning: "#c084fc",
  creative: "#f472b6",
  life: "#fbbf24",
  finance: "#2dd4bf",
  community: "#fb923c",
};

function catColor(g: Goal) {
  const key = (g.category || "life").toLowerCase();
  for (const k of Object.keys(CAT_COLOR)) {
    if (key.includes(k)) return CAT_COLOR[k];
  }
  return "#fbbf24";
}

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [hover, setHover] = useState<Goal | null>(null);
  const ring = goals.slice(0, 48);
  const stats = useMemo(() => {
    const done = goals.filter((g) => g.status === "done").length;
    const active = goals.filter((g) => g.status === "active").length;
    return { total: goals.length, done, active };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c0a09] text-amber-50">
      <Starfield density={160} color="#fbbf24" speed={0.08} />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-6 pt-28">
        <div className="mb-8 flex flex-wrap justify-center gap-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-amber-200/60">
          <span>{stats.total} goals</span>
          <span>·</span>
          <span>{stats.done} done</span>
          <span>·</span>
          <span>{stats.active} active</span>
        </div>

        <div className="relative flex h-[min(78vw,460px)] w-[min(78vw,460px)] items-center justify-center">
          <motion.div
            className="absolute inset-[12%] rounded-full border border-amber-400/20"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />
          {ring.map((g, i) => {
            const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2;
            const r = 46;
            const color = catColor(g);
            const active = hover?.id === g.id;
            return (
              <button
                key={g.id}
                type="button"
                title={g.title}
                onMouseEnter={() => setHover(g)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(g)}
                onBlur={() => setHover(null)}
                className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-amber-300"
                style={{
                  left: `${50 + Math.cos(a) * r}%`,
                  top: `${50 + Math.sin(a) * r}%`,
                  background: color,
                  boxShadow: active ? `0 0 16px ${color}` : `0 0 6px ${color}55`,
                  transform: `translate(-50%, -50%) scale(${active ? 1.6 : 1})`,
                }}
                aria-label={g.title}
              />
            );
          })}
          <motion.div
            initial={reduce ? false : { scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="z-10 max-w-[220px] text-center"
          >
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
            <p className="mt-3 text-sm text-amber-100/70">{cv.title}</p>
            <Link href="/goals" className="mt-6 inline-block text-sm text-amber-300 underline underline-offset-4">
              Explore all 100 goals →
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 min-h-[3.5rem] max-w-md text-center">
          {hover ? (
            <p className="text-sm text-amber-100/90">
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-amber-400/70">
                {hover.category}
              </span>
              <br />
              {hover.title}
            </p>
          ) : (
            <p className="text-sm text-white/45">Hover a star on the ring</p>
          )}
        </div>

        <p className="mt-6 max-w-2xl text-center text-sm text-white/55">{cv.summary}</p>
      </div>

      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow />
      </section>
    </main>
  );
}
