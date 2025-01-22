"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  return (
    <>
      <section
        className="hero min-h-screen bg-fixed bg-center"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dpisx0ysb/image/upload/v1725830829/baguette_mhv5py.svg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl xl:text-7xl font-bold">
              Queremos brindarte la mejor experiencia
            </h1>
            <p className="mb-5 xl:text-lg">
              Usamos solo ingredientes de calidad y fabricamos todo en nuestra
              sucursal. De la mano de nuestros proveedores te ofrecemos los
              mejores bebestibles y un café de calidad superior.
            </p>
            <Link href="/products/all" className="btn btn-primary mr-2">
              Ver Productos
            </Link>
            <button className="btn btn-secondary" onClick={() => router.back()}>
              Volver
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

{
  /*  */
}
