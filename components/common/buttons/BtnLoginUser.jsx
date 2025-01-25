"use client";
import React from "react";
const BtnLoginUser = ({ loginUser, email, password }) => {
  return (
    <button
      className="btn btn-success"
      onClick={() => loginUser({ email, password })}
    >
      Ingresar
    </button>
  );
};

export default BtnLoginUser;
