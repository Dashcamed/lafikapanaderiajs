"use client";
import React from "react";
import { useForm } from "react-hook-form";
import LoginForm from "./LoginForm";
import { useAuthContext } from "@/app/context/AuthContext";

const LoginFormContainer = ({
  buttons = ["login", "register", "resetPassword"],
  role,
}) => {
  const { registerUser, loginUser, resetPassword } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitLogin = async (data) => {
    const { email, password } = data;
    await loginUser({ email, password });
  };

  const onSubmitRegister = async (data) => {
    const { email, password } = data;
    await registerUser({ email, password, role });
  };

  const childProps = {
    register,
    handleSubmit,
    onSubmitLogin,
    onSubmitRegister,
    errors,
    registerUser,
    loginUser,
    buttons,
    role,
    resetPassword,
  };

  return <LoginForm {...childProps} />;
};

export default LoginFormContainer;
