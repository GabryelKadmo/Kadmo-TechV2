import React from 'react';

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Gabryel Kadmo",
        "alternateName": "Kadmo Tech",
        "url": "https://www.kadmo.tech",
        "image": "https://www.kadmo.tech/SEO/SEOkadmo-tech.jpg",
        "description": "Desenvolvedor Full Stack especializado em soluções digitais personalizadas. Software eficiente, landing pages que convertem e design de alta qualidade para impulsionar seu negócio.",
        "jobTitle": "Desenvolvedor Full Stack",
        "worksFor": {
            "@type": "Organization",
            "name": "Kadmo Tech"
        },
        "sameAs": [
            "https://github.com/GabryelKadmo",
            "https://www.linkedin.com/in/gabryel-kadmo"
        ],
        "knowsAbout": [
            "Desenvolvimento Web",
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Full Stack Development",
            "UI/UX Design",
            "Software Development"
        ]
    };

    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kadmo Tech",
        "url": "https://www.kadmo.tech",
        "logo": "https://www.kadmo.tech/SEO/SEOkadmo-tech.jpg",
        "description": "Desenvolvimento digital sob medida - Software, Landing Pages e Design de alta qualidade",
        "founder": {
            "@type": "Person",
            "name": "Gabryel Kadmo"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["Portuguese", "English"]
        }
    };

    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kadmo Tech",
        "url": "https://www.kadmo.tech",
        "description": "Portfolio e serviços de desenvolvimento digital",
        "publisher": {
            "@type": "Person",
            "name": "Gabryel Kadmo"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
            />
        </>
    );
}
