import { Button } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { useAuthStore } from "../store/auth";

export const Main = () => {
  const { state, clearAuthStore } = useAuthStore();

  return (
    <div>
      <h1>Hello {state.name}</h1>
      <Link href="/sign-in">
        <Button className="mt-2" onClick={clearAuthStore}>
          Sign-out
        </Button>
      </Link>
    </div>
  );
};
