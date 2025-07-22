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

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

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

        {/* Botões de navegação */} 
        {dataProjects?.length > 4 && (
        <div className=" flex justify-between items-center">
        <div className="flex gap-2">
         {dataProjects.map((_, index) => (
           <button
           key={index}
           className={`w-[10%] h-1 ${
             index === 1
             ? "bg-creajr-blue-400 dark:bg-white"
             : "bg-creajr-blue-500/20 dark:bg-white/20"
            }`}
            onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-4 gap-4">
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

      {/* Estilos customizados da paginação */}
      <style jsx>{`
        .custom-swiper-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #d1d5db;
          border-radius: 9999px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #0f172a;
          width: 24px;
        }
      `}</style>
    </section>
  );
}