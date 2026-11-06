/**@format */

import { cookies } from "next/headers";

import { verifyAccessToken } from "@/server/lib/auth-tokens";

import { MobileMenu } from "./mobileMenu";

export async function MobileMenuWrapper() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const user = token ? await verifyAccessToken(token) : null;

  return <MobileMenu isLoggedIn={!!user} />;
}
