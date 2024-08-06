import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <nav className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/sign-in" className="[&.active]:font-bold">
            sign-in
          </Link>
        </nav>
        <hr />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="p-4 bg-slate-800 h-24 mt-auto"> </footer>
      <TanStackRouterDevtools />
    </div>
  );
};
