// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Use a relative asset base for GitHub Pages so the same verified artifact
// works from the repository path and from a Pages custom domain. Dev / Lovable
// preview keep the root base so local behavior remains unchanged.
const isGhPages = process.env.GITHUB_PAGES === "1";
const base: string = isGhPages ? "./" : "/";
const basepath = base === "/" || base === "./" ? "/" : base.replace(/\/$/, "");

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
