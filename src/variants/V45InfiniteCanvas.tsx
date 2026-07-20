"use client";

import { useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import Link from "next/link";

export function Variant() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const nodes = [
    { x: 0, y: 0, title: cv.name, body: cv.title, w: 320 },
    { x: 380, y: -40, title: "Summary", body: cv.summary, w: 360 },
    ...cv.experience.map((j, i) => ({ x: (i % 2) * 420 - 80, y: 220 + i * 200, title: j.company, body: j.bullets[0], w: 340 })),
    { x: -360, y: 120, title: "Skills", body: cv.skills.ai.slice(0, 6).join(", "), w: 300 },
    { x: 500, y: 280, title: "Projects", body: cv.projects.map((p) => p.name).join(" · "), w: 300 },
  ];
  return (
    <main className="relative h-[100svh] overflow-hidden bg-[#020617] text-white">
      <Starfield density={260} speed={0.03} />
      <p className="absolute left-4 top-24 z-20 text-xs text-white/50">Drag to pan the canvas</p>
      <div
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => { drag.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y }; (e.target as HTMLElement).setPointerCapture?.(e.pointerId); }}
        onPointerMove={(e) => { if (!drag.current) return; setPos({ x: drag.current.px + (e.clientX - drag.current.x), y: drag.current.py + (e.clientY - drag.current.y) }); }}
        onPointerUp={() => { drag.current = null; }}
      >
        <div className="absolute left-1/2 top-1/2" style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}>
          {nodes.map((n) => (
            <div key={n.title} className="absolute rounded-2xl border border-sky-400/30 bg-sky-950/40 p-5 backdrop-blur" style={{ width: n.w, transform: `translate(${n.x}px, ${n.y}px)` }}>
              <h2 className="font-[family-name:var(--font-display)] text-xl">{n.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-white/65">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-auto absolute bottom-6 left-6 z-30 flex gap-3 text-sm">
        <a href={`mailto:${cv.email}`} className="rounded-full bg-sky-300 px-4 py-2 text-black">Email</a>
        <Link href="/goals" className="rounded-full border border-white/30 px-4 py-2">Goals</Link>
      </div>
    </main>
  );
}
