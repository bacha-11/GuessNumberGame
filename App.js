import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameStartSection from './components/GameStartSection';
import Header from './components/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a NUmber"/>

      <GameStartSection title="Start a New Game" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
