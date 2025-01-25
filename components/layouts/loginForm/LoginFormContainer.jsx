"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import { useAuthContext } from "@/app/context/AuthContext";

const LoginFormContainer = ({ buttons = ["login", "register"], role }) => {
  const { registerUser, loginUser } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({ email, password });
  };

  let childProps = {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    registerUser,
    loginUser,
    buttons,
    role,
  };
  return <LoginForm {...childProps} />;
};

export default LoginFormContainer;
