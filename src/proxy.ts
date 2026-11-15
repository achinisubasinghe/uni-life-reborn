import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes: Record<string, string[]> = {
  "/student": ["student"],
  "/provider": ["provider"],
  "/admin": ["admin"],
};

const publicRoutes = [
  "/",
  "/login",
  "/signup",
  "/about",
  "/contact",
  "/chat",
  "/services",
  "/browse",
  "/business",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`))) {
    if (!pathname.startsWith("/student/") &&
        !pathname.startsWith("/provider/") &&
        !pathname.startsWith("/admin/")) {
      return NextResponse.next();
    }
  }

  const authToken = request.cookies.get("auth-token")?.value;
  const userRole = request.cookies.get("user-role")?.value;

  const isProtectedRoute = Object.keys(protectedRoutes).some(
    route => pathname.startsWith(route)
  );

  if (isProtectedRoute && !authToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (authToken && userRole) {
    for (const [route, allowedRoles] of Object.entries(protectedRoutes)) {
      if (pathname.startsWith(route)) {
        if (!allowedRoles.includes(userRole)) {
          const dashboardUrl = getDashboardUrl(userRole);
          return NextResponse.redirect(new URL(dashboardUrl, request.url));
        }
      }
    }
  }

  return NextResponse.next();
}

function getDashboardUrl(role: string): string {
  switch (role) {
    case "student":
      return "/student/dashboard";
    case "provider":
      return "/provider/dashboard";
    case "admin":
      return "/admin/dashboard";
    default:
      return "/";
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public|api).*)",
  ],
};
