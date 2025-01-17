import ProductCard from "@/components/layouts/products/ProductCard";

const ProductList = async ({ category }) => {
  const items = await fetch(`http://localhost:3000/api/products/${category}`, {
    cache: "no-store",
  }).then((r) => r.json());
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-3 place-items-center">
      {items.map((item) => (
        <ProductCard
          item={item}
          key={item.slug}
          title={item.title}
          price={item.price}
          stock={item.stock}
          imageUrl={item.imageUrl}
          category={item.category}
        />
      ))}
    </section>
  );
};

export default ProductList;
