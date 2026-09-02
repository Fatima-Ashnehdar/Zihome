import { z } from "zod";
import { withApi, ok, parseJson } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { validateDiscount } from "@/server/services/cart.service";

export const POST = withApi(async (request) => {
  await requireAuth(request);
  const { code, subtotal } = z
    .object({ code: z.string(), subtotal: z.number() })
    .parse(await parseJson(request));
  return ok(await validateDiscount(code, subtotal));
});
