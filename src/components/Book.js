import React, { Component } from 'react';

class Book extends Component {
  state = {
    authors: this.props.authors || [],
    cover: this.props.imageLinks ? this.props.imageLinks.thumbnail || '' : '',
    title: this.props.title || '',
    shelf: this.props.shelf || 'none'
  }

  handleChange = (e) => {
    console.log(e.target.value)
    //TODO set and add book if value is not 'none'
  };

  render = () => (
    <li>
      <div className="book">
        <div className="book-top">
          <div 
            className="book-cover" 
            style={{ 
              width: 128,
              height: 193,
              backgroundImage: `url("${this.state.cover}")` }}>
              {!this.state.cover ? <p>Image Not Available</p> : null}
          </div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.state.title}</div>
        {this.state.authors.map((author) => (<div key={author} className="book-authors">{author}</div>))}
        
      </div>
    </li>
  );

}

export default Book;