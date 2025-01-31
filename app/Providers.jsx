"use Client";

import { CartContextProvider } from "./context/CartContext";
import { AlertProvider } from "./context/AlertContext";
import { AuthProvider } from "./context/AuthContext";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <AlertProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </AlertProvider>
    </AuthProvider>
  );
}
