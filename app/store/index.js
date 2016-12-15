/**
 * Created by artem on 12/15/16.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const middlewares = [
  thunk
];
// TODO: expose all
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 }); // FIXME: rm realtime for prod;

const store = createStore(
  combineReducers(reducers),
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  )
);

export default store;