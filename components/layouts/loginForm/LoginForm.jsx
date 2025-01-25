"use client";
import React from "react";
import BtnLoginUser from "@/components/common/buttons/BtnLoginUser";
import BtnRegisterUser from "@/components/common/buttons/BtnRegisterUser";

const LoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  registerUser,
  loginUser,
  buttons,
  role,
}) => {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
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
                type="email"
                value={email}
                required
                className="grow"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
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
                type="password"
                value={password}
                required
                className="grow"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {buttons.includes("login") && (
              <BtnLoginUser
                loginUser={loginUser}
                email={email}
                password={password}
              />
            )}
            {buttons.includes("register") && (
              <BtnRegisterUser
                registerUser={registerUser}
                email={email}
                password={password}
                role={role}
              />
            )}
          </form>
        </div>
      </dialog>
    </>
  );
};

export default LoginForm;
