import { NextResponse } from "next/server";
import { db } from "@/app/context/configFirebase";
import { collection, getDocs } from "firebase/firestore";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Handles GET requests to fetch a paginated list of products.
 *
 * @param {Request} request - The incoming request object containing the URL.
 * @returns {Promise<NextResponse>} A JSON response containing paginated product data and total pages.
 *
 * The function extracts the page number from the request's query parameters,
 * defaults to page 1 if not provided, and calculates the offset for pagination.
 * It fetches all product documents from the Firestore collection, sorts them
 * alphabetically by title, slices the array to get the current page's products,
 * and calculates the total number of pages. The response includes the current
 * page's product data and the total number of pages.
 */

/******  f982e2a8-1b4e-4bde-aca1-1d83fe0273ba  *******/
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  let ref = collection(db, "products");
  const querySnapshot = await getDocs(ref);
  const products = querySnapshot.docs.map((doc) => doc.data());

  const sortedProducts = products.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const data = sortedProducts.slice(offset, offset + pageSize);
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  return NextResponse.json({ data, totalPages });
}
