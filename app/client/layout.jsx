"use client";

import { useAuthContext } from "../context/AuthContext";

export default function ClientLayout({ children, login }) {
  const { user } = useAuthContext();
  return <>{user.logged ? children : login}</>;
}
