import React, { Component } from 'react';

import Project from './Project';
import Image from './Image';

export default class MoreCode extends Component {

  render () {
    return (
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
