import { NextResponse } from "next/server";
import { db } from "@/app/context/configFirebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  let ref = collection(db, "products");
  const querySnapshot = await getDocs(ref);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id, // ID del documento
    ...doc.data(), // Datos del documento
  }));

  const sortedProducts = products.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const data = sortedProducts.slice(offset, offset + pageSize);
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  return NextResponse.json({ data, totalPages });
}
