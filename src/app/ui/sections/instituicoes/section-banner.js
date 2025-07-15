"use client";

import Image from "next/image";

export default function SectionBanner() {
  return (
    <section className="relative px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/banners/banner-instituicoes.png" // Substitua se necessário
            alt="Banner Institucional"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
