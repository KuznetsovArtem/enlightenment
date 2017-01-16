/**
 * Created by artem on 12/14/16.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import * as actionList  from '../actions/beerList';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import  BeerList  from '../components/BeerList';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
      const { beerObj, beerActions } = this.props;

      //console.log('beerObj: ', beerObj, BeerList);
    //drinkerBeerList={beerObj.beerListMine}
      return (
          <BeerList
              beerList={beerObj.beerListMine}
              isProfileView={true}
              onPressHandler={beerActions.removeBeerFromMyList}/>
      )
  }
}

export default connect(
    state => ({
        beerObj: state.beerList
    }),
    (dispatch) => ({
        beerActions: bindActionCreators(actionList , dispatch)
    })
)(Home);
