import { withApi, ok, queryParams } from "@/server/http/handler";
import { getShippingTimes } from "@/server/services/order.service";

export const GET = withApi(async (request) => {
  const { dayId } = queryParams(request);
  return ok(await getShippingTimes(dayId));
});
