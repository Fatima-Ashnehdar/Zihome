import { cookies } from "next/headers";
import { withApi, ok } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { logoutUser } from "@/server/services/auth.service";

export const POST = withApi(async (request) => {
  const user = await requireAuth(request);
  const result = await logoutUser(user.userId);
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  return ok(result);
});
