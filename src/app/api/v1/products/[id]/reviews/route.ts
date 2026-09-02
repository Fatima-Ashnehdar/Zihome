import { z } from "zod";
import { withApi, ok, parseJson } from "@/server/http/handler";
import { getAuthUser } from "@/server/http/auth-context";
import { createReview } from "@/server/services/catalog.service";

const reviewSchema = z.object({
  authorName: z.string().min(1),
  score: z.number(),
  opinion: z.string().min(1),
  reviewDate: z.string().optional(),
});

export const POST = withApi(async (request, { params }) => {
  const { id } = await params;
  const body = reviewSchema.parse(await parseJson(request));
  const user = await getAuthUser(request);
  const review = await createReview(id, body, user?.userId);
  return ok(review, 201);
});
