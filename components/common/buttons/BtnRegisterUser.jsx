import React from "react";

const BtnRegisterUser = ({ registerUser, email, password, role }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={(e) => {
        e.preventDefault();
        registerUser({ email, password, role });
      }}
    >
      Registrarse
    </button>
  );
};

export default BtnRegisterUser;
