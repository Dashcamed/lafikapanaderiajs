import ProductDetailCard from "./ProductDetailCard";

const ProductDetail = async ({ slug }) => {
  const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
  }).then((r) => r.json());

  const product = Array.isArray(item) ? item[0] : item;
  return (
    <>
      <ProductDetailCard item={product} />
    </>
  );
};

export default ProductDetail;
