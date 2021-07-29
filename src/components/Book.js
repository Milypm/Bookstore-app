import React from 'react';
import PropTypes from 'prop-types';
import '../styles/booksList.css';

const Book = ({ book, handleRemoveBook }) => {
  const { title, category } = book;
  return (
    <tr className="book-tr">
      <td className="book-td-left">
        <p className="book-category">{category}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">Book&apos;s Author</p>
        <p className="book-actions">
          <span>Comments</span>
          <button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button>
          <span>Edit</span>
        </p>
      </td>
      <td className="book-td-middle">
        <p>64%</p>
        <p>Completed</p>
      </td>
      <td className="book-td-right">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-number">CHAPTER 15</p>
        <button type="button">UPDATE PROGRESS</button>
      </td>
    </tr>
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
