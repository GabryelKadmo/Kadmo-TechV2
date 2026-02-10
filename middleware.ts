import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();
  const host = hostname.split(":")[0];
  const subdomain = host.split(".")[0];

  // Lista de subdomínios válidos - Exemplo: const validSubdomains = ['portfolio', 'exemplo'];
  const validSubdomains = ["portfolio"];

  // Se for o domínio principal (www ou kadmo), não faz nada
  if (
    subdomain === "www" ||
    subdomain === "kadmo" ||
    subdomain === "localhost"
  ) {
    return NextResponse.next();
  }

  // Se for um subdomínio válido, reescreve a URL
  if (validSubdomains.includes(subdomain)) {
    url.pathname = `/subdomains/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)"],
};
