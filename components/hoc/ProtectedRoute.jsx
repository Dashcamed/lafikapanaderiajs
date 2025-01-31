"use client";
import { useAuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, role } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (requiredRole && role !== requiredRole) {
      router.push("/unauthorized");
    }
  }, [user, role, requiredRole, router]);

  if (!user || (requiredRole && role !== requiredRole)) {
    return null;
  }
  return children;
};

export default ProtectedRoute;
