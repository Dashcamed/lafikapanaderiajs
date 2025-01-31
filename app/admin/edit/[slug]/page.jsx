import ProductEdit from "@/components/layouts/adminDashboard/ProductEdit";
import React from "react";
import ProtectedRoute from "@/app/api/hoc/ProtectedRoute";

const DetailEdit = async ({ params }) => {
  const { slug } = await params;
  return (
    <ProtectedRoute requiredRole="admin">
      <ProductEdit slug={slug} />
    </ProtectedRoute>
  );
};

export default DetailEdit;
