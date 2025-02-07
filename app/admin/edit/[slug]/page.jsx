import React from "react";
import ProductEditCard from "@/components/layouts/adminDashboard/ProductEditCard";
import { db } from "@/app/context/configFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const DetailEdit = async ({ params }) => {
  const { slug } = await params;
  const ref = collection(db, "products");
  const q = query(ref, where("slug", "==", slug));

  const querySnapshot = await getDocs(q);
  const item = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const product = Array.isArray(item) ? item[0] : item;
  return <ProductEditCard item={product} />;
};

export default DetailEdit;
