"use client";
import Container from "../../components/container/container";
import Text_body_base from "../../components/text/text-body-base";
import Text_head_2 from "../../components/text/text-head-2";

export default function SectionJoin() {
  return (
    <section className="bg-blue-100 py-20">
      <Container>
        <div className="flex flex-row items-center justify-between">
  <div className="w-1/2 flex flex-col items-start text-left space-y-4">
    <h2 className="md:text-3xl font-bold text-blue-900">
      Faça parte da Vitrine Acadêmica!
    </h2>

    <p className="text-base text-blue-900">
      Quer divulgar seu time ou startup na Vitrine Acadêmica? <br />
      Faça o cadastro na ferramenta Linquei e participe da comunidade de Startups parceiras do CREA-SC!
    </p>

    <button className="mt-4 px-5 py-2 border border-blue-900 text-blue-900 rounded-md font-medium hover:bg-blue-200 transition-all">
      Quero fazer parte!
    </button>
  </div>

  {/* Espaço à direita, vazio ou para futura imagem */}
  <div className="w-1/2" />
</div>

      </Container>
    </section>
  );
}
