import React, {Component} from "react";
import {Text, View} from 'react-native';
import Header from './Header';
import RestaurantView from './RestaurantView';

export default class Main extends Component {
  render() {
    return (
      <View>
        <Header />
        <RestaurantView />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}