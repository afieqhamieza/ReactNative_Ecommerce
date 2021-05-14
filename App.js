import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { AppLoading } from 'expo';

import Header from './src/components/header/header.js';
import Home from './src/screens/home/home.js';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
          <Header />
          <Home />
      </ScrollView>
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
