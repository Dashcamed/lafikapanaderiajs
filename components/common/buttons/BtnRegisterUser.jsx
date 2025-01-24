import React from "react";

const BtnRegisterUser = ({ registerUser, values }) => {
  return (
    <>
      <button className="btn btn-primary" onClick={() => registerUser(values)}>
        Registrarse
      </button>
    </>
  );
};

export default BtnRegisterUser;
