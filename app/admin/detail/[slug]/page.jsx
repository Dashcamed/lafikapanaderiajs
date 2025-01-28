import ProductEdit from "@/components/layouts/adminDashboard/ProductEdit";
import React from "react";

const DetailEdit = async ({ params }) => {
  const { slug } = await params;
  return <ProductEdit slug={slug} />;
};

export default DetailEdit;
