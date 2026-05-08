// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Root-based static export for GitHub Pages (Option A: custom domain or org/user
// pages at the domain root). Assets resolve from "/", so the build is portable.
export default defineConfig({
  vite: {
    base: "/",
  },
  tanstackStart: {
    router: {
      basepath: "/",
    },
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
  },
});
