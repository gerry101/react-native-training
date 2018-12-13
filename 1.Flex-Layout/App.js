import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{'flex': 1, 'alignItems':'center', 'justifyContent': 'center', 'backgroundColor': 'orange'}}>
        <Text style={{'color': 'white'}}>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
