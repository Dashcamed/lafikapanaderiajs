import React from "react";
import AdminDashboardContainer from "@/components/layouts/adminDashboard/AdminDashboardContainer";
const AdminDashboard = ({ data, totalPages }) => {
  return <AdminDashboardContainer data={(data, totalPages)} />;
};

export default AdminDashboard;
