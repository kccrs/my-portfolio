import React, { Component } from 'react';

export default class Contact extends Component {
  render () {
    return (
      <div className="Contact">
        <h2 className="contact-blurb">Feel free to contact me for future nerd adventures and opportunities!</h2>
        <section className="resume-section">
          <a href="./content/current-resume-march-6.pdf" className="contact-blurb resume">→ Resume ←</a>
        </section>
        <section className="contact-list-section">
          <ul className="contact-list">
            <li className="social-media-icon">
              <a href="https://github.com/kccrs"><img src="../content/images/github-square.svg" alt="GitHub icon" /></a>
            </li>
            <li className="social-media-icon">
              <a href="https://www.linkedin.com/in/caseycross"><img src="../content/images/linkedin-square.svg" alt="LinkedIn icon" /></a>
            </li>
            <li className="social-media-icon">
              <a href="https://twitter.com/kccrs"><img src="../content/images/twitter-square.svg" alt="Twitter icon" /></a>
            </li>
            <li className="social-media-icon">
              <a href="mailto:hellocaseycross@gmail.com"><img src="../content/images/gmail-square.svg" alt="email icon" /></a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
