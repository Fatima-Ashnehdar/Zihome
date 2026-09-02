import { withApi, ok, parseJson } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { checkout, checkoutSchema } from "@/server/services/order.service";

export const POST = withApi(async (request) => {
  const user = await requireAuth(request);
  const body = checkoutSchema.parse(await parseJson(request));
  return ok(await checkout(user.userId, body), 201);
});
