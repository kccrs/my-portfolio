import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {
    return (
      <header>
        <nav>
          <ul className="nav-links">
            <li><Link to="/About">ABOUT</Link></li>
            <li><Link to="/Code">CODE</Link></li>
            <li><Link to="/Contact">CONTACT</Link></li>
          </ul>
        </nav>
        <section className="logo">
          <h1 className="my-name"><Link to="/">Casey Cross</Link></h1>
          <h2 className="my-title">Front End Developer</h2>
          <h3 className="copyright copyright-header">&copy; 2016 Casey Cross</h3>
        </section>
      </header>
    );
  }
};
