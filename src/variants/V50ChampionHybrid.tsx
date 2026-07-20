"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useMemo, useRef } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ProjectLinks } from "@/components/CvBlocks";

const SKILL_STARS = Object.entries(cv.skills).flatMap(([group, items], gi) =>
  items.slice(0, 3).map((skill, si) => ({
    skill,
    group,
    x: 15 + ((gi * 3 + si) * 17) % 70,
    y: 20 + ((gi * 5 + si * 7) * 11) % 60,
    size: 1 + (si % 3) * 0.4,
  })),
);

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const warpScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const constellationLines = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i < SKILL_STARS.length - 1; i++) {
      if (i % 4 === 0) {
        const a = SKILL_STARS[i];
        const b = SKILL_STARS[i + 1];
        lines.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
      }
    }
    return lines;
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Nebula + warp layers */}
      <div className="nebula-glow pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(14,165,233,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 85% 60%, rgba(45,212,191,0.15), transparent 50%)",
        }}
      />
      <Starfield density={220} color="#bae6fd" speed={reduce ? 0 : 0.2} />

      {/* Warp streak overlay */}
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            scale: warpScale,
            background:
              "repeating-conic-gradient(from 0deg at 50% 40%, transparent 0deg 7deg, rgba(56,189,248,0.06) 7deg 8deg)",
            transformOrigin: "center 30%",
          }}
        />
      )}

      {/* ── HERO ── */}
      <motion.section
        ref={heroRef}
        style={{ y: reduce ? 0 : heroY, opacity: reduce ? 1 : heroOpacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-24 text-center"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.5em] text-teal-300"
        >
          Champion Hybrid · Orbitfolio V50
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          style={{
            background: "linear-gradient(135deg, #f0f9ff 0%, #7dd3fc 40%, #2dd4bf 70%, #e0f2fe 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {cv.name}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-5 text-xl text-sky-100/90 sm:text-2xl"
        >
          {cv.title}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base"
        >
          {cv.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${cv.email}`}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-sky-400 to-teal-400 px-8 py-3.5 text-sm font-bold text-[#020617] shadow-[0_0_40px_rgba(56,189,248,0.4)] transition hover:shadow-[0_0_60px_rgba(45,212,191,0.5)]"
          >
            Email Serhii
          </a>
          <a
            href={cv.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-sky-400/50 hover:bg-sky-400/10"
          >
            LinkedIn
          </a>
          <Link
            href="/goals"
            className="rounded-full border border-teal-400/40 bg-teal-400/10 px-8 py-3.5 text-sm font-semibold text-teal-200 transition hover:bg-teal-400/20"
          >
            100 Goals →
          </Link>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-white/40"
        >
          <span>{cv.location}</span>
          <span>·</span>
          <span>{cv.phone}</span>
        </motion.div>
      </motion.section>

      {/* ── MISSION BRIEF HIGHLIGHTS ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-teal-400/80">
              Mission Brief
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold">Operational Metrics</h2>
          </div>
          <p className="hidden text-xs text-white/30 sm:block">CLASSIFIED // PUBLIC</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-teal-400/20 bg-gradient-to-br from-white/[0.06] to-transparent p-5 backdrop-blur-sm"
            >
              <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-teal-400/10 blur-2xl" />
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-teal-300 sm:text-4xl">
                {h.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/45">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONSTELLATION SKILLS TEASER ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-sky-400/80">
          Constellation Skills
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold">Instrument Payload</h2>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-sky-400/15 bg-[#0a1628]/60 p-6 backdrop-blur-md sm:p-10">
          <svg viewBox="0 0 100 80" className="aspect-[5/3] w-full">
            {constellationLines.map((l, i) => (
              <line
                key={i}
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke="rgba(56,189,248,0.25)"
                strokeWidth="0.15"
              />
            ))}
            {SKILL_STARS.map((s, i) => (
              <g key={s.skill}>
                <motion.circle
                  cx={s.x}
                  cy={s.y}
                  r={s.size}
                  fill="#7dd3fc"
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                />
                <text x={s.x} y={s.y - 2.5} textAnchor="middle" fontSize="2.2" fill="rgba(186,230,253,0.7)">
                  {s.skill.length > 14 ? s.skill.slice(0, 12) + "…" : s.skill}
                </text>
              </g>
            ))}
          </svg>

          <div className="mt-6 flex flex-wrap gap-2">
            {Object.keys(cv.skills).map((group) => (
              <span
                key={group}
                className="rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1 text-xs capitalize text-sky-200/80"
              >
                {group}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLASS EXPERIENCE PANEL ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-teal-400/80">
          Operational History
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold">Experience</h2>

        <div className="mt-10 space-y-6">
          {cv.experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/[0.03] to-teal-400/0 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-teal-400/70">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sky-300/80">
                    {job.company} · {job.place}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="relative mt-5 space-y-2.5 text-sm leading-relaxed text-white/75">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 40)} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── PROJECTS + FOOTER CTAs ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md sm:p-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">Selected Signals</h2>
          <div className="mt-6">
            <ProjectLinks tone="dark" />
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-10 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${cv.email}`}
              className="w-full rounded-full bg-gradient-to-r from-sky-400 to-teal-400 px-8 py-3.5 text-center text-sm font-bold text-[#020617] sm:w-auto"
            >
              {cv.email}
            </a>
            <a
              href={cv.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-semibold sm:w-auto"
            >
              LinkedIn Profile
            </a>
            <Link
              href="/goals"
              className="w-full rounded-full border border-teal-400/30 bg-teal-400/10 px-8 py-3.5 text-center text-sm font-semibold text-teal-200 sm:w-auto"
            >
              Explore 100 Goals
            </Link>
          </div>
          <ContactRow className="mt-8 justify-center text-white/50" />
        </div>
      </section>
    </main>
  );
}
