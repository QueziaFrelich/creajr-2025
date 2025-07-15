"use client"
import { useMembrosComunidade } from "../hooks/useMembrosComunidade";
import SectionAbout from "../ui/sections/vitrine/section-about";
import SectionShowcase from "../ui/sections/vitrine/section-showcase";

export default function Vitrine() {
  console.log("ola");
   const comunidadeId = 1
  const funcaoPaiId = undefined // ou undefined, se quiser trazer todos

  const { data, isLoading, error } = useMembrosComunidade(comunidadeId, funcaoPaiId)
console.log(data);

  /* if (isLoading) return <p>Carregando membros...</p>
  if (error) return <p>Erro: {error.message}</p> */
  return (
    <>
      <SectionAbout />
      <SectionShowcase />
    </>
  );
}
