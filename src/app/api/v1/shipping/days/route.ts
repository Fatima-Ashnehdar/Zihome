import { withApi, ok } from "@/server/http/handler";
import { getShippingDays } from "@/server/services/order.service";

export const GET = withApi(async () => ok(await getShippingDays()));
