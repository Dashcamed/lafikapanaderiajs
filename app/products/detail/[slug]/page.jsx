import ProductDetail from "@/components/layouts/products/ProductDetail";

const DetailPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <>
      <ProductDetail slug={slug} />
    </>
  );
};

export default DetailPage;
