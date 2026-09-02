import { cookies } from "next/headers";
import { withApi, ok, parseJson } from "@/server/http/handler";
import { authCookieOptions } from "@/server/http/auth-context";
import { loginWithPassword, loginSchema } from "@/server/services/auth.service";

export const POST = withApi(async (request) => {
  const body = loginSchema.parse(await parseJson(request));
  const result = await loginWithPassword(body.phone, body.password);
  const cookieStore = await cookies();
  cookieStore.set("accessToken", result.accessToken, authCookieOptions());
  return ok({ user: result.user, accessToken: result.accessToken, refreshToken: result.refreshToken });
});
