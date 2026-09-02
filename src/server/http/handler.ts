import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { AppError } from "@/server/lib/errors";
import { errorResponse, success, type PaginationMeta } from "@/server/lib/response";

type RouteContext = { params: Promise<Record<string, string>> };

type ApiHandler = (request: NextRequest, context: RouteContext) => Promise<NextResponse>;

export function withApi(handler: ApiHandler): ApiHandler {
  return async (request, context) => {
    try {
      return await handler(request, context);
    } catch (error) {
      if (error instanceof AppError) {
        return NextResponse.json(
          errorResponse(error.code, error.message, error.details),
          { status: error.statusCode },
        );
      }
      if (error instanceof ZodError) {
        return NextResponse.json(
          errorResponse("VALIDATION_ERROR", "Validation failed", error.flatten().fieldErrors),
          { status: 400 },
        );
      }
      console.error("[API Error]", error);
      return NextResponse.json(
        errorResponse("INTERNAL_ERROR", "An unexpected error occurred"),
        { status: 500 },
      );
    }
  };
}

export function ok<T>(data: T, status = 200, meta?: PaginationMeta) {
  return NextResponse.json(success(data, meta), { status });
}

export function parseJson<T>(request: NextRequest): Promise<T> {
  return request.json() as Promise<T>;
}

export function queryParams(request: NextRequest) {
  const params: Record<string, string> = {};
  request.nextUrl.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}
