import React from 'react';
import * as BooksAPI from 'api/BooksAPI';
import 'components/App.css';
import Search from 'components/Search';
import BookList from './BookList';
import { Switch, Route } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {};

  render = () => {
    return (
      <div className="app">
        <Switch>
          <Route path='/search' component={Search} />      
          <Route path='/' component={BookList} />
        </Switch>
      </div>
    )
  };
}

export default BooksApp
