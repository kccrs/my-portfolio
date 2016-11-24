import React, { Component } from 'react';
import Hero from './Hero';
import Project from './Project';
import Code from './Code';
import Contact from './Contact';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Hero />
        <Contact />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: React.PropTypes.object
// }
