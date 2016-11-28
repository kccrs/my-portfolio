import React, { Component } from 'react';
import projectInfo from '../content/projectInfo';

export default class Image extends Component {
  render () {
    let projectName = this.props.textKey;

    return (
      <img
        src={projectInfo[projectName].imageSrc} className={projectInfo[projectName].imageClassName} alt={projectInfo[projectName].imageAlt}
      />
    );
  }
}
