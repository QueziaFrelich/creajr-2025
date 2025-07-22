"use client";

import { Suspense } from "react";
import SectionShowcase from "./sectionShowcase";


export default function SectionShowcaseWrapper() {
  return (
    <Suspense fallback={<div>Carregando benefícios...</div>}>
      <SectionShowcase />
    </Suspense>
  );
}