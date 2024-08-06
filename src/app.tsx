import { RouterProvider } from "@tanstack/react-router";
import { router } from "./core/router";
import { useAuthStore } from "./store/auth";

export const App = () => {
  const { state: authState } = useAuthStore();

  return <RouterProvider router={router} context={{ auth: authState }} />;
};
