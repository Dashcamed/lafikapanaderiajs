"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { db } from "@/app/context/configFirebase";
import { addDoc, collection } from "firebase/firestore";
import { useAlert } from "@/app/context/AlertContext";
import { useState } from "react";
import ProductCreate from "@/components/layouts/adminDashboard/ProductCreate";
import { useRouter } from "next/navigation";

export default function AdminCreateProduct() {
  const ref = collection(db, "products");
  const { showAlert } = useAlert();
  const [slugifiedTitle, setSlugifiedTitle] = useState("");
  const router = useRouter();
  const slugify = (str) => {
    const slug = str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+$/g, "")
      .replace(/^-+/, "");
    setSlugifiedTitle(slug);
  };

  const onSubmit = async (data) => {
    data.slug = slugifiedTitle;
    await addDoc(ref, data);
    showAlert("Producto creado correctamente", "success");
    router.push("/admin");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imageUrl: "",
      title: "",
      category: "",
      description: "",
      contiene: "",
      price: "",
      stock: "",
    },
  });

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

  let childProps = {
    register,
    handleSubmit,
    onSubmit,
    errors,
    slugify,
    slugifiedTitle,
    copyToClipboard,
    showAlert,
  };

  return <ProductCreate {...childProps} />;
}
