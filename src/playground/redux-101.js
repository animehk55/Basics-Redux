import { createStore } from 'redux';

const store = createStore((state = { count: 5 }, action ) => {
  switch(action.type) {
    case 'INCREMENT':
    const addByincrement = typeof action.addByincrement === 'number' ? action.addByincrement : 1;
    return {
      count: state.count + addByincrement
    }
    case 'DECREMENT':
    const decrementNumberBy = typeof action.decrementNumberBy === 'number' ? action.decrementNumberBy : -1;
    return {
      count: state.count - decrementNumberBy
    }
    case 'RESET':
    return {
      count: 0
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

store.dispatch({
  type: 'INCREMENT',
  addByincrement: 5
});

// unsubscribe ();

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});
store.dispatch({
  type: 'DECREMENT',
  decrementNumberBy: 9999
});
store.dispatch({
  type: 'INCREMENT',
  addByincrement: 5
});
store.dispatch({
  type: 'INCREMENT',
  addByincrement: 10
});
store.dispatch({
  type: 'INCREMENT',
  addByincrement: 5
});

