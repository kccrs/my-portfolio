import React, { Component } from 'react';
// import projectInfo from '../content/projectInfo';
import Project from './Project';

export default class Code extends Component {

  goToProject(e) {
    e.preventDefault();
    this.context.router.transitionTo(`/${projectName}`);
  }

  render () {
    // let projectName = this.props.textKey;

    return (
      <div>
        <p>This seems to be rendering</p>

      </div>
    );
  }
}
