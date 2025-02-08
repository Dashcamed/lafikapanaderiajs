"use client";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { db } from "../context/configFirebase";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import Loader from "@/components/common/loader/Loader";
import { useAlert } from "../context/AlertContext";
import CheckoutForm from "@/components/layouts/checkoutComponents/CheckoutForm";

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();

  let total = getTotalAmount();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const order = {
      buyer: data,
      items: cart,
      total: total,
      date: new Date(),
      status: "pending",
    };

    if (!order.items || order.items.length === 0 || !order.total) {
      showAlert("La orden no tiene artículos", "error");
      setIsLoading(false);
      return;
    }

    let refCollection = collection(db, "orders");
    addDoc(refCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((element) => {
      updateDoc(doc(db, "products", element.id), {
        stock: element.stock - element.quantity,
      });
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };
  if (isLoading) {
    return <Loader />;
  }

  let childProps = {
    copyToClipboard,
    register,
    handleSubmit,
    onSubmit,
    errors,
    onSubmit,
    cart,
    total,
    orderId,
  };

  return <CheckoutForm {...childProps} />;
}
