import { modal } from "@nextui-org/react";

export const dataProjects = [
  // Template
  {
    name: "", // STRING: Nome do projeto ou elemento. Exemplo: "Oportunidades de emprego"
    category: "", // STRING: Categoria associada. Exemplo: "Mercado de Trabalho"
    image: "", // STRING: Caminho ou URL da imagem. Exemplo: "/projects/oportunidades-de-emprego.jpg"
    summary: "", // STRING: Breve descrição do projeto ou elemento. Exemplo: "Conectamos você às melhores oportunidades no mercado..."
    button: {
      // Configuração do botão principal
      type: "link", // STRING: Tipo de botão. Valores possíveis: "link" (abre um link), "modal" (abre um modal), ou null (sem botão).
      text: "", // STRING: Texto que será exibido no botão. Exemplo: "Conferir oportunidades".
      href: "#", // STRING: URL ou âncora do link. Certifique-se de incluir "https://" se for uma URL completa.
    },
    modal: {
      // Configuração do modal associado (se aplicável)
      description: ``, // STRING: Descrição detalhada que aparecerá no modal. Pode incluir texto longo e formatação.
      list: {
        // Configuração da lista dentro do modal
        title: "", // STRING: Título da lista. Exemplo: "Eventos".
        download: null, // STRING ou null: URL para download de um arquivo relacionado. Exemplo: "https://example.com/file.pdf".
        items: [
          // Itens individuais dentro da lista
          {
            active: true, // BOOLEAN: Indica se este item está ativo e deve ser exibido.
            image: "", // STRING: URL da imagem associada ao item.
            title: "", // STRING: Título do item. Exemplo: "SOON - Setor Elétrico".
            description: ``, // STRING: Descrição detalhada do item.
            tags: {
              // Tags associadas ao item
              project: "", // STRING: Nome do projeto associado.
              date: [], // ARRAY: Datas associadas ao projeto no formato "DD/MM/AAAA".
              hour: "", // STRING: Hora associada. Exemplo: "19:00h".
              region: "", // STRING ou null: Região associada ao projeto.
            },
            href: "#", // STRING: Link relacionado ao item. Certifique-se de incluir "https://" se for externo.
            gallery: ["", "", ""], // ARRAY: Lista de URLs de imagens adicionais. // Galeria de imagens
            testimonials: [
              { name: "", text: "" }, // OBJECT: Nome e texto do depoimento. // Depoimentos relacionados
            ],
            company: {
              // Informações da empresa associada
              name: "", // STRING: Nome da empresa.
              logo: "", // STRING: URL do logo da empresa.
              description: "", // STRING: Descrição da empresa.
              socialmedia: {
                // Redes sociais da empresa
                instagram: "", // STRING: URL do Instagram. Sempre inclua "https://".
                linkedin: "", // STRING: URL do LinkedIn. Sempre inclua "https://".
              },
              contact: {
                // Informações de contato da empresa
                address: "", // STRING: Endereço físico ou localização do evento.
                website: "", // STRING: URL do site. Sempre inclua "https://".
              },
            },
          },
        ],
      },
    },
  },

  // Mercado de Trabalho
  {
    name: "Oportunidades de trabalho",
    category: "Mercado de Trabalho",
    image: "/projects/oportunidades-de-emprego.jpg",
    summary:
      "Encontre vagas de estágio, trainee e emprego que combinam com seu perfil profissional.",
    button: {
      type: "link",
      text: "Conferir oportunidades",
      href: "https://portal.crea-sc.org.br/servicos/bolsa-de-empregos/",
    },
    modal: null,
  },
  {
    name: "Desafios Públicos e Privados",
    category: "Mercado de Trabalho",
    image: "/projects/desafios-publicos-e-privados.jpg",
    summary:
      "Participe de competições que conectam inovação e soluções para o mundo real.",
    button: {
      type: null,
      text: "",
      href: "#",
    },
    modal: null,
  },

  // Desenvolvimento Profissional
   {
    name: "Vitrine Acadêmica",
    category: "Desenvolvimento Profissional",
    image: "/projects/vitrine-academica.png",
    summary:
      "Conheça os Times de Competição e Startups jr. do programa CREA jr-SC.",
    button: {
      type: "link",
      text: "Ver mais",
      href: "/vitrine",
    },
    modal: null,
  },
  {
    name: "Talks Profissionais",
    category: "Desenvolvimento Profissional",
    image: "/projects/circuito-de-palestras.jpg",
    summary:
      "Conecte-se com especialistas e amplie sua visão sobre o mercado e sua carreira.",
    button: {
      type: null,
      text: "",
      href: "#",
    },
    modal: null,
  },
  {
    name: "Imersões Técnicas",
    category: "Desenvolvimento Profissional",
    image: "/projects/visitas-tecnicas.jpg",
    summary:
      "Conheça na prática o dia a dia de empresas e obras da sua futura profissão.",
    button: {
      type: null,
      text: "",
      href: "#",
    },
    modal: null,
  },
  {
    name: "Mentorias de Carreira",
    category: "Desenvolvimento Profissional",
    image: "/projects/mentorias.jpg",
    summary:
      "Tenha o apoio de profissionais experientes para planejar sua trajetória com mais clareza.",
    button: {
      type: null,
      text: "Ver mentores",
      href: "/mentorias",
    },
    modal: null,
  },
  {
    name: "Habilidades do Futuro",
    category: "Desenvolvimento Profissional",
    image: "/projects/formacao-em-novas-habilidades.jpg",
    summary:
      "Desenvolva as competências exigidas pelos profissionais mais preparados do mercado.",
    button: {
      type: null,
      text: "",
      href: "",
    },
    modal: null,
  },
 

  // Formação de Empreendedores
  {
    name: "Formação de Empreendedores",
    category: "Formação de Empreendedores",
    image: "/projects/formacao-de-empreendedores.jpg",
    summary:
      "Desperte seu perfil empreendedor e transforme ideias em projetos com propósito.",
    button: {
      type: null,
      text: "",
      href: "#",
    },
    modal: null,
  },
  {
    name: "Valide sua Ideia",
    category: "Formação de Empreendedores",
    image: "/projects/validacao-de-negocio.jpg",
    summary:
      "Teste, aprimore e comprove seu modelo de negócio com apoio e ferramentas práticas.",
    button: {
      type: null,
      text: "",
      href: "#",
    },
    modal: null,
  },

  // Comunidade Profissional
  {
    name: "Sistema Profissional",
    category: "Comunidade Profissional",
    image: "/projects/sistema-profissional.jpg",
    summary:
      "Descubra o que é o Confea, o Crea-SC, as Entidades de Classe e a Mútua.",
    button: {
      type: "modal",
      text: "Ver detalhes",
      href: "#",
    },
    modal: {
      description: `Descubra o que é o Confea, o Crea-SC, as Entidades de Classe e a Mútua.`,
      list: {
        title: "Vídeos",
        download:
          "https://www.renfe.com/content/dam/renfe/es/General/PDF-y-otros/Ejemplo-de-descarga-pdf.pdf",
        items: [
          {
            active: true,
            image: "/projects/list/sistema-profissional/confea.jpg",
            title: "CONFEA",
            description: `Descubra o papel do Confea como órgão máximo do Sistema Profissional, sua importância na regulamentação das profissões e como ele garante a valorização e ética na Engenharia, Agronomia e Geociências.`,
            tags: null,
            href: "#",
            gallery: [],
            testimonials: [],
            company: {
              name: "",
              logo: "",
              description: "",
              socialmedia: { instagram: "", linkedin: "" },
              contact: { address: "", website: "" },
            },
          },
          {
            active: true,
            image: "/projects/list/sistema-profissional/crea.jpg",
            title: "CREA-SC",
            description: `Entenda como o CREA-SC atua no seu dia a dia, desde o registro profissional até a fiscalização das atividades, promovendo segurança e qualidade nos serviços de Engenharia, Agronomia. e Geociências.`,
            tags: null,
            href: "#",
            gallery: [],
            testimonials: [],
            company: {
              name: "",
              logo: "",
              description: "",
              socialmedia: { instagram: "", linkedin: "" },
              contact: { address: "", website: "" },
            },
          },
          {
            active: true,
            image: "/projects/list/sistema-profissional/mutua.jpg",
            title: "MUTUA",
            description: `Saiba como a Mútua apoia profissionais registrados com benefícios exclusivos, como linhas de crédito, previdência e assistência, ajudando no crescimento pessoal e profissional.`,
            tags: null,
            href: "#",
            gallery: [],
            testimonials: [],
            company: {
              name: "",
              logo: "",
              description: "",
              socialmedia: { instagram: "", linkedin: "" },
              contact: { address: "", website: "" },
            },
          },
          {
            active: true,
            image:
              "/projects/list/sistema-profissional/entidades-de-classe.jpg",
            title: "ENTIDADES DE CLASSE",
            description: `Explore o papel das Entidades de Classe na valorização profissional, promovendo integração, networking e debates sobre o futuro das profissões.`,
            tags: null,
            href: "#",
            gallery: [],
            testimonials: [],
            company: {
              name: "",
              logo: "",
              description: "",
              socialmedia: { instagram: "", linkedin: "" },
              contact: { address: "", website: "" },
            },
          },
        ],
      },
    },
  },
  {
    name: "Rede Profissional",
    category: "Comunidade Profissional",
    image: "/projects/rede-profissional.png",
    summary:
      "Participe de fóruns online e grupos de discussão para compartilhar ideias, melhorar o sistema e engajar-se em iniciativas de crescimento e inovação na sua profissão!",
    button: {
      type: null,
      text: "",
      href: "#",
    },
    modal: null,
  },
  {
    name: "Comunidade Profissional",
    category: "Comunidade Profissional",
    image: "/projects/formacao-de-dirigentes.png",
    summary:
      "Participe de fóruns online e grupos de discussão para compartilhar ideias, melhorar o sistema e engajar-se em iniciativas de crescimento e inovação na sua profissão!",
    button: {
      type: "modal",
      text: "Ver detalhes",
      href: "#",
    },
    modal: {
      description: `Para líderes do CREA Jr-SC, a trilha foca em soft skills e gestão, preparando-os para o mercado. A Formação de Dirigentes do CREA Jr-SC é voltada para membros que exercem funções de liderança dentro do programa. A trilha busca fortalecer 
      habilidades socioemocionais, comunicação, gestão de equipes e visão sistêmica, preparando os jovens para os desafios reais do mercado de trabalho. Confira o Regimento Interno para conhecer todas as diretrizes do CREA Jr-SC.`,
      list: {
        title: "Cargos",
        download: null,
        items: [
          {
            active: false,
            image: "",
            title: "Coordenador Estadual Titular",
            description: `Lidere em nível estadual. Seja a voz da rede CREA Jr-SC em Santa Catarina. Coordene ações, represente o programa em eventos e conduza o time rumo ao impacto real.`,
            tags: {
              project: "",
              date: [],
              hour: "",
              region: [
                "Liderança Estratégica",
                "Gestão De Equipes",
                "Visão Sistêmica",
                "Articulação Institucional",
                "Planejamento"
              ]
            },
            href: "#",
            gallery: ["", "", ""],
            testimonials: [{ name: "", text: "" }],
            company: {
              name: "",
              logo: "",
              description: "",
              socialmedia: { instagram: "", linkedin: "" }, // IMPORTANT: Always we need to put "https://" in the URL
              contact: { address: "", website: "" }, // IMPORTANT: Always we need to put "https://" in the URL
            },
          },
        ],
      },
    },
  },

  // Outros Benefícios
  {
    name: "Capacitação",
    category: "Outros Benefícios",
    image: "/projects/capacitacao.jpg",
    summary:
      `Aprenda, evolua e se destaque! Quem é CREA Jr-SC tem acesso a cursos, trilhas, workshops e benefícios que preparam você pra encarar o mercado e crescer na carreira.`,
    button: {
      type: "link",
      text:"Ver detalhes",
      href: "/beneficios?c=5",
    },
    modal: null,
  },
  {
    name: "Ferramentas Digitais",
    category: "Outros Benefícios",
    image: "/projects/ferramentas-profissionais.png",
    summary:
      "Ferramentas que aceleram sua jornada! Coworkings, simulador de ART, ferramentas digitais e muito mais pra você aprender, crescer e se conectar com o mercado desde já.",
    button: {
        type: "link",
      text: "Ver detalhes",
      href: "/beneficios?c=1",
    },
    modal: null,
  },
  {
    name: "Financeiro",
    category: "Outros Benefícios",
    image: "/projects/financeiro.png",
    summary:
      "Seu dinheiro vale mais aqui! No CREA Jr-SC você tem acesso a descontos, cashback, cooperativa de crédito e benefícios que ajudam no seu crescimento sem pesar no bolso.",
    button: {
         type: "link",
      text:"Ver detalhes",
      href: "/beneficios?c=4",
    },
    modal: null,
  },
  {
    name: "Saúde e Qualidade de Vida",
    category: "Outros Benefícios",
    image: "/projects/saude.png",
    summary:
      "Cuidar de você também faz parte da jornada!Membros do CREA Jr-SC têm acesso a plano de saúde com cobertura nacional e descontos de até 25% pra viver com mais segurança e qualidade.",
    button: {
      type: "link",
      text: "Ver detalhes",
      href: "/beneficios?c=2",
    },
    modal: {
      description: `Cuidar de você também faz parte da jornada!Membros do CREA Jr-SC têm acesso a plano de saúde com cobertura nacional e descontos de até 25% pra viver com mais segurança e qualidade.`,
      list: {
        title: "Benefícios",
        download:
          "https://www.renfe.com/content/dam/renfe/es/General/PDF-y-otros/Ejemplo-de-descarga-pdf.pdf",
        items: [
          {
            active: true,
            image:
              "/projects/list/sistema-profissional/entidades-de-classe.jpg",
            title: "UNIMED",
            description: `Plano de saúde que oferece abrangência nacional, cobertura completa nas segmentações com descontos de até 25% nas mensalidades para membros do CREA Jr-SC.`,
            tags: {
              project: "",
              date: [],
              hour: "",
              region: ["Benefício Estadual"],
            },
            href: "#",
            gallery: [],
            testimonials: [],
            company: {
              name: "",
              logo: "",
              description: "",
              socialmedia: { instagram: "", linkedin: "" },
              contact: { address: "", website: "" },
            },
          },
        ],
      },
    },
  },
];
