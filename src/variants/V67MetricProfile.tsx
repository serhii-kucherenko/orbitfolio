"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Metric Profile — Measured impact receives editorial scale without reducing the career to numbers. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":67,"name":"Metric Profile","thesis":"Measured impact receives editorial scale without reducing the career to numbers.","layout":"editorial","team":"Epsilon Hire","accent":"#5eead4","background":"#020b08","light":true}}
     
    />
  );
}
