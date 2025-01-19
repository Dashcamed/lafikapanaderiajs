import ProductCard from "@/components/layouts/products/ProductCard";

const ProductList = async ({ category }) => {
  const items = await fetch(`http://localhost:3000/api/products/${category}`, {
    cache: "no-store",
  }).then((r) => r.json());
  if (items.length === 0) {
    return (
      <div className="grid sm: grid-flow-row grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center py-3 bg-base-300 sm: px-3">
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className="grid sm: grid-flow-row grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center py-3 bg-base-300 sm: px-3">
      {items.map((item) => {
        return (
          <ProductCard
            item={item}
            key={item.slug}
            title={item.title}
            price={item.price}
            stock={item.stock}
            imageUrl={item.imageUrl}
            category={item.category}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
