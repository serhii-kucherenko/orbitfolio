"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";

type Particle = { x: number; y: number; tx: number; ty: number; vx: number; vy: number };

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formed, setFormed] = useState(reduce);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const text = cv.name.split(" ")[0].toUpperCase();
    const targets: { x: number; y: number }[] = [];

    const buildTargets = () => {
      targets.length = 0;
      const off = document.createElement("canvas");
      off.width = w;
      off.height = Math.min(h * 0.35, 180);
      const octx = off.getContext("2d")!;
      octx.fillStyle = "#fff";
      octx.font = `900 ${off.height * 0.7}px system-ui`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText(text, off.width / 2, off.height / 2);
      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const step = 4;
      for (let y = 0; y < off.height; y += step) {
        for (let x = 0; x < off.width; x += step) {
          if (data[(y * off.width + x) * 4 + 3] > 128) {
            targets.push({ x: x + (w - off.width) / 2, y: y + h * 0.12 });
          }
        }
      }
    };

    const particles: Particle[] = Array.from({ length: Math.min(targets.length || 400, 400) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      tx: 0,
      ty: 0,
      vx: 0,
      vy: 0,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildTargets();
      particles.length = 0;
      const count = Math.min(targets.length, 500);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          tx: targets[i]?.x ?? w / 2,
          ty: targets[i]?.y ?? h / 2,
          vx: 0,
          vy: 0,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(2,6,23,0.25)";
      ctx.fillRect(0, 0, w, h);
      let settled = 0;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const t = targets[i];
        if (t) {
          p.tx = t.x;
          p.ty = t.y;
        }
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        p.vx += dx * 0.02;
        p.vy += dy * 0.02;
        p.vx *= 0.85;
        p.vy *= 0.85;
        p.x += p.vx;
        p.y += p.vy;
        if (Math.hypot(dx, dy) < 2) settled += 1;
        ctx.fillStyle = "#38bdf8";
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (settled > particles.length * 0.85) setFormed(true);
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
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-[45vh] w-full" aria-hidden />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: formed || reduce ? 1 : 0.3 }}
        className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-[48vh]"
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-sky-400">Particle CV · V22</p>
        <h1 className="sr-only">{cv.name}</h1>
        <p className="mt-2 text-lg text-sky-200">{cv.title}</p>
        <p className="mt-4 text-sm leading-relaxed text-white/65">{cv.summary}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {cv.highlights.map((h) => (
            <span key={h.label} className="text-xs text-sky-400">
              {h.value} {h.label}
            </span>
          ))}
        </div>

        <section className="mt-12 space-y-10">
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
            <div className="mt-3 space-y-3">
              {Object.entries(cv.skills).map(([k, items]) => (
                <p key={k} className="text-sm">
                  <span className="text-sky-400">{k}: </span>
                  {items.join(", ")}
                </p>
              ))}
            </div>
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
      </motion.div>
    </main>
  );
}
