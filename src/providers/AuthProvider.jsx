/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const provider = new GoogleAuthProvider();

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   // new user register via email, password
   const registerUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // user login
   const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
   }

   // signInWithGoogle
   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, provider)
   }

   // logout
   const logout = () => {
      setLoading(true)
      return signOut(auth)
   }

   // userTracking
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setLoading(false)
      })
      return () => {
         unSubscribe()
      }
   }, [])

   const authInfo = { user, loading, registerUser, login, googleLogin, logout, setUser }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;