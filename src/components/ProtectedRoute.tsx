import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../context/UserProvider";

const ProtectedRoute = () => {
  const { state } = useUser();
  const { auth } = state;
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
};

export default ProtectedRoute;
