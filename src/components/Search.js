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
    results: []
  };

  //TODO: handle 403 properly
  searchBook = (query) => {
    this.setState( _ => ({
      query: query || ''
    }), _ => {
      BooksAPI.search(this.state.query).then((results)=>{
        console.log(results);
        this.setState( _ => ({
          results: !results || results.error ? [] : results
        }));
      })
    });
  };

  handleSearch = (e) => {
    this.searchBook(e.target.value);
  };

  render = _ => (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleSearch}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { this.state.results.length ? 
              this.state.results.map((book) => 
                (<Book key={book.id} {...book} />)) : (<li className="no-results">No Results</li>) 
          }
        </ol>
      </div>
    </div>
  );
}

export default Search;