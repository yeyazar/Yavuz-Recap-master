import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = true; //TODO 

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
