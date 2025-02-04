import ProductDetailCard from "@/components/layouts/products/ProductDetailCard";
import { db } from "@/app/context/configFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  const ref = collection(db, "products");
  const q = query(ref, where("slug", "==", slug));

  const querySnapshot = await getDocs(q);
  const item = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const product = Array.isArray(item) ? item[0] : item;

  return (
    <>
      <ProductDetailCard item={product} />
    </>
  );
}
