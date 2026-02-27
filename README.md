# NovaLend — Employer-Ready React Lending Demo

A modern lending product website built with **React + TypeScript + Tailwind CSS**.

## What was improved

- Richer visual storytelling with:
  - hero illustration image
  - product gallery imagery
  - customer stories and expanded feature/service copy
  - animated hero cards and polished gradients
- Better navigation:
  - active route highlighting
  - responsive mobile menu with toggle
  - cleaner route structure
- Performance optimizations:
  - route-level lazy loading with `React.lazy` + `Suspense`
  - memoized home view to reduce unnecessary renders
  - lazy image loading for non-critical assets
- Quality improvements:
  - GitHub Actions CI (`npm ci`, build, test)
  - Jest + Testing Library setup for baseline coverage
  - Typed language/content model for maintainability

## Tech stack

- React 18
- TypeScript
- Tailwind CSS
- React Router
- React Helmet Async
- Jest + Testing Library
- GitHub Actions

## Run locally

```bash
npm install
npm start
```

Visit: http://localhost:3000

## Scripts

- `npm start` — run development server
- `npm test` — run tests
- `npm run build` — build production bundle

## CI

Workflow file: `.github/workflows/ci.yml`

Runs on push and pull request:

1. `npm ci`
2. `npm run build`
3. `npm test -- --watch=false`

## Project structure

- `src/components` — reusable UI blocks (header/footer)
- `src/pages` — route-level page content
- `src/content.ts` — localized text/content models
- `src/LanguageContext.tsx` — language state and toggle
