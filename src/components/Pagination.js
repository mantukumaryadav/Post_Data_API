import React from 'react';

const Pagination = ({ currentPage, onNext, onPrev }) => {
  return (
    <nav aria-label="Pagination">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <button className="page-link" onClick={onPrev}>
            Previous
          </button>
        </li>
        <li className="page-item">
          <span className="page-link">{currentPage}</span>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={onNext}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
