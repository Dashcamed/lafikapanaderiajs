"use client";
import ProductCard from "@/app/components/common/productCard/ProductCard";
import { products } from "../../products";
import { useRouter } from "next/navigation";

const Products = ({ params }) => {
  const router = useRouter();
  const { category } = params;

  const items =
    category === "all"
      ? products
      : products.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );

  console.log("Category:", category);
  console.log("Filtered Items:", items);

  return (
    <>
      <header>
        <button className="btn btn-secondary" onClick={() => router.back()}>
          Volver
        </button>
      </header>
      <section>
        {items.length > 0 ? (
          items.map((item) => (
            <ProductCard
              key={item.title} // Cambia esto si tienes un ID único
              title={item.title}
              price={item.price}
              stock={item.stock}
              imageUrl={item.imageUrl}
              category={item.category}
            />
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </section>
    </>
  );
};

export default Products;
