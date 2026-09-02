import { cookies } from "next/headers";
import { withApi, ok, parseJson } from "@/server/http/handler";
import { authCookieOptions } from "@/server/http/auth-context";
import { verifyOtp, verifyCodeSchema } from "@/server/services/auth.service";

export const POST = withApi(async (request) => {
  const body = verifyCodeSchema.parse(await parseJson(request));
  const result = await verifyOtp(body.phone, body.code);
  const cookieStore = await cookies();
  cookieStore.set("accessToken", result.accessToken, authCookieOptions());
  return ok({ user: result.user, accessToken: result.accessToken, refreshToken: result.refreshToken });
});
