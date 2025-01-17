import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              alt="Box Office News"
              src={"/logoLaFika1.svg"}
              width={200}
              height={200}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">La Fika Panaderia</h1>
              <p className="py-6">
                La Fika Panaderia is a small bakery that specializes in
                traditional Mexican pastries. We are located in la Florida
                Chile.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
