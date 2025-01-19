"use Client";

import { CartContextProvider } from "./context/CartContext";
import { AlertProvider } from "./context/AlertContext";

export function Providers({ children }) {
  return (
    <AlertProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </AlertProvider>
  );
}
