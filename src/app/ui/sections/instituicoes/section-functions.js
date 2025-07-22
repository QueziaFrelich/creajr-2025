"use client";
import Container from "../../components/container/container";
import Text_body_base from "../../components/text/text-body-base";
import Text_head_2 from "../../components/text/text-head-2";

export default function SectionFunctions() {
  return (
    <Container className="pb-10">
      <section className="p-5 md:p-10 rounded-xl">
        <div className="max-w-3xl space-y-4">
          <Text_head_2 className="font-bold text-green-800">
            O que os estudantes fazem no CREA jr-SC
          </Text_head_2>

          <Text_body_base className="">
            A Vitrine Acadêmica é o espaço onde ideias ganham visibilidade! Aqui, startups, equipes e projetos estudantis mostram o talento e o protagonismo da nova geração da engenharia.
          </Text_body_base>

          <Text_body_base className="font-semibold">
            Conheça os talentos que estão moldando o futuro da engenharia e das geociências.
          </Text_body_base>
        </div>
      </section>
    </Container>
  );
}
