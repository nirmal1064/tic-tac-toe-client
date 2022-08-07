import { Navigate, Outlet, useLocation } from "react-router-dom";
import BoardProvider from "../context/BoardProvider";
import SocketProvider from "../context/SocketProvider";
import { useUser } from "../context/UserProvider";

const ProtectedRoute = () => {
  const { state } = useUser();
  const { auth } = state;
  const location = useLocation();

  return auth ? (
    <SocketProvider>
      <BoardProvider>
        <Outlet />
      </BoardProvider>
    </SocketProvider>
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
};

export default ProtectedRoute;
