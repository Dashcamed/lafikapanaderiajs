import { db } from "@/app/context/configFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ProductCard from "@/components/layouts/products/ProductCard";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  let ref;
  if (category === "todos") {
    ref = query(collection(db, "products"));
  } else {
    ref = query(collection(db, "products"), where("category", "==", category));
  }

  const querySnapshot = await getDocs(ref);
  const products = querySnapshot.docs.map((doc) => doc.data());

  const sortedProducts = products.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const data = sortedProducts;

  return (
    <section>
      <div className="flex flex-col mt-3 text-center">
        <h2 className="text-current text-2xl font-bold capitalize">
          {category}
        </h2>
        <p className="font-semibold xl:text-lg">
          Total: {data.length} productos
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-4 justify-center mb-3">
        {data.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
