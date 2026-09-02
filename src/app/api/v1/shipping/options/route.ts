import { withApi, ok } from "@/server/http/handler";
import { getShippingOptions } from "@/server/services/order.service";

export const GET = withApi(async () => ok(await getShippingOptions()));
