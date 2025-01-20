import SkeletonCard from "@/components/common/skeletonCard/SkeletonCard";

export default function Loading() {
  return (
    <section className="grid sm: grid-flow-row grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center py-3 bg-base-300 sm: px-3">
      {[...Array(8)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </section>
  );
}
