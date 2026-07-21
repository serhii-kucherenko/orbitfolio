"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

const OrbitScene = dynamic(() => import("@/components/OrbitScene").then((module) => module.OrbitScene), { ssr: false });

/** Instanced Particle Fleet — A compact 3D fleet frames applied-AI leadership without hiding the resume. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":6,"name":"Instanced Particle Fleet","thesis":"A compact 3D fleet frames applied-AI leadership without hiding the resume.","layout":"swarm","team":"Alpha WebGL","accent":"#e5e7eb","background":"#050505","light":false}}
      scene={reduceMotion ? undefined : <OrbitScene accent="#e5e7eb" />}
    />
  );
}
