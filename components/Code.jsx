import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
// import projectInfo from '../content/projectInfo';
import Project from './Project';

export default class Code extends Component {

  goToProject(e) {
    e.preventDefault();
    this.context.router.transitionTo(`/${projectName}`);
  }

  render () {
    // let projectName = this.props.textKey;
    // let currentProject = this.props.params.projectName;

    // let pageClass = classnames('single-project', currentProject);


    return (
      <div>
        <p>This seems to be rendering</p>
        <Link to="/code/snakePlane">
          <Project className="snakePlane" textKey="snakePlane"/>
        </Link>
      </div>
    );
  }
}
