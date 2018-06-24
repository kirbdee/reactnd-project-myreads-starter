import React from 'react';
import SearchLink from './SearchLink';
import Bookshelf from 'components/Bookshelf';
import PropTypes from 'prop-types';

const SHELVES = [
  { shelf: 'currentlyReading', name: 'Currently Reading' },
  { shelf: 'wantToRead', name: 'Want To Read' },
  { shelf: 'read', name: 'Read' }
];

const BookList = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      {SHELVES.map((shelfProps) =>
        <Bookshelf
          key={shelfProps.shelf}
          books={props.books}
          updateBooks={props.updateBooks}
          {...shelfProps}
        />
      )}
    </div>
    <SearchLink />
  </div>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired
};

export default BookList;