"use client";

import { useState, useEffect } from "react";

type SubdomainUrls = {
  main: string;
  portfolio: string;
  templates: string;
};

function resolveUrls(): SubdomainUrls {
  const { hostname, port, protocol } = window.location;
  const isLocal = hostname === "localhost" || hostname.endsWith(".localhost");
  const portSuffix = port ? `:${port}` : "";

  if (isLocal) {
    return {
      main: `${protocol}//localhost${portSuffix}`,
      portfolio: `${protocol}//portfolio.localhost${portSuffix}`,
      templates: `${protocol}//templates.localhost${portSuffix}`,
    };
  }

  // Prod: strip subdomínio existente para chegar no domínio-base
  // Ex: portfolio.kadmo.com.br → kadmo.com.br
  const parts = hostname.split(".");
  const baseDomain = parts.length > 2 ? parts.slice(1).join(".") : hostname;

  return {
    main: `${protocol}//${baseDomain}`,
    portfolio: `${protocol}//portfolio.${baseDomain}`,
    templates: `${protocol}//templates.${baseDomain}`,
  };
}

/**
 * Resolve as URLs dos subdomínios de acordo com o ambiente em runtime.
 *
 * Local  → http://localhost:3000  /  http://portfolio.localhost:3000  /  http://templates.localhost:3000
 * Prod   → https://kadmo.com.br   /  https://portfolio.kadmo.com.br  /  https://templates.kadmo.com.br
 *
 * Retorna `null` enquanto ainda está no SSR/hidratação para evitar
 * que o fallback de prod apareça antes do cliente calcular o valor real.
 */
export function useSubdomainUrls(): SubdomainUrls | null {
  const [urls, setUrls] = useState<SubdomainUrls | null>(null);

  useEffect(() => {
    setUrls(resolveUrls());
  }, []);

  return urls;
}
