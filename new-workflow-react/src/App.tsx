import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import intl from 'react-intl-universal';
import _ from 'lodash';
import Loader from 'react-loader-spinner';
import store from './store';
import ErrorFallback from './error-boundary/errorBoundary';
import Layout from './modules/layout';
import FormsContainer from './modules/user/pages/forms/forms-container';
import FormIntegrateContainer from './modules/user/pages/forms/form-integrate/form-integrate-container';
import { locales } from './languages';

const SUPPOER_LOCALES = [
  {
    name: 'English',
    value: 'en-US',
  },
  {
    name: '日本語',
    value: 'ja-JP',
  },
];

function App() {
  const [done, setDone] = useState(false);
  const loadLocales = () => {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: 'lang',
      localStorageLocaleKey: 'lang',
    });
    if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
      currentLocale = 'en-US';
    }
    intl
      .init({
        currentLocale,
        locales,
      })
      .then(() => setDone(true));
  };

  useEffect(() => {
    loadLocales();
  }, []);

  return done ? (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={Layout} />
          <Route exact path='/form' component={FormsContainer} />
          <Route exact path='/from-render' component={FormIntegrateContainer} />
        </Router>
      </Provider>
    </ErrorBoundary>
  ) : (
    <Loader type='Rings' color='#00BFFF' height={100} width={100} visible={!done} />
  );
}

export default App;
