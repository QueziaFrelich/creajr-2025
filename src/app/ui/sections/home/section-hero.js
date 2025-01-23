"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Container from "../../components/container/container";

const slides = [
  {
    title: "Slide",
    src: "/banners/banner-1.png",
    responsive: "/banners/banner-1-responsive.png",
  },
  {
    title: "Slide",
    src: "/banners/banner-2.png",
    responsive: "/banners/banner-2-responsive.png",
  },
  {
    title: "Slide",
    src: "/banners/banner-3.png",
    responsive: "/banners/banner-3-responsive.png",
  },
  {
    title: "Slide",
    src: "/banners/banner-4.png",
    responsive: "/banners/banner-4-responsive.png",
  },
];

export default function SectionHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => emblaApi.scrollNext();
    const autoplayInterval = setInterval(autoplay, 3000);

    emblaApi.on("select", onSelect);

    emblaApi.on("pointerDown", () => clearInterval(autoplayInterval));

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, onSelect]);

  return (
    <div className="mt-5 relative max-w-screen-xl mx-auto">
      {/* Slider */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_80%] md:flex-[0_0_70%] px-2">
              <div className="h-auto w-full rounded-xl overflow-hidden">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="hidden md:block"
                />
                <img
                  src={slide.responsive}
                  alt={slide.title}
                  className="block md:hidden"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls slider */}
      <Container>
        <div className="flex justify-between items-start py-5">
          {/* Custom Pagination */}
          <div className="flex justify-start items-center gap-3 mt-4 w-full">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-[10%] h-1 ${
                  index === activeIndex
                    ? "bg-creajovem-blue-400 dark:bg-white"
                    : "bg-creajovem-blue-500/20 dark:bg-white/20"
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="px-4 flex gap-5 items-center">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full border border-creajovem-blue-500 dark:border-white text-creajovem-blue-500 dark:text-white hover:text-creajovem-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
              onClick={scrollPrev}
            >
              <ChevronLeftIcon className="size-4" />
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full border border-creajovem-blue-500 dark:border-white text-creajovem-blue-500 dark:text-white hover:text-creajovem-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
              onClick={scrollNext}
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
