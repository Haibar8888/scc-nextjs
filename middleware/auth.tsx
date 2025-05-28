import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Jika belum login dan bukan di /login, redirect ke login
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Jika sudah login dan sedang di /login, redirect ke dashboard
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// Jalankan middleware di halaman-halaman ini
export const config = {
  matcher: [
    "/login", // Perlu ditambahkan agar bisa dicek ketika user buka halaman login
    "/dashboard/:path*",
    "/user",
    "/user/:path*",
    "/emergency",
    "/emergency/:path*",
  ],
};
