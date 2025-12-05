'use client'

import Image from 'next/image'
import React from 'react'

export default function HeroDesktop() {
    return (
        <>
            <section id="top" className="relative min-h-screen w-full overflow-hidden bg-background">
                {/* Floating Contact Link - Top Right */}
                <div className="fixed right-8 top-8 z-50 md:right-12 md:top-12">
                    <a
                        href="#contact"
                        className="text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground md:text-sm"
                    >
                        Contato
                    </a>
                </div>

                {/* Main Container */}
                <div className="relative flex min-h-screen flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-16">
                    {/* Top Eyebrow Text */}
                    <div className="pt-4 md:pt-8">
                        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground md:text-sm">
                            Desenvolvedor × Designer
                        </p>
                    </div>

                    {/* Central Hero Content */}
                    <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                        {/* Left Side - Massive Typography */}
                        <div className="space-y-2 md:space-y-4">
                            <h1 className="text-balance font-sans text-[14vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[12vw] lg:text-[9vw]">
                                Criando
                            </h1>
                            <h1 className="text-balance font-sans text-[14vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[12vw] lg:text-[9vw]">
                                Experiências
                            </h1>
                            <h1 className="text-balance font-sans text-[14vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[12vw] lg:text-[9vw]">
                                Digitais
                            </h1>
                        </div>

                        {/* Right Side - Image Container with Overlay Effect */}
                        <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                            <div className="aspect-[3/4] overflow-hidden bg-muted">
                                <Image
                                    src="/hero/HeroImage.jpg"
                                    alt="Kadmo Portrait"
                                    width={500}
                                    height={667}
                                    className="h-full w-full object-cover opacity-90 grayscale"
                                />
                            </div>
                            {/* Decorative border */}
                            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-border md:-bottom-6 md:-right-6" />
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                        {/* Description */}
                        <div className="max-w-md">
                            <p className="font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                                Full Stack Developer especializado em criar interfaces únicas e experiências memoráveis. Transformo ideias
                                em produtos digitais de alto impacto.
                            </p>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="flex items-center gap-3">
                            <div className="h-px w-12 bg-muted-foreground md:w-16" />
                            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Role para explorar</span>
                        </div>
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
        </>
    )
}
