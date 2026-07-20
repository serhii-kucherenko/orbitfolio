"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f172a] text-white">
      <Starfield density={100} color="#22d3ee" speed={reduce ? 0 : 0.06} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-8">
        <header className="mb-10 col-span-full">
          <p className="text-[10px] uppercase tracking-[0.45em] text-cyan-400">Signal Mosaic · V20</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
          <p className="mt-2 text-cyan-200/80">{cv.title}</p>
        </header>

        <div
          className="grid auto-rows-min gap-3 sm:gap-4"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
          }}
        >
          <MosaicCell span="col-span-6 sm:col-span-4 row-span-2" reduce={reduce} delay={0}>
            <p className="text-sm leading-relaxed text-white/75">{cv.summary}</p>
          </MosaicCell>

          {cv.highlights.map((h, i) => (
            <MosaicCell key={h.label} span={["col-span-3 sm:col-span-1", "col-span-3 sm:col-span-2", "col-span-3 sm:col-span-1", "col-span-3 sm:col-span-2"][i] ?? "col-span-3 sm:col-span-1"} reduce={reduce} delay={0.05 + i * 0.05}>
              <p className="font-[family-name:var(--font-display)] text-2xl text-cyan-300">{h.value}</p>
              <p className="text-[9px] uppercase tracking-wider text-white/40">{h.label}</p>
            </MosaicCell>
          ))}

          <MosaicCell span="col-span-6 sm:col-span-3" reduce={reduce} delay={0.2} accent>
            <h2 className="text-xs uppercase tracking-widest text-cyan-400">Experience</h2>
            <ol className="mt-4 space-y-6">
              {cv.experience.slice(0, 2).map((job) => (
                <li key={job.company}>
                  <p className="text-[10px] text-white/40">{job.period}</p>
                  <p className="font-medium">{job.role}</p>
                  <p className="text-xs text-cyan-200/60">{job.company}</p>
                  <ul className="mt-2 space-y-1 text-xs text-white/60">
                    {job.bullets.slice(0, 2).map((b) => (
                      <li key={b.slice(0, 20)}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </MosaicCell>

          <MosaicCell span="col-span-6 sm:col-span-3 row-span-2" reduce={reduce} delay={0.25}>
            <h2 className="text-xs uppercase tracking-widest text-cyan-400">Experience (cont.)</h2>
            <ol className="mt-4 space-y-6">
              {cv.experience.slice(2).map((job) => (
                <li key={job.company}>
                  <p className="text-[10px] text-white/40">{job.period}</p>
                  <p className="font-medium">{job.role}</p>
                  <p className="text-xs text-cyan-200/60">{job.company}</p>
                  <ul className="mt-2 space-y-1 text-xs text-white/60">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 20)}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </MosaicCell>

          {Object.entries(cv.skills).map(([k, items], i) => (
            <MosaicCell
              key={k}
              span={["col-span-6 sm:col-span-2", "col-span-6 sm:col-span-2", "col-span-6 sm:col-span-2", "col-span-6 sm:col-span-3", "col-span-6 sm:col-span-3"][i] ?? "col-span-6 sm:col-span-2"}
              reduce={reduce}
              delay={0.3 + i * 0.04}
            >
              <p className="text-[10px] uppercase tracking-widest text-cyan-500">{k}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/65">{items.join(" · ")}</p>
            </MosaicCell>
          ))}

          <MosaicCell span="col-span-6 sm:col-span-4" reduce={reduce} delay={0.5}>
            <h2 className="text-xs uppercase tracking-widest text-cyan-400">Projects</h2>
            <ul className="mt-3 space-y-2">
              {cv.projects.map((p) => (
                <li key={p.name} className="text-sm">
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                    {p.name}
                  </a>
                  <span className="text-white/50"> — {p.blurb}</span>
                </li>
              ))}
            </ul>
          </MosaicCell>

          <MosaicCell span="col-span-6 sm:col-span-2" reduce={reduce} delay={0.55} accent>
            <p className="text-xs text-white/50">{cv.education.degree}</p>
            <p className="mt-1 text-sm">{cv.education.school}</p>
            <div className="mt-4 space-y-1 text-xs">
              <a href={`mailto:${cv.email}`} className="block text-cyan-300">{cv.email}</a>
              <span>{cv.phone}</span>
              <span className="block">{cv.location}</span>
              <a href={cv.linkedin} target="_blank" rel="noreferrer" className="block">LinkedIn</a>
              <a href={cv.github} target="_blank" rel="noreferrer" className="block">GitHub</a>
              <Link href="/goals" className="block text-cyan-400">100 Goals</Link>
            </div>
          </MosaicCell>
        </div>
      </div>
    </main>
  );
}

function MosaicCell({
  children,
  span,
  reduce,
  delay,
  accent,
}: {
  children: React.ReactNode;
  span: string;
  reduce: boolean;
  delay: number;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.5 }}
      className={`${span} rounded-xl border p-4 sm:p-5 ${
        accent ? "border-cyan-500/40 bg-cyan-950/30" : "border-white/10 bg-white/5"
      }`}
    >
      {children}
    </motion.div>
  );
}
