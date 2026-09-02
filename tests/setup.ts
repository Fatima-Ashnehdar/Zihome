process.env.DATABASE_URL ??=
  "postgresql://zihome:zihome_secret@localhost:5432/zihome?schema=public";
process.env.JWT_SECRET ??= "test-jwt-secret-min-32-chars-long!!";
process.env.JWT_REFRESH_SECRET ??= "test-refresh-secret-min-32-chars!!";
process.env.SESSION_SECRET ??= "test-session-secret-min-32-chars!!";
