"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Planetary Dossier — A planet-stage hero gives way immediately to an evidence-first technical dossier. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":10,"name":"Planetary Dossier","thesis":"A planet-stage hero gives way immediately to an evidence-first technical dossier.","layout":"planet","team":"Alpha WebGL","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
