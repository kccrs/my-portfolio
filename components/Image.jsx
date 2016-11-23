import React, { Component } from 'react';
import projectInfo from '../content/projectInfo';

export default class Image extends Component {
  render () {
    let projectId = this.props.key;

    return (
      <img
        src={projectInfo[projectId].imageSrc} className={projectInfo[projectId].imageClassName} alt={projectInfo[projectId].imageAlt}
      />
    );
  }
}
