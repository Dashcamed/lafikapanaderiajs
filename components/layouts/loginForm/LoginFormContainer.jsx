"use client";
import React from "react";
import { useForm } from "react-hook-form";
import LoginForm from "./LoginForm";
import { useAuthContext } from "@/app/context/AuthContext";

const LoginFormContainer = ({ buttons = ["login", "register"], role }) => {
  const { registerUser, loginUser } = useAuthContext();

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
  };

  return <LoginForm {...childProps} />;
};

export default LoginFormContainer;
