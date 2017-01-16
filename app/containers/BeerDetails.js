/**
 * Created by artem on 12/9/16.
 */

import React from 'react';
import {bindActionCreators} from 'redux';
import * as actionList  from '../actions/beerList';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import  BeerList  from '../components/BeerList';
// TODO: move route actions to redux;

import styles from '../styles/BeerDetails.style';

class BeerDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { beerObj, beerActions } = this.props;
    return (
        <View>
            <BeerList
                beerList={beerObj.beerListMine}
                isProfileView={false}
                onPressHandler={beerActions.addBeerToMyList}
            />
            <Button title="Back to your list"
                    onPress={() => Actions.home()}/>
        </View>
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
)(BeerDetails);
