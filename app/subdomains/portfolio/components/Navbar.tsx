'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Briefcase, Images, Globe, LayoutTemplate } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';
import { translations } from '../locales/translations';
import { useSubdomainUrls } from '@/lib/useSubdomainUrls';

export default function Navbar() {
    const pathname = usePathname();
    const { locale, toggleLocale } = useLocale();
    const t = translations[locale];
    const urls = useSubdomainUrls();

    return (
        <>
            {/* Desktop Navigation - Top */}
            <header className="hidden md:block fixed top-4 left-0 right-0 z-50 px-4">
                <div className="max-w-full mx-auto flex items-center justify-between">
                    {/* Left — site principal */}
                    <a
                        href={urls?.main ?? '#'}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="tracking-wide">kadmo.com.br</span>
                    </a>

                    {/* Center Navigation */}
                    <nav className="flex-1 flex justify-center">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl">
                            {/* Portfolio (home do subdomain) */}
                            <Link
                                href="/"
                                className={`
                                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                    transition-all duration-200
                                    ${pathname === '/subdomains/portfolio'
                                        ? 'bg-white/10 text-white'
                                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                                    }
                                `}
                            >
                                <span>Portfolio</span>
                            </Link>

                            {/* Divider */}
                            <div className="w-px h-6 bg-white/10 mx-1" />

                            {/* Projects */}
                            <Link
                                href="/projects"
                                className={`
                                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                    transition-all duration-200
                                    ${pathname?.startsWith('/subdomains/portfolio/projects')
                                        ? 'bg-white/10 text-white'
                                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                                    }
                                `}
                            >
                                <Briefcase className="w-4 h-4" />
                                <span>{t.nav.projects}</span>
                            </Link>

                            {/* Gallery */}
                            <Link
                                href="/gallery"
                                className={`
                                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                    transition-all duration-200
                                    ${pathname?.startsWith('/subdomains/portfolio/gallery')
                                        ? 'bg-white/10 text-white'
                                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                                    }
                                `}
                            >
                                <Images className="w-4 h-4" />
                                <span>{t.nav.gallery}</span>
                            </Link>

                            {/* Divider */}
                            <div className="w-px h-6 bg-white/10 mx-1" />

                            {/* Language Toggle */}
                            <button
                                onClick={toggleLocale}
                                className="px-3 py-2 rounded-full text-sm font-medium cursor-pointer text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200"
                                aria-label="Toggle language"
                            >
                                {locale === 'en' ? 'EN' : 'PT'}
                            </button>
                        </div>
                    </nav>

                    {/* Right — templates */}
                    <a
                        href={urls?.templates ?? '#'}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                        <LayoutTemplate className="w-4 h-4" />
                        <span className="tracking-wide">Templates</span>
                    </a>
                </div>
            </header>

            {/* Mobile Navigation */}
            <nav className="md:hidden fixed top-6 left-4 right-4 z-50">
                <div className="flex items-center justify-center gap-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl">
                    {/* Portfolio */}
                    <Link
                        href="/"
                        className={`
                            flex items-center justify-center px-3 py-2 rounded-full text-xs font-medium
                            transition-all duration-200
                            ${pathname === '/subdomains/portfolio'
                                ? 'bg-white/10 text-white'
                                : 'text-gray-200 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        Portfolio
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-6 bg-white/10 mx-0.5" />

                    {/* Projects */}
                    <Link
                        href="/projects"
                        className={`
                            flex items-center justify-center p-2.5 rounded-full
                            transition-all duration-200
                            ${pathname?.startsWith('/subdomains/portfolio/projects')
                                ? 'bg-white/10 text-white'
                                : 'text-gray-200 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        <Briefcase className="w-4 h-4" />
                    </Link>

                    {/* Gallery */}
                    <Link
                        href="/gallery"
                        className={`
                            flex items-center justify-center p-2.5 rounded-full
                            transition-all duration-200
                            ${pathname?.startsWith('/subdomains/portfolio/gallery')
                                ? 'bg-white/10 text-white'
                                : 'text-gray-200 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        <Images className="w-4 h-4" />
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-6 bg-white/10 mx-0.5" />

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLocale}
                        className="flex items-center justify-center px-2.5 py-2.5 rounded-full text-xs font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200"
                        aria-label="Toggle language"
                    >
                        {locale === 'en' ? 'EN' : 'PT'}
                    </button>

                    {/* Divider */}
                    <div className="w-px h-6 bg-white/10 mx-0.5" />

                    {/* Site principal */}
                    <a
                        href={urls?.main ?? '#'}
                        className="flex items-center justify-center p-2.5 rounded-full text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                        <Globe className="w-4 h-4" />
                    </a>
                </div>
            </nav>
        </>
    );
}
