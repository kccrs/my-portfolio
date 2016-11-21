import React, { Component } from 'react';

export default class Hero extends Component {
  render () {
    return (
      <div className="hero-container">
        <img src="../images/blurred-lights.jpeg" alt="Decorative image of colored dots reminiscent of city lights at night." className="blur" />
        <h1 className="main-name">Casey Cross</h1>
      </div>
    );
  }
}
