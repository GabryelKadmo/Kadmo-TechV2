'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Images } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';
import { translations } from '../locales/translations';

export default function Navbar() {
    const pathname = usePathname();
    const [time, setTime] = useState('');
    const { locale, toggleLocale } = useLocale();
    const t = translations[locale];

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('pt-BR', {
                timeZone: 'America/Sao_Paulo',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            });
            setTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Desktop Navigation - Top */}
            <header className="hidden md:block fixed top-4 left-0 right-0 z-50 px-4">
                <div className="max-w-full mx-auto flex items-center justify-between">
                    {/* Location */}
                    <div className="flex items-center text-sm text-gray-200">
                        America/Sao_Paulo
                    </div>

                    {/* Center Navigation */}
                    <nav className="flex-1 flex justify-center">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl">
                            {/* Home - apenas ícone */}
                            <Link
                                href="/"
                                className={`
                                    flex items-center justify-center p-2 rounded-full text-sm font-medium
                                    transition-all duration-200
                                    ${pathname === '/subdomains/portfolio'
                                        ? 'bg-white/10 text-white'
                                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                                    }
                                `}
                            >
                                <Home className="w-4 h-4" />
                            </Link>

                            {/* Divider */}
                            <div className="w-px h-6 bg-white/10 mx-1" />

                            {/* Work e Gallery - com labels */} <Link href="/work" className={` flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${pathname?.startsWith('/subdomains/portfolio/work') ? 'bg-white/10 text-white' : 'text-gray-200 hover:text-white hover:bg-white/5'} `} > <Briefcase className="w-4 h-4" /> <span>{t.nav.work}</span> </Link> <Link href="/gallery" className={` flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${pathname?.startsWith('/subdomains/portfolio/gallery') ? 'bg-white/10 text-white' : 'text-gray-200 hover:text-white hover:bg-white/5'} `} > <Images className="w-4 h-4" /> <span>{t.nav.gallery}</span> </Link> {/* Divider */} <div className="w-px h-6 bg-white/10 mx-1" /> {/* Language Toggle */} <button onClick={toggleLocale} className="px-3 py-2 rounded-full text-sm font-medium cursor-pointer text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200" aria-label="Toggle language" > {locale === 'en' ? 'EN' : 'PT'} </button> </div> </nav>

                    {/* Time */}
                    <div className="flex items-center text-sm text-gray-200">
                        {time}
                    </div>
                </div>
            </header>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed top-6 left-4 right-4 z-50">
                <div className="flex items-center justify-center gap-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl">
                    {/* Home - apenas ícone */}
                    <Link
                        href="/"
                        className={`
                            flex items-center justify-center p-3 rounded-full
                            transition-all duration-200
                            ${pathname === '/subdomains/portfolio'
                                ? 'bg-white/10 text-white'
                                : 'text-gray-200 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        <Home className="w-5 h-5" />
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-6 bg-white/10 mx-1" />

                    {/* Work */}
                    <Link
                        href="/work"
                        className={`
                            flex items-center justify-center p-3 rounded-full
                            transition-all duration-200
                            ${pathname?.startsWith('/subdomains/portfolio/work')
                                ? 'bg-white/10 text-white'
                                : 'text-gray-200 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        <Briefcase className="w-5 h-5" />
                    </Link>

                    {/* Gallery */}
                    <Link
                        href="/gallery"
                        className={`
                            flex items-center justify-center p-3 rounded-full
                            transition-all duration-200
${pathname?.startsWith('/subdomains/portfolio/gallery') ? 'bg-white/10 text-white' : 'text-gray-200 hover:text-white hover:bg-white/5'} `} > <Images className="w-5 h-5" /> </Link>

                    {/* Divider */}
                    <div className="w-px h-6 bg-white/10 mx-1" />

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLocale}
                        className="flex items-center justify-center px-3 py-3 rounded-full text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200"
                        aria-label="Toggle language"
                    >
                        {locale === 'en' ? 'EN' : 'PT'}
                    </button>
                </div>
            </nav>
        </>
    );
}
