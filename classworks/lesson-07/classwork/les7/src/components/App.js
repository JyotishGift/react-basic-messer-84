import React, { Component } from 'react';
import './App.css';

import BookActive from './BookActive';
import BookList from './BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookActive />
        <BookList />
      </div>
    );
  }
}

export default App;
