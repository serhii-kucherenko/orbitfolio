"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    let w=0,h=0,raf=0;
    const cols: number[] = [];
    const resize=()=>{w=c.width=c.clientWidth;h=c.height=c.clientHeight; const n=Math.floor(w/14); cols.length=n; for(let i=0;i<n;i++) cols[i]=Math.random()*h;};
    const draw=()=>{ctx.fillStyle="rgba(2,11,6,0.12)";ctx.fillRect(0,0,w,h);ctx.fillStyle="#4ade80";ctx.font="12px monospace";
      cols.forEach((y,i)=>{const ch=cv.name[(i+Math.floor(y))%cv.name.length]||"0";ctx.fillText(ch,i*14,y);cols[i]=y>h+Math.random()*80?0:y+(reduce?0:10);});
      if(!reduce) raf=requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener("resize",resize);
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[reduce]);
  return (
    <main className="relative min-h-screen bg-[#020b06] text-green-100">
      <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-50" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl text-green-300">{cv.name}</h1>
        <p className="mt-3 text-green-200/70">{cv.title}</p>
        <p className="mt-6 text-sm text-green-100/60">{cv.summary}</p>
        <section className="mt-14 rounded-2xl border border-green-500/20 bg-black/60 p-6 backdrop-blur"><ExperienceList tone="dark" /></section>
        <section className="mt-10"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-8 text-green-200" /></div></section>
      </div>
    </main>
  );
}
