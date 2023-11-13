/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import loader from "../assets/loader.webp"

const PrivateRoute = ({ children }) => {
   const location = useLocation();

   const { user, loading } = UseAuth();

   if (loading) {
      return <img src={loader} className="mt-28 mx-auto"/>
   }

   if (!user?.email) {
      return <Navigate to="/login" state={location.pathname}></Navigate>
   }

   return children
};

export default PrivateRoute;