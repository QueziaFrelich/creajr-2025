"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import Container from "../../components/container/container";
import Text_head_2 from "../../components/text/text-head-2";
import CardProject from "../../components/cards/card-project";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SectionGalleryProjects({ sectionName, dataProjects }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const scrollTo = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <section className="px-16">
      <Container>
        <Text_head_2 className="mb-5 md:mb-0 font-bold text-textDarkBlue dark:text-creajovem-green-500">
          {sectionName}
        </Text_head_2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            360: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4.2 },
          }}
          className="w-full lg:-translate-y-10"
        >
          {dataProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="h-[365px] md:h-[340px] flex md:items-center justify-center text-textDarkBlue ">
                <CardProject
                  title={project.name}
                  category={project.category}
                  summary={project.summary}
                  image={project.image}
                  button={project.button}
                  modal={project.modal}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {dataProjects?.length > 4 && (
          <div className="flex justify-between items-center mt-4 gap-2 mb-10">
            <div className="flex justify-start gap-2 w-full  ">
              {dataProjects.map((_, index) => (
                <button
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-creajr-blue-400 dark:bg-white w-[10%]"
                      : "bg-creajr-blue-500/20 dark:bg-white/20 w-[10%]"
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>

            <div className="flex justify-center items-center gap-4">
              <button
                ref={prevRef}
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-xl text-gray-500 hover:bg-gray-200 transition-all"
              >
                &lt;
              </button>
              <button
                ref={nextRef}
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-xl text-gray-500 hover:bg-gray-200 transition-all"
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
/* "use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../components/container/container";
import Text_head_2 from "../../components/text/text-head-2";
import CardProject from "../../components/cards/card-project";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SectionGalleryProjects({ sectionName, dataProjects }) {
  return (
    <section className="px-16  ">
      <Container>
        <Text_head_2 className="mb-5 md:mb-0 font-bold text-textDarkBlue dark:text-creajovem-green-500 ">
          {sectionName}
        </Text_head_2>

        <Swiper
          spaceBetween={20}
          breakpoints={{
            360: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4.2 },
          }}
          className="w-full lg:-translate-y-10"
        >
          {dataProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="h-[365px] md:h-[340px] flex md:items-center justify-center text-textDarkBlue">
                <CardProject
                  title={project.name}
                  category={project.category}
                  summary={project.summary}
                  image={project.image}
                  button={project.button}
                  modal={project.modal}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
 */