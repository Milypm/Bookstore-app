import React from 'react';
import PropTypes from 'prop-types';
import '../styles/booksList.css';

const Book = ({ book, handleRemoveBook }) => {
  const { title, category } = book;
  return (
    <div className="book-item">
      <div className="book-item-left">
        <p className="book-category">{category}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">Book&apos;s Author</p>
        <p className="book-actions">
          <span className="actions-border" aria-hidden="true">Comments</span>
          <span className="actions-border" aria-hidden="true" onClick={() => handleRemoveBook(book)}>Remove Book</span>
          <span className="actions-border book-edit" aria-hidden="true" type="button">Edit</span>
        </p>
      </div>
      <div className="book-item-right">
        <div className="item-right-percent">
          <div className="Oval-2" />
          <div className="div-percent">
            <p className="book-percent">64%</p>
            <p className="book-completed">Completed</p>
          </div>
        </div>
        <div className="item-right-chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-number">Chapter 15</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Book;
