import { withApi, ok } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { getCart, clearCart } from "@/server/services/cart.service";

export const GET = withApi(async (request) => {
  const user = await requireAuth(request);
  return ok(await getCart(user.userId));
});

export const DELETE = withApi(async (request) => {
  const user = await requireAuth(request);
  return ok(await clearCart(user.userId));
});
