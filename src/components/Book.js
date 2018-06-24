import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { authors = [], imageLinks = '', title = '', shelf = 'none' } = props.book;

  const handleChange = (e) => props.updateBooks(props.book, e.target.value);

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imageLinks.thumbnail || null}")`
            }}>
            {!imageLinks.thumbnail ? <p>Cover Not Available</p> : null}
          </div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {authors.map((author) => (<div key={author} className="book-authors">{author}</div>))}

      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBooks: PropTypes.func.isRequired,
}

export default Book;