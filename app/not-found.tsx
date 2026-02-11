import Image from 'next/image';
import Link from 'next/link';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Briefcase, Package, ArrowUpRight } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';

// Subdomínios disponíveis
const subdomains = [
    {
        name: 'Portfolio',
        description: 'Veja meus projetos e trabalhos',
        href: 'https://portfolio.kadmo.com.br',
        icon: <Briefcase className="h-5 w-5 text-foreground" />,
    },
    {
        name: 'Templates',
        description: 'Templates prontos para usar',
        href: 'https://templates.kadmo.com.br',
        icon: <Package className="h-5 w-5 text-foreground" />,
    },
];

export default function NotFound() {
    // Busca projetos com destaque
    const featuredProjects = getFeaturedProjects();

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-background">
            {/* Background Grid Pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Main Container */}
            <div className="relative flex min-h-screen flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-16">
                {/* Top - Logo */}
                <div className="pt-4 md:pt-8">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/logo/Kadmo-logo-monke-no-bg.png"
                            alt="Kadmo Logo"
                            width={60}
                            height={60}
                            className="opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </Link>
                </div>

                {/* Central Content */}
                <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-center">
                    {/* Left Side - Typography */}
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground md:text-sm">
                            Erro 404
                        </p>
                        <div className="space-y-2 md:space-y-4">
                            <h1 className="text-balance font-sans text-[14vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[10vw] lg:text-[7vw]">
                                Página
                            </h1>
                            <h1 className="text-balance font-sans text-[14vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[10vw] lg:text-[7vw]">
                                não
                            </h1>
                            <h1 className="text-balance font-sans text-[14vw] font-normal leading-[0.85] tracking-tight text-foreground md:text-[10vw] lg:text-[7vw]">
                                encontrada
                            </h1>
                        </div>
                        <p className="font-mono text-sm leading-relaxed text-muted-foreground md:text-base max-w-sm">
                            O endereço que você está procurando não existe ou foi movido.
                            Explore outros caminhos abaixo.
                        </p>
                    </div>

                    {/* Right Side - Cards */}
                    <div className="space-y-8">
                        {/* Subdomínios */}
                        <div>
                            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
                                Explorar
                            </p>
                            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {subdomains.map((sub) => (
                                    <li key={sub.name} className="list-none">
                                        <Link href={sub.href} className="block h-full">
                                            <div className="relative h-full rounded-2xl border border-border p-2 group">
                                                <GlowingEffect
                                                    blur={0}
                                                    borderWidth={2}
                                                    spread={60}
                                                    glow={true}
                                                    disabled={false}
                                                    proximity={80}
                                                    inactiveZone={0.01}
                                                />
                                                <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-border/50 bg-background p-5">
                                                    <div className="flex items-center justify-between">
                                                        <div className="w-fit rounded-lg border border-border p-2.5">
                                                            {sub.icon}
                                                        </div>
                                                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-sans text-lg font-normal tracking-tight text-foreground">
                                                            {sub.name}
                                                        </h3>
                                                        <p className="font-mono text-xs leading-relaxed text-muted-foreground mt-1">
                                                            {sub.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Preview de Projetos */}
                        <div>
                            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
                                Projetos Recentes
                            </p>
                            <div className="space-y-3">
                                {featuredProjects.map((project) => (
                                    <Link
                                        key={project.id}
                                        href={project.link || project.github || '#'}
                                        target={project.link || project.github ? '_blank' : undefined}
                                        rel={project.link || project.github ? 'noopener noreferrer' : undefined}
                                        className="block"
                                    >
                                        <div className="group flex items-center justify-between p-4 rounded-xl border border-border/50 bg-background hover:border-border transition-all hover:shadow-md">
                                            <div className="flex-1">
                                                <h4 className="font-sans text-sm font-normal text-foreground group-hover:text-foreground/80 transition-colors">
                                                    {project.slug || project.name}
                                                </h4>
                                                <p className="font-mono text-xs text-muted-foreground mt-0.5">
                                                    {project.shortDescription}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 ml-4">
                                                {project.technologies.slice(0, 2).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-[10px] px-2 py-1 rounded-full bg-foreground/10 text-muted-foreground font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors ml-1" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    >
                        <div className="h-px w-12 bg-border md:w-16" />
                        <span className="text-xs uppercase tracking-[0.3em]">Voltar para Home</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-muted-foreground">www.kadmo.com.br</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
