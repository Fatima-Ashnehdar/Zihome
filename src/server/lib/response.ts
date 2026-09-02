export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  meta?: PaginationMeta;
}

export interface ApiErrorResponse {
  success: false;
  error: { code: string; message: string; details?: unknown };
}

export function success<T>(data: T, meta?: PaginationMeta): ApiSuccessResponse<T> {
  return meta ? { success: true, data, meta } : { success: true, data };
}

export function errorResponse(code: string, message: string, details?: unknown): ApiErrorResponse {
  return { success: false, error: { code, message, details } };
}

export function parsePagination(query: Record<string, string | null | undefined>) {
  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.min(100, Math.max(1, Number(query.limit) || 20));
  return { page, limit, skip: (page - 1) * limit };
}

export function paginationMeta(page: number, limit: number, total: number): PaginationMeta {
  return { page, limit, total, totalPages: Math.ceil(total / limit) || 1 };
}
