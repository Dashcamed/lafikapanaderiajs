"use client";
import { createContext, useState } from "react";
import { useAlert } from "./AlertContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { showAlert } = useAlert();

  const addToCart = (product) => {
    if (!product.slug || !product.quantity || !product.price) {
      console.error("Producto inválido");
      return;
    }

    let exist = cart.some((element) => element.slug === product.slug); //boolean

    if (exist) {
      let newArray = cart.map((element) => {
        if (element.slug === product.slug) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(newArray);
      showAlert("Agregado al carrito", "success");
    } else {
      setCart([...cart, product]);
      showAlert("Agregado al carrito", "success");
    }
  };

  const deleteProductById = (slug) => {
    let filteredArray = cart.filter((product) => product.slug !== slug);
    setCart(filteredArray);
    showAlert("Producto Eliminado", "error");
  };

  const getTotalAmount = () => {
    let totalCart = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalCart;
  };

  const getTotalQuantity = () => {
    let totalCartProducts = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return totalCartProducts;
  };

  const clearCart = () => {
    setCart([]);
    showAlert("Carrito Vacio", "warning");
  };

  const getTotalQuantityById = (slug) => {
    let product = cart.find((element) => element.slug === slug);
    return product ? product.quantity : 1;
  };
  let data = {
    cart,
    addToCart,
    deleteProductById,
    getTotalAmount,
    getTotalQuantity,
    clearCart,
    getTotalQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
