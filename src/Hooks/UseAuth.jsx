import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UseAuth = () => {
   const authInfo = useContext(AuthContext)
   return authInfo
};

export default UseAuth;