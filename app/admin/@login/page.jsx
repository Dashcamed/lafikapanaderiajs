import LoginFormContainer from "@/components/layouts/loginForm/LoginFormContainer";

export default function LoginPageAdmin() {
  return (
    <section className="hero min-h-screen bg-base-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-current text-4xl font-bold">
            Bienvenido Administrador
          </h2>
          <div className="py-6">
            <LoginFormContainer buttons={["login"]} role="admin" />
          </div>
        </div>
      </div>
    </section>
  );
}
