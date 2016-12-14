/**
 * Created by artem on 12/9/16.
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {Provider} from 'react-redux'
import {Router} from 'react-native-router-flux'
import thunk from 'redux-thunk';
import scenes from './routes'
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class beerApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router hideNavBar={true} scenes={scenes}/>
      </Provider>
    );
  }
}
