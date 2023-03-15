import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({user}) => {
  // const user = false;
  const user2 = sessionStorage.getItem("user") || false

  return user2 ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
