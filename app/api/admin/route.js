import { NextResponse } from "next/server";
import { mockData } from "@/data/products";

/**
 * Handles GET requests to retrieve paginated mock product data.
 * Extracts the 'page' query parameter from the request URL and calculates
 * the offset for pagination. Returns a JSON response containing the sliced
 * mock data for the specified page and the total number of pages.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} - A promise that resolves to a JSON response
 * containing the paginated data and total pages.
 */

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  const data = mockData.slice(offset, offset + pageSize);
  const totalItems = mockData.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  return NextResponse.json({ data, totalPages });
}
