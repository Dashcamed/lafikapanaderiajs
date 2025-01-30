"use client";
import { useAuthContext } from "../context/AuthContext";

const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext();

  if (!user) {
    return login || null;
  }

  return <>{children}</>;
};

export default AdminLayout;
