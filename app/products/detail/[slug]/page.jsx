import SkeletonCard from "@/components/common/skeletonCard/SkeletonCard";
import ProductDetail from "@/components/layouts/products/ProductDetail";
import { Suspense } from "react";

const DetailPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <>
      <Suspense fallback={<SkeletonCard cards={1} />}>
        <ProductDetail slug={slug} />
      </Suspense>
    </>
  );
};

export default DetailPage;
