import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'whatwg-fetch';

// eslint-disable-next-line no-undef
console.log(REVISION); // defined in webpack

ReactDOM.render(
  <App />,
  document.getElementById('react-container'),
);
