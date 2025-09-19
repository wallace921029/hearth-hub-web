import { createContext, useState } from "react";

interface ToastContextType {
  toast: {
    info: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    error: (message: string) => void;
  };
}

const ToastContext = createContext<ToastContextType | null>(null);

function ToastProvider({ children }: { children: React.ReactNode }) {
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<
    "info" | "success" | "warning" | "error"
  >("info");
  const [toastMessage, setToastMessage] = useState("");
  const icons = {
    info: "ℹ️",
    success: "✅",
    warning: "⚠️",
    error: "❌",
  };

  const toast = {
    info: (message: string) => {
      setToastMessage(message);
      setToastType("info");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    },
    success: (message: string) => {
      setToastMessage(message);
      setToastType("success");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    },
    warning: (message: string) => {
      setToastMessage(message);
      setToastType("warning");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    },
    error: (message: string) => {
      setToastMessage(message);
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    },
  };

  return (
    <ToastContext.Provider
      value={{
        toast,
      }}
    >
      {children}
      {showToast && (
        <div className={`toast toast-top toast-center`}>
          <div className={`alert alert-${toastType}`}>
            <span>{icons[toastType]}</span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
