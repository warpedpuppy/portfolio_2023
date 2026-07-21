import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Migrated from Create React App.
// This project keeps JSX inside plain `.js` files (rather than `.jsx`), so
// esbuild is told to run the JSX loader over every `.js`/`.jsx` file in `src`.
// The `optimizeDeps` loader override does the same for pre-bundled deps.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Match CRA's output directory so existing deploy config keeps working.
    outDir: "build",
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    // Only crawl the real app entry. Prevents the dep scanner from tripping
    // over the leftover standalone prototype at
    // src/components/webinars/solitaire/code/index.html.
    entries: ["index.html"],
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
