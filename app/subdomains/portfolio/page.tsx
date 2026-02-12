"use client";

import { Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import TableOfContents from "./components/TableOfContents";
import Timeline from "./components/Timeline";
import { useLocale } from "./contexts/LocaleContext";
import { translations } from "./locales/translations";

export default function PortfolioPage() {
    const { locale } = useLocale();
    const t = translations[locale];

    const sections = [
        { id: "introduction", title: t.sections.introduction },
        { id: "work-experience", title: t.sections.workExperience },
        { id: "studies", title: t.sections.studies },
        { id: "technical-skills", title: t.sections.technicalSkills },
    ];

    return (
        <>
            <TableOfContents items={sections} />

            <div className="pt-20 sm:pt-24 px-4 lg:px-8">
                {/* Mobile Profile Header */}
                <div className="lg:hidden max-w-3xl mx-auto mb-8">
                    <div className="flex items-center gap-4 pt-10">
                        {/* Avatar */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                            <Image
                                src="/logo/Kadmo-logo-monke-no-bg.png"
                                alt="Profile"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            {/* Location */}
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span>{t.profile.location}</span>
                            </div>
                            {/* Languages */}
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                    {t.profile.languages.portuguese}
                                </span>
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                    {t.profile.languages.english}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto flex gap-12">
                    {/* Profile Sidebar - Sticky (Desktop only) */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-32 flex flex-col items-center gap-4">
                            {/* Avatar */}
                            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-white/10">
                                <Image
                                    src="/logo/Kadmo-logo-monke-no-bg.png"
                                    alt="Profile"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span>{t.profile.location}</span>
                            </div>

                            {/* Languages */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                    {t.profile.languages.portuguese}
                                </span>
                                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                    {t.profile.languages.english}
                                </span>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 max-w-3xl mx-auto lg:mx-0">
                        {/* Hero Section */}
                        <section id="introduction" className="min-h-auto py-1 sm:py-20 flex items-center">
                            <div>
                                {/* Schedule Badge */}
                                {/* <a
                                    href="https://cal.com/gabriyelkadmo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 w-fit mb-8 px-4 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 hover:bg-blue-500/20 transition-all duration-200 backdrop-blur-sm group"
                                >
                                    <Calendar className="w-5 h-5" />
                                    <span className="text-sm font-medium">{t.hero.scheduleCall}</span>
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a> */}

                                {/* Name and Title */}
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 text-white bg-clip-text">
                                    Gabryel Kadmo
                                </h1>
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8">
                                    {t.hero.role}
                                </p>

                                {/* Social Links */}
                                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
                                    <a
                                        href="https://github.com/gabryelkadmo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-gray-300 hover:text-white"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span className="text-sm font-medium">{t.social.github}</span>
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/gabryel-kadmo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-gray-300 hover:text-white"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        <span className="text-sm font-medium">{t.social.linkedin}</span>
                                    </a>
                                    <a
                                        href="https://www.kadmo.com.br/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-gray-300 hover:text-white"
                                    >
                                        <Globe className="w-4 h-4" />
                                        <span className="text-sm font-medium">{t.social.website}</span>
                                    </a>
                                    <a
                                        href="mailto:gabryelkadmo@gmail.com"
                                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-gray-300 hover:text-white"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span className="text-sm font-medium">{t.social.email}</span>
                                    </a>
                                </div>

                                {/* Biography */}
                                <div className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-3 sm:space-y-4">
                                    <p>
                                        {t.hero.bio1}
                                    </p>
                                    <p>
                                        {t.hero.bio2}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Work Experience Section */}
                        <section id="work-experience" className="min-h-auto flex flex-col justify-center py-12 sm:py-20">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-white uppercase tracking-tight">
                                {t.work.title}
                            </h2>

                            <Timeline
                                items={t.work.experiences.map((exp, idx) => ({
                                    company: exp.company,
                                    role: exp.role,
                                    period: exp.period,
                                    achievements: exp.achievements,
                                    isLast: idx === t.work.experiences.length - 1,
                                }))}
                            />
                        </section>

                        {/* Studies Section */}
                        <section id="studies" className="min-h-auto flex flex-col justify-center py-12 sm:py-20">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-white uppercase tracking-tight">
                                {t.studies.title}
                            </h2>

                            <div className="border-2 border-white bg-black p-4 sm:p-6 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                                    {t.studies.ufba.name}
                                </h3>
                                <p className="text-white/60 font-mono text-sm">{t.studies.ufba.description}</p>
                            </div>
                        </section>

                        {/* Technical Skills Section */}
                        <section id="technical-skills" className="min-h-auto flex flex-col justify-center py-12 sm:py-20">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-white uppercase tracking-tight">
                                {t.technical.title}
                            </h2>

                            <div className="space-y-8 sm:space-y-12">
                                {/* Front-end */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 uppercase tracking-tight">
                                        {t.technical.frontend.title}
                                    </h3>
                                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                                        {t.technical.frontend.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {Object.values(t.technical.frontend.tags).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Back-end & Database */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 uppercase tracking-tight">
                                        {t.technical.backend.title}
                                    </h3>
                                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                                        {t.technical.backend.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {Object.values(t.technical.backend.tags).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools & Methodologies */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 uppercase tracking-tight">
                                        {t.technical.tools.title}
                                    </h3>
                                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                                        {t.technical.tools.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {Object.values(t.technical.tools.tags).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
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
