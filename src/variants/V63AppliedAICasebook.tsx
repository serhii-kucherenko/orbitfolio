"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Applied AI Casebook — A casebook pairs AI capabilities with the production situations where they mattered. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":63,"name":"Applied AI Casebook","thesis":"A casebook pairs AI capabilities with the production situations where they mattered.","layout":"chapters","team":"Epsilon Hire","accent":"#7dd3fc","background":"#0b1220","light":false}}
     
    />
  );
}
