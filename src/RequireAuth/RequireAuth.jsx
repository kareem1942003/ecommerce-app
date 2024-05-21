import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useUser();
  if (!user) {
    return <Navigate to={"/signin"} state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
