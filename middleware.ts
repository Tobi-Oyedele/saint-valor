import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const isSignInPage = request.nextUrl.pathname === "/admin/sign-in";

  if (isSignInPage) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/admin/sign-in", request.url)); // redirect to ADMIN sign in, not user
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
