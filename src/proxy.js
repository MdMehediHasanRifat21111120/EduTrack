import { NextResponse } from "next/server";

import { ROUTES } from "@/lib/constants";
import { createProxyClient } from "@/lib/supabase/proxy";

function redirectTo(path, request) {
  return NextResponse.redirect(new URL(path, request.url));
}

export async function proxy(request) {
  const response = NextResponse.next({
    request,
  });

  const supabase = createProxyClient(request, response);

  const pathname = request.nextUrl.pathname;
  // =====================================================
  // Get Current Authenticated User
  // =====================================================

  const {
    data: { user },
  } = await supabase.auth.getUser();
  // =====================================================
  // PUBLIC ROUTES
  // Accessible by everyone
  // =====================================================

  if (ROUTES.public.includes(pathname)) {
    return response;
  }

  // =====================================================
  // AUTH ROUTES
  // Only guests can access
  // =====================================================

  if (ROUTES.auth.includes(pathname)) {
    if (user) {
      return redirectTo("/dashboard", request);
    }

    return response;
  }

  // =====================================================
  // PROTECTED ROUTES
  // Require authentication
  // =====================================================

  const isProtectedRoute = ROUTES.protected.some((route) =>
    pathname.startsWith(route),
  );

  if (!isProtectedRoute) {
    return response;
  }

  if (!user) {
    return redirectTo("/signin", request);
  }

  // =====================================================
  // Fetch User Role
  // =====================================================

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error || !profile) {
    await supabase.auth.signOut();

    return redirectTo("/signin", request);
  }

  // =====================================================
  // Dashboard Entry Point
  // Redirect user to their own dashboard
  // =====================================================

  if (pathname === "/dashboard") {
    const rolePrefix = ROUTES.roles[profile.role];

    if (!rolePrefix) {
      await supabase.auth.signOut();

      return redirectTo("/signin", request);
    }

    return redirectTo(`${rolePrefix}/dashboard`, request);
  }

  // =====================================================
  // Role Authorization
  // =====================================================

  const allowedPrefix = ROUTES.roles[profile.role];

  if (!allowedPrefix) {
    await supabase.auth.signOut();

    return redirectTo("/signin", request);
  }

  // Trying to access another role's routes
  if (!pathname.startsWith(allowedPrefix)) {
    return redirectTo("/dashboard", request);
  }

  return response;
}

export const config = {
  matcher: [
    "/signin",
    "/signup",

    "/dashboard",

    "/admin/:path*",
    "/teacher/:path*",
    "/student/:path*",
    "/dean/:path*",
    "/chairman/:path*",
  ],
};
