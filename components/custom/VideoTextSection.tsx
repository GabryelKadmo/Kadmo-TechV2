'use client'

import React from 'react'
import { VideoText } from '@/components/ui/video-text'

export default function VideoTextSection() {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
            <div className="relative w-full px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">

                {/* Top label */}
                <div className="mb-16 flex items-center gap-4 md:mb-24">
                    <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground md:text-sm">
                        Manifesto
                    </span>
                    <div className="h-px flex-1 bg-border max-w-24" />
                </div>

                {/* Main Video Text */}
                <div className="relative z-10 mx-auto flex h-[300px] w-full max-w-6xl items-center justify-center md:h-[400px] lg:h-[500px]">
                    <VideoText
                        src="https://www.pexels.com/download/video/29857696/"
                        fontSize={20}
                        fontWeight="bold"
                        fontFamily="var(--font-geist-sans)"
                    >
                        FUTURO
                    </VideoText>
                </div>

                {/* Bottom context grid */}
                <div className="mt-16 grid gap-8 md:mt-24 md:grid-cols-3 md:gap-12">
                    {/* Item 1 */}
                    <div className="group space-y-3 border-l border-border pl-6 transition-all hover:border-foreground">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            Visão
                        </p>
                        <p className="font-mono text-sm leading-relaxed text-foreground/80">
                            Transformar ideias complexas em soluções digitais elegantes e funcionais
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="group space-y-3 border-l border-border pl-6 transition-all hover:border-foreground">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            Método
                        </p>
                        <p className="font-mono text-sm leading-relaxed text-foreground/80">
                            Código pensado, design intencional e execução impecável em cada detalhe
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="group space-y-3 border-l border-border pl-6 transition-all hover:border-foreground">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            Impacto
                        </p>
                        <p className="font-mono text-sm leading-relaxed text-foreground/80">
                            Produtos que não apenas funcionam, mas inspiram e transformam experiências
                        </p>
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

            {/* Radial gradient overlay for focus */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        </section>
    )
}
