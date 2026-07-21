# warpedpuppies/portfolio

A personal portfolio website built with React and Vite.

## Stack

- **Framework**: React 18 (JavaScript), bundled with Vite 7
- **Styling**: SCSS (`App.scss`, `src/sass/`)
- **Testing**: Vitest + Testing Library (jsdom)
- **Structure**: `src/pages/`, `src/components/`, `src/site-data/`, `src/layout-templates/`

## Development

Package manager / runtime: **bun** (lockfile: `bun.lock`).

```bash
bun install
bun run dev      # http://localhost:3000 (alias: bun start)
bun run build    # outputs to build/
bun run preview  # serve the production build locally
bun run test     # vitest — NOTE: use `bun run test`, not `bun test`
```

> `bun test` invokes Bun's *own* test runner, which ignores `vite.config.js`.
> Always run the suite as `bun run test` so it goes through the package.json
> script and uses Vitest.

### Vite migration notes

- Migrated from Create React App (`react-scripts`) to Vite.
- JSX lives in plain `.js` files (not `.jsx`), so `vite.config.js` sets the
  esbuild `jsx` loader for `src/**/*.js` and pre-bundles deps with the same loader.
- `index.html` lives at the project root (Vite convention); static assets stay in `public/`.
- `optimizeDeps.entries` is pinned to the root `index.html` so the dep scanner
  ignores the leftover standalone prototype at
  `src/components/webinars/solitaire/code/index.html`.
- `build.outDir` is `build/` to match the old CRA deploy path.

## To-Do
