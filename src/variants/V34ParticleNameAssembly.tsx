"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Particle Name Assembly — Particles conceptually assemble the dominant name before dispersing into proof. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":34,"name":"Particle Name Assembly","thesis":"Particles conceptually assemble the dominant name before dispersing into proof.","layout":"canvas","team":"Gamma Kinetic","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
