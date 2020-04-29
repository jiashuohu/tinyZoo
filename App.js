import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';

import HomeScreen from "./src/components/HomeScreen"
import SearchScreen from "./src/components/SearchScreen"
import RankingScreen from "./src/components/RankingScreen"
import ProfileScreen from "./src/components/ProfileScreen"

 const App = () => {
  return (
    <ProfileScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;