import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import ConsoleGreeting from "@/components/ConsoleGreeting";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Gabryel Kadmo - Desenvolvedor",
    template: "%s | Gabryel Kadmo"
  },
  description: "Gabryel Kadmo - Desenvolvedor front-end especializado em criar interfaces modernas e performáticas. Bacharel em Sistemas de Informação, transformo ideias em experiências digitais memoráveis com React, Next.js, Angular e Tailwind CSS.",
  keywords: [
    "desenvolvedor front-end",
    "React developer",
    "Next.js",
    "Angular developer",
    "Tailwind CSS",
    "TypeScript",
    "interfaces modernas",
    "design UX/UI",
    "desenvolvimento web",
    "aplicações web",
    "Node.js",
    "Python",
    "MongoDB",
    "MySQL",
    "sistemas de informação",
    "portfolio desenvolvedor",
    "gabryel kadmo",
    "kadmo tech",
    "desenvolvimento digital",
    "tecnologia",
    "programação",
    "freelancer",
    "desenvolvimento sob medida",
    "Gabryel Kadmo",
    "kadmo.com.br",
    "kadmo.com",
    "kadmo",
    "gabryel",
    "mx2tech",
    "MX2TECH",
    "PK inc",
    "pk inc",
    "pkinc",
    "pk",
    "dev"
  ],
  authors: [{ name: "Gabryel Kadmo", url: "https://www.kadmo.com.br" }],
  creator: "Gabryel Kadmo",
  publisher: "Kadmo.com.br",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-WzZ89JmhH0Sun7xXiw1Gx22IXJAoRFtDDUyhIwSRW8",
  },
  alternates: {
    canonical: "https://www.kadmo.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.kadmo.com.br",
    siteName: "Gabryel Kadmo",
    title: "Gabryel Kadmo - Desenvolvedor Front-end | React, Next.js, Angular & Tailwind",
    description: "Desenvolvedor front-end especializado em criar interfaces modernas e performáticas. Bacharel em Sistemas de Informação, com expertise em React, Next.js, Angular e Tailwind CSS.",
    images: [
      {
        url: "https://www.kadmo.com.br/SEO/SEOkadmo-tech.jpg",
        width: 1200,
        height: 630,
        alt: "Kadmo Tech - Desenvolvimento Digital Sob Medida",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kadmotech",
    creator: "@kadmotech",
    title: "Gabryel Kadmo - Desenvolvedor Front-end | React, Next.js, Angular & Tailwind",
    description: "Desenvolvedor front-end especializado em criar interfaces modernas e performáticas. Bacharel em Sistemas de Informação.",
    images: [
      {
        url: "https://www.kadmo.com.br/SEO/SEOkadmo-tech.jpg",
        alt: "Kadmo Tech - Desenvolvimento Digital Sob Medida",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.kadmo.com.br"),
  other: {
    "geo.region": "BR",
    "geo.placename": "Brasil",
    "theme-color": "#ef4444",
    "msapplication-TileColor": "#ef4444",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-[#0a0a0a]`}
      >
        <ConsoleGreeting />
        {children}
      </body>
    </html>
  );
}
