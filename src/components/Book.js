import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;
  return (
    <div>
      <table>
        <tr>
          <th>{id}</th>
          <th>{title}</th>
          <th>{category}</th>
        </tr>
        <tr>
          <td>
            <button
              type="button"
              className="btn-danger"
              onClick={() => handleRemoveBook(book)}
            >
              Remove Book
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
