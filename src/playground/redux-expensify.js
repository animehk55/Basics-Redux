import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});

//Remove Expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
      case 'ADD_EXPENSE':
      return [
          ...state,
          action.expense
      ];
      case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
      case 'EDIT_EXPENSE':
          return state.map((expense) => {
              if (expense.id === action.id) {
                  return {
                      ...expense,
                      ...action.updates
                  };
              } else {
                  return expense;
              }
          });
    default:
      return state;
  }
};

//Filters reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
      case 'SET_TEXT_FILTER':
          return {
              ...state,
              text: action.text
          };
      case 'SORT_BY_AMOUNT':
              return {
                  ...state,
                  sortBy: 'amount'
              };
      case 'SORT_BY_DATE':
          return {
              ...state,
              sortBy: 'date'
          };
      case 'SET_START_DATE':
          return {
              ...state,
              startDate: action.startDate
          };
      case 'SET_END_DATE':
          return {
              ...state,
              endDate: action.endDate
          };
    default:
      return state;
  }
};
//timestamps (milliseconds
//January 1st 1970 (unix approach)
// 33400, 10, -233

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMarch = typeof  startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // figure out if expenses.description as the text variable string inside of it
        // includes
        // convert both string to lower case
        return startDateMarch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
    } else if (sortBy === 'amount'){
        return a.amount < b.amount ? 1 : -1
    }
});
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    // console.log("inside subscribe method",store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 55, createAt: -1000 }));
// // const expenseThree = store.dispatch(addExpense({ description: 'Biryani', amount: 156 }));
// // const expenseFour = store.dispatch(addExpense({ description: 'water', amount: 10 }));
// // const expenseFive = store.dispatch(addExpense({ description: 'Room', amount: 1000, createAt: 45 }));
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500, createAt: 4545 }));
//
store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate()); // date
// // console.log("GET Object list so that we can edit it", expenseOne)
//
// store.dispatch(setStartDate(0));      // startDate 125
// store.dispatch(setStartDate()); // startDAte undefined
// store.dispatch(setEndDate(9999999)); // endDate 1250
/*maximum start date then it will print empty error as there is no other after that if it is 999999999999 or ....smaller... then */

// console.log("outsidesubscribe method",store.getState());

const demoState = {
  expenses: [
    {
      id: "poijasdfhwer",
      description: "January Rent",
      note: "This was the final payment for that adress",
      amount: 54500,
      createdAt: 250
    }
  ],
  filters: {
    text: "rent",
    sortedBy: "amount",
    startBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// console.log("expensify");
//
//
// const user = {
//     name: 'Jen',
//     age: 24
// }
// console.log('testing in console the spread operator values',{age: 29, ...user, name: 'Animesh',location: 'India'});