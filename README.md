# Zihome

Persian e-commerce storefront built with **Next.js 16** (App Router). The UI currently uses mock data; the backend API lives inside the same Next.js app and is ready for future integration.

## Stack

- **Frontend:** Next.js, React 19, Tailwind CSS v4, shadcn/ui
- **Backend:** Next.js Route Handlers (`/api/v1/*`), Prisma, PostgreSQL
- **Auth:** JWT (access + refresh), OTP registration, bcrypt passwords
- **Docs:** Swagger UI at `/docs`, OpenAPI at `/api/docs/openapi`

## Quick Start

### 1. Install dependencies

```bash
pnpm install
```

### 2. Environment

```bash
cp .env.example .env
```

Edit secrets in `.env` for production.

### 3. Start database (Docker)

```bash
pnpm docker:up
```

- PostgreSQL: `localhost:5432`
- Adminer: `http://localhost:8080` (user: `zihome`, password: `zihome_secret`, database: `zihome`)

### 4. Migrate & seed

```bash
pnpm db:generate
pnpm db:migrate:dev    # first time / schema changes
pnpm db:seed
```

### 5. Run dev server

```bash
pnpm dev
```

| URL | Description |
|-----|-------------|
| http://localhost:3000 | Frontend (mock data) |
| http://localhost:3000/docs | Swagger API docs |
| http://localhost:3000/api/health | Health check |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js dev server |
| `pnpm build` | Generate Prisma client + production build |
| `pnpm docker:up` | Start Postgres + Adminer |
| `pnpm docker:down` | Stop containers |
| `pnpm db:migrate` | Apply migrations (production) |
| `pnpm db:migrate:dev` | Create/apply migrations (development) |
| `pnpm db:seed` | Seed database with mock catalog data |
| `pnpm test:api` | Run API unit tests |
| `pnpm typecheck` | TypeScript check |

## Seed accounts

| Role | Phone | Password |
|------|-------|----------|
| Admin | `09123456789` | `Admin1234` |
| User | `09126996755` | `User12345` |

OTP codes are printed to the server console in development.

## API documentation

See [API.md](./API.md) for the full endpoint reference, auth flow, and response formats.

## Project structure

```
src/
├── app/              # Pages + API routes
├── server/           # Backend services (not imported by frontend pages)
├── components/       # UI components
├── actions/          # Server actions (legacy, not wired to new API)
└── lib/              # Shared utilities
prisma/               # Schema, migrations, seed
tests/                # Vitest tests
```

## Notes

- **Frontend is not connected to the API** — pages still read from mock modules under `src/lib/mock/`.
- Backend code is isolated under `src/server/` and `src/app/api/`.
- Do not commit `.env` — use `.env.example` as reference.
