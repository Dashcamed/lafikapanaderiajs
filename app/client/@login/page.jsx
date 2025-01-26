import LoginFormContainer from "@/components/layouts/loginForm/LoginFormContainer";
import React from "react";

const LoginPageClient = () => {
  return (
    <section className="hero min-h-screen bg-base-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-current text-5xl font-bold">Inicia Sesión</h2>
          <div className="py-6">
            <LoginFormContainer
              buttons={["login", "register", "resetPassword"]}
              role="client"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPageClient;
