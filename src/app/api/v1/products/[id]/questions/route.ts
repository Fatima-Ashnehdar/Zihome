import { z } from "zod";
import { withApi, ok, parseJson } from "@/server/http/handler";
import { createQuestion } from "@/server/services/catalog.service";

export const POST = withApi(async (request, { params }) => {
  const { id } = await params;
  const { question } = z.object({ question: z.string().min(1) }).parse(await parseJson(request));
  return ok(await createQuestion(id, question), 201);
});
