require('./styles/style.scss');
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import Project from './components/Project';

const Root = () =>  {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/projects/:projectId" component={Project} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
};

render(<Root />, document.querySelector('#application'));
