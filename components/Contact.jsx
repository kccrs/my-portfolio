import React, { Component } from 'react';

export default class Contact extends Component {
  render () {
    return (
      <div className="Contact">
        <h2>Feel free to contact me for future nerd adventures and opportunities!</h2>
        <ul>
          <li>
            <a href="https://github.com/kccrs"><img src="../content/images/github-square.svg" className="social-media-icon" alt="GitHub icon" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/caseycross"><img src="../content/images/linkedin-square.svg" className="social-media-icon" alt="LinkedIn icon" /></a>
          </li>
          <li>
            <a href="https://twitter.com/kccrs"><img src="../content/images/twitter-square.svg" className="social-media-icon" alt="Twitter icon" /></a>
          </li>
          <li>
            <a href="mailto:hellocaseycross@gmail.com"><img src="../content/images/gmail-square.svg" className="social-media-icon" alt="email icon" /></a>
          </li>
        </ul>
      </div>
    );
  }
}
