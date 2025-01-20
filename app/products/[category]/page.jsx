import ProductList from "@/components/layouts/products/ProductList";
import React from "react";
import { Suspense } from "react";
import Loading from "./Loading";

const Products = async ({ params }) => {
  const { category } = await params;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductList category={category} />
      </Suspense>
    </>
  );
};

export default Products;
