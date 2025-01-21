"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../components/container/container";
import Text_head_2 from "../../components/text/text-head-2";
import CardProject from "../../components/cards/card-project";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SectionGalleryProjects({ sectionName, dataProjects }) {
  return (
    <section>
      <Container>
        <Text_head_2 className="font-bold text-creajovem-blue-500 dark:text-creajovem-green-500">
          {sectionName}
        </Text_head_2>

        <Swiper
          spaceBetween={20}
          breakpoints={{
            360: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full md:-translate-y-10"
        >
          {dataProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="h-[340px] flex items-center justify-center">
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
