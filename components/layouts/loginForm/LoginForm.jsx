"use client";
import React from "react";
import BtnLoginUser from "@/components/common/buttons/BtnLoginUser";
import BtnRegisterUser from "@/components/common/buttons/BtnRegisterUser";
import PasswordResetModal from "@/components/common/resetPasswordModal/PasswordResetModal";

const LoginForm = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  buttons,
  resetPassword,
}) => {
  return (
    <>
      <form
        className="flex flex-col gap-4 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            autoComplete="email"
            type="email"
            className="grow"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
        </label>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            autoComplete="current-password"
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </label>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        {buttons.includes("login") && <BtnLoginUser />}
        {buttons.includes("register") && <BtnRegisterUser />}
        {buttons.includes("resetPassword") && (
          <PasswordResetModal resetPassword={resetPassword} />
        )}
      </form>
    </>
  );
};

export default LoginForm;
