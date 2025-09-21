import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    // If not authenticated, redirect to sign-in page
    return <Navigate to="/sign-in" />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
