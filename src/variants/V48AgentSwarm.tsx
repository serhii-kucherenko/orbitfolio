"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cv } from "@/data/cv";

type Agent = { x: number; y: number; vx: number; vy: number; target: number; hue: number };

const CLUSTERS = [
  { label: "AI", x: 0.25, y: 0.3, skills: cv.skills.ai.slice(0, 4) },
  { label: "Backend", x: 0.75, y: 0.35, skills: cv.skills.backend.slice(0, 4) },
  { label: "Frontend", x: 0.3, y: 0.7, skills: cv.skills.frontend.slice(0, 4) },
  { label: "Infra", x: 0.7, y: 0.72, skills: cv.skills.infra.slice(0, 4) },
];

export function Variant() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const agents: Agent[] = [];
    const count = 120;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      agents.length = 0;
      for (let i = 0; i < count; i++) {
        agents.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          target: i % CLUSTERS.length,
          hue: 180 + (i % CLUSTERS.length) * 40,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(2,6,23,0.2)";
      ctx.fillRect(0, 0, w, h);

      for (const cluster of CLUSTERS) {
        const cx = cluster.x * w;
        const cy = cluster.y * h;
        ctx.strokeStyle = "rgba(56,189,248,0.08)";
        ctx.beginPath();
        ctx.arc(cx, cy, 60, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (const a of agents) {
        const c = CLUSTERS[a.target];
        const tx = c.x * w + (Math.random() - 0.5) * 40;
        const ty = c.y * h + (Math.random() - 0.5) * 40;
        a.vx += (tx - a.x) * 0.008;
        a.vy += (ty - a.y) * 0.008;
        a.vx *= 0.92;
        a.vy *= 0.92;
        a.x += a.vx;
        a.y += a.vy;
        ctx.fillStyle = `hsla(${a.hue}, 80%, 60%, 0.85)`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < agents.length; i++) {
        for (let j = i + 1; j < agents.length; j++) {
          const dx = agents[i].x - agents[j].x;
          const dy = agents[i].y - agents[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 50) {
            ctx.strokeStyle = `rgba(56,189,248,${0.15 * (1 - d / 50)})`;
            ctx.beginPath();
            ctx.moveTo(agents[i].x, agents[i].y);
            ctx.lineTo(agents[j].x, agents[j].y);
            ctx.stroke();
          }
        }
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
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 h-full w-full" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-8">
        <header className="rounded-2xl border border-sky-500/20 bg-[#0f172a]/80 p-6 backdrop-blur">
          <p className="text-[10px] uppercase tracking-[0.4em] text-sky-400">Agent Swarm · V48</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl">{cv.name}</h1>
          <p className="mt-2 text-sky-200">{cv.title}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/65">{cv.summary}</p>
        </header>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CLUSTERS.map((c) => (
            <div key={c.label} className="rounded-xl border border-sky-500/15 bg-black/40 p-3">
              <p className="text-[10px] uppercase tracking-wider text-sky-500">{c.label} cluster</p>
              <p className="mt-2 text-[10px] text-white/50">{c.skills.join(" · ")}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {cv.highlights.map((h) => (
            <span key={h.label} className="text-xs text-sky-400">
              {h.value} {h.label}
            </span>
          ))}
        </div>

        <section className="mt-12 space-y-12 rounded-2xl border border-white/10 bg-[#0f172a]/70 p-6 backdrop-blur">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-sky-500">Experience</h2>
            <ol className="mt-4 space-y-8">
              {cv.experience.map((job) => (
                <li key={job.company}>
                  <p className="text-[10px] text-white/40">{job.period}</p>
                  <h3 className="font-semibold">{job.role} · {job.company}</h3>
                  <p className="text-xs text-white/50">{job.place}</p>
                  <ul className="mt-2 space-y-1 text-sm text-white/70">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 24)}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-sky-500">Skills</h2>
            {Object.entries(cv.skills).map(([k, items]) => (
              <p key={k} className="mt-3 text-sm">
                <span className="text-sky-400">{k}: </span>
                {items.join(", ")}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-sky-500">Projects</h2>
            <ul className="mt-3 space-y-3">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">{p.name}</a>
                  <p className="text-xs text-white/50">{p.blurb}</p>
                </li>
              ))}
            </ul>
          </div>

          <footer className="text-sm text-white/55">
            <p>{cv.education.degree} — {cv.education.school}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
              <span>{cv.phone}</span>
              <span>{cv.location}</span>
              <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
              <Link href="/goals" className="text-sky-400">100 Goals</Link>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
