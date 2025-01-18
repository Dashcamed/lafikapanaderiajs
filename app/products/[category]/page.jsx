import ProductList from "@/components/layouts/products/ProductList";
import React from "react";

const Products = ({ params }) => {
  const { category } = React.use(params);

  return (
    <>
      <ProductList category={category} />
    </>
  );
};

export default Products;
