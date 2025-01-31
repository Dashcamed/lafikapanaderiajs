"use client";
import { auth } from "./configFirebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { createContext, useEffect, useContext, useState } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUser(user);
          setRole(userDoc.data()?.role);
        } else {
          console.error("El documento del usuario no existe");
        }
      } else {
        setUser(null);
        setRole(null);
      }
    });
    return () => unsubscribe();
  }, [db]);

  const registerUser = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      if (!user) {
        console.error("No se creó el usuario");
        return;
      }

      await setDoc(doc(db, "users", user.uid), {
        role: values.role,
        email: values.email,
      });

      setUser(user);
      setRole(values.role);
    } catch (error) {
      console.error("Error al registrar el usuario:", error.message);
    }
  };

  const loginUser = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      if (!user) {
        console.error("No se encontró el usuario.");
        return;
      }
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setUser(user);
        setRole(userDoc.data()?.role);
      } else {
        console.log("No se encontró el documento del usuario.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Se ha enviado un correo para restablecer tu contraseña");
    } catch (error) {
      console.log(error, error.message);
      alert("Error al enviar el correo para restablecer tu contraseña");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRole(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        registerUser,
        loginUser,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
