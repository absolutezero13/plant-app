import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'Rubik-Regular'
  }
});

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text style={styles.text}>app!</Text>
    </SafeAreaView>
  );
}

export default App;
