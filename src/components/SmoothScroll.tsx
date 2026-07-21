"use client";

import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

/** Award-grade smooth scroll — disabled when the user prefers reduced motion. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion() ?? false;

  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduce]);

  return <>{children}</>;
}
