import { withApi, ok, queryParams } from "@/server/http/handler";
import { listCategoryProducts } from "@/server/services/catalog.service";

export const GET = withApi(async (request, { params }) => {
  const { id } = await params;
  const result = await listCategoryProducts(id, queryParams(request));
  return ok(result.data, 200, result.meta);
});
