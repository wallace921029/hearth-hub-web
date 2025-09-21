import { createBrowserRouter, Navigate } from "react-router";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Todo from "../pages/Todo/Todo";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        Component: MainLayout,
        children: [
          { path: "", element: <Navigate to="/todo" /> },
          { path: "todo", Component: Todo },
        ],
      },
    ],
  },
  { path: "/sign-in", Component: SignIn },
  { path: "/sign-up", Component: SignUp },
]);

export default router;
