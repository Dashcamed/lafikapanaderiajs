import ProductList from "@/components/layouts/products/ProductList";

const Products = ({ params }) => {
  const { category } = params;

  return (
    <>
      <ProductList category={category} />
    </>
  );
};

export default Products;
