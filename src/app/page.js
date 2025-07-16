"use client"; // 🔥 necessário para usar hooks como useParceiros

import Image from "next/image";
import { useParceiros } from "./hooks/useParceiros";
import SectionHero from "./ui/sections/home/section-hero";
import SectionAbout from "./ui/sections/home/section-about";
import SectionTestemonial from "./ui/sections/home/section-testimonials";
import SectionNumbers from "./ui/sections/home/section-numbers";
import SectionNews from "./ui/sections/home/section-news";
import SectionGalleryProjects from "./ui/sections/home/section-gallery-projects";
import { dataProjects } from "../../data/data-projects";

const mercadoDeTrablaho = dataProjects.filter(
  (project) => project.category === "Mercado de Trabalho"
);
const desenvolvimentoProfissional = dataProjects.filter(
  (project) => project.category === "Desenvolvimento Profissional"
);
const formacaoDeEmpreendedores = dataProjects.filter(
  (project) => project.category === "Formação de Empreendedores"
);
const comunidadeProfissional = dataProjects.filter(
  (project) => project.category === "Comunidade Profissional"
);
const outrosBefecios = dataProjects.filter(
  (project) => project.category === "Outros Benefícios"
);

export default function Home() {

  const comunidadeId = 20;
  const empresaId = undefined;
  const { data, isLoading, error } = useParceiros(comunidadeId, empresaId);

  console.log("data recebida:", data);

  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionNumbers />
      <SectionGalleryProjects
        sectionName={"Mercado de Trabalho"}
        dataProjects={mercadoDeTrablaho}
      />
      <SectionGalleryProjects
        sectionName={"Desenvolvimento Profissional"}
        dataProjects={desenvolvimentoProfissional}
      />
      <SectionGalleryProjects
        sectionName={"Formação de Empreendedores"}
        dataProjects={formacaoDeEmpreendedores}
      />
      <SectionGalleryProjects
        sectionName={"Comunidade Profissional"}
        dataProjects={comunidadeProfissional}
      />
      <SectionGalleryProjects
        sectionName={"Outros Benefícios"}
        dataProjects={outrosBefecios}
      />
      <SectionTestemonial />
      <SectionNews />
    </>
  );
}
