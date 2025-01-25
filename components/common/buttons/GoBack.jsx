import React from "react";
import { useRouter } from "next/navigation";
const GoBack = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-square absolute btn-primary right-px"
      onClick={() => router.back()}
    >
      Volver
    </button>
  );
};

export default GoBack;
