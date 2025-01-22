import ProductList from "@/components/layouts/products/ProductList";
import React from "react";
import { Suspense } from "react";
import SkeletonCard from "@/components/common/skeletonCard/SkeletonCard";

const Products = async ({ params }) => {
  const { category } = await params;

  return (
    <>
      <Suspense fallback={<SkeletonCard cards={8} />}>
        <ProductList category={category} />
      </Suspense>
    </>
  );
};

export default Products;
