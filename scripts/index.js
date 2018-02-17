import React, { Component, PropTypes } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import routes from './RootRoutes';
import '../styles/index.scss';
import zhCN from './i18n/zh-CN';
import ru from './i18n/ru';
import zhCNLocaleData from 'react-intl/locale-data/zh';
import ruLocaleData from 'react-intl/locale-data/ru';
import { API_HOST } from './config';
import 'whatwg-fetch';

addLocaleData([...zhCNLocaleData, ...ruLocaleData]);

const getLocale = (acceptLanguage) => {
	if (_.isString(acceptLanguage)) {
		return acceptLanguage && acceptLanguage.split(',') && acceptLanguage.split(',')[0];
	} else if (navigator.languages != undefined) {
		return navigator.languages[0];
	} else if (navigator.language != undefined) {
		return navigator.language;
	} else if (navigator.userLanguage != undefined) {
		return navigator.userLanguage;
	} else if (navigator.systemLanguage != undefined) {
		return navigator.systemLanguage;
	}
	return 'en';
};

const getTranslation = (locale) => {
	switch (locale) {
		case 'zh-CN':
		case 'zh-cn':
		case 'zh_cn':
		case 'zh':
			return zhCN;
		case 'ru':
			return ru;
		default:
			return {};
	}
};

fetch(`${API_HOST}common/lang`)
	.then((response) => response.text())
	.then((acceptLanguage) => {
		const locale = getLocale(acceptLanguage);
		console.log(locale);
		ReactDOM.render(
			<IntlProvider locale={ locale } defaultLocale='en' messages={getTranslation(locale)}>
				<Provider store={store}>
					<Router history={browserHistory}>
						{routes}
					</Router>
				</Provider>
			</IntlProvider>,
			document.getElementById('react-container')
		);
	});