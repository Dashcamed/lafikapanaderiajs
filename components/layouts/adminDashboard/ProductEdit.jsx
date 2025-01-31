import React from "react";
import ProductEditCard from "./ProductEditCard";

const ProductEdit = async ({ slug }) => {
  const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
  }).then((r) => r.json());

  const product = Array.isArray(item) ? item[0] : item;
  return <ProductEditCard item={product} />;
};

export default ProductEdit;
