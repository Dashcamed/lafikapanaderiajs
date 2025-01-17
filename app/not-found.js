"use client";
import Page404 from "../components/layouts/404/Page404";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <main className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center flex flex-col">
          <Page404 />
          <div className="text-center">
            <button className="btn btn-info" onClick={() => router.back()}>
              Volver
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
