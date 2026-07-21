"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Goals Orbit Kinetics — An orbital goals ring frames the career as an active long-term practice. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":38,"name":"Goals Orbit Kinetics","thesis":"An orbital goals ring frames the career as an active long-term practice.","layout":"ring","team":"Gamma Kinetic","accent":"#e5e7eb","background":"#050505","light":false}}
     
    />
  );
}
