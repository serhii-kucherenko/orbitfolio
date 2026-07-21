"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Cover Chapters — Steals object-like covers from #53 + viewport storytelling from #32. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":94,"name":"Hybrid Cover Chapters","thesis":"Steals object-like covers from #53 + viewport storytelling from #32.","layout":"covers","team":"Eta Hybrid","accent":"#e5e7eb","background":"#050505","light":false}}
     
    />
  );
}
