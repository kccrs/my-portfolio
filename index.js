require('./styles/style.scss');
// import * as firebase from 'firebase';
//
// var config = {
//   apiKey: "AIzaSyAJ070ya_-4iEw7RqW7p1rBFgPEoZ1NhQQ",
//   authDomain: "portfolio-3b1f6.firebaseapp.com",
//   databaseURL: "https://portfolio-3b1f6.firebaseio.com",
//   storageBucket: "portfolio-3b1f6.appspot.com",
//   messagingSenderId: "693463840908"
// };
// firebase.initializeApp(config);

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
