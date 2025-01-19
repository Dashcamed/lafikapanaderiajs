"use client";
import React, { useState, useEffect, useContext } from "react";
import CounterContainer from "@/components/common/counter/CounterContainer";
import SkeletonCard from "@/components/common/skeletonCard/SkeletonCard";
import GoBack from "@/components/common/buttons/GoBack";
import { CartContext } from "@/app/context/CartContext";

const ProductDetail = ({ slug }) => {
  const [item, setItem] = useState({});
  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/product/${slug}`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      setItem(data);
    };

    fetchData();
  }, [slug]);

  if (!item.slug) {
    return (
      <section className="flex flex-row justify-center">
        <SkeletonCard />
      </section>
    );
  }
  let totalAdded = getTotalQuantityById(item.slug);
  const addOn = (quantity) => {
    let productInCart = { ...item, quantity };
    addToCart(productInCart);
  };
  return (
    <section className="flex flex-row justify-center">
      <article className="card card-compact lg:card-side lg:w-full xl:w-5/6 bg-base-100 shadow-xl">
        <div>
          <GoBack />
        </div>
        <figure>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="rounded-lg h-80 lg:h-96  "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl lg:text-3xl">{item.title}</h2>
          <p className="font-extrabold lg:text-2xl">${item.price}</p>
          <p className="font-semibold lg:text-xl">Stock: {item.stock}</p>
          <p className="lg:text-xl">{item.description}</p>
          <p className="text-xs lg:text-md font-bold">{item.contiene}</p>
          <div className="badge badge-outline capitalize mb-2">
            Categoría: {item.category}
          </div>
          <div className="card-actions justify-between items-center">
            <div>
              <CounterContainer
                stock={item.stock}
                addOn={addOn}
                totalAdded={totalAdded}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductDetail;
