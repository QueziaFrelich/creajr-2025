"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Container from "../../components/container/container";
import "swiper/css";

const slides = [
  { title: "Slide", src: "/banners/banner-1.png" },
  { title: "Slide", src: "/banners/banner-2.png" },
  { title: "Slide", src: "/banners/banner-3.png" },
];

export default function SectionHero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="relative">
        {/* Slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1.27}
          centeredSlides={true}
          initialSlide={1}
          spaceBetween={50}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-auto w-full rounded-xl overflow-hidden">
                <img src={slide.src} alt={slide.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controlls slider */}
        <Container className={"py-5"}>
          <div className="flex justify-between items-start py-5">
            {/* Custom Pagination */}
            <div className="flex justify-start items-center gap-3 mt-4 w-full">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-[10%] h-1 ${
                    index === activeIndex
                      ? "bg-creajovem-blue-1000 dark:bg-white"
                      : "bg-creajovem-blue-1000/20 dark:bg-white/20"
                  }`}
                  onClick={() => swiperRef.current?.slideTo(index)}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="px-4 flex gap-5 items-center">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-creajovem-blue-1000 dark:border-white text-creajovem-blue-1000 dark:text-white hover:text-creajovem-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ChevronLeftIcon className="size-5" />
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-creajovem-blue-1000 dark:border-white text-creajovem-blue-1000 dark:text-white hover:text-creajovem-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ChevronRightIcon className="size-5" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
