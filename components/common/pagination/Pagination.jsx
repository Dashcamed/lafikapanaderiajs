"use client";
import React from "react";

const Pagination = ({ onPageChange, totalPages, currentPage }) => {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="join ">
      <button
        className="join-item btn"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        «
      </button>
      <button className="join-item btn">{currentPage}</button>
      <button
        className="join-item btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
