// ProtectedRoute.js
"use client";
import { useAuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../common/loader/Loader";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, role, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else if (requiredRole && role !== requiredRole) {
        router.push("/unauthorized");
      }
    }
  }, [user, role, requiredRole, router, loading]);

  if (loading || !user || (requiredRole && role !== requiredRole)) {
    return <Loader />;
  }
  return children;
};

export default ProtectedRoute;
