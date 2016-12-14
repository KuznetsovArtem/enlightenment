/**
 * Created by artem on 12/14/16.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome} onPress={() => Actions.details()}>
        Home Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2C57C',
  },
  welcome: {
    fontSize: 30,
    fontWeight: '900',
    color: '#1C110A',
  },
});

export default Home;