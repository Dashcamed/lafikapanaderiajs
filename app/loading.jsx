import Loader from "@/components/common/loader/Loader";

export default function Loading() {
  return (
    <section className="h-dvh grid grid-cols-1 place-items-center">
      <Loader />
    </section>
  );
}
