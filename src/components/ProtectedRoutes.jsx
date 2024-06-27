import useAuthStore from "@/context/useAuthStore";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { getToken } = useAuthStore();
  let auth = { token: getToken() };
  return auth.token ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
