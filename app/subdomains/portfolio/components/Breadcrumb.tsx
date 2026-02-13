"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
    customLabel?: string;
}

export default function Breadcrumb({ customLabel }: BreadcrumbProps) {
    const pathname = usePathname();

    // Remove barras duplicadas e split
    const paths = pathname.split('/').filter(Boolean);

    // Pega a última parte da URL (ex: "projects", "gallery")
    const currentPage = paths[paths.length - 1] || 'home';

    // Label customizado ou usa o nome da página
    const label = customLabel || currentPage;

    return (
        <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs sm:text-sm mb-6">
            <Link
                href="/"
                className="hover:text-zinc-300 transition-colors"
            >
                home
            </Link>
            <span>/</span>
            <span className="text-zinc-300">{label}</span>
        </div>
    );
}
