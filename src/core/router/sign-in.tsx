import { createRoute } from "@tanstack/react-router";
import { SignInPage } from "../../pages/sign-in-page";
import { layout } from "./main-layout";

export const signInRoute = createRoute({
  getParentRoute: () => layout,
  path: "/sign-in",
  component: SignInPage,
});
