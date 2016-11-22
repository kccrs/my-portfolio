import React, { Component } from 'react';

export default class Image extends Component {
  render () {
    let projectId = this.props.textKey;

    return (
      <img
        src={storyText[projectId].imageUrl} className={storyText[projectId].imageClassName} alt={storyText[projectId].imageAlt}
      />
    );
  }
}
