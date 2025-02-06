"use client";
import React from "react";

const Pagination = ({
  currentPage,
  hasNext,
  hasPrev,
  onNext,
  onPrev,
  loading,
}) => {
  return (
    <div className="join">
      <button
        onClick={onPrev}
        disabled={!hasPrev || loading}
        className="join-item btn"
      >
        «
      </button>
      <button className="join-item btn">{currentPage}</button>
      <button
        onClick={onNext}
        disabled={!hasNext || loading}
        className="join-item btn"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
