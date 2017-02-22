import React, { Component } from 'react';

export default class About extends Component {
  render () {
    return (
      <div className="About">
        <section className="history-content about-me">
          <h2 className="about-section-title">This is me</h2>
          <div className="flex-content">
            <article className="one">
              I am a passionate developer who takes pride in providing a clean, engaging, and interactive web experience.  Keeping up with the latest web technologies enables me to ensure your site is useful, modern, and accessible.
            </article>
            <article className="two">
              I seek to join a team that encourages growth and collaboration.
            </article>
            <article className="three">
              When I'm not coding, you can find me camping, reading, watching football, or enjoying all of the cheeses.
            </article>
          </div>
        </section>
        <section className="history-content my-education">
          <h2 className="about-section-title">I like to learn</h2>
          <div className="flex-content">
            <article className="one">
              <h3>Turing School of Software & Design</h3>
              <h4>Certificate in Front End Engineering</h4>
            </article>
            <article className="two">
              <h3>University of Colorado Denver</h3>
              <h4>Master of Arts</h4>
              <h5>Curriculum & Instruction - Elementary Math Leadership</h5>
            </article>
            <article className="three">
              <h3>University of Florida</h3>
              <h4>Bachelor of Science</h4>
              <h5>Psychology</h5>
            </article>
          </div>
        </section>
        <section className="history-content my-experience">
          <h2 className="about-section-title">I like to share what I learn</h2>
          <div className="flex-content">
            <article className="one">
              <h3>WellDyne, Inc.</h3>
              <h4>Contract & Credentialing Analyst</h4>
              <h5 className="history-dates">2012-2016</h5>
            </article>
            <article className="two">
              <h3>Denver Public Schools</h3>
              <h4>Fourth Grade Teacher</h4>
              <h5 className="history-dates">2013-2014</h5>
            </article>
            <article className="three">
              <h3>Boulder Valley Public Schools</h3>
              <h4>Fifth and First Grade Teacher</h4>
              <h5 className="history-dates">2010 - 2012</h5>
            </article>
          </div>
        </section>
      </div>
    );
  }
}
