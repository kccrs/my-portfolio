import React, { Component } from 'react';
import classnames from 'classnames';
// import Image from './Image';

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
        <h3 className="project-title">
          {projectInfo[projectName].projectTitle}
        </h3>
        <p className="project-description">
          {projectName.aboutProject}
        </p>
        <p className="collaborators">
          {projectName.collaborators}
        </p>
        <p className="github">
          Go to the project on
          <a href={projectName.githubLink}>
            GitHub
          </a>
        </p>
        <p className="website">
          Visit the project site
          <a href={projectName.projectWebsite}>
             here.
          </a>
        </p>
      </article>
    );
  }
}

Project.contextTypes = {
  router: React.PropTypes.object
};


// <ul className="tools">
//   {projectName.tools.map(t =>
//     <li className="tool">{t.value}</li>
//   )}
// </ul>
// image
// <Image textKey={currentProject} />
