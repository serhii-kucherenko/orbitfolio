"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Pull Quote Stage — Oversized outcome quotes interrupt a calm long-form career narrative. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":18,"name":"Pull Quote Stage","thesis":"Oversized outcome quotes interrupt a calm long-form career narrative.","layout":"chapters","team":"Beta Editorial","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
