import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const AUTH_COOKIE = "accessToken";

function getJwtSecret() {
  return new TextEncoder().encode(process.env.JWT_SECRET ?? "dev-jwt-secret-min-32-chars-long!!");
}

async function isAuthenticated(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE)?.value;
  if (!token) return false;

  try {
    await jwtVerify(token, getJwtSecret(), { algorithms: ["HS256"] });
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const loggedIn = await isAuthenticated(request);

  const isLoginPage = pathname === "/login" || pathname.startsWith("/login/");
  const isDashboard = pathname === "/dashboard" || pathname.startsWith("/dashboard/");

  if (isDashboard && !loggedIn) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginPage && loggedIn) {
    return NextResponse.redirect(new URL("/dashboard/wallet", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/login/:path*", "/dashboard", "/dashboard/:path*"],
};
