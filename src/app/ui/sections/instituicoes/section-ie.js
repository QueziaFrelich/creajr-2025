"use client";

import Image from "next/image";

export default function SectionIE() {
  const destaques = [
    {
      numero: "1.",
      texto: "Participação em um programa de extensão com impacto direto na formação dos alunos",
    },
    {
      numero: "2.",
      texto: "Apoio completo da equipe CREA Jr-SC na mobilização e execução das ações",
    },
    {
      numero: "3.",
      texto: "Relatórios sob demanda com indicadores institucionais úteis para CPA, extensão e ENADE",
    },
    {
      numero: "4.",
      texto: "Visibilidade institucional em redes sociais, eventos e canais oficiais do CREA-SC",
    },
  ];


  return (
    <section className="bg-blue-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Título */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            O que sua I.E. recebe com essa parceria
          </h2>
        </div>

        {/* Destaques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destaques.map((item, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white rounded-lg p-6 text-center shadow-md"
            >
              <div className="text-3xl font-bold mb-3">{item.numero}</div>
              <p className="text-sm">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
