import { ExternalLink, Github } from "lucide-react";

interface Template {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  featured?: boolean;
}

const templates: Template[] = [
  {
    title: "Next.js + Tailwind + shadcn/ui",
    description:
      "Template completo e production-ready com Next.js 15 (App Router), Tailwind CSS v4 e shadcn/ui pré-configurados. O mais utilizado para projetos web modernos.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    repoUrl: "https://github.com/GabryelKadmo/Template-NextJs-shadcn-tailwind",
    featured: true,
  },
  {
    title: "React + Tailwind + shadcn/ui",
    description:
      "Template com Vite + React, Tailwind CSS e shadcn/ui configurados. Ideal para SPAs e projetos que não precisam de SSR.",
    tags: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    repoUrl: "https://github.com/GabryelKadmo/Template-React.tsx-Tailwind-Shadcn",
  },
  {
    title: "React Native + TypeScript",
    description:
      "Template para aplicações mobile com React Native e TypeScript. Configuração limpa e pronta para começar a desenvolver.",
    tags: ["React Native", "TypeScript", "Expo"],
    repoUrl: "https://github.com/GabryelKadmo/Template-React-Native-Typescript",
  },
];

export default function TemplatesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4">
          Templates
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl">
          Boilerplates prontos para uso. Todos em{" "}
          <span className="text-white font-medium">TypeScript</span> e
          disponíveis no GitHub.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <a
            key={template.title}
            href={template.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col border-2 border-white bg-black p-6 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200"
          >
            {/* Featured badge */}
            {template.featured && (
              <span className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 border border-white/30 text-white/60 uppercase tracking-widest">
                mais usado
              </span>
            )}

            {/* Icon */}
            <div className="mb-4 flex items-center gap-3">
              <Github className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight mb-3 leading-snug">
              {template.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
              {template.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {template.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-16 text-center text-sm text-white/30 font-mono">
        {`// todos os templates são open source e mantidos ativamente`}
      </p>
    </div>
  );
}

