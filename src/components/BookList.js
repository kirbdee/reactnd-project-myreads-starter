import React, { Component } from 'react';
import SearchLink from './SearchLink';
import Bookshelf from 'components/Bookshelf';
import PropTypes from 'prop-types';

class BookList extends Component {
  propType = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired
  };

  state = {
    shelves: {
      'currentlyReading': { name: 'Currently Reading', dropTarget: false },
      'wantToRead': { name: 'Want To Read', dropTarget: false },
      'read': { name: 'Read', dropTarget: false }
    },
    dropTarget: ''
  };

  getShelves = () => Object.keys(this.state.shelves);

  getShelfProps = (shelf) => this.state.shelves[shelf] || {}

  updateDropTarget = (shelf) => {
    this.setState(_ => ({ dropTarget: shelf }))
  };

  render = () => (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {this.getShelves().map((shelf) => {

          const shelfProps = this.getShelfProps(shelf);

          return (<Bookshelf
            key={shelf}
            shelf={shelf}
            books={this.props.books}
            updateBooks={this.props.updateBooks}
            updateDropTarget={this.updateDropTarget}
            isDropTarget={this.state.dropTarget === shelf}
            {...shelfProps}
          />)
        }
        )}
      </div>
      <SearchLink />
    </div>
  );

}

export default BookList;