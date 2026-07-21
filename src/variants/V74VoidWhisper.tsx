"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Void Whisper — Extreme black space makes the name, title, and proof feel unusually deliberate. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":74,"name":"Void Whisper","thesis":"Extreme black space makes the name, title, and proof feel unusually deliberate.","layout":"void","team":"Zeta Experimental","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
