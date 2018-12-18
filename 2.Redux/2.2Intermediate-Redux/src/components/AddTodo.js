import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { addTodo } from '../actions/todo';
import { generateRandomId } from '../../utils/helpers';

class AddTodo extends Component {
  state = {
    todoText: '',
  };

  addTodo = todoText => {
    const todo = {
      id: generateRandomId(),
      todo: todoText,
      isComplete: false,
    };

    this.props.dispatch(addTodo(todo));
  };

  render() {
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 20, height: 50 }}>
        <TextInput
          placeholderTextColor="#FFF"
          placeholder="Add new todo"
          style={styles.textInput}
          onChangeText={text => {
            this.setState(() => ({
              todoText: text,
            }));
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (this.state.todoText.trim()) {
              this.addTodo(this.state.todoText);
              this.setState(() => ({
                todoText: '',
              }));
            }
          }}
          style={styles.touchableOpacity}
        >
          <Ionicons name="md-add" size={30} color="#DC143C" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#696969',
    backgroundColor: '#C0C0C0',
    color: '#FFF',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    flex: 1,
  },
  touchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C0C0C0',
    padding: 10,
    borderWidth: 1,
    borderColor: '#696969',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
});

export default connect()(AddTodo);
