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

  const onSubmit = async (data) => {
    const { email, password } = data;
    await loginUser({ email, password });
  };

  const childProps = {
    register,
    handleSubmit,
    onSubmit,
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
