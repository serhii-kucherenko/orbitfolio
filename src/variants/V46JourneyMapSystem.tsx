"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Journey Map System — A geographic SVG route connects Kyiv, Geneva, Italy, San Francisco, and Vancouver. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":46,"name":"Journey Map System","thesis":"A geographic SVG route connects Kyiv, Geneva, Italy, San Francisco, and Vancouver.","layout":"journey","team":"Delta Systems","accent":"#e5e7eb","background":"#050505","light":false}}
     
    />
  );
}
