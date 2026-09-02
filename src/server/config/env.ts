import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  DATABASE_URL: z
    .string()
    .min(1)
    .default("postgresql://zihome:zihome_secret@localhost:5432/zihome?schema=public"),
  JWT_SECRET: z.string().min(16).default("dev-jwt-secret-min-32-chars-long!!"),
  JWT_REFRESH_SECRET: z.string().min(16).default("dev-refresh-secret-min-32-chars!!"),
  SESSION_SECRET: z.string().min(16).default("dev-session-secret-min-32-chars!!"),
  OTP_EXPIRY_MINUTES: z.coerce.number().default(5),
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  SESSION_SECRET: process.env.SESSION_SECRET,
  OTP_EXPIRY_MINUTES: process.env.OTP_EXPIRY_MINUTES,
});
