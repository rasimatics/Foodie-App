import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './screen/Auth';
import Home from './screen/Home';

export default function App() {
  return (
    <View style={styles.container}>
        <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
