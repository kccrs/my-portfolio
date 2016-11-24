import React, { Component } from 'react';
import Hero from './Hero';
import Project from './Project';
import Code from './Code';


export default class App extends Component {

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}
