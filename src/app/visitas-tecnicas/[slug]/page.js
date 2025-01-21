"use client";

import Text_body_base from "@/app/ui/components/text/text-body-base";
import { dataProjects } from "../../../../data/data-projects";
import Text_head_1 from "@/app/ui/components/text/text-head-1";
import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import Container from "@/app/ui/components/container/container";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams } from "next/navigation";
import Text_body_sm from "@/app/ui/components/text/text-body-sm";
import Text_head_3 from "@/app/ui/components/text/text-head-3";
import Breadcrumb from "@/app/ui/components/breadcrumb/breadcrumb";
import { useRef } from "react";

const gallery = ["A", "B", "C", "D", "E", "F"];
const testimonial = ["", "", "", "", "", "", ""];

export default function LayoutVisitas({}) {
  const swiperGalleryRef = useRef(null);
  const swiperTestimonialRef = useRef(null);
  const { slug } = useParams();

  return (
    <Container className={"space-y-20 py-20"}>
      {/* About */}
      <section className="space-y-5">
        <Breadcrumb
          home={"Home"}
          className="mb-3"
          separator="/"
          activeClasses="text-creajovem-green-500"
          listClasses="px-1 text-sm"
        />
        <Text_head_1 className={"text-creajovem-green-500 font-bold"}>
          Visita a Obra ABC 123 Nome da Empresa
        </Text_head_1>
        <Text_body_base className={"md:w-3/4"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tempor arcu at purus porta, eget pellentesque lorem porttitor.
          Vestibulum et diam lorem. Phasellus id nunc in quam ultricies tempus
          ac dignissim nibh. Nulla sagittis odio neque, eu ullamcorper ligula
          porttitor quis.
        </Text_body_base>
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <MapPinIcon className="size-5" />
            <Text_body_base>Endereco</Text_body_base>
          </div>
          <div className="flex items-center gap-3">
            <CalendarDaysIcon className="size-5" />
            <Text_body_base>Endereco</Text_body_base>
          </div>
          <div className="flex items-center gap-3">
            <NewspaperIcon className="size-5" />
            <Text_body_base>www.linkdamateria.com</Text_body_base>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="space-y-5">
        <div className="flex justify-between items-center">
          <Text_head_3 className="font-bold text-creajovem-blue-500 dark:text-creajovem-green-500">
            Galeria de fotos
          </Text_head_3>

          {/* Navigation Buttons */}
          <div className="px-4 flex gap-5 items-center">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-creajovem-blue-1000 dark:border-white text-creajovem-blue-1000 dark:text-white hover:text-creajovem-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
              onClick={() => swiperGalleryRef.current?.slidePrev()}
            >
              <ChevronLeftIcon className="size-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-creajovem-blue-1000 dark:border-white text-creajovem-blue-1000 dark:text-white hover:text-creajovem-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
              onClick={() => swiperGalleryRef.current?.slideNext()}
            >
              <ChevronRightIcon className="size-5" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperGalleryRef.current = swiper)}
          spaceBetween={20}
          breakpoints={{
            360: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {gallery.map((picture, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">{picture}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Testimonial section */}
      <section className="space-y-5">
        <div className="flex justify-between items-center">
          <Text_head_3 className="font-bold text-creajovem-blue-500 dark:text-creajovem-green-500">
            Depoimentos
          </Text_head_3>

          {/* Navigation Buttons */}
          <div className="px-4 flex gap-5 items-center">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-creajovem-blue-1000 dark:border-white text-creajovem-blue-1000 dark:text-white hover:text-creajovem-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
              onClick={() => swiperTestimonialRef.current?.slidePrev()}
            >
              <ChevronLeftIcon className="size-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-creajovem-blue-1000 dark:border-white text-creajovem-blue-1000 dark:text-white hover:text-creajovem-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
              onClick={() => swiperTestimonialRef.current?.slideNext()}
            >
              <ChevronRightIcon className="size-5" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperTestimonialRef.current = swiper)}
          spaceBetween={20}
          breakpoints={{
            360: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {testimonial.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" flex flex-col gap-5 p-5 border bg-white/20 rounded-lg">
                <Text_body_sm>
                  “Admiro os convites de mulheres apresentarem suas ideias e
                  cases no palco, a representação feminina faz parte de um
                  processo (ainda) lento e contínuo de inspiração para o avanço
                  igualitário da sociedade. O evento organizado pelo CREA -
                  SC junto a sua rede de parceiros está de parabéns.”
                </Text_body_sm>
                <Text_body_sm className={"font-bold text-creajovem-green-500"}>
                  Ravine Gonçalves - Buuc Analítica e Design
                </Text_body_sm>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-5">
        {/* image */}
        <div
          style={{ backgroundImage: `url('https://placehold.co/600x400')` }}
          className="h-32 w-full min-w-32 md:max-w-44 bg-cover bg-center rounded-md"
        ></div>

        {/* title, description and socialmedia */}
        <div className="flex flex-col">
          {/* Title and description */}
          <div className="space-y-3">
            <Text_head_3 className={"font-bold text-creajovem-green-500"}>
              Sobre a empresa visitada
            </Text_head_3>

            {/* Description */}
            <Text_body_sm>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tempor arcu at purus porta, eget pellentesque lorem porttitor.
              Vestibulum et diam lorem. Phasellus id nunc in quam ultricies
              tempus ac dignissim nibh. Nulla sagittis odio neque, eu
              ullamcorper ligula porttitor quis.
            </Text_body_sm>
          </div>

          {/* Socialmedia */}
        </div>
      </div>
    </Container>
  );
}
