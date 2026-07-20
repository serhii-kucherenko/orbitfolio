"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

type Node = { x: number; y: number; title: string; body: string; w: number };

export function Variant() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const nodes: Node[] = [
    { x: 0, y: 0, title: cv.name, body: cv.title, w: 320 },
    { x: 380, y: -40, title: "Summary", body: cv.summary, w: 360 },
    ...cv.experience.map((j, i) => ({
      x: (i % 2) * 420 - 80,
      y: 220 + i * 200,
      title: j.company,
      body: `${j.role} — ${j.bullets[0]}`,
      w: 340,
    })),
    { x: -360, y: 120, title: "Skills", body: cv.skills.ai.slice(0, 6).join(", "), w: 300 },
    { x: 500, y: 280, title: "Projects", body: cv.projects.map((p) => p.name).join(" · "), w: 300 },
    { x: -200, y: -220, title: "Contact", body: `${cv.email} · ${cv.location}`, w: 300 },
  ];

  return (
    <main className="relative h-[100svh] overflow-hidden bg-[#020617] text-white">
      <Starfield density={260} speed={0.03} />
      <div className="absolute left-4 top-24 z-20 space-y-2 text-xs text-white/50">
        <p>Drag to pan · scroll to zoom</p>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded border border-white/20 px-2 py-1 text-white/70"
            onClick={() => setZoom((z) => Math.min(1.6, z + 0.1))}
          >
            +
          </button>
          <button
            type="button"
            className="rounded border border-white/20 px-2 py-1 text-white/70"
            onClick={() => setZoom((z) => Math.max(0.6, z - 0.1))}
          >
            −
          </button>
          <button
            type="button"
            className="rounded border border-white/20 px-2 py-1 text-white/70"
            onClick={() => {
              setPos({ x: 0, y: 0 });
              setZoom(1);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
        onWheel={(e) => {
          e.preventDefault();
          setZoom((z) => Math.min(1.8, Math.max(0.5, z - e.deltaY * 0.001)));
        }}
        onPointerDown={(e) => {
          drag.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!drag.current) return;
          setPos({
            x: drag.current.px + (e.clientX - drag.current.x),
            y: drag.current.py + (e.clientY - drag.current.y),
          });
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(${zoom})`,
          }}
        >
          {nodes.map((n) => (
            <div
              key={n.title}
              className="absolute rounded-2xl border border-sky-400/30 bg-sky-950/40 p-5 backdrop-blur"
              style={{ width: n.w, transform: `translate(${n.x}px, ${n.y}px)` }}
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl">{n.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-white/65">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-auto absolute bottom-6 left-6 z-30 flex flex-wrap gap-3 text-sm">
        <a href={`mailto:${cv.email}`} className="rounded-full bg-sky-300 px-4 py-2 text-black">
          Email
        </a>
        <a href={cv.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-4 py-2">
          LinkedIn
        </a>
        <Link href="/goals" className="rounded-full border border-white/30 px-4 py-2">
          Goals
        </Link>
        <Link href="/lab" className="rounded-full border border-white/30 px-4 py-2">
          Lab
        </Link>
      </div>
    </main>
  );
}
