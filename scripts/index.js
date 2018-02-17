import React, { Component, PropTypes } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import routes from './RootRoutes';
import '../styles/index.scss';
import zhCN from './i18n/zh-CN';
import zhCNLocaleData from 'react-intl/locale-data/zh';

addLocaleData([ ...zhCNLocaleData ]);

const getLocale = () => {
	if (navigator == undefined) {
		return 'en';
	} else if (navigator.languages != undefined) {
		return navigator.languages[0]; 
	} else if (navigator.language != undefined) {
		return navigator.language;
	}
	return 'en';
};

const getTranslation = () => {
	const locale = getLocale();
	switch (locale) {
		case 'zh-CN':
			console.log(zhCN);
			return zhCN;
		default:
			return {};
	}
};

ReactDOM.render(
	<IntlProvider locale={ getLocale() } defaultLocale='en' messages={ getTranslation() }>
		<Provider store={store}>
			<Router history={browserHistory}>
				{ routes }
			</Router>
		</Provider>
	</IntlProvider>,
  	document.getElementById('react-container')
);