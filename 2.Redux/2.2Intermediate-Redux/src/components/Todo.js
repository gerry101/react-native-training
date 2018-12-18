import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { toggleTodo } from '../actions/todo';

class Todo extends Component {
  toggleCompletion = id => {
    this.props.dispatch(toggleTodo(id));
  };

  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <TodoList
          toggleCompletion={this.toggleCompletion}
          todos={this.props.todos}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});

const mapStateToProps = ({ todos }) => {
  return {
    todos,
  };
};

export default connect(mapStateToProps)(Todo);
