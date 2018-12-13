import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.parent}>
          <View style={{'flex':1, 'backgroundColor': 'blue'}}></View>
          <View style={{'flex':1, 'backgroundColor': 'green'}}></View>
        </View>
        <View style={styles.parent}>
          <View style={{'flex':3, 'backgroundColor': 'green'}}></View>
          <View style={{'flex':2, 'backgroundColor': 'blue'}}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
              'flex': 1, 
              'alignItems':'center', 
              'justifyContent': 'center', 
              'backgroundColor': 'orange',
            },
  parent: {
    'flexDirection': 'row',
    'flex': 1,
  }
});
