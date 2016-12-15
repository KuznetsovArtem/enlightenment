/**
 * Created by artem on 12/9/16.
 */

import React, { Component } from 'react';
import {Provider, connect} from 'react-redux'
import {Router} from 'react-native-router-flux'
import scenes from './routes'
import store from './store'


const ReduxedRouter = connect()(Router);


export default class beerApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxedRouter hideNavBar={true} scenes={scenes}/>
      </Provider>
    );
  }
}
