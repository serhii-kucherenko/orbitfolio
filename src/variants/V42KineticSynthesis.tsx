"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Kinetic Synthesis — Gamma closes by pairing its strongest motion grammar with an unhurried complete archive. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":42,"name":"Kinetic Synthesis","thesis":"Gamma closes by pairing its strongest motion grammar with an unhurried complete archive.","layout":"mosaic","team":"Gamma Kinetic","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
