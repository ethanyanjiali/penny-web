import React from 'react';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
import { browserHistory, Router } from 'react-router';
import routes from './RootRoutes';
import enLocaleData from 'react-intl/locale-data/en';
import en from './i18n/en';
import zhCNLocaleData from 'react-intl/locale-data/zh';
import zhCN from './i18n/zh-CN';
import ruLocaleData from 'react-intl/locale-data/ru';
import { addLocaleData, IntlProvider } from 'react-intl';
import store from './store';
import ru from './i18n/ru';
import request from './utils/request';

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

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isInitializing: true,
      error: null,
      language: null,
    };
  }

  componentDidMount() {
    request.get('/common/lang')
      .then(response => response.data)
      .then((acceptLanguage) => {
        this.setState({
          language: acceptLanguage,
          isInitializing: false,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isInitializing: false,
        });
      });
  }

  render() {
    const {
      isInitializing,
      language,
      error,
    } = this.state;
    if (isInitializing) {
      return <div className="initial-app-loading" />;
    }
    if (error) {
      return (
        <span>
          The server is under maintenance, please wait for few minutes and come back
          later. If the issue persist, please contact me at liyanjia92 at gmail.com
        </span>
      );
    }
    const { locale, messages } = transformLocale(getLocale(language));
    return (
      <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
        <Provider store={store}>
          <Router history={browserHistory}>
            { routes }
          </Router>
        </Provider>
      </IntlProvider>
    );
  }
}

export default hot(module)(App);
