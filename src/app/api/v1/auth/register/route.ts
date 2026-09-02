import { withApi, ok, parseJson } from "@/server/http/handler";
import { registerPhone, phoneSchema } from "@/server/services/auth.service";

export const POST = withApi(async (request) => {
  const body = phoneSchema.parse(await parseJson(request));
  const result = await registerPhone(body.phone);
  return ok(result);
});
