import { Navigate, Outlet } from "react-router-dom";

//? In practice this part is contained in Global State's. (Context API, Redux, Mobx)
//! const isSigned = userContext(jwt)
const isSigned = true;

const PrivateRouter = () => {

  return (
    <div>
      {isSigned ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default PrivateRouter;
