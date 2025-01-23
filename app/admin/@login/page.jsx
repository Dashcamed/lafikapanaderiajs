import LoginFormContainer from "@/components/layouts/loginForm/LoginFormContainer";

import React from "react";

const Loginpage = () => {
  return (
    <section className="hero min-h-screen bg-base-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-current text-5xl font-bold">Bienvenido</h2>
          <div className="py-6">
            <LoginFormContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loginpage;
