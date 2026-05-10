import { QueryClient } from "@tanstack/react-query";
import { createRouter, createHashHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // Vite injects BASE_URL from vite.config.ts `base`. Strip the trailing
  // slash so it matches TanStack Router's basepath format ("/" or "/foo").
  const isGhPages = import.meta.env.VITE_GH_PAGES === "1";
  const baseUrl = import.meta.env.BASE_URL || "/";
  const basepath = isGhPages
    ? "/"
    : baseUrl === "/"
      ? "/"
      : baseUrl.replace(/\/$/, "");

  const router = createRouter({
    routeTree,
    basepath,
    history: isGhPages && typeof window !== "undefined" ? createHashHistory() : undefined,
    trailingSlash: "never",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
