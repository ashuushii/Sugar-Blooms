import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
    const isLoginPage = req.nextUrl.pathname === "/admin";
    const isAdmin = req.nextauth.token?.role === "admin";

    // Redirect non-admin users trying to access admin routes (except login page)
    if (isAdminRoute && !isLoginPage && !isAdmin) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    // Redirect logged-in admin users from login page to dashboard
    if (isLoginPage && isAdmin) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token;
      },
    },
    pages: {
      signIn: "/admin",
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
