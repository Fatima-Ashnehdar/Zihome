import { withApi, ok } from "@/server/http/handler";
import { getCategoryById } from "@/server/services/catalog.service";

export const GET = withApi(async (_request, { params }) => {
  const { id } = await params;
  return ok(await getCategoryById(id));
});
