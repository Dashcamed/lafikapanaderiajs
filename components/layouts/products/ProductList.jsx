import ProductCard from "@/components/layouts/products/ProductCard";

const ProductList = async ({ category }) => {
  const items = await fetch(`http://localhost:3000/api/products/${category}`, {
    cache: "no-store",
  }).then((r) => r.json());

  return (
    <>
      <div className="py-3 bg-base-300 flex flex-col items-center">
        <h2 className="text-current text-2xl font-bold text-center capitalize">
          {category}
        </h2>
        <p>Total: {items.length} productos </p>
      </div>
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
    </>
  );
};

export default ProductList;
