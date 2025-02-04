"use client";
import { useAuthContext } from "../context/AuthContext";

const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext();

  if (!user) {
    return login;
  }

  return <>{children}</>;
};

export default AdminLayout;
