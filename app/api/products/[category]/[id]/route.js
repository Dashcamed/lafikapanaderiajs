import { mockData } from "@/data/products";
import { NextResponse } from "next/server";

const sleep = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(_, { params }) {
  const { id } = params;
  const data = mockData.find((product) => product.id === id);

  await sleep(1000);

  return NextResponse.json(data);
}
