import React, { Component } from 'react';
import classnames from 'classnames';


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

    let currentProject = this.props.params.pageId;

    let projectClass = classnames('single-project', currentProject);


    return (
      <article className=>
        // project title
        <h3 className="project-title"></h3>
        // project description
        // image
        // collaborators
        // website urls
        // tools
      </article>
    );
  }
}

Project.contextTypes = {
  router: React.PropTypes.object
};

// let currentProject = this.props.params.pageId;
