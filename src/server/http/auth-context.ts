import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { verifyAccessToken, type TokenPayload } from "@/server/lib/auth-tokens";
import { unauthorized, forbidden } from "@/server/lib/errors";

export async function getTokenFromRequest(request: NextRequest) {
  const header = request.headers.get("authorization");
  if (header?.startsWith("Bearer ")) return header.slice(7);
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value ?? cookieStore.get("session")?.value;
}

export async function getAuthUser(request: NextRequest): Promise<TokenPayload | null> {
  const token = await getTokenFromRequest(request);
  if (!token) return null;
  return verifyAccessToken(token);
}

export async function requireAuth(request: NextRequest) {
  const user = await getAuthUser(request);
  if (!user) throw unauthorized("Authentication required");
  return user;
}

export async function requireAdmin(request: NextRequest) {
  const user = await requireAuth(request);
  if (user.role !== "ADMIN") throw forbidden("Admin access required");
  return user;
}

export function authCookieOptions(maxAge = 15 * 60) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}
