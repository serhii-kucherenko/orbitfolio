"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Founding Engineer One Pager — A one-page hierarchy compresses the pitch while retaining every CV detail. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":69,"name":"Founding Engineer One Pager","thesis":"A one-page hierarchy compresses the pitch while retaining every CV detail.","layout":"swiss","team":"Epsilon Hire","accent":"#a7f3d0","background":"#071018","light":true}}
     
    />
  );
}
