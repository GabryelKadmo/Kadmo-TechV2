"use client";

import { useLocale } from "../contexts/LocaleContext";
import Breadcrumb from "../components/Breadcrumb";

export default function GalleryPage() {
    const { locale } = useLocale();

    return (
        <>
            <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 sm:mb-16">
                        <Breadcrumb customLabel="gallery" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {locale === "pt" ? "Galeria" : "Gallery"}
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="text-center py-20">
                        <div className="inline-block border border-white/20 bg-zinc-900/50 backdrop-blur-sm px-12 py-8">
                            <p className="text-xl font-semibold text-white/80">
                                {locale === "pt" ? "Em breve..." : "Coming soon..."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
