"use client";
import React from "react";

const BtnLoginUser = ({ loginUser, values }) => {
  return (
    <>
      <button className="btn btn-success" onClick={() => loginUser(values)}>
        Ingresar
      </button>
    </>
  );
};

export default BtnLoginUser;
