"use client";
import Loader from "@/components/common/loader/Loader";
import React from "react";

const loading = () => {
  return (
    <section className="h-dvh grid grid-cols-1 place-items-center">
      <Loader />
    </section>
  );
};

export default loading;
