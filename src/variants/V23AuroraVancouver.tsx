"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cv } from "@/data/cv";

const SKYLINE = [12, 18, 28, 22, 35, 42, 38, 55, 48, 62, 58, 45, 52, 68, 72, 65, 58, 42, 38, 30, 25, 20];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const auroraRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = auroraRef.current;
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 8) {
          const y =
            h * 0.35 +
            Math.sin(x * 0.004 + t + layer) * 40 +
            Math.sin(x * 0.008 - t * 1.5 + layer * 2) * 25;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        const g = ctx.createLinearGradient(0, 0, w, h);
        g.addColorStop(0, `rgba(${34 + layer * 20}, ${197 + layer * 10}, ${94 + layer * 30}, 0.15)`);
        g.addColorStop(1, `rgba(${6}, ${78 + layer * 20}, ${59 + layer * 10}, 0.05)`);
        ctx.fillStyle = g;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#022c22] text-[#ecfdf5]">
      <canvas ref={auroraRef} className="pointer-events-none absolute inset-x-0 top-0 h-[50vh] w-full" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-32 items-end justify-center gap-1 px-4 opacity-40">
        {SKYLINE.map((ht, i) => (
          <div key={i} className="w-full max-w-[28px] bg-emerald-900/80" style={{ height: `${ht}%` }} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-[42vh]">
        <p className="text-[10px] uppercase tracking-[0.45em] text-emerald-400">Aurora Vancouver · V23</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-emerald-200/80">{cv.title}</p>
        <p className="mt-1 text-sm text-emerald-300/60">{cv.location}</p>
        <p className="mt-6 text-sm leading-relaxed text-emerald-100/70">{cv.summary}</p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-lg border border-emerald-500/20 bg-emerald-950/40 p-3 text-center">
              <p className="text-xl font-bold text-emerald-300">{h.value}</p>
              <p className="text-[9px] uppercase text-emerald-500/70">{h.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-14 space-y-12">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-emerald-400">Experience</h2>
            <ol className="mt-4 space-y-8">
              {cv.experience.map((job) => (
                <li key={job.company}>
                  <p className="text-[10px] text-emerald-600">{job.period}</p>
                  <h3 className="font-semibold">{job.role} · {job.company}</h3>
                  <p className="text-xs text-emerald-200/50">{job.place}</p>
                  <ul className="mt-2 space-y-1 text-sm text-emerald-100/65">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 24)}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-emerald-400">Skills</h2>
            {Object.entries(cv.skills).map(([k, items]) => (
              <p key={k} className="mt-3 text-sm">
                <span className="text-emerald-400">{k}: </span>
                {items.join(", ")}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-emerald-400">Projects</h2>
            <ul className="mt-3 space-y-3">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-emerald-300 hover:underline">{p.name}</a>
                  <p className="text-xs text-emerald-100/50">{p.blurb}</p>
                </li>
              ))}
            </ul>
          </div>

          <footer className="border-t border-emerald-800/40 pt-6 text-sm">
            <p>{cv.education.degree} — {cv.education.school}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
              <span>{cv.phone}</span>
              <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
              <Link href="/goals" className="text-emerald-400">100 Goals</Link>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
