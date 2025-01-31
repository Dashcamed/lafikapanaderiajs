import { NextResponse } from "next/server";
import { db } from "@/app/context/configFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request, { params }) {
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

  return NextResponse.json(data);
}
