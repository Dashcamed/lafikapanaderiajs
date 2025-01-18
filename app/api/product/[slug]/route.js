import { mockData } from "@/data/products";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = await params;

  const numericSlug = Number(slug);

  const data = mockData.find((product) => product.slug === numericSlug);

  if (!data) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}
