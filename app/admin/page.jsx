import React from "react";
import AdminDashboardContainer from "@/components/layouts/adminDashboard/AdminDashboardContainer";
import ProtectedRoute from "../../components/hoc/ProtectedRoute";
export default function AdminDashboard() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminDashboardContainer />
    </ProtectedRoute>
  );
}
