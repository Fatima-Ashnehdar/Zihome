import { withApi, ok } from "@/server/http/handler";
import { getFooterLayout } from "@/server/services/order.service";

export const GET = withApi(async () => ok(await getFooterLayout()));
