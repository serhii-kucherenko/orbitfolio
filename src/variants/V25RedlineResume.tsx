"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Redline Resume — Editor marks, proofing lines, and decisive hierarchy present a CV still moving forward. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":25,"name":"Redline Resume","thesis":"Editor marks, proofing lines, and decisive hierarchy present a CV still moving forward.","layout":"blueprint","team":"Beta Editorial","accent":"#67e8f9","background":"#030712","light":false}}
     
    />
  );
}
