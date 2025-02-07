// ProtectedRoute.js
"use client";
import { useAuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../common/loader/Loader";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, role } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) return; // Esperar a que el estado se inicialice

    if (!user) {
      router.replace("/login"); // `replace` evita que el usuario pueda regresar atrás
    } else if (requiredRole && role !== requiredRole) {
      router.replace("/unauthorized");
    }
  }, [user, role, requiredRole, router]);

  if (user === undefined) {
    return <Loader />; // Evita que se renderice antes de saber el estado
  }

  return children;
};

export default ProtectedRoute;
