import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes = () => {
  const auth = { token: Cookies.get("token") };

  return auth.token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
