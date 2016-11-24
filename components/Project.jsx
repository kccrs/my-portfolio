import React, { Component } from 'react';
import classnames from 'classnames';
import Image from './Image';

import projectInfo from '../content/projectInfo';

export default class Project extends Component {

  

  // returnHome (e) {
  //   e.preventDefault();
  //   this.context.router.transitionTo('/');
  // }

  render () {
    let currentProject = this.props.params.projectName;

    // let thisProject = projectInfo[currentProject];

    let projectClass = classnames('single-project', currentProject);

    return (
      <article className={projectClass}>
        // project title
        <h3 className="project-title">
          {thisProject.projectTitle}
        </h3>
        // project description
        <p className="project-description">
          {thisProject.aboutProject}
        </p>
        // image
        <Image textKey={currentProject} />
        // collaborators
        <p className="collaborators">
          {thisProject.collaborators}
        </p>
        // website urls
        <p className="github">
          Go to the project on
          <a href={thisProject.githubLink}>
            GitHub
          </a>
        </p>
        <p className="website">
          Visit the project site
          <a href={thisProject.projectWebsite}>
            here.
          </a>
        </p>
        // tools
        <ul className="tools">
          {thisProject.tools.map(t =>
            <li className="tool">{t.value}</li>
          )}
        </ul>
      </article>
    );
  }
}

Project.contextTypes = {
  router: React.PropTypes.object
};

// let currentProject = this.props.params.pageId;
