import { withApi, ok, parseJson } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { addCartItem, addCartItemSchema } from "@/server/services/cart.service";

export const POST = withApi(async (request) => {
  const user = await requireAuth(request);
  const body = addCartItemSchema.parse(await parseJson(request));
  return ok(await addCartItem(user.userId, body), 201);
});
