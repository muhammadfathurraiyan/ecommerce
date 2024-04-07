import type { NextRequest } from "next/server";
import { getSession, updateSession } from "./lib/utils";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  if (session && request.nextUrl.pathname === "/login") {
    return Response.redirect(new URL("/admin", request.url));
  } else if (!session && request.nextUrl.pathname.startsWith("/admin")) {
    return Response.redirect(new URL("/login", request.url));
  }

  return await updateSession(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
