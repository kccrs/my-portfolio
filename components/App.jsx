import React, { Component } from 'react';
// import Project from './Project';
// import Code from './Code';
// import Contact from './Contact';
import { Link } from 'react-router';


export default class App extends Component {

  render() {
    return (
      <div className="App">

        <section className="about-box content-box">
          <p className="box-title">
            <Link to="/code">ABOUT ME</Link>
          </p>
        </section>
        <section className="projects-box content-box">
          <p className="box-title">
            <Link to="/code">CODE</Link>
          </p>
        </section>
        <section className="contact-box content-box">
          <p className="box-title">
            <Link to="/code">CONTACT</Link>
          </p>
        </section>
        <h3 className="copyright copyright-bottom">&copy; 2016 Casey Cross</h3>
      </div>
    );
  }
}

// App.contextTypes = {
//   router: React.PropTypes.object
// }
