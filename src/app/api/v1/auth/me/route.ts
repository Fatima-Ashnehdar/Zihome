import { withApi, ok } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { getCurrentUser } from "@/server/services/auth.service";

export const GET = withApi(async (request) => {
  const user = await requireAuth(request);
  return ok(await getCurrentUser(user.userId));
});
