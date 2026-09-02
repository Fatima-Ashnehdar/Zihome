import { withApi, ok, parseJson } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import {
  listAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
  addressSchema,
} from "@/server/services/cart.service";

export const GET = withApi(async (request) => {
  const user = await requireAuth(request);
  return ok(await listAddresses(user.userId));
});

export const POST = withApi(async (request) => {
  const user = await requireAuth(request);
  const body = addressSchema.parse(await parseJson(request));
  return ok(await createAddress(user.userId, body), 201);
});
