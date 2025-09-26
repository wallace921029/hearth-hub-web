import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router/index.tsx";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById("root")!).render(
  <HeroUIProvider className="w-full h-full overflow-hidden">
    <RouterProvider router={router} />
  </HeroUIProvider>
);
