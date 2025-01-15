import ProductCard from "../components/common/productCard/ProductCard";
import Navbar from "../components/layouts/navbar/Navbar";
import { products } from "../products";

const Products = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          stock={item.stock}
          imageUrl={item.imageUrl}
          category={item.category}
        />
      ))}
    </>
  );
};

export default Products;
