import { NextResponse } from "next/server";
import { mockData } from "@/data/products";

const sleep = (timer) => new Promise((resolve) => setTimeout(resolve, timer));
export async function GET(request, { params }) {
  const { category } = params;

  const data =
    category === "all"
      ? mockData
      : mockData.filter((item) => item.category === category);

  await sleep(1000);

  return NextResponse.json(data);
}
