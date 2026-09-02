import { withApi, ok, queryParams } from "@/server/http/handler";
import { listProducts } from "@/server/services/catalog.service";

export const GET = withApi(async (request) => {
  const result = await listProducts(queryParams(request));
  return ok(result.data, 200, result.meta);
});
