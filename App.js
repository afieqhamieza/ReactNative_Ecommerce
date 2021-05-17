import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { AppLoading } from 'expo';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackRouter } from 'react-navigation';

import Navigator from './src/routes/homeStack.js';
import Header from './src/components/header.js';
import Home from './src/screens/home/home.js';
import Details from './src/screens/details/details.js';
import Checkout from './src/screens/checkout/checkout.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Navigator />
        {/* <Home /> */}
        {/* <Details /> */}
        {/* <Checkout /> */}
        {/* <AppContainer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7ff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
