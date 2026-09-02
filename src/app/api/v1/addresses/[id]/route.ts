import { withApi, ok, parseJson } from "@/server/http/handler";
import { requireAuth } from "@/server/http/auth-context";
import { updateAddress, deleteAddress, addressSchema } from "@/server/services/cart.service";

export const PUT = withApi(async (request, { params }) => {
  const user = await requireAuth(request);
  const { id } = await params;
  const body = addressSchema.parse(await parseJson(request));
  return ok(await updateAddress(user.userId, id, body));
});

export const DELETE = withApi(async (request, { params }) => {
  const user = await requireAuth(request);
  const { id } = await params;
  return ok(await deleteAddress(user.userId, id));
});
