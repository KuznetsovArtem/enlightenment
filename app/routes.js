/**
 * Created by artem on 12/15/16.
 */
import React from 'react';
import {Actions, Scene} from 'react-native-router-flux'
import Home from './containers/Home'
import BeerDetails from './containers/BeerDetails'

const scenes = Actions.create( // TODO: move to sep file;
  <Scene key="root">
    <Scene
      key="home"
      component={Home}
      title="home"
      initial
    />
    <Scene
      key="details"
      direction="leftToRight"
      component={BeerDetails}
      title="details"
    />
  </Scene>
);

export default scenes;