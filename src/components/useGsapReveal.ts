"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

/** GSAP reveal for kinetic cells — no-ops when reduced motion is preferred. */
export function useGsapReveal(
  root: RefObject<HTMLElement | null>,
  reduce: boolean,
  selector = "[data-gsap]",
) {
  useEffect(() => {
    if (reduce || !root.current) return;
    const ctxRoot = root.current;
    const context = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      if (!targets.length) return;
      gsap.from(targets, {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctxRoot,
          start: "top 80%",
        },
      });
    }, ctxRoot);
    return () => context.revert();
  }, [reduce, root, selector]);
}
