import React from 'react';
import * as BooksAPI from 'api/BooksAPI';
import 'components/App.css';
import Search from 'components/Search';
import BookList from './BookList';
import { Switch, Route } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    books: []
  };

  updateBooks = (book,shelf) => {
    console.log(book,shelf)
  };

  componentDidMount = _ => {
    BooksAPI.getAll().then((books) => {
      this.setState( _ => ({
        books
      }))
    })
  };

  render = () => {
    return (
      <div className="app">
        <Switch>
          <Route path='/search' render={ _ =>
            <Search books={this.state.books} updateBooks={this.updateBooks}/>
          }/>
          <Route path='/' render={ _ =>
            <BookList books={this.state.books} updateBooks={this.updateBooks}/>
          }/>
        </Switch>
      </div>
    )
  };
}

export default BooksApp;
