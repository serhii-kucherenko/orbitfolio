"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Oversized Proof Type — Metrics and the engineer name trade scale across a disciplined vertical composition. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":41,"name":"Oversized Proof Type","thesis":"Metrics and the engineer name trade scale across a disciplined vertical composition.","layout":"kinetic","team":"Gamma Kinetic","accent":"#67e8f9","background":"#030712","light":false}}
     
    />
  );
}
