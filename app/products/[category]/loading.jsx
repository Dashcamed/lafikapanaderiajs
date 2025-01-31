import SkeletonCard from "@/components/common/skeletonCard/SkeletonCard";

export default function Loading() {
  return (
    <section>
      <SkeletonCard cards={8} />
    </section>
  );
}
