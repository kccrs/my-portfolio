import React, { Component } from 'react';
import Hero from './Hero';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Hero />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}
