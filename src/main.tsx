import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router/index.tsx";
import { ToastProvider } from "./providers/ToastContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ToastProvider>
    <RouterProvider router={router} />
  </ToastProvider>
);
