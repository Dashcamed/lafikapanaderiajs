"use client";
import { auth } from "./configFirebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { createContext, useEffect, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const registerUser = async (values) => {
  try {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
  } catch (error) {
    console.error("Error al registrar el usuario:", error.message);
  }
};

const loginUser = async (values, setUser) => {
  try {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  } catch (error) {
    console.log("error al iniciar sesion", error.message);
  }
};

const logout = async () => {
  await signOut(auth);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser: (values) => registerUser(values, setUser),
        loginUser: (values) => loginUser(values, setUser),
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
