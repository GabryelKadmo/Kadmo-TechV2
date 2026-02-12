"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Locale = "pt" | "en";

interface LocaleContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("pt");

    useEffect(() => {
        // Carregar idioma salvo do localStorage
        const savedLocale = localStorage.getItem("locale") as Locale;
        if (savedLocale) {
            setLocaleState(savedLocale);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("locale", newLocale);
    };

    const toggleLocale = () => {
        const newLocale = locale === "pt" ? "en" : "pt";
        setLocale(newLocale);
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);
    if (context === undefined) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
}
