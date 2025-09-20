This repository is a full-stack TypeScript app (Express + Vite + React) with an embedded dev server.

Quick context
- Server: `server/*` (Express, ESM). Entry: `server/index.ts`. In development the server mounts Vite middleware (`server/vite.ts`).
- Client: `client/*` (Vite + React + Tailwind). Entry: `client/src/main.tsx` -> `client/src/App.tsx`.
- Storage/DB: `server/storage.ts` provides an in-memory `MemStorage` implementation. Drizzle ORM schema lives at `shared/schema.ts` and `drizzle.config.ts` is present for migrations.

Important workflows
- Start local development (client + server concurrently): npm run dev
  - This runs the Express server (server/index.ts) and Vite dev server together. In dev, Vite is mounted as middleware so the server serves both API and client.
- Build for production: npm run build
  - Builds the client (`vite build`) and bundles the server with esbuild into `dist/`.
- Database migrations: npm run db:push (requires DATABASE_URL env)

Project-specific conventions and patterns
- Single-port deployment: the server listens on port from `process.env.PORT` (default 5000) and serves both API and static client in production. Avoid changing ports unless you know firewall rules.
- API routes convention: prefix API routes with `/api`. `server/registerRoutes` is the place to add endpoints; it returns an HTTP Server used for Vite HMR in development.
- Storage abstraction: use `server/storage.ts`'s `IStorage` interface. The repo ships a `MemStorage` used for development/testing — replace `storage` with a DB-backed implementation without changing route code.
- Schema + types: `shared/schema.ts` defines Drizzle tables and Zod insert schemas. Use these types (e.g. `InsertUser`, `User`) across server code for type-safe DB access and validation.
- Client-server fetches: client `lib/queryClient.ts` uses react-query with a common `getQueryFn` that composes the fetch URL from `queryKey.join('/')`. Many fetches expect credentials (cookies) via `credentials: 'include'`.

Code patterns to follow when editing
- Add API handlers inside `server/registerRoutes` and use `storage` for persistence. Keep routes under the `/api` prefix and return JSON. Example: `app.post('/api/users', async (req,res)=>{ const u = await storage.createUser(req.body); res.json(u) })`.
- When adding DB-backed storage, implement `IStorage` and export an instance named `storage` from `server/storage.ts`. Keep the API surface identical so routes don't change.
- For server-side logging, use `server/vite.ts`'s `log()` helper for consistent timestamped messages.

What an AI agent should not change without human approval
- Do not change the server's listening port behavior or remove the Vite middleware conditional — deployment depends on a single port and the dev HMR setup.
- Don't remove or rename types in `shared/schema.ts` — they're used across server and client for typing and migrations.

Files you will often edit
- `server/index.ts` — bootstraps app, error handling, sets up Vite in dev.
- `server/routes.ts` — add and update API routes here.
- `server/storage.ts` — persistence; replace MemStorage when integrating a DB.
- `shared/schema.ts` — DB schema and Zod insert schemas.
- `client/src/*` — React components and UI; `client/src/lib/queryClient.ts` contains fetch conventions.

Examples
- Add a POST /api/users route (in `server/routes.ts`) that does validation using `insertUserSchema` from `shared/schema.ts` and calls `storage.createUser`.
- If you add migrations, update `drizzle.config.ts` and run `npm run db:push` with a valid `DATABASE_URL`.

If anything is ambiguous, ask the maintainer which of the following is intended: switch to a real DB (Drizzle + Postgres), or keep MemStorage for now.

Feedback request
- If this summary missed any bespoke steps (CI/CD, secrets, or hosted DB details), tell me and I will add them.
