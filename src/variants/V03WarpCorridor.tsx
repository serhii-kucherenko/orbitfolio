"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const PANELS = [
  { z: 0, title: "Identity", content: () => (
    <>
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-white">{cv.name}</h1>
      <p className="mt-3 text-xl text-cyan-200">{cv.title}</p>
      <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/65">{cv.summary}</p>
    </>
  )},
  { z: 1, title: "Highlights", content: () => (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {cv.highlights.map((h) => (
        <div key={h.label} className="rounded-xl border border-cyan-400/30 bg-cyan-950/30 p-4 text-center">
          <p className="text-2xl font-bold text-cyan-300">{h.value}</p>
          <p className="text-[10px] uppercase tracking-wider text-white/50">{h.label}</p>
        </div>
      ))}
    </div>
  )},
  { z: 2, title: "Experience", content: () => (
    <ol className="space-y-8">
      {cv.experience.map((job) => (
        <li key={job.company}>
          <p className="text-xs text-cyan-400">{job.period}</p>
          <h3 className="text-lg font-semibold">{job.role} · {job.company}</h3>
          <p className="text-xs text-white/50">{job.place}</p>
          <ul className="mt-2 space-y-1 text-sm text-white/75">
            {job.bullets.map((b) => (
              <li key={b.slice(0, 30)}>▸ {b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )},
  { z: 3, title: "Skills", content: () => (
    <div className="space-y-4">
      {Object.entries(cv.skills).map(([k, items]) => (
        <div key={k}>
          <p className="text-[10px] uppercase tracking-widest text-cyan-400">{k}</p>
          <p className="mt-1 text-sm text-white/70">{items.join(" · ")}</p>
        </div>
      ))}
    </div>
  )},
  { z: 4, title: "Projects & Contact", content: () => (
    <>
      <ul className="space-y-3">
        {cv.projects.map((p) => (
          <li key={p.name}>
            <a href={p.url} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{p.name}</a>
            <p className="text-xs text-white/55">{p.blurb}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-white/60">{cv.education.degree} — {cv.education.school}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        <a href={`mailto:${cv.email}`}>{cv.email}</a>
        <span>{cv.phone}</span>
        <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
        <Link href="/goals" className="text-cyan-400">100 Goals</Link>
      </div>
    </>
  )},
];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const tunnelScale = useTransform(scrollYProgress, [0, 1], [1, 2.2]);
  const streakOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.2]);

  return (
    <main ref={ref} className="relative bg-[#010409] text-white" style={{ height: `${PANELS.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <Starfield density={200} color="#67e8f9" speed={reduce ? 0 : 0.35} />
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ opacity: streakOpacity, scale: tunnelScale }}
          >
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-[200vh] w-px origin-top -translate-x-1/2"
                style={{
                  transform: `rotate(${(360 / 24) * i}deg)`,
                  background: "linear-gradient(to bottom, transparent, rgba(34,211,238,0.4), transparent)",
                }}
              />
            ))}
          </motion.div>
        )}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 30% 50% at 50% 50%, transparent 0%, #010409 75%)",
            perspective: "800px",
          }}
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
          <p className="absolute left-6 top-8 text-[10px] uppercase tracking-[0.4em] text-cyan-500">Warp Corridor · V03</p>
          {PANELS.map((panel, i) => {
            const start = i / PANELS.length;
            const end = (i + 1) / PANELS.length;
            return (
              <WarpPanel key={panel.title} index={i} start={start} end={end} progress={scrollYProgress} reduce={!!reduce}>
                <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-cyan-500/70">{panel.title}</p>
                {panel.content()}
              </WarpPanel>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function WarpPanel({
  children,
  index,
  start,
  end,
  progress,
  reduce,
}: {
  children: React.ReactNode;
  index: number;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  const opacity = useTransform(progress, [start, start + 0.08, end - 0.08, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, end], [0.6 + index * 0.05, 1.1]);
  const z = useTransform(progress, [start, end], [-200 + index * 80, 0]);

  if (reduce) {
    return (
      <div className="mb-8 max-w-2xl rounded-2xl border border-cyan-500/20 bg-black/50 p-8 backdrop-blur">{children}</div>
    );
  }

  return (
    <motion.div
      style={{ opacity, scale, translateZ: z, position: "absolute" }}
      className="max-h-[70vh] max-w-2xl overflow-y-auto rounded-2xl border border-cyan-400/25 bg-[#041018]/85 p-8 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur"
    >
      {children}
    </motion.div>
  );
}
