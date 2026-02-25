'use client';

import { Home, UserCircle } from "lucide-react";
import { useSubdomainUrls } from "@/lib/useSubdomainUrls";

export default function TemplatesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const urls = useSubdomainUrls();

    return (
        <div className="min-h-screen bg-background relative">
            {/* Eclipse blur fixo no topo */}
            <div
                className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-dvh pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center top, rgba(240, 255, 240, 0.1) 0%, rgba(240, 255, 240, 0.05) 40%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            {/* Navbar */}
            <header className="fixed top-4 left-0 right-0 z-50 px-4">
                <div className="max-w-full mx-auto flex items-center justify-between">
                    {/* Left — site principal */}
                    <a
                        href={urls?.main ?? '#'}
                        className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                        <Home className="w-4 h-4" />
                        <span className="tracking-wide">kadmo.com.br</span>
                    </a>

                    {/* Center pill */}
                    <nav className="flex-1 md:flex-none flex justify-center md:mx-auto">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl">
                            {/* Home (mobile) */}
                            <a
                                href={urls?.main ?? '#'}
                                className="md:hidden flex items-center justify-center p-2.5 rounded-full text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                <Home className="w-4 h-4" />
                            </a>

                            {/* Divider (mobile) */}
                            <div className="md:hidden w-px h-6 bg-white/10 mx-0.5" />

                            {/* Templates — label atual */}
                            <span className="px-4 py-2 text-sm font-medium text-white select-none">
                                Templates
                            </span>

                            {/* Divider */}
                            <div className="w-px h-6 bg-white/10 mx-1" />

                            {/* Portfolio */}
                            <a
                                href={urls?.portfolio ?? '#'}
                                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                <UserCircle className="w-4 h-4" />
                                <span>Portfolio</span>
                            </a>
                        </div>
                    </nav>

                    {/* Right spacer (desktop) */}
                    <div className="hidden md:block w-[130px]" />
                </div>
            </header>

            <main className="relative z-10">{children}</main>
        </div>
    );
}
