# Simple Task Management UI

Bootstrapped with Vite + React + TypeScript.

- UI Components from Mantine UI (`@mantine/core`, `@mantine/hooks`, `@mantine/dates`, `@mantine/notifications`, `@mantine/form`)

- Routing with `react-router` (Declarative mode)

- State Management done via Context API.

- State persisted to `localStorage`

- Code linting: `biomejs`

## Dev setup:

Using `pnpm`:
```bash
pnpm ci && pnpm dev
```

## Quick reference:
- UI Components: `src/components/*`

- Core logic:
  - Tasks: `src/lib/tasks/*`
  - Sorting `src/lib/sort/*`
  - `localStorage` persisting: `src/lib/tasks/persist.ts`

## Areas of improvement:
- Error handling: Handling specific `localStorage` errors like outdated storage
- Form validation: Adding more detailed rules for task creation like title character length, title unique check
- Project structure: Better organization of the `src/components` directory and isolation of core logic to `src/lib` only