'use client'

import React from 'react'

export default function AboutDesktop() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-background">
            {/* Main Container */}
            <div className="relative flex min-h-screen flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-16">

                {/* Top Eyebrow Text */}
                <div className="pt-4 md:pt-8">
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground md:text-sm">
                        Sobre
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Side - Large Typography */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="text-balance font-sans text-[10vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[8vw] lg:text-[6vw]">
                                Transformando
                            </h2>
                            <h2 className="text-balance font-sans text-[10vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[8vw] lg:text-[6vw]">
                                Ideias em
                            </h2>
                            <h2 className="text-balance font-sans text-[10vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[8vw] lg:text-[6vw]">
                                Realidade
                            </h2>
                        </div>

                        {/* Decorative Line */}
                        <div className="flex items-center gap-4">
                            <div className="h-px w-16 bg-foreground md:w-24" />
                            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                Digital
                            </span>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex flex-col justify-center space-y-8 md:space-y-12">

                        {/* Main Description */}
                        <div className="space-y-6">
                            <p className="font-mono text-base leading-relaxed text-foreground md:text-lg">
                                Sou desenvolvedor full stack apaixonado por criar produtos digitais que fazem a diferença.
                                Combino código limpo com design intencional para entregar experiências que as pessoas realmente querem usar.
                            </p>

                            <p className="font-mono text-base leading-relaxed text-muted-foreground md:text-lg">
                                Minha abordagem é simples: entender o problema, criar soluções elegantes e executar com excelência.
                                Cada projeto é uma oportunidade de aprender algo novo e elevar o padrão.
                            </p>
                        </div>

                        {/* Stats/Highlights */}
                        <div className="grid grid-cols-2 gap-8 border-t border-border pt-8 md:gap-12">
                            <div>
                                <p className="mb-2 text-4xl font-normal text-foreground md:text-5xl">5+</p>
                                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                    Anos de Experiência
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-4xl font-normal text-foreground md:text-5xl">50+</p>
                                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                    Projetos Concluídos
                                </p>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                Stack Principal
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-border px-4 py-2 font-mono text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Section - CTA */}
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div className="max-w-md">
                        <p className="font-mono text-sm text-muted-foreground md:text-base">
                            Sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="group flex items-center gap-3 border-b border-transparent pb-1 transition-colors hover:border-foreground"
                    >
                        <span className="text-sm uppercase tracking-[0.3em] text-foreground">
                            Vamos Conversar
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
        </section>
    )
}
