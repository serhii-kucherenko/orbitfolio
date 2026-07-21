"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Outcome First Resume — Four production outcomes lead; the complete evidence follows in recruiter order. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":60,"name":"Outcome First Resume","thesis":"Four production outcomes lead; the complete evidence follows in recruiter order.","layout":"mosaic","team":"Epsilon Hire","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
