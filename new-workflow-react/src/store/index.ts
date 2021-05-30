import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { batch, batching } from 'redux-batch-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './reducer';
import { __dev__ } from '../utils/constants';

export const history = createBrowserHistory();

const customMiddlewares = [];
if (__dev__) {
  customMiddlewares.push(logger);
}

const middlewares = applyMiddleware(routerMiddleware(history), thunk, batch, ...customMiddlewares);

const store = createStore(batching(createRootReducer(history)), composeWithDevTools(middlewares));

export default store;
