import { withApi, ok } from "@/server/http/handler";
import { getHeaderLayout } from "@/server/services/order.service";

export const GET = withApi(async () => ok(await getHeaderLayout()));
