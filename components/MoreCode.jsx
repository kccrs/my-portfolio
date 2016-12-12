import React, { Component } from 'react';

import Project from './Project';
import Image from './Image';

export default class MoreCode extends Component {

  render () {
    return (
      <section className="Code">
        <hr className="hr-first"/>
        <article className="project-container">
          <Image textKey="snakePlane" />
          <Project textKey="snakePlane"/>
        </article>
        <hr />
        <article className="project-container">
          <Image textKey="ideaBox" />
          <Project textKey="ideaBox"/>
        </article>
        <hr className="hr-last" />
      </section>
    );
  }
}
