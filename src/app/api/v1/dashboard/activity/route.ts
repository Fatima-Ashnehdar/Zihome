import { withApi, ok } from "@/server/http/handler";
import { requireAdmin } from "@/server/http/auth-context";
import { getDashboardActivity } from "@/server/services/order.service";

export const GET = withApi(async (request) => {
  await requireAdmin(request);
  return ok(await getDashboardActivity());
});
