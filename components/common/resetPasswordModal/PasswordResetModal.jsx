"use client";
import React, { useState } from "react";

const PasswordResetModal = ({ resetPassword }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePasswordReset = async () => {
    setIsLoading(true);
    setMessage("");
    try {
      await resetPassword(email);
      setMessage("Correo de recuperación enviado correctamente.");
    } catch (error) {
      setMessage("Error al enviar el correo. Verifica tu email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Olvide mi contraseña
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Recuperar Contraseña</h3>
          <p className="py-4">
            Ingresa tu correo electrónico para recibir un enlace de recuperación
            de contraseña.
          </p>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {message && <p className="text-sm mt-2 text-center">{message}</p>}
          <div className="modal-action">
            <button
              onClick={handlePasswordReset}
              className={`btn btn-primary ${isLoading ? "loading" : ""}`}
              disabled={!email || isLoading}
            >
              Enviar
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PasswordResetModal;
