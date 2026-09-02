import { cookies } from "next/headers";
import { z } from "zod";
import { withApi, ok, parseJson } from "@/server/http/handler";
import { authCookieOptions } from "@/server/http/auth-context";
import { refreshAccessToken } from "@/server/services/auth.service";

export const POST = withApi(async (request) => {
  const { refreshToken } = z.object({ refreshToken: z.string().min(1) }).parse(await parseJson(request));
  const result = await refreshAccessToken(refreshToken);
  const cookieStore = await cookies();
  cookieStore.set("accessToken", result.accessToken, authCookieOptions());
  return ok(result);
});
