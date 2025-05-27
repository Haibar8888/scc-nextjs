import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Jika belum login, redirect langsung ke /login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Jika sudah login dan mencoba mengakses halaman login, redirect ke halaman beranda
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url)); // Ganti "/" dengan halaman yang sesuai
  }

  // Kalau sudah login, lanjut akses halaman
  return NextResponse.next();
}

// Semua halaman ini akan dicek middleware
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/user",
    "/user/:path*",
    "/emergency",
    "/emergency/:path*",
  ],
};
