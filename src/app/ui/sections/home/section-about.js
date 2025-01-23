import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Container from "../../components/container/container";
import Text_body_base from "../../components/text/text-body-base";
import Text_head_2 from "../../components/text/text-head-2";
import Text_head_4 from "../../components/text/text-head-4";
import Text_link from "../../components/text/text-link";

export default function SectionAbout({}) {
  return (
    <Container className={"pb-10"}>
      <section className="p-5 md:p-10 space-y-5 rounded-xl bg-gradient-to-bl text-creajovem-blue-500 dark:text-white from-creajovem-green-500/30 to-creajovem-blue-100/50 dark:to-creajovem-blue-900 to-70%">
        <div className="space-y-3">
          <Text_head_2
            className={
              "font-bold text-creajovem-blue-400 dark:text-creajovem-green-500"
            }
          >
            O programa
          </Text_head_2>
          <Text_body_base>
            <strong>Impulsionar</strong> e <strong>fortalecer</strong> jovens
            talentos, oferecendo capacitação contínua, acesso ao mercado de
            trabalho, estímulo à <strong>inovação, empreendedorismo</strong> e{" "}
            <strong>liderança</strong>.
          </Text_body_base>
          <Text_link
            href={"/documents/Regras do Programa CREA Jovem 2025.pdf"}
            className={"flex items-center gap-3"}
          >
            <span className="underline underline-offset-2">
              Acesse aqui o regulamento
            </span>
            <ArrowTopRightOnSquareIcon className="size-5" />
          </Text_link>
        </div>
        <div className="space-y-3">
          <Text_head_4
            className={
              "font-bold text-creajovem-blue-400 dark:text-creajovem-green-500"
            }
          >
            Quem pode participar?
          </Text_head_4>
          <Text_body_base>
            Para profissionais recém-graduados e com até cinco anos de formação
            nas áreas abrangidas pelo Sistema Confea/Crea, com registro regular
            no CREA-SC.
          </Text_body_base>
        </div>
      </section>
    </Container>
  );
}
