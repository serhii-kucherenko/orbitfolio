"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Proof Mosaic Light — An asymmetric daylight mosaic groups metrics, experience, capabilities, and projects. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":68,"name":"Proof Mosaic Light","thesis":"An asymmetric daylight mosaic groups metrics, experience, capabilities, and projects.","layout":"mosaic","team":"Epsilon Hire","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
