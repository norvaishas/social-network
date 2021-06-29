import React from 'react';
import style from './pagination.module.css';

const Pagination = ({pages, currentPage, onPageChange}) => {
  const viewPages = [
    ...pages.slice(currentPage - 3, currentPage - 1),
    currentPage,
    ...pages.slice(currentPage, currentPage + 2), '...', pages.length]

  return (
    <div className="pagination">
      {viewPages.map(page => {
        return <span
          className={currentPage === page ? style.activePage : null}
          key={page}
          onClick={() => {onPageChange(page)}}>{page} </span>
      })}
    </div>
  )
}

export default Pagination;
