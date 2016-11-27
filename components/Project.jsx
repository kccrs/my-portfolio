import React, { Component } from 'react';
import classnames from 'classnames';
import Image from './Image';

import projectInfo from '../content/projectInfo';

export default class Project extends Component {

  render () {
    let projectName = this.props.textKey;

    // let currentProject = this.props.params.projectName;
    //
    // let projectName = projectInfo[currentProject];
    //
    // let projectClass = classnames('single-project', currentProject);

    return (
      <article>
        <h6 className="project-title">
          {projectInfo[projectName].projectTitle}
        </h6>
        <p className="project-description">
          {projectInfo[projectName].aboutProject}
        </p>
        <p className="collaborators">
          {projectInfo[projectName].collaborators}
        </p>
        <p className="github">
          View the project code on GitHub <span className="link github-link">
          <a href={projectInfo[projectName].githubLink}>
            here.
          </a></span>
        </p>
        <p className="website">
          Visit the project site <span className="link website-link">
          <a href={projectInfo[projectName].projectWebsite}>
             here.
          </a></span>
        </p>
      </article>
    );
  }
}

Project.contextTypes = {
  router: React.PropTypes.object
};

// <Image textKey={projectName} />


// <ul className="tools">
//   {projectInfo[projectName].tools.map(t =>
//     <li className="tool">{t.value}</li>
//   )}
// </ul>
// image
