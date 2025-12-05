'use client'

import React from 'react'

export default function Footer() {
    return (
        <footer id="contact" className="relative w-full overflow-hidden bg-background scroll-mt-0">
            {/* Main Container */}
            <div className="relative flex min-h-screen flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-16">

                {/* Top Eyebrow Text */}
                <div className="pt-4 md:pt-8">
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground md:text-sm">
                        Contato
                    </p>
                </div>

                {/* Central Content */}
                <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Side - Large Typography */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="text-balance font-sans text-[10vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[8vw] lg:text-[6vw]">
                                Vamos criar
                            </h2>
                            <h2 className="text-balance font-sans text-[10vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[8vw] lg:text-[6vw]">
                                algo incrível
                            </h2>
                            <h2 className="text-balance font-sans text-[10vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[8vw] lg:text-[6vw]">
                                juntos
                            </h2>
                        </div>

                        {/* Decorative Line */}
                        <div className="flex items-center gap-4">
                            <div className="h-px w-16 bg-foreground md:w-24" />
                            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                Entre em contato
                            </span>
                        </div>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="flex flex-col justify-center space-y-8 md:space-y-12">

                        {/* Email */}
                        <div className="space-y-3 border-l border-border pl-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                Email
                            </p>
                            <a
                                href="mailto:contato@kadmo.tech"
                                className="group font-mono text-lg text-foreground transition-colors hover:text-foreground/80 md:text-xl"
                            >
                                contato@kadmo.tech
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                Redes Sociais
                            </p>
                            <div className="flex flex-col gap-3">
                                {[
                                    { name: 'GitHub', url: 'https://github.com/GabryelKadmo' },
                                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gabryel-kadmo/' },
                                    { name: 'Instagram', url: 'https://www.instagram.com/kxdmx.tsx' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        className="group flex items-center gap-3 font-mono text-foreground transition-colors hover:text-foreground/80"
                                    >
                                        <span className="text-sm">{social.name}</span>
                                        <div className="h-px w-0 bg-foreground transition-all group-hover:w-8" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className="flex items-center gap-3 border border-border px-6 py-4">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                            <span className="font-mono text-sm text-foreground">
                                Disponível para novos projetos
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div className="max-w-md">
                        <p className="font-mono text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Gabryel Kadmo. Todos os direitos reservados.
                        </p>
                    </div>

                    <a
                        href="#top"
                        className="group flex items-center gap-3 border-b border-transparent pb-1 transition-colors hover:border-foreground"
                    >
                        <span className="text-sm uppercase tracking-[0.3em] text-foreground">
                            Voltar ao topo
                        </span>
                        <div className="h-px w-12 bg-foreground transition-all group-hover:w-16" />
                    </a>
                </div>
            </div>

            {/* Background Grid Pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }}
            />
        </footer>
    )
}
