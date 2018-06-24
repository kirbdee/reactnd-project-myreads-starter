import React from 'react';
import * as BooksAPI from 'api/BooksAPI';
import 'components/App.css';
import Search from 'components/Search';
import BookList from './BookList';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'NotFound';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  getAllBooks = _ => BooksAPI.getAll()
    .then((books) => {
      this.setState(_ => ({
        books
      }))
    });

  updateBooks = (book, shelf) => {
    console.log(book, shelf);
    BooksAPI.update(book, shelf).then(this.getAllBooks)
  };

  componentDidMount = _ => this.getAllBooks();

  render = () => {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/search' render={_ =>
            <Search books={this.state.books} updateBooks={this.updateBooks} />
          } />
          <Route exact path='/' render={_ =>
            <BookList books={this.state.books} updateBooks={this.updateBooks} />
          } />
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  };
}

export default BooksApp;
