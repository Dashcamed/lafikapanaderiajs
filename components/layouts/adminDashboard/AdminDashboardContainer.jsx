"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/app/context/configFirebase";
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  startAt,
  getDocs,
} from "firebase/firestore";
import ProductTableList from "./ProductTableList";
import AdminNavbar from "./AdminNavbar";

const ITEMS_PER_PAGE = 10;

const AdminDashboardContainer = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstDoc, setFirstDoc] = useState(null);
  const [lastDoc, setLastDoc] = useState(null);
  const [prevDocs, setPrevDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);

  const fetchProducts = async (direction) => {
    if (loading) return;
    setLoading(true);

    try {
      let ref = collection(db, "products");
      let q = query(ref, orderBy("title"), limit(ITEMS_PER_PAGE));

      if (direction === "next" && lastDoc) {
        q = query(
          ref,
          orderBy("title"),
          startAfter(lastDoc),
          limit(ITEMS_PER_PAGE)
        );
      } else if (direction === "prev" && prevDocs.length > 0) {
        const prevDoc = prevDocs[prevDocs.length - 1];
        q = query(
          ref,
          orderBy("title"),
          startAt(prevDoc),
          limit(ITEMS_PER_PAGE)
        );
      }

      const querySnapshot = await getDocs(q);
      const newProducts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (newProducts.length < ITEMS_PER_PAGE) {
        setHasNext(false);
      } else {
        setHasNext(true);
      }

      if (direction === "next") {
        setPrevDocs([...prevDocs, firstDoc]); // Guardamos la referencia del primer doc
        setHasPrev(true);
        setCurrentPage(currentPage + 1);
      } else if (direction === "prev") {
        setPrevDocs(prevDocs.slice(0, -1)); // Eliminamos la última referencia guardada
        setCurrentPage(currentPage - 1);
        setHasPrev(prevDocs.length > 1);
      }

      setProducts(newProducts);
      setFirstDoc(querySnapshot.docs[0]); // Guardamos el primer documento de la página
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]); // Último documento
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <AdminNavbar />
      <section className="grid grid-flow-row place-content-center bg-base-300">
        <ProductTableList
          items={products}
          currentPage={currentPage}
          hasNext={hasNext}
          hasPrev={hasPrev}
          onNext={() => fetchProducts("next")}
          onPrev={() => fetchProducts("prev")}
          loading={loading}
        />
      </section>
    </>
  );
};

export default AdminDashboardContainer;
