"use client";
import React from "react";
import PasswordResetModal from "../resetPasswordModal/PasswordResetModal";

const BtnSendPassReset = ({ resetPassword }) => {
  return (
    <button className="btn btn-link" type="checkbox" id="password-reset-modal">
      Olvide mi contraseña
      <PasswordResetModal resetPassword={resetPassword} />
    </button>
  );
};

export default BtnSendPassReset;
