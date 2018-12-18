import React from 'react';
import Todo from './src/components/Todo';
import reducer from './src/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
