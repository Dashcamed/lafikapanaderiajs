import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              alt="Kanelbullar de La Fika Panaderia"
              src={
                "https://res.cloudinary.com/dpisx0ysb/image/upload/v1725830834/kanelbullar_k5yihy.svg"
              }
              width={250}
              height={200}
              className=" max-w-sm rounded-lg shadow-sm"
            />
            <div>
              <h1 className="text-4xl font-bold">
                Bienvenido a La Fika Panaderia
              </h1>
              <p className="py-4">
                Descubre una panaderia fantástica con productos que te
                sorprenderán
              </p>
              <button className="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
