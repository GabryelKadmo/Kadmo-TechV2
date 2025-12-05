"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function QuoteSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-background">
            {/* Main Container */}
            <div className="relative flex min-h-screen flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-16">

                {/* Top Eyebrow Text */}
                <div className="pt-4 md:pt-8">
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground md:text-sm">
                        Inspiração
                    </p>
                </div>

                {/* Central Content */}
                <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left Side - Typography */}
                    <div className="space-y-2 md:space-y-4">
                        <h2 className="text-balance font-sans text-[14vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[12vw] lg:text-[9vw]">
                            Sabedoria
                        </h2>
                        <h2 className="text-balance font-sans text-[14vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[12vw] lg:text-[9vw]">
                            Atemporal
                        </h2>
                    </div>

                    {/* Right Side - Cards */}
                    <div className="flex items-center">
                        <div className="w-full">
                            <InfiniteMovingCards
                                items={philosophicalQuotes}
                                direction="right"
                                speed="normal"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div className="max-w-md">
                        <p className="font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                            Reflexões que atravessam o tempo e nos inspiram a pensar mais profundamente.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-muted-foreground md:w-16" />
                        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Continue navegando</span>
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
    );
}

const philosophicalQuotes = [
    {
        quote:
            "O homem é condenado a ser livre. Condenado porque não se criou a si próprio, e no entanto, livre porque uma vez lançado ao mundo, é responsável por tudo o que faz.",
        name: "Jean-Paul Sartre",
        title: "Filósofo Existencialista",
    },
    {
        quote:
            "A minha carne e o meu coração desfalecem; mas Deus é a fortaleza do meu coração, e a minha porção para sempre.",
        name: "Jesus Cristo",
        title: "Salmos 73:26",
    },
    {
        quote:
            "Desvia os meus olhos das coisas inúteis.",
        name: "Jesus Cristo",
        title: "Salmos 119:37",
    },
    {
        quote:
            "O inferno está vazio, todos os demônios estão aqui.",
        name: "William Shakespeare",
        title: "Dramaturgo",
    },
    {
        quote:
            "Torne-se quem você é. Descubra aquilo que você é e tenha a coragem de sê-lo.",
        name: "Friedrich Nietzsche",
        title: "Filósofo Alemão",
    },
    {
        quote:
            "O segredo da mudança é focar toda a sua energia não em lutar contra o velho, mas em construir o novo.",
        name: "Sócrates",
        title: "Filósofo Grego",
    },
    {
        quote:
            "Ao sem talento, obsessão.",
        name: "Matsuo Bashō",
        title: "Poeta Japonês",
    },
];
