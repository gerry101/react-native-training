const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo,
  };
};

const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export { ADD_TODO, TOGGLE_TODO, addTodo, toggleTodo };
