import { NextResponse } from "next/server";
const PROTECTED = ["/dashboard", "/crm", "/clients"];
export function middleware(req){
  const { pathname } = req.nextUrl;
  if (!PROTECTED.some(p => pathname.startsWith(p))) return NextResponse.next();
  const user = req.cookies.get("ol_user")?.value || "";
  if (!user){
    const url = req.nextUrl.clone();
    url.pathname = "/app-connexion";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/dashboard/:path*", "/crm/:path*", "/clients/:path*"] };
