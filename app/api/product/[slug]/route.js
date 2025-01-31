import { db } from "@/app/context/configFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = await params;

  const ref = collection(db, "products");
  const q = query(ref, where("slug", "==", slug));

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return NextResponse.json(data);
}
