import { createRootRouteWithContext } from "@tanstack/react-router";
import { Layout } from "../../pages/layout";

export interface RouterContext {
  auth: { name?: string };
}

export const layout = createRootRouteWithContext<RouterContext>()({
  component: Layout,
});
