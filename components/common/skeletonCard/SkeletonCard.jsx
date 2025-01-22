import React from "react";

const SkeletonCard = ({ cards }) => {
  return (
    <section className="grid grid-flow-row grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center py-3">
      {[...Array(cards)].map((_, i) => (
        <div key={i} className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </section>
  );
};

export default SkeletonCard;
