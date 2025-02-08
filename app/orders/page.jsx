"use client";

import { useForm } from "react-hook-form";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../context/configFirebase";
import { useState } from "react";
import Loader from "@/components/common/loader/Loader";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "orders"),
        where("buyer.email", "==", data.email)
      );
      const querySnapshot = await getDocs(q);
      setOrders(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp.seconds * 1000).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Ordenar las órdenes por fecha descendente
  const sortedOrders = orders.sort((a, b) => b.date.seconds - a.date.seconds);

  return (
    <section className="h-fit md:h-dvh grid grid-flow-row place-content-center py-2 px-2 bg-base-300">
      <h2 className="text-3xl font-bold py-2">Revisa tus órdenes de compra</h2>
      <p className="mb-4">
        Escribe el correo electrónico asociado a la compra que realizaste
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="email"
            className="grow"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico inválido",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>

      {loading && (
        <div className="text-center">
          <Loader />
        </div>
      )}

      {orders.length > 0 ? (
        <div className="overflow-x-auto mt-4">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th className="border px-4 py-2">Fecha</th>
                <th className="border px-4 py-2">Productos</th>
                <th className="border px-4 py-2">Cantidad</th>
                <th className="border px-4 py-2">Total</th>
                <th className="border px-4 py-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {sortedOrders.map((order) => (
                <tr key={order.id} className="text-center">
                  <td className="border px-4 py-2 font-semibold">
                    {formatDate(order.date)}
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
      ) : (
        <div className="text-center mt-4">
          <p className="text-xl font-semibold">No hay órdenes para mostrar</p>
        </div>
      )}
    </section>
  );
}
