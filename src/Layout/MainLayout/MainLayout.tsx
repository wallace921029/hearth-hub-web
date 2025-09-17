import { Outlet, useNavigate } from "react-router";

function MainLayout() {
  const navigate = useNavigate();

  return (
    <div>
      <Outlet />
      <button
        className="btn"
        onClick={() => navigate({ pathname: "/sign-in" })}
      >
        sign in
      </button>
    </div>
  );
}

export default MainLayout;
