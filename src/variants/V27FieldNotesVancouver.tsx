"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Field Notes Vancouver — A daylight field journal balances personal location with rigorous engineering proof. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":27,"name":"Field Notes Vancouver","thesis":"A daylight field journal balances personal location with rigorous engineering proof.","layout":"glass","team":"Beta Editorial","accent":"#5eead4","background":"#020b08","light":true}}
     
    />
  );
}
