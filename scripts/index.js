import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import routes from './RootRoutes';
import '../styles/index.scss';

ReactDOM.render(
    <Provider store={store}>
    	<Router history={browserHistory}>
			{ routes }
		</Router>
  	</Provider>,
  	document.getElementById('react-container')
);