import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { Loader } from 'semantic-ui-react';
import store from './store';
import routes from './RootRoutes';
import '../styles/index.scss';
import zhCN from './i18n/zh-CN';
import ru from './i18n/ru';
import en from './i18n/en';
import zhCNLocaleData from 'react-intl/locale-data/zh';
import ruLocaleData from 'react-intl/locale-data/ru';
import enLocaleData from 'react-intl/locale-data/en';
import { API_HOST } from './config';
import 'whatwg-fetch';

addLocaleData([...zhCNLocaleData, ...ruLocaleData, ...enLocaleData]);

const getLocale = (acceptLanguage) => {
  if (_.isString(acceptLanguage)) {
    return acceptLanguage && acceptLanguage.split(',') && acceptLanguage.split(',')[0];
  } else if (window.navigator.languages !== undefined) {
    return window.navigator.languages[0];
  } else if (window.navigator.language !== undefined) {
    return window.navigator.language;
  } else if (window.navigator.userLanguage !== undefined) {
    return window.navigator.userLanguage;
  } else if (window.navigator.systemLanguage !== undefined) {
    return window.navigator.systemLanguage;
  }
  return 'en';
};

const transformLocale = (rawLocale) => {
  switch (rawLocale) {
    case 'en':
    case 'en-US':
    case 'en-GB':
      return {
        locale: 'en',
        messages: en,
      };
    case 'zh-CN':
    case 'zh-cn':
    case 'zh_cn':
    case 'zh':
      return {
        locale: 'zh-CN',
        messages: zhCN,
      };
    case 'ru':
      return {
        locale: 'ru',
        messages: ru,
      };
  }
};

fetch(`${API_HOST}common/lang`)
  .then((response) => response.text())
  .then((acceptLanguage) => {
    const { locale, messages } = transformLocale(getLocale(acceptLanguage));
    ReactDOM.render(
      <IntlProvider locale={ locale } defaultLocale='en' messages={ messages }>
        <Provider store={store}>
          <Router history={browserHistory}>
            { routes }
          </Router>
        </Provider>
      </IntlProvider>,
      document.getElementById('react-container')
    );
  })
  .catch(() => {
    ReactDOM.render(
      <div>
        Oops, looks like our server is down. Please retry later. If the issue persist, please
        contact me at liyanjia92 at gmail
      </div>,
      document.getElementById('react-container'),
    );
  });
