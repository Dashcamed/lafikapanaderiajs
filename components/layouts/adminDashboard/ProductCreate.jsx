"use client";
import Link from "next/link";
import React from "react";

const ProductCreate = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  slugify,
  copyToClipboard,
  showAlert,
}) => {
  return (
    <>
      <section className="flex flex-col items-center py-2">
        <h2 className="text-2xl font-bold text-center mt-2">
          Crear producto nuevo
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <div>
            <label className="label">
              <span className="label-text">Imagen del producto</span>
              <button
                className="btn btn-link"
                type="button"
                onClick={() => {
                  showAlert(
                    "Imagen por defecto copiada al portapapeles",
                    "success"
                  );
                  copyToClipboard(
                    "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg"
                  );
                }}
              >
                Img por defecto
              </button>
            </label>
            <input
              {...register(
                "imageUrl",
                { required: true },
                { valueAsURL: true }
              )}
              type="text"
              placeholder="imageUrl"
              className={
                errors.imageUrl
                  ? "input input-bordered w-full max-w-xs border-red-500"
                  : "input input-bordered w-full max-w-xs"
              }
            />
            {errors.imageUrl && <p>Este campo es obligatorio</p>}
            <label className="label">
              <span className="label-text">Nombre del producto</span>
            </label>
            <input
              {...register(
                "title",
                { required: true, onChange: (e) => slugify(e.target.value) },
                { maxLength: 50 }
              )}
              type="text"
              placeholder="title"
              className={
                errors.title
                  ? "input input-bordered w-full max-w-xs border-red-500"
                  : "input input-bordered w-full max-w-xs"
              }
            />

            <label className="label">
              <span className="label-text">Categoria</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full max-w-xs"
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
            {errors.category && <p>{errors.category.message}</p>}
            <label className="label">
              <span className="label-text">Descripcion</span>
            </label>
            <input
              {...register(
                "description",
                { required: true },
                { maxLength: 200 }
              )}
              type="text"
              placeholder="description"
              className={
                errors.description
                  ? "input input-bordered w-full max-w-xs border-red-500"
                  : "input input-bordered w-full max-w-xs"
              }
            />
            <label className="label">
              <span className="label-text">Contiene</span>
            </label>
            <input
              {...register("contiene", { required: true }, { maxLength: 50 })}
              type="text"
              placeholder="contiene"
              className={
                errors.contiene
                  ? "input input-bordered w-full max-w-xs border-red-500"
                  : "input input-bordered w-full max-w-xs"
              }
            />
            <label className="label">
              <span className="label-text">Precio</span>
            </label>
            <input
              {...register("price", {
                required: true,
                pattern: /^[0-9]+$/,
                valueAsNumber: true,
              })}
              type="number"
              placeholder="price"
              className={
                errors.price
                  ? "input input-bordered w-full max-w-xs border-red-500"
                  : "input input-bordered w-full max-w-xs"
              }
            />
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              {...register("stock", {
                required: true,
                pattern: /^[0-9]+$/,
                valueAsNumber: true,
              })}
              type="number"
              placeholder="stock"
              className={
                errors.stock
                  ? "input input-bordered w-full max-w-xs border-red-500"
                  : "input input-bordered w-full max-w-xs"
              }
            />
          </div>
          <Link href="/admin" className="btn btn-primary mr-3">
            Volver atrás
          </Link>
          <button className="btn btn-success mt-2" type="submit">
            Crear
          </button>
        </form>
      </section>
    </>
  );
};

export default ProductCreate;
