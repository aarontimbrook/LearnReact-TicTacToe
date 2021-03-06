// Game.js

/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
/* eslint-disable no-unused-vars */
import Board from './Board';
import Utility from './Utility';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = Utility.calculateWinner(current.squares);
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {
      const desc = move ? 'Move #' + move : 'Game start';

      return (
        <li key={ move }>
          <a href="#" onClick={ () => this.jumpTo(move) }>{ desc }</a>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={ current.squares } onClick={ (i) => this.handleClick(i) } />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  handleClick(i) {
    var history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (Utility.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true
    });
  }
}

export default Game;
