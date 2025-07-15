'use client';

import { ExternalLink } from 'lucide-react';
import Container from '../../components/container/container';

export default function SectionNewsBanner() {
  return (
    <section
      className="py-16 bg-cover bg-center text-green-900"
      style={{
        backgroundImage: "url('/banners/bg-number.png')",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
          {/* Título */}
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Fique por dentro <br className="hidden md:block" />
            das notícias
          </h2>

          {/* Descrição */}
          <p className="text-sm md:text-base text-green-900/80">
            Confira as notícias do que acontece no CREAJR pela página de notícias do CREA-SC
          </p>

          {/* Botão */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://www.crea-sc.org.br/index.php/noticias/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-green-800 text-green-900 text-sm hover:bg-green-100 transition-colors"
            >
              Acesse as notícias do CREA-SC
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
