"use client";

import { useState, useEffect } from "react";
import Drawer from "@/components/common/drawer/Drawer";
import ProductTableList from "./ProductTableList";

const AdminDashboardContainer = () => {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/admin?page=${currentPage}`,
        {
          cache: "no-store",
        }
      );
      const { data, totalPages } = await response.json();
      setItems(data);
      setTotalPages(totalPages);
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <header>
        <Drawer />
      </header>
      <section className="grid grid-flow-row place-content-center">
        <ProductTableList
          items={items}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
};

export default AdminDashboardContainer;
