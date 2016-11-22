import React, { Component } from 'react';

export default class Project extends Component {

  goToProject(e, nextPage) {
    e.preventDefault();
    this.context.router.transitionTo(`/projects/${nextPage}`);
  }

  returnHome (e) {
    e.preventDefault();
    this.context.router.transitionTo('/');
  }

  render () {

    return (

    );
  }
}

Project.contextTypes = {
  router: React.PropTypes.object
};

// let currentProject = this.props.params.pageId;
