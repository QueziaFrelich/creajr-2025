"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const logos = [
    "/instituicoes/ufsc.png",
    "/instituicoes/ifsc.png",
    "/instituicoes/univali.png",
    "/instituicoes/ifc.png",
    "/instituicoes/udesc.png",
    "/instituicoes/unoesc.png",
    "/instituicoes/uniasselvi-indaial.png",
    "/instituicoes/unesc.png",
    "/instituicoes/catolicasc-jaraguadosul.png",
    "/instituicoes/uno.png",
    "/instituicoes/furb.png",
    "/instituicoes/uceff.png",
    "/instituicoes/fai.png",
    "/instituicoes/univille.png",

    "/instituicoes/unisatc.png",
    "/instituicoes/unisociest-saobento.png",
    "/instituicoes/uniarp.png",
    "/instituicoes/univinte.png",
    "/instituicoes/ugv-canoinhas.png",
    "/instituicoes/senai.png",
    "/instituicoes/unopar.png",
    "/instituicoes/uniavan.png",
    "/instituicoes/uffs.png",
    "/instituicoes/unifebe.png",
    "/instituicoes/estacio.png",
    "/instituicoes/unisul.png",
    "/instituicoes/unidavi.png",
    "/instituicoes/catolicasc-joinville.png",

    "/instituicoes/unisenai.png",
    "/instituicoes/unisselvi-brusque.png",
    "/instituicoes/unibave.png",
    "/instituicoes/cuu.png",
    "/instituicoes/eeb.png",
    "/instituicoes/esucri.png",
    "/instituicoes/unicesumar.png",
    "/instituicoes/uninter.png",
    "/instituicoes/uniplac.png",
    "/instituicoes/unisociesc.png",
    "/instituicoes/uniasselvi-riodosul.png",
    "/instituicoes/inesa.png",
    "/instituicoes/anhanguera-saojose.png",
    "/instituicoes/anhanguera-joinville.png",

    "/instituicoes/ugv.png",
    "/instituicoes/unisociesc-blumenau.png",
    "/instituicoes/unifatecie.png",
    "/instituicoes/catolica-paulista.png",
    "/instituicoes/sinergia.png",
    "/instituicoes/uniasselvi-guaramirim.png",
    "/instituicoes/unisul-florianopolis.png",
    "/instituicoes/anhaguera-jaraguadosul.png",
    "/instituicoes/curzeirodosul.png",
];

export default function SectionInstituitions() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
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

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = () => emblaApi.scrollNext();
        const interval = setInterval(autoplay, 5000);

        emblaApi.on("select", onSelect);
        emblaApi.on("pointerDown", () => clearInterval(interval));

        return () => clearInterval(interval);
    }, [emblaApi, onSelect]);

    // Agrupa em lotes de 6 logos por slide
    const groupedLogos = logos.reduce((acc, logo, index) => {
        const groupIndex = Math.floor(index / 14);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(logo);
        return acc;
    }, []);

    return (
        <section className="bg-blue-50 py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-blue-800">
                        Instituições com cursos parceiros
                    </h2>
                    <p className="text-sm text-gray-700 max-w-2xl mx-auto">
                        Uma rede que transforma a formação acadêmica em protagonismo profissional.
                        <br />
                        <strong>+50 Instituições de Ensino</strong> | <strong>+300 cursos parceiros</strong> |{" "}
                        <strong>+2k membros ativos</strong> | <strong>+30k acadêmicos impactados</strong>
                    </p>
                </div>

                {/* Slider */}
               <div className="overflow-hidden" ref={emblaRef}>
    <div className="flex">
        {groupedLogos.map((group, index) => (
            <div
                key={index}
                className="flex-[0_0_100%] px-4"
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {group.map((logo, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-lg border border-gray-200 flex items-center justify-center w-28 h-28"
                        >
                            <Image
                                src={logo}
                                alt={`Logo ${i}`}
                                width={300}
                                height={300}
                                className="w-full h-full object-contain p-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
</div>





                {/* Controles */}
                <div className="flex justify-between items-start py-5">
                    {/* Custom Pagination */}
                    <div className="flex justify-start items-center gap-3 mt-4 w-full">
                        {groupedLogos.map((_, index) => (
                            <button
                                key={index}
                                className={`w-[10%] h-1 ${index === activeIndex
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
            </div>
        </section>
    );
}
