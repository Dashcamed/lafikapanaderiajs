"use client";
import React from "react";
import Drawer from "@/components/common/drawer/Drawer";

import { useAuthContext } from "@/app/context/AuthContext";

const AdminNavbar = (s) => {
  const { logout } = useAuthContext();
  return (
    <nav className="navbar">
      <div className="flex-none">
        <Drawer />
      </div>
      <div className="flex-1 justify-center">
        <h2 className="text-xl font-bold text-center">Admin Dashboard</h2>
      </div>
      <div>
        <button className="btn btn-warning p-2" onClick={logout}>
          Cerrar sesion
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
