"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { db } from "@/app/context/configFirebase";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { useAlert } from "@/app/context/AlertContext";

const ProductEditCard = ({ item }) => {
  const { showAlert, showAlertWithButtons } = useAlert();
  const [isEditing, setIsEditing] = useState(false);
  const { handleSubmit, control, reset } = useForm({
    defaultValues: item,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async (data) => {
    try {
      setIsEditing(false);
      const docRef = doc(db, "products", item.id);
      await updateDoc(docRef, data);
      showAlert("Producto Actualizado, vuelve atras", "success");
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const docRef = doc(db, "products", item.id);
      await deleteDoc(docRef);
      showAlert("Producto Eliminado correctamente", "success");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  const confirmDelete = () => {
    showAlertWithButtons(
      "¿Estás seguro de que quieres eliminar?",
      handleDelete,
      "warning"
    );
  };

  const handleCancel = () => {
    setIsEditing(false);
    reset(item);
  };
  return (
    <section className="flex flex-row justify-center bg-base-300">
      <article className="card card-compact lg:card-side lg:w-full xl:w-5/6 bg-base-100 shadow-xl my-3">
        <div>
          <Link
            href={`/admin`}
            className="btn btn-square absolute btn-primary right-px"
          >
            Volver
          </Link>
        </div>
        {!isEditing ? (
          <div>
            <button
              className="btn btn-secondary absolute left-px"
              onClick={handleEditClick}
            >
              Editar
            </button>
          </div>
        ) : (
          <div className="absolute left-px flex gap-2">
            <button
              className="btn btn-success"
              onClick={handleSubmit(handleSave)}
            >
              Guardar
            </button>
            <button className="btn btn-error" onClick={handleCancel}>
              Cancelar
            </button>
            <button className="btn btn-warning" onClick={confirmDelete}>
              Eliminar
            </button>
          </div>
        )}
        <figure>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="rounded-lg h-80 lg:h-96"
          />
        </figure>
        <div className="card-body" key={item.slug}>
          <h2 className="card-title text-2xl lg:text-3xl">
            {isEditing ? (
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <input {...field} className="input input-bordered w-full" />
                )}
              />
            ) : (
              item.title
            )}
          </h2>
          <p className="font-extrabold lg:text-2xl">
            {isEditing ? (
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="input input-bordered w-full"
                  />
                )}
              />
            ) : (
              `$${item.price}`
            )}
          </p>
          <p className="font-semibold lg:text-xl">
            Stock:{" "}
            {isEditing ? (
              <Controller
                name="stock"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="input input-bordered w-full"
                  />
                )}
              />
            ) : (
              item.stock
            )}
          </p>
          <p className="lg:text-xl">
            {isEditing ? (
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="textarea textarea-bordered w-full"
                  />
                )}
              />
            ) : (
              item.description
            )}
          </p>
          <div className="badge badge-outline capitalize mb-2">
            Categoría:{" "}
            {isEditing ? (
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <select
                    className="select select-bordered select-xs w-full max-w-xs"
                    {...field}
                  >
                    <option disabled selected>
                      Selecciona una categoria
                    </option>
                    <option>panaderia</option>
                    <option>bolleria</option>
                    <option>pasteleria</option>
                    <option>cafeteria</option>
                    <option>mermeladas</option>
                    <option>bebestibles</option>
                  </select>
                )}
              />
            ) : (
              item.category
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductEditCard;
