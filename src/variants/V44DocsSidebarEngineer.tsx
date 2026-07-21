"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Docs Sidebar Engineer — A documentation workspace makes the career feel inspectable, versioned, and concrete. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":44,"name":"Docs Sidebar Engineer","thesis":"A documentation workspace makes the career feel inspectable, versioned, and concrete.","layout":"docs","team":"Delta Systems","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
