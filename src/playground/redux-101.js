import { createStore } from 'redux';




// const add = ({ a, b}) => {
//   return a + b
// };
// console.log(add({ a: 1, b: 12}));


// action generator
const incrementCount = ({ incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT',
  incrementBy
});



const decrementCount = ({ decrementBy = 1} = {} ) => ({
  type: 'DECREMENT',
  decrementBy
});


const resetCount = ( ) => ({
  type: 'RESET',
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});


// const incrementCount = ({ incrementBy = 1 } = {} ) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
// });

const store = createStore((state = { count: 5 }, action ) => {
  switch(action.type) {
    case 'INCREMENT':
    // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    return {
      count: state.count + action.incrementBy
    }
    case 'DECREMENT':
    // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : -1;
    return {
      count: state.count - action.decrementBy
    }
    case 'RESET':
    return {
      count: 0
    }
    case 'SET': 
      return {
        count: action.count
    }
    default: 
    return state;
  }
});



// store.subscribe(() => {
//   console.log(store.getState());
// });

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 50 }))

store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 20 }));
store.dispatch(decrementCount());
// store.dispatch(setCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));

unsubscribe ();

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 9999
});
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 10
});
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

