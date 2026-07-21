"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Warp Type Corridor — Perspective type rushes toward the viewer and resolves into calm career chapters. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":30,"name":"Warp Type Corridor","thesis":"Perspective type rushes toward the viewer and resolves into calm career chapters.","layout":"warp","team":"Gamma Kinetic","accent":"#e5e7eb","background":"#050505","light":false}}
     
    />
  );
}
