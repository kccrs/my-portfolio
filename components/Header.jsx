import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {
    return (
      <header>
        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/code">Code</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <section>
          <h1>Casey Cross</h1>
          <h2>Front End Developer</h2>
        </section>
      </header>
    );
  }
};
