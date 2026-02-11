export interface Project {
  id: string;
  name: string;
  slug: string;

  // Descrições
  description: string; // Descrição completa
  shortDescription: string; // Descrição curta (para cards)

  // Links
  link?: string; // Link do projeto ao vivo
  github?: string; // Repositório

  // Imagens
  images: {
    thumbnail: string; // Imagem principal (card/preview)
    cover?: string; // Imagem de capa (página de detalhes)
    gallery: string[]; // Galeria de screenshots
  };

  // Tecnologias e categorização
  technologies: string[];
  category: "web" | "mobile" | "design" | "other";
  tags?: string[]; // Tags extras (ex: "freelance", "pessoal", "open-source")

  // Status e destaque
  featured: boolean;
  status: "completed" | "in-progress" | "archived";

  // Datas
  dates: {
    started: string; // Quando começou (ex: "2025-06")
    finished?: string; // Quando terminou (null se em andamento)
    duration?: string; // Duração legível (ex: "2 meses")
  };

  // Detalhes extras (para página de detalhes)
  details: {
    purpose: string; // Qual o intuito/objetivo do projeto
    challenge?: string; // Qual foi o maior desafio
    solution?: string; // Como você resolveu
    learnings: string[]; // O que aprendeu (lista)
    highlights?: string[]; // Destaques/features principais
    role?: string; // Seu papel no projeto (ex: "Desenvolvedor Full-stack", "UI Designer")
    client?: string; // Cliente (se foi freelance)
    teamSize?: number; // Tamanho da equipe (1 = solo)
  };

  // SEO (para meta tags na página de detalhes)
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "1",
    name: "WebSite MX2TECH",
    slug: "MX2TECH",
    description:
      "Transformação digital completa da MX2TECH. O projeto consistiu em traduzir a expertise técnica da empresa em uma interface de alta performance, utilizando animações fluidas para guiar o usuário através da jornada de serviços.",
    shortDescription:
      "Plataforma corporativa de alta performance com estética futurista",
    link: "https://mx2tech.com.br",
    github: "",
    images: {
      thumbnail: "/projects/mx2tech/thumbnail.png",
      cover: "/projects/mx2tech/cover.png",
      gallery: [
        "/projects/mx2tech/mx2tech-01.png",
        "/projects/mx2tech/mx2tech-02.png",
        "/projects/mx2tech/mx2tech-03.png",
      ],
    },
    technologies: ["Exemplo", "Exemplo", "Exemplo"],
    category: "web", // "web" | "mobile" | "design" | "other"
    tags: [
      "web",
      "landing page",
      "corporativo",
      "empresa",
      "tecnologia",
      "moderno",
    ],
    featured: true,
    status: "in-progress", // "completed" | "in-progress" | "archived"
    dates: {
      started: "2025-11",
      finished: "2026-01",
      duration: "2 meses",
    },
    details: {
      purpose:
        "Reposicionar a MX2TECH como líder em soluções tech, substituindo um site estático por uma plataforma dinâmica que serve como ferramenta de vendas e vitrine de autoridade.",
      challenge:
        "A harmonização de uma identidade visual densa e 'dark mode' com a necessidade de um Score de acessibilidade alto e carregamento instantâneo (LCP < 1.2s).",
      solution:
        "Implementação de arquitetura baseada em componentes modulares com Next.js, utilizando otimização de imagens agressiva e animações baseadas no scroll para manter o engajamento sem sobrecarregar a CPU do usuário.",
      learnings: [
        "Estratégias avançadas de 'Content-Visibility' para renderização de páginas longas.",
        "Comunicação visual voltada para o mercado B2B de tecnologia.",
        "Otimização de conversão (CRO) aplicada ao layout de formulários.",
      ],
      highlights: [
        "Navegação intuitiva com foco em UX Writing.",
        "Performance impecável comprovada pelo Lighthouse.",
        "Estrutura de SEO que posicionou a marca para termos chave do setor.",
      ],
      role: "Desenvolvedor Front-end & UX Designer",
      client: "MX2TECH",
      teamSize: 14,
    },
    seo: {
      title: "MX2TECH | Fábrica de Software",
      description:
        "A MX2TECH é uma fábrica de software especializada em soluções personalizadas para empresas de todos os portes. Com uma equipe altamente qualificada e uma abordagem centrada no cliente, a MX2TECH entrega projetos inovadores que impulsionam o crescimento e a transformação digital dos seus clientes.",
      keywords: [
        "desenvolvimento web",
        "software house",
        "soluções tech",
        "mx2tech",
        "nextjs",
      ],
    },
  },
  {
    id: "999",
    name: "Lorem Ipsum",
    slug: "LOREM IPSUM",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    shortDescription:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    link: "https://exemplo.com",
    github: "https://github.com/GabryelKadmo/exemplo",
    images: {
      thumbnail: "/projects/exemplo/thumbnail.png",
      cover: "/projects/exemplo/cover.png",
      gallery: [
        "/projects/exemplo/exemplo-01.png",
        "/projects/exemplo/exemplo-02.png",
        "/projects/exemplo/exemplo-03.png",
      ],
    },
    technologies: ["Exemplo", "Exemplo", "Exemplo"],
    category: "other", // "web" | "mobile" | "design" | "other"
    tags: ["exemplo"],
    featured: false,
    status: "completed", // "completed" | "in-progress" | "archived"
    dates: {
      started: "2025-11",
      finished: "2026-01",
      duration: "2 meses",
    },
    details: {
      purpose: "Exemplificar como preencher dados do projeto no arquivo data",
      challenge:
        "Descrever o maior desafio enfrentado durante o desenvolvimento do projeto",
      solution:
        "Descrever como você resolveu o desafio enfrentado durante o desenvolvimento do projeto",
      learnings: [
        "O que você aprendeu durante o desenvolvimento do projeto",
        "O que você aprendeu durante o desenvolvimento do projeto",
      ],
      highlights: [
        "Destaque 1 do projeto",
        "Destaque 2 do projeto",
        "Destaque 3 do projeto",
      ],
      role: "Desenvolvedor Front-end",
      client: "Exemplo Inc.",
      teamSize: 1,
    },
    seo: {
      title: "Exemplo - Desenvolvimento de Projeto",
      description:
        "Exemplo é um projeto desenvolvido para exemplificar como preencher os dados do projeto no arquivo data. Ele foi criado utilizando tecnologias de ponta e seguiu as melhores práticas de desenvolvimento.",
      keywords: ["Exemplo", "Exemplo"],
    },
  },
];

// Helpers para filtrar projetos
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getRecentProjects = (limit: number = 3) =>
  [...projects]
    .sort((a, b) => {
      const dateA = a.dates.finished || a.dates.started;
      const dateB = b.dates.finished || b.dates.started;
      return dateB.localeCompare(dateA);
    })
    .slice(0, limit);

export const getProjectsByTag = (tag: string) =>
  projects.filter((p) => p.tags?.includes(tag));

export const getAllTags = () => {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
  return Array.from(tags);
};
