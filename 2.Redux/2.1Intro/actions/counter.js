const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  incrementCounter,
  decrementCounter,
};
