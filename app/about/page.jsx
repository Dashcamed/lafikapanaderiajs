"use client";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  return (
    <>
      <section>
        <h1>About</h1>
        <button className="btn btn-secondary" onClick={() => router.back()}>
          Volver
        </button>
      </section>
    </>
  );
};

export default About;
