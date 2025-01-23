"use client";
import { auth } from "./configFirebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const registerUser = async (values, setUser) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    const user = userCredential.user;

    setUser({
      logged: true,
      email: user.email,
      uid: user.uid,
    });
  } catch (error) {
    console.error("Error al registrar el usuario:", error.message);
  }
};

const loginUser = async (values, setUser) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    const user = userCredential.user;

    setUser({
      logged: true,
      email: user.email,
      uid: user.uid,
    });
  } catch (error) {
    console.log("error al iniciar sesion", error.message);
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser: (values) => registerUser(values, setUser),
        loginUser: (values) => loginUser(values, setUser),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
