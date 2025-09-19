# Repository Guidelines

## Project Structure & Module Organization
- `src/app/`: App Router entry points (`layout.tsx`, `page.tsx`) and global styles (`globals.css`).
- `src/lib/`: Shared utilities (e.g., `utils.ts` with `cn`). Place helpers here.
- `public/`: Static assets served at the site root.
- Config: `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `biome.json`, `components.json`.
- Suggested: Create `src/components/` for reusable UI (optionally `src/components/ui/`).

## Build, Test, and Development Commands
- `npm run dev`: Start the local dev server with Turbopack at `http://localhost:3000`.
- `npm run build`: Production build with Turbopack.
- `npm run start`: Run the production build locally.
- `npm run lint`: Lint and type-aware checks via Biome.
- `npm run format`: Auto-format the codebase with Biome.

## Coding Style & Naming Conventions
- **Language**: TypeScript + React (Next.js App Router), Tailwind CSS v4.
- **Indentation**: 2 spaces; formatting enforced by Biome.
- **Imports**: Keep tidy; use path aliases from `components.json` (e.g., `@/lib/utils`).
- **Components**: PascalCase for React components; one default export per file when reasonable.
- **Utilities & hooks**: `camelCase` for functions, `useX` prefix for hooks.
- **Files**: Follow Next patterns (`page.tsx`, `layout.tsx`); colocate component-specific styles/logic.

## Testing Guidelines
- Framework: Vitest + React Testing Library (jsdom env).
- Commands: `npm run test` (CI) or `npm run test:watch` (local).
- Naming: `*.test.ts`/`*.test.tsx` next to source or under `tests/`.
- Example: see `src/lib/utils.test.ts` for `cn` utility coverage.
- Aim for critical-path coverage (routing, shared utilities, interactive components).

## Commit & Pull Request Guidelines
- Use clear, scoped commits; Conventional Commits are encouraged.
  - Example: `feat(home): add hero section` or `fix(utils): handle null in cn()`
- PRs: include purpose, linked issues, and screenshots for UI changes.
- Before opening a PR: `npm run lint && npm run format`; remove `console.log`; update docs as needed.

## Security & Configuration Tips
- Secrets: use `.env.local` (not committed). Access via `process.env.NEXT_PUBLIC_*` for client-safe vars.
- Assets: place public files in `public/` and reference with `/path.ext`.
- Keep dependencies minimal; prefer first-party Next.js features.
