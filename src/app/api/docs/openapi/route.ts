import { NextResponse } from "next/server";
import { openApiDocument } from "@/server/openapi/spec";

export async function GET() {
  return NextResponse.json(openApiDocument);
}
