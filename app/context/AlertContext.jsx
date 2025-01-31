"use client";
import React, { createContext, useState, useContext } from "react";

// Creamos el contexto
const AlertContext = createContext();

// Hook para acceder al contexto
export const useAlert = () => useContext(AlertContext);

// Proveedor del contexto
export const AlertProvider = ({ children }) => {
  const [alertData, setAlertData] = useState({
    message: "",
    visible: false,
    type: "success", // success, error, warning, info
    hasButtons: false,
    onConfirm: null,
  });

  // Alerta automática (se oculta después de 3s)
  const showAlert = (message, type = "success") => {
    setAlertData({
      message,
      visible: true,
      type,
      hasButtons: false,
      onConfirm: null,
    });

    // Ocultar automáticamente después de 3s (solo si no es confirmación)
    setTimeout(() => {
      setAlertData((prev) =>
        prev.hasButtons ? prev : { ...prev, visible: false }
      );
    }, 3000);
  };

  // Alerta con botones de confirmación
  const showAlertWithButtons = (message, onConfirm, type = "warning") => {
    setAlertData({ message, visible: true, type, hasButtons: true, onConfirm });
  };

  const handleConfirm = () => {
    if (alertData.onConfirm) {
      alertData.onConfirm(); // Ejecuta la acción de confirmación
    }
    setAlertData((prev) => ({ ...prev, visible: false }));
  };

  const handleCancel = () => {
    setAlertData((prev) => ({ ...prev, visible: false }));
  };

  return (
    <AlertContext.Provider value={{ showAlert, showAlertWithButtons }}>
      {children}
      <Alert
        visible={alertData.visible}
        message={alertData.message}
        type={alertData.type}
        hasButtons={alertData.hasButtons}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </AlertContext.Provider>
  );
};

// Componente de alerta
const Alert = ({ visible, message, type, hasButtons, onConfirm, onCancel }) => {
  const alertTypes = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
    info: "alert-info",
  };

  if (!visible) return null;

  return (
    <div className="toast toast-top toast-center z-10">
      <div className={`alert ${alertTypes[type]}`} role="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{message}</span>
        {hasButtons && (
          <div className="flex gap-2 ml-4">
            <button className="btn btn-sm" onClick={onCancel}>
              Cancelar
            </button>
            <button className="btn btn-sm btn-primary" onClick={onConfirm}>
              Aceptar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
