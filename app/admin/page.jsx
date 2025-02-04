import React from "react";
import AdminDashboardContainer from "@/components/layouts/adminDashboard/AdminDashboardContainer";
import ProtectedRoute from "../../components/hoc/ProtectedRoute";
export default function AdminDashboard({ data, totalPages }) {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminDashboardContainer data={(data, totalPages)} />
    </ProtectedRoute>
  );
}
