import { createBrowserRouter } from "react-router";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Todo from "../pages/Todo/Todo";

const router = createBrowserRouter([
  { path: "/sign-in", Component: SignIn },
  { path: "/sign-up", Component: SignUp },
  {
    path: "/",
    Component: MainLayout,
    children: [{ path: "todo", Component: Todo }],
  },
]);

export default router;
