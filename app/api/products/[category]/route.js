import { NextResponse } from "next/server";
import { mockData } from "@/data/products";
import React from "react";

export async function GET(request, { params }) {
  const { category } = await params;

  const data =
    category === "all"
      ? mockData
      : mockData.filter((item) => item.category === category);

  return NextResponse.json(data);
}
