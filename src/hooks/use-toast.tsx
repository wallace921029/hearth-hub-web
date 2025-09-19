import { useContext } from "react";
import { ToastContext } from "@/providers/ToastContext.js";

function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export { useToast };
