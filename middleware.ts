import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();
  const host = hostname.split(":")[0];

  // Remove 'www.' se presente para normalizar o hostname
  const normalizedHost = host.replace(/^www\./, "");

  // Pega as partes do hostname
  const hostParts = normalizedHost.split(".");

  // Lista de subdomínios válidos
  const validSubdomains = ["portfolio", "templates"];

  // Domínios principais (sem subdomínio de aplicação)
  // Ex: kadmo.com.br, kadmo.tech, localhost
  const mainDomains = ["kadmo", "localhost"];

  // Se o primeiro segmento for um domínio principal, não faz nada
  // Isso cobre: kadmo.com.br, kadmo.tech, localhost
  if (mainDomains.includes(hostParts[0])) {
    return NextResponse.next();
  }

  // Agora verifica se o primeiro segmento é um subdomínio válido
  // Isso cobre: portfolio.kadmo.com.br, portfolio.kadmo.tech
  const subdomain = hostParts[0];

  if (validSubdomains.includes(subdomain)) {
    url.pathname = `/subdomains/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)"],
};
