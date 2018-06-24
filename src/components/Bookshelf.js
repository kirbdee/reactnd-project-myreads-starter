import React, { Component } from 'react';
import Book from 'components/Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  propType = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  getBooksFrom = (books, shelf) => books.filter((book) => book.shelf === shelf);

  onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  };

  onDragEnter = (shelf) => _ => {
    console.log('test', shelf)
    this.props.updateDropTarget(shelf);
  ;}

  onDrop = (shelf, callback) => (e) => {
    const book = JSON.parse(e.dataTransfer.getData('book'));
    callback(book, shelf);
    this.props.updateDropTarget('');
  };

  render = () => (
    <div className={`bookshelf ${this.props.isDropTarget ? 'drop-highlight' : ''}`} onDrop={this.onDrop(this.props.shelf, this.props.updateBooks)} onDragEnter={this.onDragEnter(this.props.shelf)} onDragOver={this.onDragOver}>
      <h2 className="bookshelf-title">{this.props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.getBooksFrom(this.props.books, this.props.shelf)
            .map((book) => <Book key={book.id} book={book} updateBooks={this.props.updateBooks} />)}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;