require('./styles/style.scss');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import About from './components/About';
import App from './components/App';
import Code from './components/Code';
import Contact from './components/Contact';
import Header from './components/Header';
import MoreCode from './components/MoreCode';
import NotFound from './components/NotFound';

const Root = () =>  {
  return (
    <BrowserRouter>
      <div className="full-container">
        <Header />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/code" component={Code} />
        <Match exactly pattern="/morecode" component={MoreCode} />
        <Match exactly pattern="/about" component={About} />
        <Match exactly pattern="/contact" component={Contact} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
};

render(<Root />, document.querySelector('#application'));
