"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Holo Proof — Steals scanline atmosphere from #49 + outcome-first evidence from #60. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":93,"name":"Hybrid Holo Proof","thesis":"Steals scanline atmosphere from #49 + outcome-first evidence from #60.","layout":"holo","team":"Eta Hybrid","accent":"#a7f3d0","background":"#071018","light":false}}
     
    />
  );
}
