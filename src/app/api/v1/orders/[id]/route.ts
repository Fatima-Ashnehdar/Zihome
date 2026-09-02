import { withApi, ok } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { getOrder } from "@/server/services/order.service";

export const GET = withApi(async (request, { params }) => {
  const user = await requireAuth(request);
  const { id } = await params;
  return ok(await getOrder(user.userId, id));
});
