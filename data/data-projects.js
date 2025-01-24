export const dataProjects = [
  // Template
  {
    name: "",
    category: "",
    image: "",
    summary: "",
    button: {
      type: "link",
      text: "",
      href: "#",
    },
    modal: {
      description: ``,
      list: {
        title: "",
        download: null,
        items: [
          {
            image: "",
            title: "",
            description: ``,
            tags: { project: "", date: [], hour: "", region: "" },
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

  // Mercado de Trabalho
  {
    name: "Oportunidades de emprego",
    category: "Mercado de Trabalho",
    image: "/projects/oportunidades-de-emprego.jpg",
    summary:
      "Conectamos você às melhores oportunidades no mercado por meio de vagas identificadas pelo CREA-SC e cadastradas pelas empresas registradas!",
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
      "Participe de hackathons e competições para resolver desafios reais das áreas do Crea. Conquiste prêmios, desenvolva seu projeto e conecte-se a investidores!",
    button: {
      type: null,
      text: "",
      href: "#",
    },
    modal: null,
  },

  // Desenvolvimento Profissional
  {
    name: "Circuito de Palestras",
    category: "Desenvolvimento Profissional",
    image: "/projects/circuito-de-palestras.jpg",
    summary:
      "Participe de palestras e eventos exclusivos que conectam você a empresas, desenvolvem habilidades e preparam para o mercado com conteúdos inovadores e networking estratégico!",
    button: {
      type: "modal",
      text: "Ver detalhes",
      href: "#",
    },
    modal: {
      description: `Venha se preparar para o mercado com simulações de entrevistas, conexões estratégicas com empresas e networking em eventos focados em inovações e tendências do setor.
Participe de trilhas de aprendizado práticas, desenvolva habilidades técnicas e interpessoais, como liderança e comunicação, e amplie suas oportunidades profissionais.
Descubra como o Sistema Confea/Crea funciona, fortaleça sua profissão com conhecimento e protagonismo, e faça parte de uma geração que transforma o mercado!`,
      list: {
        title: "Eventos",
        download: null,
        items: [
          {
            image: "/projects/head-energia/banner.png",
            title:
              "SOON - Setor Elétrico: Oportunidades e Orientações para a Nova Geração",
            description: `O SOON é um curso gratuito, desenvolvido em parceria com a Head Energia, exclusivo para registrados no CREA-SC. Nesta formação, você explorará o Setor Elétrico e suas inúmeras oportunidades de atuação, tanto diretamente na Engenharia quanto em áreas relacionadas. Serão 4 aulas ao vivo, online, realizadas todas as segundas-feiras de fevereiro de 2025, sempre às 19h07. Não perca! Clique aqui e descubra mais sobre essa oportunidade única.`,
            tags: {
              project:
                "SOON - Setor Elétrico: Oportunidades e Orientações para a Nova Geração",
              date: ["03/02/2025", "10/02/2025", "17/02/2025", "24/02/2025"],
              hour: "19:00h",
              region: null,
            },
            href: "/circuito-de-palestras",
            gallery: [],
            testimonials: [],
            company: {
              name: "Head Energia",
              logo: "/projects/head-energia/logotipo.png",
              description:
                "A Head Energia é a plataforma on-line para você avançar na sua carreira no Setor Elétrico. Nosso portfólio completo de capacitação é a ponte para você entender e aumentar sua relevância no mundo corporativo. Nossa comunidade fortalecerá seu networking com os profissionais mais atuantes e comprometidos do setor, de estagiários a CEOs de multinacionais.",
              socialmedia: {
                instagram: "https://www.instagram.com/head.energia/", // IMPORTANT: Always we need to put "https://"
                linkedin: "https://www.linkedin.com/school/head-energia/", // IMPORTANT: Always we need to put "https://"
              },
              contact: {
                address: "Online pelo Zoom",
                website: "https://www.headenergia.net", // IMPORTANT: Always we need to put "https://"
              },
            },
          },
        ],
      },
    },
  },
  {
    name: "Visitas Técnicas",
    category: "Desenvolvimento Profissional",
    image: "/projects/visitas-tecnicas.jpg",
    summary:
      "Participe de visitas técnicas, mesas-redondas com líderes e reuniões nas Entidades de Classe. Conecte-se, aprenda na prática e contribua para o futuro da sua profissão!",
    button: {
      type: "link",
      text: "Ver detalhes",
      href: "/em-breve",
    },
    modal: null,
  },
  {
    name: "Mentorias",
    category: "Desenvolvimento Profissional",
    image: "/projects/mentorias.jpg",
    summary:
      "Conecte-se a mentores experientes que oferecem orientação personalizada em carreira, gestão, inovação e desafios do setor, impulsionando seu crescimento profissional!",
    button: {
      type: "link",
      text: "Ver mentores",
      href: "/mentorias",
    },
    modal: null,
  },
  {
    name: "Formação em Novas Habilidades",
    category: "Desenvolvimento Profissional",
    image: "/projects/formacao-em-novas-habilidades.jpg",
    summary:
      "Desenvolva novas habilidades técnicas e amplie suas oportunidades de atuação no mercado de trabalho!",
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
      "Desenvolva novas habilidades técnicas e amplie suas oportunidades de atuação no mercado de trabalho!",
    button: {
      type: null,
      text: "",
      href: "#",
    },
    modal: null,
  },
  {
    name: "Validação de Negócio",
    category: "Formação de Empreendedores",
    image: "/projects/validacao-de-negocio.jpg",
    summary:
      "Transforme sua ideia em realidade com uma trilha completa: da ideação à validação! Participe de workshops, conecte-se a investidores, incubadoras e aceleradoras!",
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
      "Explore o Sistema Confea/Crea com um guia prático que explica suas responsabilidades e como você, jovem profissional, pode participar e influenciar positivamente sua profissão!",
    button: {
      type: null,
      text: "Ver detalhes",
      href: "#",
    },
    modal: {
      description: `Conecte-se ao Sistema Confea/Crea! Entenda sua estrutura, funções e participe ativamente para fortalecer o Conselho. Aprenda sobre legislação, ética e valorização profissional enquanto se integra às Entidades de Classe. 
Transforme conhecimento em impacto!`,
      list: {
        title: "Vídeos",
        download:
          "https://www.renfe.com/content/dam/renfe/es/General/PDF-y-otros/Ejemplo-de-descarga-pdf.pdf",
        items: [
          {
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
    name: "Comunidade Profissional",
    category: "Comunidade Profissional",
    image: "/projects/comunidade-profissional.jpg",
    summary:
      "Participe de fóruns online e grupos de discussão para compartilhar ideias, melhorar o sistema e engajar-se em iniciativas de crescimento e inovação na sua profissão!",
    button: {
      type: null,
      text: "",
      href: "#",
    },
    modal: null,
  },
];
