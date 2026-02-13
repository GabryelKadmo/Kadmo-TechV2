"use client";

import { useState } from "react";
import { useLocale } from "../contexts/LocaleContext";
import { translations } from "../locales/translations";
import Breadcrumb from "../components/Breadcrumb";
import { certificates, Certificate } from "../data/certificates";
import { Calendar, Award, Clock, FileText, Download, X, Github, Linkedin, Globe, Mail } from "lucide-react";
import Image from "next/image";

export default function GalleryPage() {
    const { locale } = useLocale();
    const t = translations[locale];
    const [selectedCategory, setSelectedCategory] = useState<'all' | Certificate['category']>('all');
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

    const filteredCertificates = selectedCategory === 'all'
        ? certificates
        : certificates.filter(cert => cert.category === selectedCategory);

    const categoryButtons: Array<{ key: 'all' | Certificate['category'], label: string }> = [
        { key: 'all', label: t.gallery.categories.all },
        { key: 'certificate', label: t.gallery.categories.certificate },
        { key: 'diploma', label: t.gallery.categories.diploma },
        // { key: 'achievement', label: t.gallery.categories.achievement },
    ];

    return (
        <>
            <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 sm:mb-16">
                        <Breadcrumb customLabel="gallery" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                            {t.gallery.title}
                        </h1>
                        <p className="text-lg text-gray-400">
                            {t.gallery.subtitle}
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="mb-8 flex flex-wrap gap-3">
                        {categoryButtons.map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => setSelectedCategory(key)}
                                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${selectedCategory === key
                                    ? 'bg-white text-black'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Certificates Grid */}
                    {filteredCertificates.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCertificates.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.02] flex flex-col"
                                >
                                    {/* PDF Icon Preview */}
                                    <div className="relative aspect-[4/3] bg-gradient-to-br from-zinc-900 to-zinc-800 overflow-hidden flex items-center justify-center">
                                        {cert.pdfThumbnail ? (
                                            <Image
                                                src={cert.pdfThumbnail}
                                                alt={cert.title}
                                                className="object-cover"
                                                fill
                                            />
                                        ) : (
                                            <FileText className="w-24 h-24 text-white/20 group-hover:text-white/30 transition-colors" />
                                        )}

                                        {/* Category Badge */}
                                        <div className="absolute top-3 right-3">
                                            <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                                                {t.gallery.categories[cert.category]}
                                            </span>
                                        </div>

                                        {/* View Button Overlay */}
                                        <button
                                            onClick={() => setSelectedPdf(cert.pdfUrl)}
                                            className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                                        >
                                            <span className="px-4 py-2 bg-white text-black rounded-lg font-medium">
                                                {t.gallery.viewCertificate}
                                            </span>
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                                            {cert.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                                            <Award className="w-4 h-4" />
                                            <span>{cert.institution}</span>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" />
                                                <span>{cert.date}</span>
                                            </div>
                                            {cert.hours && (
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{cert.hours}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Tags */}
                                        {cert.tags && cert.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {cert.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Actions */}
                                        <div className="flex gap-2 mt-auto">
                                            <button
                                                onClick={() => setSelectedPdf(cert.pdfUrl)}
                                                className="flex-1 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                                            >
                                                {locale === 'pt' ? 'Visualizar' : 'View'}
                                            </button>
                                            <a
                                                href={cert.pdfUrl}
                                                download
                                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                                            >
                                                <Download className="w-4 h-4 text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-block border border-white/20 bg-zinc-900/50 backdrop-blur-sm px-12 py-8 rounded-xl">
                                <p className="text-xl font-semibold text-white/80">
                                    {t.gallery.empty}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* PDF Modal */}
            {selectedPdf && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPdf(null)}
                >
                    <div
                        className="relative w-full h-full max-w-6xl max-h-[90vh] bg-zinc-900 rounded-xl overflow-hidden border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="absolute top-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-sm border-b border-white/10 p-4 flex items-center justify-between z-10">
                            <h3 className="text-white font-medium">
                                {locale === 'pt' ? 'Visualizar Certificado' : 'View Certificate'}
                            </h3>
                            <button
                                onClick={() => setSelectedPdf(null)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* PDF Viewer */}
                        <div className="w-full h-full pt-16">
                            <iframe
                                src={selectedPdf}
                                className="w-full h-full"
                                title="PDF Viewer"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="portfolio-footer border-t border-white/10 mt-12 sm:mt-20">
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
