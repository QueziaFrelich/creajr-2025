"use client";

export default function SectionCourseBenefits() {
  const beneficios = [
    {
      titulo: "Melhore indicadores institucionais",
      descricao: "como ENADE, extensão e empregabilidade",
    },
    {
      titulo: "Reduza a evasão escolar",
      descricao:
        "ao conectar os alunos com experiências reais e senso de propósito logo nos primeiros semestres",
    },
    {
      titulo: "Fortaleça a visibilidade institucional",
      descricao:
        "do curso com relatórios, selos e reconhecimento em eventos e redes",
    },
    {
      titulo: "Engaje seus estudantes",
      descricao: "com práticas de liderança, inovação e mercado",
    },
    {
      titulo: "Conecte sua universidade",
      descricao: "com profissionais, empresas e o sistema Confea/Crea",
    },
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-2xl md:text-3xl font-bold text-start text-green-800">
          Por que integrar seu curso ao CREA jr-SC
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-blue-500 font-bold text-base md:text-lg mb-2">
                {item.titulo}
              </h3>
              <p className="text-sm text-gray-700">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
