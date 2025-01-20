import Link from "next/link";

export default function Home() {
  return (
    <section className="hero bg-base-200 min-h-screen animate-fade-in">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt="Kanelbullar de La Fika Panaderia"
          src={
            "https://res.cloudinary.com/dpisx0ysb/image/upload/v1725830834/kanelbullar_k5yihy.svg"
          }
          className="w-80 max-w-sm rounded-lg shadow-sm"
        />
        <div>
          <h1 className="text-4xl xl:text-7xl font-bold">
            Bienvenido a La Fika Panaderia
          </h1>
          <p className="py-4 xl:text-lg">
            Descubre una panaderia fantástica con productos que te sorprenderán,
            fabricados con ingredientes de excelente calidad y artesanalmente.
          </p>
          <Link href="/about" className="btn btn-primary">
            Sobre nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}
