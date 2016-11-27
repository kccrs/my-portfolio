import React, { Component } from 'react';

import Project from './Project';
import Image from './Image';

export default class MoreCode extends Component {

  render () {
    return (
      <section className="Code">
        <article className="project-container">
          <Image textKey="weatherTracker" />
          <Project textKey="weatherTracker"/>
        </article>
        <article className="project-container">
          <Image textKey="snakePlane" />
          <Project textKey="snakePlane"/>
        </article>
        <article className="project-container">
          <Image textKey="ideaBox" />
          <Project textKey="ideaBox"/>
        </article>
      </section>
    );
  }
}
