import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Container from "../../components/container/container";
import Text_body_base from "../../components/text/text-body-base";
import Text_head_2 from "../../components/text/text-head-2";
import Icon_Comunidade from "../../icons/cards/icon-comunidade";
import Icon_Desenvolvimento from "../../icons/cards/icon-desenvolvimento";
import Icon_Oportunidade from "../../icons/cards/icon-oportunidade";



export default function SectionAbout({ }) {
  return (
    <Container className={"pb-10"}>
      <section className="p-5 md:p-10 space-y-5 rounded-xl text-creajr-blue-500 dark:text-white from-creajovem-green-500/30 to-creajr-blue-100/50 dark:to-creajr-blue-900 to-70%">
        <div className="space-y-3">
          <Text_head_2
            className={
              "font-bold text-creajovem-rose-500"
            }
          >
            O programa
          </Text_head_2>
          <Text_body_base>
            <strong>O CREA Jr-SC é um programa gratuito para quem transforma ideias em ação.</strong>.
          </Text_body_base>
          <p>Estudantes de Engenharia, Agronomia e Geociências encontram aqui um espaço de aprendizado prático, conexão com o mercado e desenvolvimento de liderança. Prepare-se para atuar com mais confiança, ética e visão de futuro!</p>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-creajr-blue-50 dark:bg-creajr-blue-950 border border-creajr-blue-200 dark:border-creajr-blue-800 rounded-xl p-6 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <Icon_Comunidade />
              </div>
              <h3 className="text-creajr-blue-500 font-bold text-lg mb-2">Comunidade Profissional</h3>
              <p className="text-creajr-blue-800 dark:text-white text-sm">
                Engajar os acadêmicos no <strong>Sistema Confea/Crea</strong> com debates, integração às <strong>Entidades de Classe</strong>, fortalecendo o aprendizado técnico.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-creajr-blue-50 dark:bg-creajr-blue-950 border border-creajr-blue-200 dark:border-creajr-blue-800 rounded-xl p-6 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <Icon_Desenvolvimento />
              </div>
              <h3 className="text-creajr-blue-500 font-bold text-lg mb-2">Desenvolvimento Pessoal e Profissional</h3>
              <p className="text-creajr-blue-800 dark:text-white text-sm">
                Aproximar os acadêmicos ao mercado de trabalho com <strong>visitas técnicas, treinamentos</strong> e ferramentas, proporcionando vivências e <strong>aprendizado contínuo</strong>.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-creajr-blue-50 dark:bg-creajr-blue-950 border border-creajr-blue-200 dark:border-creajr-blue-800 rounded-xl p-6 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <Icon_Oportunidade />
              </div>              
              <h3 className="text-creajr-blue-500 font-bold text-lg mb-2">Oportunidade no Mercado de Trabalho</h3>
              <p className="text-creajr-blue-800 dark:text-white text-sm">
                Conectar os acadêmicos ao mercado profissional com <strong>experiências práticas e estágios</strong>, através de conexões com empresas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
