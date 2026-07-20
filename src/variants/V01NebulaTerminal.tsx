"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

type Line = { text: string; delay: number; className?: string };

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [visible, setVisible] = useState(reduce ? Infinity : 0);

  const lines = useMemo<Line[]>(() => {
    const out: Line[] = [
      { text: "> boot orbitfolio::shell --mode=nebula", delay: 0 },
      { text: "[OK] starlink handshake complete", delay: 400 },
      { text: "> whoami", delay: 700 },
      { text: cv.name, delay: 950, className: "text-white text-lg" },
      { text: cv.title, delay: 1200, className: "text-emerald-300" },
      { text: cv.location, delay: 1450 },
      { text: "> cat summary.txt", delay: 1750 },
      { text: cv.summary, delay: 2000, className: "max-w-2xl leading-relaxed text-emerald-200/80" },
      { text: "> ls highlights/", delay: 2600 },
      ...cv.highlights.map((h, i) => ({
        text: `  ${h.label.padEnd(18)} ${h.value}`,
        delay: 2800 + i * 180,
        className: "text-cyan-300",
      })),
      { text: "> tail -f experience.log", delay: 3600 },
      ...cv.experience.flatMap((job, ji) => [
        { text: `[${job.period}] ${job.role} @ ${job.company}`, delay: 3800 + ji * 500, className: "text-white" },
        { text: `  ${job.place}`, delay: 4000 + ji * 500 },
        ...job.bullets.map((b, bi) => ({
          text: `  • ${b}`,
          delay: 4200 + ji * 500 + bi * 120,
          className: "pl-2 text-emerald-200/70 max-w-3xl",
        })),
      ]),
      { text: "> grep -r skills/", delay: 7200 },
      ...Object.entries(cv.skills).flatMap(([group, items], gi) => [
        { text: `[${group}]`, delay: 7400 + gi * 300, className: "text-cyan-400 uppercase" },
        { text: `  ${items.join(" · ")}`, delay: 7550 + gi * 300, className: "text-emerald-200/60" },
      ]),
      { text: "> open projects/", delay: 9200 },
      ...cv.projects.map((p, i) => ({
        text: `  ${p.name}: ${p.blurb}`,
        delay: 9400 + i * 250,
        className: "text-emerald-200/70 max-w-3xl",
      })),
      { text: `> edu --show "${cv.education.degree}"`, delay: 10600 },
      { text: `  ${cv.education.school}`, delay: 10800 },
      { text: "> ping contact", delay: 11000 },
      { text: `  ${cv.email} · ${cv.phone}`, delay: 11200 },
      { text: "  linkedin · github — channels open", delay: 11400 },
      { text: "> _", delay: 11600, className: "animate-pulse" },
    ];
    return out;
  }, []);

  useEffect(() => {
    if (reduce) return;
    let cancelled = false;
    let idx = 0;
    const tick = () => {
      if (cancelled || idx >= lines.length) return;
      const next = lines[idx];
      const wait = idx === 0 ? next.delay : Math.max(80, next.delay - lines[idx - 1].delay);
      idx += 1;
      setTimeout(() => {
        if (!cancelled) {
          setVisible(idx);
          tick();
        }
      }, wait);
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, [lines, reduce]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020403] text-[#7CFFB2]">
      <Starfield density={90} color="#7CFFB2" speed={reduce ? 0 : 0.06} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(124,255,178,0.4) 2px, rgba(124,255,178,0.4) 3px)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-20 sm:px-6">
        <div className="rounded border border-[#7CFFB2]/25 bg-black/60 p-4 shadow-[0_0_60px_rgba(124,255,178,0.06)] sm:p-6">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#7CFFB2]/50">Nebula Terminal · V01</p>
          <div className="space-y-1 font-[family-name:var(--font-mono)] text-xs sm:text-sm">
            {lines.slice(0, visible).map((line, i) => (
              <motion.p
                key={`${i}-${line.text.slice(0, 24)}`}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className={line.className ?? "text-[#7CFFB2]/90"}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-xs font-[family-name:var(--font-mono)]">
          <a href={`mailto:${cv.email}`} className="text-emerald-300 hover:underline">
            {cv.email}
          </a>
          <a href={cv.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href={cv.github} target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
          <Link href="/goals" className="text-cyan-300 hover:underline">
            100 Goals →
          </Link>
        </div>
      </div>
    </main>
  );
}
