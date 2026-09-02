import { describe, it, expect } from "vitest";
import { phoneSchema, loginSchema, verifyCodeSchema } from "@/server/services/auth.service";
import { parsePagination, paginationMeta } from "@/server/lib/response";

describe("Auth validation", () => {
  it("validates Iranian phone number", () => {
    expect(phoneSchema.safeParse({ phone: "09123456789" }).success).toBe(true);
    expect(phoneSchema.safeParse({ phone: "08123456789" }).success).toBe(false);
  });

  it("validates login password rules", () => {
    expect(loginSchema.safeParse({ phone: "09123456789", password: "Test1234" }).success).toBe(true);
    expect(loginSchema.safeParse({ phone: "09123456789", password: "short" }).success).toBe(false);
  });

  it("validates OTP code length", () => {
    expect(verifyCodeSchema.safeParse({ phone: "09123456789", code: "123456" }).success).toBe(true);
    expect(verifyCodeSchema.safeParse({ phone: "09123456789", code: "123" }).success).toBe(false);
  });
});

describe("Pagination", () => {
  it("parses page and limit with defaults", () => {
    const result = parsePagination({});
    expect(result.page).toBe(1);
    expect(result.limit).toBe(20);
    expect(result.skip).toBe(0);
  });

  it("caps limit at 100", () => {
    expect(parsePagination({ limit: "500" }).limit).toBe(100);
  });

  it("computes total pages", () => {
    expect(paginationMeta(1, 20, 45).totalPages).toBe(3);
  });
});

describe("Response helpers", () => {
  it("builds success envelope", async () => {
    const { success } = await import("@/server/lib/response");
    expect(success({ ok: true })).toEqual({ success: true, data: { ok: true } });
  });

  it("builds error envelope", async () => {
    const { errorResponse } = await import("@/server/lib/response");
    expect(errorResponse("NOT_FOUND", "Missing")).toEqual({
      success: false,
      error: { code: "NOT_FOUND", message: "Missing", details: undefined },
    });
  });
});
