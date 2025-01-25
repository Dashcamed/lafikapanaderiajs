"use client";
import React from "react";
import { useAuthContext } from "@/app/context/AuthContext";

const ClientLayoutContainer = () => {
  const { logout } = useAuthContext();
  return (
    <div>
      ClientLayoutContainer
      <div>
        <button className="btn btn-primary" onClick={logout}>
          salir
        </button>
      </div>
    </div>
  );
};

export default ClientLayoutContainer;
