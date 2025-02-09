"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { db } from "@/app/context/configFirebase";
import { updateDoc, doc } from "firebase/firestore";
import { useAlert } from "@/app/context/AlertContext";
import Link from "next/link";

const AdminClientOrders = ({ orders, onUpdate }) => {
  const { control, handleSubmit } = useForm();
  const [editingOrderId, setEditingOrderId] = useState(null);
  const { showAlert } = useAlert();

  const formatDate = (timestamp) => {
    if (!timestamp || !(timestamp instanceof Date))
      return "Fecha no disponible";
    return timestamp.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleEditClick = (orderId) => {
    setEditingOrderId(orderId);
  };

  const handleSaveStatus = async (data, orderId) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status: data.status });
      onUpdate();
      showAlert("Estado Actualizado", "success");
      setEditingOrderId(null);
    } catch (error) {
      console.error("Error al actualizar el estado:", error);
    }
  };

  return (
    <section>
      <div className="flex flex-row items-center justify-center py-2">
        <h2 className="text-current text-xl font-bold text-center mt-2 mx-2">
          Órdenes de Compra de Clientes
        </h2>
        <Link className="btn btn-primary mr-1" href={"/admin/"}>
          Volver
        </Link>
      </div>
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
                  {editingOrderId === order.id ? (
                    <form
                      onSubmit={handleSubmit((data) =>
                        handleSaveStatus(data, order.id)
                      )}
                    >
                      <Controller
                        name="status"
                        control={control}
                        defaultValue={order.status}
                        render={({ field }) => (
                          <select {...field} className="select select-bordered">
                            <option value="Pendiente">Pendiente</option>
                            <option value="Para Retirar">Para Retirar</option>
                            <option value="Completeda">Terminada</option>
                          </select>
                        )}
                      />
                      <button
                        type="submit"
                        className="btn btn-xs btn-success ml-2"
                      >
                        Guardar
                      </button>
                      <button
                        type="button"
                        className="btn btn-xs btn-error ml-1"
                        onClick={() => setEditingOrderId(null)}
                      >
                        Cancelar
                      </button>
                    </form>
                  ) : (
                    <>
                      {order.status}
                      <button
                        className="btn btn-xs btn-primary ml-2"
                        onClick={() => handleEditClick(order.id)}
                      >
                        Editar
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminClientOrders;
