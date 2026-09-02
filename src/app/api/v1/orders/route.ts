import { withApi, ok } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { listOrders } from "@/server/services/order.service";

export const GET = withApi(async (request) => {
  const user = await requireAuth(request);
  return ok(await listOrders(user.userId));
});
