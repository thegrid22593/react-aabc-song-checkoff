import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

import StateLoader from './StateLoader';

const stateLoader = new StateLoader();

const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(reducer, stateLoader.loadState(), middleware);

store.subscribe(() => {
  stateLoader.saveState(store.getState());
});

module.exports = store;
