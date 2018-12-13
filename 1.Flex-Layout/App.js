import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Just changed the text!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {'flex': 1, 'alignItems':'center', 'justifyContent': 'center', 'backgroundColor': 'orange',},
  text: {'color': 'white', 'fontSize': 23},
});
