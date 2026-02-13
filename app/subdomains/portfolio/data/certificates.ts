export interface Certificate {
  id: string;
  title: string;
  institution: string;
  date: string;
  pdfUrl: string;
  pdfThumbnail?: string;
  category: "certificate" | "diploma";
  hours?: string;
  tags?: string[];
}

export const certificates: Certificate[] = [
  {
    id: "diploma-1642.30.dee9d41c98ae",
    title: "Bacharelado em Sistemas de Informação",
    institution: "UniFTC",
    date: "2025",
    pdfUrl: "/portfolio/gallery/degree/Gabryel Kadmo-diploma.pdf",
    pdfThumbnail: "/portfolio/gallery/degree/degree-thumb.jpg",
    category: "diploma",
    tags: ["Graduação", "Sistemas de Informação", "UniFTC"],
  },
  {
    id: "certificate-1",
    title: "Consumindo API de Lista de Tarefas",
    institution: "UniFTC",
    date: "2025",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado - Consumindo API de Lista de Tarefas.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado - Consumindo API de Lista de Tarefas-1.png",
    category: "certificate",
    tags: ["API", "Backend", "UniFTC"],
  },
  {
    id: "certificate-2",
    title: "Criando uma API de lista de tarefas com Nest.js e MongoDB",
    institution: "UniFTC",
    date: "2025",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado - Criando uma API de lista de tarefas com Nest.js e MongoDB.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado - Criando uma API de lista de tarefas com Nest.js e MongoDB-1.png",
    category: "certificate",
    tags: ["Nest.js", "MongoDB", "Backend", "UniFTC"],
  },
  {
    id: "certificate-3",
    title: "Desenvolvendo um Protótipo de uma Lista de Tarefas",
    institution: "UniFTC",
    date: "2025",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado - Desenvolvendo um Protótipo de uma Lista de Tarefas.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado - Desenvolvendo um Protótipo de uma Lista de Tarefas-1.png",
    category: "certificate",
    tags: ["Protótipo", "Design", "UniFTC"],
  },
  {
    id: "certificate-4",
    title:
      "II Ciclo de Oficinas - Criando Protótipos Interativos com o Figma",
    institution: "UniFTC",
    date: "2025",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado - II Ciclo de Oficinas - Criando Protótipos Interativos com o Figma 2.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado - II Ciclo de Oficinas - Criando Protótipos Interativos com o Figma 2-1.png",
    category: "certificate",
    tags: ["Figma", "UI/UX", "Design", "UniFTC"],
  },
  {
    id: "certificate-5",
    title: " Starterjs: Criando Jogos com Javascript",
    institution: "UniFTC",
    date: "2025",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado - II Ciclo de Oficinas - JS.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado - II Ciclo de Oficinas - JS-1.png",
    category: "certificate",
    tags: ["JavaScript", "Frontend", "UniFTC"],
  },
  {
    id: "certificate-6",
    title: "II Ciclo de Oficinas - Pitch",
    institution: "UniFTC",
    date: "2025",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado - II Ciclo de Oficinas - pitch.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado - II Ciclo de Oficinas - pitch-1.png",
    category: "certificate",
    tags: ["Pitch", "Empreendedorismo", "UniFTC"],
  },
  {
    id: "certificate-7",
    title: "Programação para jogos mobile",
    institution: "UniFTC",
    date: "2025",
    pdfUrl: "/portfolio/gallery/certificates/Programação para jogos mobile.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Programação para jogos mobile-1.png",
    category: "certificate",
    tags: ["UniFTC", "Curso", "Game Dev"],
  },
  {
    id: "certificate-8",
    title: "II Congresso de Sistemas de Informação - UNEX",
    institution: "UNEX - Itabuna",
    date: "2024",
    pdfUrl:
      "/portfolio/gallery/certificates/CERTIFICADO - II CONGRESSO DE SISTEMAS DE INFORMAÇÃO - Gabryel Kadmo Santos de Lucena - UNEX - Itabuna.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/CERTIFICADO - II CONGRESSO DE SISTEMAS DE INFORMAÇÃO - Gabryel Kadmo Santos de Lucena - UNEX - Itabuna-1.png",
    category: "certificate",
    tags: ["Congresso", "SI", "UNEX"],
  },
  {
    id: "certificate-9",
    title: "Certificado Angular",
    institution: "Curso Online",
    date: "2024",
    pdfUrl: "/portfolio/gallery/certificates/Certificado Angular.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado Angular-1.png",
    category: "certificate",
    tags: ["Angular", "Frontend", "TypeScript"],
  },
  {
    id: "certificate-10",
    title: "Certificado de Conclusão TI",
    institution: "Instituição",
    date: "2024",
    pdfUrl: "/portfolio/gallery/certificates/Certificado de conclusão TI.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado de conclusão TI-1.png",
    category: "certificate",
    tags: ["TI", "Tecnologia"],
  },
  {
    id: "certificate-11",
    title: "Certificado Git",
    institution: "Curso Online",
    date: "2024",
    pdfUrl: "/portfolio/gallery/certificates/certificado git.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/certificado git-1.png",
    category: "certificate",
    tags: ["Git", "Versionamento"],
  },
  {
    id: "certificate-12",
    title: "Integra SI - 20 horas",
    institution: "UniFTC",
    date: "2024",
    pdfUrl: "/portfolio/gallery/certificates/Certificado Integra SI 20hrs.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado Integra SI 20hrs-1.png",
    category: "certificate",
    hours: "20h",
    tags: ["SI", "UniFTC"],
  },
  {
    id: "certificate-13",
    title: "Node.js, Express, MongoDB e SQL",
    institution: "Curso Online",
    date: "2024",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado Node, express, mongo, sql.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado Node, express, mongo, sql-1.png",
    category: "certificate",
    tags: ["Node.js", "Express", "MongoDB", "SQL", "Backend"],
  },
  {
    id: "certificate-14",
    title: "React.js com TypeScript",
    institution: "Curso Online",
    date: "2024",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado React Js Typescript.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado React Js Typescript-1.png",
    category: "certificate",
    tags: ["React", "TypeScript", "Frontend"],
  },
  {
    id: "certificate-15",
    title: "I Congresso de Sistemas de Informação",
    institution: "UNEX",
    date: "2023",
    pdfUrl: "/portfolio/gallery/certificates/Certificado-CONGRESSO I.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado-CONGRESSO I-1.png",
    category: "certificate",
    tags: ["Congresso", "SI", "UNEX"],
  },
  {
    id: "certificate-16",
    title: "I Congresso - Prof. Dely",
    institution: "UNEX",
    date: "2023",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado-Congresso- prof dely I.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado-Congresso- prof dely I-1.png",
    category: "certificate",
    tags: ["Congresso", "UNEX"],
  },
  {
    id: "certificate-17",
    title: "I Congresso - Prof. Pedro",
    institution: "UNEX",
    date: "2023",
    pdfUrl:
      "/portfolio/gallery/certificates/Certificado-Congresso- prof Pedro I.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado-Congresso- prof Pedro I-1.png",
    category: "certificate",
    tags: ["Congresso", "UNEX"],
  },
  {
    id: "certificate-18",
    title: "Certificado Mikrotik",
    institution: "Curso Online",
    date: "2023",
    pdfUrl: "/portfolio/gallery/certificates/Certificado-mikrotik.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Certificado-mikrotik-1.png",
    category: "certificate",
    tags: ["Mikrotik", "Redes"],
  },
  {
    id: "certificate-19",
    title: "Certificados Diversos 2020",
    institution: "Diversos",
    date: "2020",
    pdfUrl: "/portfolio/gallery/certificates/certificados kadmo-20.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/certificados kadmo-20-1.png",
    category: "certificate",
    tags: ["Diversos"],
  },
  // {
  //   id: "certificate-20",
  //   title: "Certificados Diversos 2021",
  //   institution: "Diversos",
  //   date: "2021",
  //   pdfUrl: "/portfolio/gallery/certificates/certificados kadmo-21.pdf",
  //   pdfThumbnail:
  //     "/portfolio/gallery/certificates/thumbnails/certificados kadmo-21-1.png",
  //   category: "certificate",
  //   tags: ["Diversos"],
  // },
  // {
  //   id: "certificate-21",
  //   title: "Certificados Diversos 2022",
  //   institution: "Diversos",
  //   date: "2022",
  //   pdfUrl: "/portfolio/gallery/certificates/certificados kadmo-22.pdf",
  //   pdfThumbnail:
  //     "/portfolio/gallery/certificates/thumbnails/certificados kadmo-22-1.png",
  //   category: "certificate",
  //   tags: ["Diversos"],
  // },
  {
    id: "certificate-22",
    title: "Certificados Diversos 2023",
    institution: "Diversos",
    date: "2023",
    pdfUrl: "/portfolio/gallery/certificates/certificados kadmo-23.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/certificados kadmo-23-1.png",
    category: "certificate",
    tags: ["Diversos"],
  },
  {
    id: "certificate-23",
    title: "Certificados Diversos 2024",
    institution: "Diversos",
    date: "2024",
    pdfUrl: "/portfolio/gallery/certificates/certificados kadmo-24.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/certificados kadmo-24-1.png",
    category: "certificate",
    tags: ["Diversos"],
  },
  {
    id: "certificate-24",
    title: "Desenvolvendo Jogos 2D com Scratch",
    institution: "Curso Online",
    date: "2023",
    pdfUrl:
      "/portfolio/gallery/certificates/Desenvolvendo jogos 2D com Scratch.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Desenvolvendo jogos 2D com Scratch-1.png",
    category: "certificate",
    tags: ["Scratch", "Game Dev"],
  },
  {
    id: "certificate-25",
    title: "Java - Curso em Vídeo",
    institution: "Curso em Vídeo",
    date: "2023",
    pdfUrl: "/portfolio/gallery/certificates/Java curso em video.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/Java curso em video-1.png",
    category: "certificate",
    tags: ["Java", "Programação"],
  },
  {
    id: "certificate-26",
    title: "React - Zero à Maestria",
    institution: "Udemy",
    date: "2024",
    pdfUrl: "/portfolio/gallery/certificates/REACT-ZERO-A-MAESTRIA.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/REACT-ZERO-A-MAESTRIA-1.png",
    category: "certificate",
    tags: ["React", "Frontend", "Udemy"],
  },
  {
    id: "certificate-27",
    title: "Node.js - 38 horas",
    institution: "Udemy",
    date: "2024",
    pdfUrl: "/portfolio/gallery/certificates/udemy node 38hrs.pdf",
    pdfThumbnail:
      "/portfolio/gallery/certificates/thumbnails/udemy node 38hrs-1.png",
    category: "certificate",
    hours: "38h",
    tags: ["Node.js", "Backend", "Udemy"],
  },
];
