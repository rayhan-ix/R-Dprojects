import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import store from './store';
import ErrorFallback from './error-boundary/errorBoundary';
import Layout from './modules/layout';
import FormsContainer from './modules/user/pages/forms/forms-container';
import FormIntegrateContainer from './modules/user/pages/forms/form-integrate/form-integrate-container';

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
          <Router>
            <Route exact path='/' component={Layout} />
            <Route exact path='/form' component={FormsContainer} />
            <Route exact path='/from-render' component={FormIntegrateContainer} />
          </Router>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
