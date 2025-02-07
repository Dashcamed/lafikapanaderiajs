"use client";
import React from "react";
import Link from "next/link";
import Pagination from "@/components/common/pagination/Pagination";

const ProductTableList = ({
  items,
  currentPage,
  hasNext,
  hasPrev,
  onNext,
  onPrev,
  loading,
}) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Productos</th>
            <th>Precio</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.imageUrl} alt={item.title} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm opacity-50">{item.category}</div>
                  </div>
                </div>
              </td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <Link
                  href={`admin/edit/${item.slug}`}
                  className="btn btn-accent btn-xs"
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <div className="text-center my-4">
        <Pagination
          currentPage={currentPage}
          hasNext={hasNext}
          hasPrev={hasPrev}
          onNext={onNext}
          onPrev={onPrev}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ProductTableList;
