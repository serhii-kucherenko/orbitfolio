"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Product Engineer Daylight — A bright product page connects architecture choices to customer and business results. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":65,"name":"Product Engineer Daylight","thesis":"A bright product page connects architecture choices to customer and business results.","layout":"glass","team":"Epsilon Hire","accent":"#67e8f9","background":"#030712","light":true}}
     
    />
  );
}
