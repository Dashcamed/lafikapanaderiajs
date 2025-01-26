import React from "react";
import AdminDashboardContainer from "@/components/layouts/adminDashboard/AdminDashboardContainer";
import ProtectedRoute from "../api/hoc/ProtectedRoute";
import { Suspense } from "react";
import Loader from "@/components/common/loader/Loader";
const AdminDashboard = ({ data, totalPages }) => {
  return (
    <ProtectedRoute requiredRole="admin">
      <Suspense fallback={<Loader />}>
        <AdminDashboardContainer data={(data, totalPages)} />
      </Suspense>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
