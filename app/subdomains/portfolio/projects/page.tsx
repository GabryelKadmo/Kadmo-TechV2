"use client";

import { ExternalLink, Github, Linkedin, Globe, Mail } from "lucide-react";
import Image from "next/image";
import { useLocale } from "../contexts/LocaleContext";
import { translations } from "../locales/translations";
import { projects } from "@/data/projects";
import Breadcrumb from "../components/Breadcrumb";

export default function ProjectsPage() {
    const { locale } = useLocale();
    const t = translations[locale];

    // Filtra apenas projetos com featured: true
    const displayProjects = projects.filter(p => p.featured);

    return (
        <>
            <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 sm:mb-16">
                        <Breadcrumb customLabel="portfolio" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {t.projects.title}
                        </h1>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {displayProjects.map((project) => (
                            <article
                                key={project.id}
                                className="group relative bg-zinc-900/50 border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-zinc-900"
                            >
                                {/* Image with overlay */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                                    <Image
                                        src={project.images.thumbnail}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-5 sm:p-6">
                                    {/* Category & Year */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <span className="text-xs sm:text-sm font-mono text-white/50">
                                            {project.dates.started.split('-')[0]}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                                        {project.name}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                                        {project.shortDescription}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] sm:text-xs text-white/70 font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-0.5 text-[10px] sm:text-xs text-white/50 font-mono">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200 hover:bg-white/90 group/btn"
                                        >
                                            <span>{t.projects.viewProject}</span>
                                            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Empty State */}
                    {displayProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-block border border-white/20 bg-zinc-900/50 backdrop-blur-sm px-12 py-8">
                                <p className="text-xl font-semibold text-white/80">
                                    {locale === "pt" ? "Em breve..." : "Coming soon..."}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 mt-12 sm:mt-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 sm:py-12">
                    <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
                        {/* Slogan */}
                        <p className="text-gray-400 text-sm italic">
                            {t.footer.slogan}
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/gabryelkadmo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/gabryel-kadmo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.kadmo.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                aria-label="Website"
                            >
                                <Globe className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:gabryelkadmo@gmail.com"
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Gabryel Kadmo. {t.footer.copyright}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}