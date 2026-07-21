"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Velocity Case Chapters — Alternating chapter velocity gives each employer a different narrative cadence. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":36,"name":"Velocity Case Chapters","thesis":"Alternating chapter velocity gives each employer a different narrative cadence.","layout":"chapters","team":"Gamma Kinetic","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
