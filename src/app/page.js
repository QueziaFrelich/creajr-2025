import Image from "next/image";
import SectionHero from "./ui/sections/home/section-hero";
import SectionAbout from "./ui/sections/home/section-about";
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

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
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
    </>
  );
}
