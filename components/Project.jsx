import React, { Component } from 'react';

import projectInfo from '../content/projectInfo';

export default class Project extends Component {
  render () {
    let projectName = this.props.textKey;

    return (
      <article className="single-project">
        <h6 className="project-title">
          {projectInfo[projectName].projectTitle}
        </h6>
        <p className="project-description">
          {projectInfo[projectName].aboutProject}
        </p>
        <p className="collaborators">
          {projectInfo[projectName].collaborators}
        </p>
        <p className="tools">
          <span className="tool-span">Tools used for this project: </span><br/> {projectInfo[projectName].tools}
        </p>
        <p className="github">
          <a href={projectInfo[projectName].githubLink} className="weblink">
            View the code on GitHub here.
          </a>
        </p>
        <p className="website">
          <a href={projectInfo[projectName].projectWebsite} className="weblink">
            Visit the project site here.
          </a>
        </p>
      </article>
    );
  }
}

Project.contextTypes = {
  router: React.PropTypes.object
};
