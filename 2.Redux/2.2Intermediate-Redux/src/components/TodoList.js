import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

const TodoList = ({ todos, toggleCompletion }) => (
  <View style={styles.container}>
    <FlatList
      data={todos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            toggleCompletion(item.id);
          }}
        >
          <Text style={[styles.touchableOpacity]}>{item.todo}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    padding: 10,
  },
});

export default TodoList;
