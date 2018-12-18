import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { incrementCounter, decrementCounter } from '../actions/counter';
import { connect } from 'react-redux';

class Counter extends Component {
  incrementCounter = () => {
    this.props.dispatch(incrementCounter());
  };

  decrementCounter = () => {
    this.props.dispatch(decrementCounter());
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.incrementCounter();
          }}
          style={styles.button}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Increment (+)</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>{this.props.count}</Text>
        <TouchableOpacity
          onPress={() => {
            this.decrementCounter();
          }}
          style={styles.button}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Decrement (-)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#DDA0DD',
    padding: 10,
    margin: 30,
    borderRadius: 7,
  },
});

const mapStateToProps = ({ count }) => {
  return {
    count,
  };
};

export default connect(mapStateToProps)(Counter);
