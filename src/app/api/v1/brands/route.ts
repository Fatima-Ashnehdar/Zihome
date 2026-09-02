import { withApi, ok } from "@/server/http/handler";
import { listBrands } from "@/server/services/catalog.service";

export const GET = withApi(async () => ok(await listBrands()));
