import Breadcrumb from "../ui/components/breadcrumb/breadcrumb";
import Container from "../ui/components/container/container";
import TagBase from "../ui/components/tags/tag-base";
import Text_decoration_border from "../ui/components/text/decoration/text-decoration-border";
import Text_body_base from "../ui/components/text/text-body-base";
import Text_head_1 from "../ui/components/text/text-head-1";
import Text_head_4 from "../ui/components/text/text-head-4";
import SectionMentores from "../ui/sections/home/section-mentores";

export default function layoutMentoria({}) {
  return (
    <Container
      className={"space-y-20 py-20 text-creajovem-blue-500 dark:text-white"}
    >
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
          Mentores do CREA Jovem
        </Text_head_1>
        <TagBase className={"border bg-white/20"}>
          Desenvolvimento Profissional
        </TagBase>
        <Text_body_base className={"md:w-3/4"}>
          Conectamos jovens profissionais a engenheiros, agrônomos e empresários
          experientes, oferecendo mentorias personalizadas para impulsionar suas
          carreiras e enfrentar desafios do setor. Receba orientação prática em
          áreas como gestão, finanças, marketing e inovação, acelerando seu
          crescimento profissional e desenvolvendo habilidades para o sucesso no
          mercado. Seja parte de uma rede que transforma conhecimento em
          oportunidades e constrói carreiras de impacto!
        </Text_body_base>
      </section>

      <section>
        <SectionMentores />
      </section>
    </Container>
  );
}
