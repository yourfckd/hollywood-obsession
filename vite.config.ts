// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Apply the GitHub Pages subpath only when building for Pages
// (GITHUB_PAGES=1 is set in the deploy workflow). Dev / Lovable preview
// keep the root base so navigation, hydration, and assets resolve correctly.
const isGhPages = process.env.GITHUB_PAGES === "1";
const base = isGhPages ? "/hollywood-obsession/" : "/";
const basepath = isGhPages ? "/hollywood-obsession" : "/";

export default defineConfig({
  cloudflare: false,
  vite: {
    base,
    define: {
      "import.meta.env.VITE_GH_PAGES": JSON.stringify(isGhPages ? "1" : ""),
    },
  },
  tanstackStart: {
    router: {
      basepath,
    },
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
  },
});
