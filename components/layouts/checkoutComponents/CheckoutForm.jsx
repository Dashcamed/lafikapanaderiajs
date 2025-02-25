"use client";
import Link from "next/link";
import { useAlert } from "@/app/context/AlertContext";

const CheckoutForm = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  cart,
  total,
  orderId,
  copyToClipboard,
}) => {
  const { showAlert } = useAlert();
  return (
    <section className="h-dvh grid grid-cols-1">
      {orderId ? (
        <article className="card card-compact bg-base-100 h-fit w-80 md:w-80 shadow-xl my-4 justify-self-center items-center place-content-center">
          <div className="card-body">
            <h2 className="text-xl lg:text-2xl text-center">
              Gracias por tu compra:
            </h2>
            <p className="text-xl lg:text-2xl text-center ">
              Este es el identificador de tu orden:
            </p>
            <p className="text-xl lg:text-2xl text-center">{orderId}</p>
            <button
              className="btn btn-info"
              type="button"
              onClick={() => {
                showAlert("Orden Copiada", "success");
                copyToClipboard(orderId.toString());
              }}
            >
              Copiame!
            </button>
            <p className="text-xl lg:text-2xl text-center">
              Puedes revisar el estado de tu compra en el apartado de pedidos
            </p>
            <Link href="/" className="btn btn-primary">
              Volver al inicio
            </Link>
          </div>
        </article>
      ) : (
        <article className="justify-center mx-2 my-2">
          <div className="card bg-base-200 shadow-xl lg:w-2/4 xl:w-1/4 p-2 mx-1 justify-self-center">
            <h2 className="card-title mb-1">Proceso de compra</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="input input-bordered flex items-center gap-2 my-1">
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("name", {
                    required: "El nombre es obligatorio",
                    maxLength: { value: 50, message: "Máximo 50 caracteres" },
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
                      message: "Solo letras y espacios",
                    },
                  })}
                />
                {errors.name && <span>{errors.name.message}</span>}
              </label>

              <label className="input input-bordered flex items-center gap-2 my-1">
                <input
                  type="tel"
                  placeholder="Teléfono"
                  {...register("phone", {
                    required: "El teléfono es obligatorio",
                    pattern: { value: /^[0-9]+$/, message: "Solo números" },
                  })}
                />
                {errors.phone && <span>{errors.phone.message}</span>}
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Formato de email inválido",
                    },
                  })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </label>

              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">
                  Comprar
                </button>
              </div>
            </form>
          </div>
          <div className="w-72 h-2/5 lg:w-2/4 xl:w-1/4 overflow-auto mx-auto my-2">
            <h2 className="lg:text-2xl font-semibold text-center mb-3">
              Total de tu compra : ${total}
            </h2>
            {cart.map((product) => (
              <div
                key={product.id}
                className="card card-side card-compact bg-base-300 mb-4 shadow-xl"
              >
                <figure>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="lg:w-48"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="font-semibold lg:text-xl">
                    Precio: ${product.price}
                  </p>
                  <p className="font-semibold lg:text-xl">
                    Cantidad: {product.quantity}
                  </p>
                  <p className="font-semibold lg:text-xl">
                    Subtotal: ${product.price * product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      )}
    </section>
  );
};

export default CheckoutForm;
