## Quick context for AI agents

This is a small Express-based Node.js API project. Key patterns you should rely on when making changes:

- App entry: `index.js` — registers middleware, `routes/api.js` at `/api`, and `routes/web.js` at `/`.
- Typical request flow: routes -> controller -> service -> repository -> database (MySQL via `config/database.js`).

## Important files / locations

- Route configuration: `routes/api.js` (examples: `GET /users`, `GET /hanghoas`).
- Controllers: `controllers/*` — handle HTTP, call service methods, use `logger` and try/catch.
- Services: `services/*` — business logic, transform to DTOs and throw for not-found.
- Repositories: `repositories/*` — raw SQL using `mysql2` pool; return rows or single row.
- DTOs: `dtos/*` — simple classes that shape responses and inputs (e.g., `dtos/users/*`).
- Validators: `validators/*` — use Zod schemas (e.g., `validators/users/create-user.validator.js`).
- DB config: `config/database.js` — reads `MYSQL_URI` or `MYSQL_*` env vars; SQL file present at `SQLQuery.sql`.
- Logging: `config/logger.js` and `middlewares/logger.middleware.js` — winston + daily rotate files.

## How to add/extend an API endpoint (follow these concrete steps)

1. Add route to `routes/api.js` (or `routes/web.js` for non-API pages).
2. Implement controller in `controllers/` with the same naming pattern (use `logger` and try/catch, follow existing response codes).
3. Add business logic in `services/`: call repository methods and map results to DTOs.
4. Implement SQL in `repositories/` using `pool.query(...)` and return rows or row[0].
5. Add DTOs under `dtos/*` and Zod-based validators under `validators/*` to match input shapes.

Example flow (create user):
- `validators/users/create-user.validator.js` -> `controllers/user.controller.js` (validate, create DTO) -> `services/user.service.js` -> `repositories/user.repository.js` (INSERT SQL) -> return `dtos/users/user.dto.js`.

## Runtime & developer workflows

- Run locally: `npm install` then `npm start` (uses `nodemon index.js`).
- Node engines supported: Node 18 or 20 (see `package.json` engines).
- Linter: `npm run lint` and auto-fix with `npm run lintfix` (project uses `standard` + `snazzy`).
- Database: set environment variables or `MYSQL_URI`; `SQLQuery.sql` contains initial schema/queries.

## Project-specific patterns & gotchas

- Repositories use raw SQL (no ORM) via `mysql2` pool. Expect plain query strings and positional parameters `?`.
- DTOs are thin classes — services return DTO instances, controllers return those objects as JSON.
- Validation uses Zod; validators always throw on invalid input and controllers catch errors and return 4xx.
- Logging is centralized — use `logger.info` / `logger.warn` / `logger.error` consistently.
- Many controllers have commented-out methods (CRUD for some resources). Check both existing methods and commented code to understand intended patterns.

## Integration points

- MySQL database (local or remote) — configured via `config/database.js`.
- Optional libraries listed in `package.json` (Sentry, Redis, Sequelize) may appear but are not necessarily used across the codebase; prefer current mysql2-based approach.

## What NOT to change without review

- Global error handling in `index.js` and logging configuration in `config/logger.js` — these affect all requests and logs.
- The SQL in `repositories/*` — ensure positional parameters are correct and validate SQL in a local DB when possible.

---

If anything above is unclear or you'd like examples added (e.g., how to write a unit test, or how to run against the `SQLQuery.sql` schema), tell me which section to expand. 
