/**
 * Created by artem on 12/9/16.
 */

import React from 'react';
import {bindActionCreators} from 'redux';
import * as detailsActions from '../actions/beerDetails';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
// TODO: move route actions to redux;

import styles from '../styles/BeerDetails.style';

class BeerDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Beer Info</Text>
        <Text style={styles.h2}>Rate: {state.rate}</Text>

        <View style={styles.buttonsBlock}>
          <Button
            onPress={actions.incrementRate}
            title="Like"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={actions.decrementRate}
            title="Dislike"
            color="red"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

        <Text style={styles.h1} onPress={() => Actions.home()}>Back</Text>
      </View>
    )
  }
}

export default connect(state => ({
    state: state.beerDetails
  }),
  (dispatch) => ({
    actions: bindActionCreators(detailsActions, dispatch)
  })
)(BeerDetails);
