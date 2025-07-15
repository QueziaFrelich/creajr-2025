"use client";

import Text_body_base from "@/app/ui/components/text/text-body-base";
import { dataProjects } from "../../../../data/data-projects.js";
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
import "react-photo-view/dist/react-photo-view.css";
import { useParams } from "next/navigation";
import Text_body_sm from "@/app/ui/components/text/text-body-sm";
import Text_head_3 from "@/app/ui/components/text/text-head-3";
import Breadcrumb from "@/app/ui/components/breadcrumb/breadcrumb";
import { useRef } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Link from "next/link";
import Button_outline from "@/app/ui/components/buttons/button_outline.js";

export default function LayoutVisitas({}) {
  const swiperGalleryRef = useRef(null);
  const swiperTestimonialRef = useRef(null);
  const { slug } = useParams();

  // Array with all projects
  const getProjects = dataProjects.flatMap((p) => p.modal?.list?.items || []);

  // Find project
  const selectProject = getProjects.find((project) => {
    const projectSlug = encodeURI(project?.company?.name || "");
    return projectSlug === slug;
  });
  if (!selectProject)
    return (
      <Container
        className={
          "space-y-20 py-20 min-h-96 text-creajr-blue-500 dark:text-white"
        }
      >
        <Text_head_1 className={"mb-5"}>Projeto não encontrado</Text_head_1>
        <Button_outline
          href={"/"}
          text={"Voltar para a página inicial"}
          className={
            "items-center rounded-full py-1 px-3 transition-all md:flex border border-creajr-blue-100 bg-creajr-blue-100/30 hover:bg-creajr-blue-100/10 dark:bg-white/20 dark:hover:bg-white/10 "
          }
        ></Button_outline>
      </Container>
    );

  return (
    <Container
      className={"space-y-20 py-20 text-creajr-blue-500 dark:text-white"}
    >
      {/* About */}
      <section className="space-y-5">
        <Breadcrumb
          home={"Home"}
          className="mb-3"
          separator="/"
          activeClasses="text-creajovem-green-500"
          listClasses="px-1 text-xs md:text-sm"
        />

        {/* Title */}
        <Text_head_1 className={"text-creajovem-green-500 font-bold"}>
          {selectProject.tags.project}
        </Text_head_1>

        {/* Description */}
        <Text_body_base className={"md:w-3/4"}>
          {selectProject.description}
        </Text_body_base>

        {/* List */}
        <div className="space-y-1">
          {selectProject.company.contact.address && (
            <div className="flex items-center gap-3">
              <MapPinIcon className="size-5" />
              <Text_body_base>
                {selectProject.company.contact.address}
              </Text_body_base>
            </div>
          )}
          {selectProject.tags.date.length > 0 && (
            <div className="flex items-center gap-3">
              <CalendarDaysIcon className="size-5" />
              <Text_body_base>
                <span>
                  {selectProject.tags.date.length > 0 &&
                    selectProject.tags.date.reduce(
                      (acc, date, index, array) => {
                        if (index === 0) return date;
                        if (index === array.length - 1)
                          return `${acc} e ${date}`;
                        return `${acc}, ${date}`;
                      },
                      ""
                    )}
                </span>
                {selectProject.tags.hour && ` às ${selectProject.tags.hour}`}
              </Text_body_base>
            </div>
          )}

          {selectProject.company.contact.website && (
            <div className="flex items-center gap-3">
              <NewspaperIcon className="size-5" />
              <Link
                href={selectProject.company.contact.website}
                target="_blank"
              >
                {selectProject.company.contact.website.replace(
                  /(^\w+:|^)\/\//,
                  ""
                )}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Gallery section */}
      {selectProject.gallery.length > 0 && (
        <section className="space-y-5">
          <div className="flex justify-between items-center">
            <Text_head_3 className="font-bold text-creajr-blue-500 dark:text-creajovem-green-500">
              Galeria de fotos
            </Text_head_3>

            {/* Navigation Buttons */}
            <div className="px-4 flex gap-5 items-center">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full border border-creajr-blue-500 dark:border-white text-creajr-blue-500 dark:text-white hover:text-creajr-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
                onClick={() => swiperGalleryRef.current?.slidePrev()}
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full border border-creajr-blue-500 dark:border-white text-creajr-blue-500 dark:text-white hover:text-creajr-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
                onClick={() => swiperGalleryRef.current?.slideNext()}
              >
                <ChevronRightIcon className="size-4" />
              </button>
            </div>
          </div>
          <PhotoProvider>
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
              {selectProject.gallery.map((picture, index) => (
                <SwiperSlide key={index}>
                  <PhotoView src={picture}>
                    <img
                      src={picture}
                      alt={`Fotografia do projeto ${selectProject.tags.project}`}
                      className="w-full cursor-pointer"
                    />
                  </PhotoView>
                </SwiperSlide>
              ))}
            </Swiper>
          </PhotoProvider>
        </section>
      )}

      {/* Testimonial section */}
      {selectProject.testimonials.length > 0 && (
        <section className="space-y-5">
          <div className="flex justify-between items-center">
            <Text_head_3 className="font-bold text-creajr-blue-500 dark:text-creajovem-green-500">
              Depoimentos
            </Text_head_3>

            {/* Navigation Buttons */}
            <div className="px-4 flex gap-5 items-center">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full border border-creajr-blue-500 dark:border-white text-creajr-blue-500 dark:text-white hover:text-creajr-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
                onClick={() => swiperTestimonialRef.current?.slidePrev()}
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full border border-creajr-blue-500 dark:border-white text-creajr-blue-500 dark:text-white hover:text-creajr-blue-500 hover:border-2 hover:border-creajovem-green-500 hover:bg-creajovem-green-500 transition-all"
                onClick={() => swiperTestimonialRef.current?.slideNext()}
              >
                <ChevronRightIcon className="size-4" />
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
            {selectProject.testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className=" flex flex-col gap-5 p-5 border bg-white/20 rounded-lg">
                  <Text_body_sm>{`"${testimonial.text}"`}</Text_body_sm>
                  <Text_body_sm
                    className={"font-bold text-creajovem-green-500"}
                  >
                    {testimonial.name}
                  </Text_body_sm>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Company section */}
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-5">
        {/* image */}
        <div
          style={{ backgroundImage: `url('${selectProject.company.logo}')` }}
          className="h-32 w-full min-w-32 md:max-w-44 bg-cover bg-center rounded-md"
        ></div>

        {/* title, description and socialmedia */}
        <div className="flex flex-col gap-5">
          {/* Title and description */}
          <div className="space-y-3">
            <Text_head_3 className={"font-bold text-creajovem-green-500"}>
              {selectProject.company.name}
            </Text_head_3>

            {/* Description */}
            <Text_body_sm>{selectProject.company.description}</Text_body_sm>
          </div>

          {/* Socialmedia */}
          <div className="flex gap-3 items-center">
            {selectProject.company.socialmedia.instagram && (
              <Link
                href={selectProject.company.socialmedia.instagram}
                target="_blank"
                className={"transition-all hover:text-creajovem-green-500"}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="instagram-logo (1) 1">
                    <path
                      id="Vector"
                      d="M12 7.5C11.11 7.5 10.24 7.76392 9.49993 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18868 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0243 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.148C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.148 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM20.25 16.5C20.25 17.4946 19.8549 18.4484 19.1517 19.1517C18.4484 19.8549 17.4946 20.25 16.5 20.25H7.5C6.50544 20.25 5.55161 19.8549 4.84835 19.1517C4.14509 18.4484 3.75 17.4946 3.75 16.5V7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75H16.5C17.4946 3.75 18.4484 4.14509 19.1517 4.84835C19.8549 5.55161 20.25 6.50544 20.25 7.5V16.5ZM18 7.125C18 7.3475 17.934 7.56501 17.8104 7.75002C17.6868 7.93502 17.5111 8.07922 17.3055 8.16436C17.1 8.24951 16.8738 8.27179 16.6555 8.22838C16.4373 8.18498 16.2368 8.07783 16.0795 7.9205C15.9222 7.76316 15.815 7.56271 15.7716 7.34448C15.7282 7.12625 15.7505 6.90005 15.8356 6.69448C15.9208 6.48891 16.065 6.31321 16.25 6.1896C16.435 6.06598 16.6525 6 16.875 6C17.1734 6 17.4595 6.11853 17.6705 6.3295C17.8815 6.54048 18 6.82663 18 7.125Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </Link>
            )}

            {selectProject.company.socialmedia.linkedin && (
              <Link
                href={selectProject.company.socialmedia.linkedin}
                target="_blank"
                className={"transition-all hover:text-creajovem-green-500"}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="linkedin-logo 1">
                    <path
                      id="Vector"
                      d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM20.25 20.25H3.75V3.75H20.25V20.25ZM9 10.5V16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5ZM17.25 13.125V16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.89099C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125ZM9.375 7.875C9.375 8.0975 9.30902 8.31501 9.1854 8.50002C9.06179 8.68502 8.88609 8.82922 8.68052 8.91436C8.47495 8.99951 8.24875 9.02179 8.03052 8.97838C7.81229 8.93498 7.61184 8.82783 7.4545 8.6705C7.29717 8.51316 7.19002 8.31271 7.14662 8.09448C7.10321 7.87625 7.12549 7.65005 7.21064 7.44448C7.29578 7.23891 7.43998 7.06321 7.62498 6.9396C7.80999 6.81598 8.0275 6.75 8.25 6.75C8.54837 6.75 8.83452 6.86853 9.0455 7.0795C9.25647 7.29048 9.375 7.57663 9.375 7.875Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </Link>
            )}

            {selectProject.company.contact.website && (
              <Link
                href={selectProject.company.contact.website}
                target="_blank"
                className={"transition-all hover:text-creajovem-green-500"}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="globe 1">
                    <path
                      id="Vector"
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96452 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41505 20.7188 6.93683 18.891 5.109C17.0632 3.28116 14.585 2.25298 12 2.25ZM20.25 12C20.2507 12.7608 20.1456 13.5181 19.9378 14.25H16.3275C16.5575 12.7588 16.5575 11.2412 16.3275 9.75H19.9378C20.1456 10.4819 20.2507 11.2392 20.25 12ZM9.5625 15.75H14.4375C13.9572 17.3237 13.1235 18.7667 12 19.9688C10.877 18.7664 10.0433 17.3235 9.5625 15.75ZM9.19688 14.25C8.93939 12.7611 8.93939 11.2389 9.19688 9.75H14.8106C15.0681 11.2389 15.0681 12.7611 14.8106 14.25H9.19688ZM3.75 12C3.74935 11.2392 3.85442 10.4819 4.06219 9.75H7.6725C7.4425 11.2412 7.4425 12.7588 7.6725 14.25H4.06219C3.85442 13.5181 3.74935 12.7608 3.75 12ZM14.4375 8.25H9.5625C10.0428 6.67632 10.8765 5.2333 12 4.03125C13.1231 5.23361 13.9567 6.67653 14.4375 8.25ZM19.3434 8.25H16.0041C15.5832 6.70585 14.8738 5.25532 13.9134 3.975C15.0738 4.25375 16.1602 4.7801 17.098 5.51799C18.0359 6.25588 18.8032 7.18784 19.3472 8.25H19.3434ZM10.0866 3.975C9.12619 5.25532 8.41683 6.70585 7.99594 8.25H4.65282C5.19682 7.18784 5.96407 6.25588 6.90196 5.51799C7.83985 4.7801 8.92621 4.25375 10.0866 3.975ZM4.65282 15.75H7.99594C8.41683 17.2941 9.12619 18.7447 10.0866 20.025C8.92621 19.7463 7.83985 19.2199 6.90196 18.482C5.96407 17.7441 5.19682 16.8122 4.65282 15.75ZM13.9134 20.025C14.8738 18.7447 15.5832 17.2941 16.0041 15.75H19.3472C18.8032 16.8122 18.0359 17.7441 17.098 18.482C16.1602 19.2199 15.0738 19.7463 13.9134 20.025Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
