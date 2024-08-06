import { createRoute, createRouter, redirect } from "@tanstack/react-router";
import { Main } from "../../pages/main";
import { layout } from "./main-layout";
import { signInRoute } from "./sign-in";

const indexRoute = createRoute({
  getParentRoute: () => layout,
  path: "/",
  beforeLoad: ({ context, location }) => {
    if (!context.auth.name) {
      throw redirect({
        to: "/sign-in",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: Main,
});

const routeTree = layout.addChildren([indexRoute, signInRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    auth: {},
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
