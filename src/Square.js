// Square.js

/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
/* eslint-disable no-unused-vars */

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={ () => this.props.onClick() }>
        { this.props.value }
      </button>
    );
  }
}

export default Square;
