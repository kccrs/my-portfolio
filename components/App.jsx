import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        Stuff goes here.
        <h1>Title of something</h1>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}
