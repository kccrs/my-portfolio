import React, { Component } from 'react';

export default class NotFound extends Component {
  render () {
    return (
      <div className="NotFound">
        <p className="page-error">
           Error: This is not the page you're looking for.
        </p>
      </div>
    );
  }
};
