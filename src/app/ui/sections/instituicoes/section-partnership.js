"use client";

import Image from "next/image";

export default function SectionPartnership() {
 return (
    <section className="bg-white px-20 py-16">
        <div className="container mx-auto px-4 md:px-6 xl:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-creajr-blue-500 mb-4">
          Como funciona a parceria com sua Instituição?
        </h2>
        <p className="mb-12 text-lg md:text-xl">
          A parceria com o CREA Jr-SC é <strong>leve</strong>, <strong>prática</strong> e <strong>sem burocracia</strong>.
        </p>

        {/* Layout Desktop */}
        <div className="hidden md:flex md:flex-row md:items-start gap-10">
          {/* Imagem */}
          <div className="relative w-[100px] min-w-[100px] h-[640px]">
            <Image
              src="/elements/timeline.svg"
              alt="Timeline"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Textos */}
          <div className="flex flex-col justify-between space-y-10">
            <div>
              <h3 className="font-bold text-blue-800 text-lg mb-2">Apresentação institucional</h3>
              <ul className="list-disc ml-6 text-base leading-relaxed">
                <li>Conversa com a coordenação de curso</li>
                <li>Explicação dos benefícios para alunos e instituição</li>
                <li>Alinhamento com diretrizes acadêmicas e extensão</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-800 text-lg mb-2">Momento com os alunos</h3>
              <ul className="list-disc ml-6 text-base leading-relaxed">
                <li>Agendamento de uma palestra</li>
                <li>Apresentação do programa aos estudantes de Engenharia, Agronomia ou Geociências</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-800 text-lg mb-2">Representantes do curso</h3>
              <ul className="list-disc ml-6 text-base leading-relaxed">
                <li>Conversa com a coordenação de curso</li>
                <li>Seleção de até 3 estudantes</li>
                <li>Atuam como representantes do curso no CREA Jr-SC</li>
                <li>Organizam eventos, mobilizam alunos e conectam o curso ao programa</li>
                <li>Alinhamento com diretrizes acadêmicas e extensão</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-800 text-lg mb-2">Desenvolvimento das ações com suporte do CREA Jr-SC</h3>
              <ul className="list-disc ml-6 text-base leading-relaxed">
                <li>Oferecemos cronogramas, materiais e acompanhamento contínuo</li>
                <li>A coordenação não precisa executar tarefas adicionais</li>
                <li>Ações práticas com foco em extensão e engajamento</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-800 text-lg mb-2">Canal contínuo com a coordenação</h3>
              <ul className="list-disc ml-6 text-base leading-relaxed">
                <li>Mantemos contato aberto com a coordenação</li>
                <li>Enviamos relatórios sob demanda indicadores institucionais</li>
                <li>Possibilidade de desenvolver projetos de extensão, visitas e ações conjuntas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layout Mobile */}
        <div className="md:hidden space-y-8 px-4 mt-8">
          {[
            {
              title: "Apresentação institucional",
              items: [
                "Conversa com a coordenação de curso",
                "Explicação dos benefícios para alunos e instituição",
                "Alinhamento com diretrizes acadêmicas e extensão",
              ],
            },
            {
              title: "Momento com os alunos",
              items: [
                "Agendamento de uma palestra",
                "Apresentação do programa aos estudantes de Engenharia, Agronomia ou Geociências",
              ],
            },
            {
              title: "Representantes do curso",
              items: [
                "Conversa com a coordenação de curso",
                "Seleção de até 3 estudantes",
                "Atuam como representantes do curso no CREA Jr-SC",
                "Organizam eventos, mobilizam alunos e conectam o curso ao programa",
                "Alinhamento com diretrizes acadêmicas e extensão",
              ],
            },
            {
              title: "Desenvolvimento das ações com suporte do CREA Jr-SC",
              items: [
                "Oferecemos cronogramas, materiais e acompanhamento contínuo",
                "A coordenação não precisa executar tarefas adicionais",
                "Ações práticas com foco em extensão e engajamento",
              ],
            },
            {
              title: "Canal contínuo com a coordenação",
              items: [
                "Mantemos contato aberto com a coordenação",
                "Enviamos relatórios sob demanda indicadores institucionais",
                "Possibilidade de desenvolver projetos de extensão, visitas e ações conjuntas",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-blue-800 text-lg mb-2">{section.title}</h3>
              <ul className="list-disc ml-6 text-base leading-relaxed">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
