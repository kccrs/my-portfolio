import React, { Component } from 'react';
import { Link } from 'react-router';

import Project from './Project';
import Image from './Image';
import MoreCode from './MoreCode';

export default class Code extends Component {

  render () {
    return (
      <section className="Code">
        <hr className="hr-first"/>
        <article className="project-container">
          <Image textKey="fridays" />
          <Project textKey="fridays"/>
        </article>
        <hr />
        <article className="project-container">
          <Image textKey="shootBreeze" />
          <Project textKey="shootBreeze"/>
        </article>
        <hr />
        <article className="project-container">
          <Image textKey="globot" />
          <Project textKey="globot"/>
        </article>
        <hr />
        <article className="project-container">
          <Image textKey="pomodoro" />
          <Project textKey="pomodoro"/>
        </article>
        <hr />
        <article className="project-container">
          <Image textKey="snakePlane" />
          <Project textKey="snakePlane"/>
        </article>
        <hr className="hr-last" />
      </section>
    );
  }
}
