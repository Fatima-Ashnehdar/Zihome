import { withApi, ok, parseJson } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { updateCartItem, removeCartItem, updateCartItemSchema } from "@/server/services/cart.service";

export const PATCH = withApi(async (request, { params }) => {
  const user = await requireAuth(request);
  const { id } = await params;
  const body = updateCartItemSchema.parse(await parseJson(request));
  return ok(await updateCartItem(user.userId, id, body));
});

export const DELETE = withApi(async (request, { params }) => {
  const user = await requireAuth(request);
  const { id } = await params;
  return ok(await removeCartItem(user.userId, id));
});
