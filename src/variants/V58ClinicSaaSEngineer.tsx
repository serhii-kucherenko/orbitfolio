"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Clinic SaaS Engineer — Healthcare-product calm translates founding engineering into outcomes and trust. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":58,"name":"Clinic SaaS Engineer","thesis":"Healthcare-product calm translates founding engineering into outcomes and trust.","layout":"clinic","team":"Epsilon Hire","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
