import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from 'api/BooksAPI';
import Book from 'components/Book';
import PropTypes from 'prop-types';

class Search extends Component {
  propType = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired
  };

  state = {
    query: '',
    results: [],
    booksMap: this.props.books.reduce((map, book) => Object.assign(map, { [book.id]: book }), {})
  };

  setResults = (results = []) => new Promise((resolve) => {
    //TODO if results is on shelf
    this.setState(_ => ({
      results
    }), resolve(this.state.results))
  });

  setQuery = (query = '') => new Promise((resolve) =>
    this.setState(_ => ({
      query
    }), () => resolve(this.state.query)));

  searchBooks = (query = '') =>
    BooksAPI.search(this.state.query)
      .then((results) =>
        this.setResults(!results || results.error ? [] : results)
      );

  handleSearch = (e) =>
    this.setQuery(e.target.value).then(query => query ? this.searchBooks(query) : this.setResults());

  render = _ => (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={this.handleSearch} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.results.length ?
            this.state.results.map((book) =>
              (<Book key={book.id} book={this.state.booksMap[book.id] || book} updateBooks={this.props.updateBooks} />))
            : (<li className="no-results">No Results</li>)}
        </ol>
      </div>
    </div>
  );
}

export default Search;