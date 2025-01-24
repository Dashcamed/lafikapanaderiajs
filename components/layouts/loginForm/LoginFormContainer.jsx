"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import { useAuthContext } from "@/app/context/AuthContext";

const LoginFormContainer = ({ buttons = ["login", "register"] }) => {
  const { registerUser, loginUser } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  let childProps = {
    values,
    handleChange,
    handleSubmit,
    registerUser,
    loginUser,
    buttons,
  };
  return <LoginForm {...childProps} />;
};

export default LoginFormContainer;
