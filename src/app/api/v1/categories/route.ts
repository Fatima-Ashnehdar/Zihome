import { withApi, ok } from "@/server/http/handler";
import { listCategories } from "@/server/services/catalog.service";

export const GET = withApi(async () => ok(await listCategories()));
