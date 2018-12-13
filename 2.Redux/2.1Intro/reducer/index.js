import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const initialAppState = {
  count: 0,
};

const counter = (state = initialAppState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
