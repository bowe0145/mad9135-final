import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./js/components/Main.js";
import { createStore } from 'redux'
import { restaurantApp } from './js/reducers/reducers'

let store = createStore(restaurantApp)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },header: {
    position: 'absolute',
    backgroundColor: '#003333'
  }
});
