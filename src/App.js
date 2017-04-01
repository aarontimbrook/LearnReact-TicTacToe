// App.js

/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
