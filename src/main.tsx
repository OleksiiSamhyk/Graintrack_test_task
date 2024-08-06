import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import { App } from "./app";
import "./index.css";
import "@radix-ui/themes/styles.css";

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Theme>
        <App />
      </Theme>
    </StrictMode>
  );
}
