import React, { Component } from 'react';
import projectInfo from '../content/projectInfo';

export default class Image extends Component {
  render () {
    let projectId = this.props.textKey;

    return (
      <img
        src={projectInfo[projectId].imageUrl} className={projectInfo[projectId].imageClassName} alt={projectInfo[projectId].imageAlt}
      />
    );
  }
}
