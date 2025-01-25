import React from "react";

const BtnRegisterUser = ({ registerUser, email, password, role }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => registerUser({ email, password, role })}
    >
      Registrarse
    </button>
  );
};

export default BtnRegisterUser;
