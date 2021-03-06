import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import Restaurant from './src/screens/Restaurant';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Restaurant: Restaurant
}, {
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: "Business Search"
  }
});

export default createAppContainer(navigator);