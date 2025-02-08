"use client";
import React from "react";

const AdminClientOrders = ({ orders }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp.seconds * 1000).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="border px-4 py-2">Fecha</th>
            <th className="border px-4 py-2">Cliente</th>
            <th className="border px-4 py-2">Productos</th>
            <th className="border px-4 py-2">Cantidad</th>
            <th className="border px-4 py-2">Total</th>
            <th className="border px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="border px-4 py-2 font-semibold">
                {formatDate(order.date)}
              </td>
              <td className="border px-4 py-2 font-semibold">
                {order.buyer.email}
              </td>
              <td className="border px-4 py-2">
                {order.items.map((item) => (
                  <p key={item.id}>{item.title}</p>
                ))}
              </td>
              <td className="border px-4 py-2">
                {order.items.map((item) => (
                  <p key={item.id}>{item.quantity}</p>
                ))}
              </td>
              <td className="border px-4 py-2 font-semibold">
                ${order.total.toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                {order.status === "pending" ? "Pendiente" : "Completada"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminClientOrders;
