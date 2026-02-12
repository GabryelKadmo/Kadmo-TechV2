"use client";

import { useState, useEffect } from "react";

interface TocItem {
    id: string;
    title: string;
}

interface TableOfContentsProps {
    items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            for (const item of items) {
                const element = document.getElementById(item.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [items]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
            <ul className="flex flex-col gap-4">
                {items.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => scrollToSection(item.id)}
                            className={`
                                group flex items-center gap-3 text-sm font-medium transition-all duration-200
                                ${activeSection === item.id
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                                }
                            `}
                        >
                            <span
                                className={`
                                    h-px transition-all duration-200
                                    ${activeSection === item.id
                                        ? "w-8 bg-gray-300"
                                        : "w-4 bg-gray-600 group-hover:w-6 group-hover:bg-gray-400"
                                    }
                                `}
                            />
                            <span className="whitespace-nowrap">{item.title}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
