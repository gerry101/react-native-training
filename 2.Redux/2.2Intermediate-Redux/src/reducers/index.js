import { ADD_TODO, TOGGLE_TODO } from '../actions/todo';
import { generateRandomId } from '../../utils/helpers';

const initialState = {
  todos: [
    {
      id: generateRandomId(),
      todo: 'Go to the barber',
      isComplete: false,
    },
    {
      id: generateRandomId(),
      todo: 'Buy a car',
      isComplete: false,
    },
    {
      id: generateRandomId(),
      todo: 'Sing a song',
      isComplete: false,
    },
    {
      id: generateRandomId(),
      todo: 'Fly a plane',
      isComplete: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE_TODO:
      const updatedTodos = state.todos.filter(todo => {
        return todo.id !== action.id;
      });

      return {
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

export default todos;
