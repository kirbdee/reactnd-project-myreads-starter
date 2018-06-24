import React, { Component } from 'react';
import SearchLink from './SearchLink';
import Bookshelf from 'components/Bookshelf';
import PropTypes from 'prop-types';

const SHELVES = [
  { shelf: 'currentlyReading', name: 'Currently Reading'},
  { shelf: 'wantToRead', name: 'Want To Read'},
  { shelf: 'read', name: 'Read'}
];

class BookList extends Component {
  propType = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired
  };

  state = {};

  render = () => (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {SHELVES.map((shelfProps) =>
          <Bookshelf
            key={shelfProps.shelf}
            books={this.props.books}
            updateBooks={this.props.updateBooks}
            {...shelfProps}
          />
        )}
      </div>
      <SearchLink/>
    </div>
  );
}

export default BookList;