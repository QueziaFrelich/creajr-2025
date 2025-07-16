"use client";
import Image from "next/image";
import { ExternalLink } from 'lucide-react';


export default function SectionUniversityExtension() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto à esquerda */}
        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">
            Extensão reconhecida na prática
          </h2>
          <p className="text-gray-700">
            A atuação dos membros dirigentes do CREA Jr-SC pode ser reconhecida
            como projeto de extensão universitária, com carga horária e
            certificação conforme as diretrizes da sua instituição.
          </p>
          <p className="text-gray-700">
            Isso fortalece o vínculo institucional e valoriza ainda mais a
            jornada dos estudantes.
          </p>
          <p className="text-gray-700">
            Todas essas atividades{" "}
            <strong className="font-semibold text-gray-900">
              podem ser validadas como extensão universitária
            </strong>
            , conforme as diretrizes da instituição.
          </p>

          {/* Botão sem ícone */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.crea-sc.org.br/index.php/noticias/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-green-800 text-green-900 text-sm hover:bg-green-100 transition-colors"
            >
              Proposta de Projeto de Extensão
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="relative w-full h-auto flex justify-center">
          <Image
            src="/elements/university-extension.png"
            alt="Extensão reconhecida"
            width={400}
            height={400}
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
