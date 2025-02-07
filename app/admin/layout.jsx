"use client";
import { useAuthContext } from "../context/AuthContext";
import Loader from "@/components/common/loader/Loader";

const AdminLayout = ({ children, login }) => {
  const { user, loading } = useAuthContext();

  if (loading) return <Loader />;
  if (!user) {
    return login;
  }

  return <>{children}</>;
};

export default AdminLayout;
