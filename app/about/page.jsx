"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/layouts/navbar/Navbar";
const About = () => {
  const router = useRouter();
  return (
    <>
      <main>
        <header>
          <Navbar />
        </header>
        <h1>About</h1>
        <button className="btn btn-secondary" onClick={() => router.back()}>
          Volver
        </button>
      </main>
    </>
  );
};

export default About;
