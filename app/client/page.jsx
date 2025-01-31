import React from "react";
import ClientLayoutContainer from "@/components/layouts/clientLayout/ClientLayoutContainer";
import ProtectedRoute from "../../components/hoc/ProtectedRoute";

const ClientPage = () => {
  return (
    <ProtectedRoute requiredRole="client">
      <ClientLayoutContainer />
    </ProtectedRoute>
  );
};

export default ClientPage;
