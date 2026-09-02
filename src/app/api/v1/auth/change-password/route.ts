import { withApi, ok, parseJson } from "@/server/http/handler";
import { changePassword, changePasswordSchema } from "@/server/services/auth.service";

export const POST = withApi(async (request) => {
  const body = changePasswordSchema.parse(await parseJson(request));
  return ok(await changePassword(body));
});
