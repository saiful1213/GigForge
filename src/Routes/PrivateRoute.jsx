/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
   const location = useLocation();

   const { user, loading } = UseAuth();

   if (loading) {
      return <p className="mt-28 text-2xl text-center">Loading...</p>
   }

   if (!user?.email) {
      return <Navigate to="/login" state={location.pathname}></Navigate>
   }

   return children
};

export default PrivateRoute;