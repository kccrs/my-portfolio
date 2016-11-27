import React, { Component } from 'react';
import { Link } from 'react-router';

import Project from './Project';
import Image from './Image';
import MoreCode from './MoreCode';

export default class Code extends Component {

  render () {
    return (
      <section className="Code">
        <article className="project-container">
          <Image textKey="shootBreeze" />
          <Project textKey="shootBreeze"/>
        </article>
        <article className="project-container">
          <Image textKey="globot" />
          <Project textKey="globot"/>
        </article>
        <article className="project-container">
          <Image textKey="pomodoro" />
          <Project textKey="pomodoro"/>
        </article>
        <Link to="/morecode">Click here to see more projects.</Link>
      </section>
    );
  }
}
