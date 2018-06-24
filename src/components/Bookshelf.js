import React from 'react';
import Book from 'components/Book';
import PropTypes from 'prop-types';

const getBooksFrom = (books, shelf) => books.filter((book) => book.shelf === shelf);

const Bookshelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {getBooksFrom(props.books, props.shelf)
          .map((book) => <Book key={book.id} book={book} updateBooks={props.updateBooks} />)}
      </ol>
    </div>
  </div>
);

Bookshelf.propType = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Bookshelf;