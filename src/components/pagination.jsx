import React from "react";

const CustomPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 5;

  if (totalPages <= 1) return null;

  const handlePageClick = (page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    if (start > 1) pages.push(1);
    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push("...");
    if (end < totalPages) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="d-flex justify-content-center my-4 flex-wrap">
      <nav>
        <ul className="pagination pagination-sm flex-wrap justify-content-center mb-0 gap-1">
          {/* Previous */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link px-3 rounded-pill"
              onClick={() => handlePageClick(currentPage - 1)}
            >
              ‹ Prev
            </button>
          </li>

          {/* Page Numbers */}
          {getPageNumbers().map((num, index) => (
            <li
              key={index}
              className={`page-item ${num === currentPage ? "active" : ""} ${num === "..." ? "disabled" : ""}`}
            >
              <button
                className="page-link page-number"
                onClick={() => typeof num === "number" && handlePageClick(num)}
              >
                {num}
              </button>
            </li>
          ))}

          {/* Next */}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link px-3 rounded-pill"
              onClick={() => handlePageClick(currentPage + 1)}
            >
              Next ›
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomPagination;
