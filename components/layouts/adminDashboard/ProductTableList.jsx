import React from "react";
import Pagination from "@/components/common/pagination/Pagination";

const ProductTableList = ({ items, onPageChange, totalPages, currentPage }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th colSpan={5}>
              <Pagination
                onPageChange={onPageChange}
                totalPages={totalPages}
                currentPage={currentPage}
              />
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Productos</th>
            <th>Precio</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {items.map((item) => (
            <tr key={item.slug}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.imageUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
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
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock</th>
            <th></th>
          </tr>
          <tr className="text-center">
            <th colSpan={5}>
              <Pagination
                onPageChange={onPageChange}
                totalPages={totalPages}
                currentPage={currentPage}
              />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductTableList;
