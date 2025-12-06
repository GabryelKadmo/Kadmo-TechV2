'use client'

import React from 'react'
import { Code2, Palette, Rocket, Zap, Globe, Sparkles } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function FeaturesSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-background">

            {/* Main Container */}
            <div className="relative flex min-h-screen flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-16">

                {/* Top Eyebrow Text */}
                <div className="pt-4 md:pt-8 mb-32">
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground md:text-sm">
                        Serviços
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="relative z-10 grid gap-12 lg:gap-16">

                    {/* Left Side - Large Typography */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="text-balance font-sans text-[10vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[8vw] lg:text-[6vw]">
                                O que faço
                            </h2>
                        </div>
                    </div>

                    {/* Right Side - Features Grid */}
                    <div>
                        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            <GridItem
                                icon={<Code2 className="h-5 w-5 text-foreground" />}
                                title="Desenvolvimento Front-end"
                                description="Aplicações web modernas com React, Next.js e Angular. Código limpo e componentizado."
                            />

                            <GridItem
                                icon={<Palette className="h-5 w-5 text-foreground" />}
                                title="Design de Interfaces"
                                description="UI/UX focado em experiências intuitivas e designs modernos que convertem."
                            />

                            <GridItem
                                icon={<Rocket className="h-5 w-5 text-foreground" />}
                                title="Performance"
                                description="Otimização e arquitetura escalável para aplicações de alta performance."
                            />

                            <GridItem
                                icon={<Zap className="h-5 w-5 text-foreground" />}
                                title="Prototipagem Rápida"
                                description="Do conceito ao MVP funcional em tempo recorde sem comprometer qualidade."
                            />

                            <GridItem
                                icon={<Globe className="h-5 w-5 text-foreground" />}
                                title="Web Apps Modernos"
                                description="PWAs, SPAs e aplicações responsivas que funcionam em qualquer dispositivo."
                            />

                            <GridItem
                                icon={<Sparkles className="h-5 w-5 text-foreground" />}
                                title="Consultoria Tech"
                                description="Orientação estratégica em tecnologia e arquitetura de software."
                            />
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mt-32">
                    <div className="max-w-md">
                        <p className="font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                            Cada projeto é tratado com dedicação única, combinando tecnologia de ponta com design pensado.
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
    )
}

interface GridItemProps {
    icon: React.ReactNode
    title: string
    description: string
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
    return (
        <li className="min-h-[16rem] list-none">
            <div className="relative h-full rounded-2xl border border-border p-2">
                <GlowingEffect
                    blur={0}
                    borderWidth={2}
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border border-border/50 bg-background p-6">
                    <div className="relative flex flex-1 flex-col gap-4">
                        <div className="w-fit rounded-lg border border-border p-2.5">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-sans text-xl font-normal tracking-tight text-foreground">
                                {title}
                            </h3>
                            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
