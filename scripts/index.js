import React, { Component, PropTypes } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import routes from './RootRoutes';
import '../styles/index.scss';
import zhCN from './i18n/zh-CN';
import ru from './i18n/ru';
import zhCNLocaleData from 'react-intl/locale-data/zh';
import ruLocaleData from 'react-intl/locale-data/ru';

addLocaleData([ ...zhCNLocaleData, ...ruLocaleData ]);

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
		case 'zh':
			return zhCN;
		case 'ru':
			return ru;
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