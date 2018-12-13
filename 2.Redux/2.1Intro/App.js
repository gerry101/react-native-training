import React from 'react';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
