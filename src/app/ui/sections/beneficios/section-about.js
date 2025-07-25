"use client"

import Container from "../../components/container/container";
import Text_body_base from "../../components/text/text-body-base";
import Text_head_2 from "../../components/text/text-head-2";

export default function SectionVitrineAcademica() {
  return (
    <Container className="">
      <section className="mt-20 rounded-xl item-start">
        <div className="max-w-3xl space-y-4 text-textDarkBlue" >
          <Text_head_2 className="font-bold text-textGreen mb-5 text-3xl">
            Benefícios aos registrados
          </Text_head_2>

          <Text_body_base className="">
            Nesta seção, você encontra os benefícios exclusivos oferecidos aos membros do CreaJr-SC. São descontos, vantagens e oportunidades pensadas para apoiar o seu desenvolvimento acadêmico, profissional e pessoal.
          </Text_body_base>

          <Text_body_base className="font-semibold">
            Explore as parcerias disponíveis e aproveite ao máximo sua jornada como registrado!
          </Text_body_base>
        </div>
      </section>
    </Container>
  );
}
