"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Event Horizon Filter — An SVG distortion motif bends the edge of the layout while type stays sharp. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":78,"name":"Event Horizon Filter","thesis":"An SVG distortion motif bends the edge of the layout while type stays sharp.","layout":"horizon","team":"Zeta Experimental","accent":"#e5e7eb","background":"#050505","light":false}}
     
    />
  );
}
