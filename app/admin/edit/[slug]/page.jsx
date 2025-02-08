"use client";
import React, { useState, useEffect, use } from "react";
import ProductEditCard from "@/components/layouts/adminDashboard/ProductEditCard";
import { db } from "@/app/context/configFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "@/components/common/loader/Loader";

const DetailEdit = ({ params }) => {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const ref = collection(db, "products");
      const q = query(ref, where("slug", "==", slug));
      const querySnapshot = await getDocs(q);
      const item = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProduct(Array.isArray(item) ? item[0] : item);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  return product ? (
    <ProductEditCard item={product} onUpdate={fetchProduct} />
  ) : (
    <Loader />
  );
};

export default DetailEdit;
