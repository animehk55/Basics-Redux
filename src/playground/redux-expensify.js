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

//REmove Expense 
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

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

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
    console.log("inside subscribe method",store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 55 }));
const expenseThree = store.dispatch(addExpense({ description: 'Biryani', amount: 156 }));
const expenseFour = store.dispatch(addExpense({ description: 'water', amount: 10 }));
const expenseFive = store.dispatch(addExpense({ description: 'Room', amount: 1000, createAt: 45 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id}));

console.log("GET Object list so that we can edit it", expenseOne)


console.log("outsidesubscribe method",store.getState());

const demoState = {
  expenses: [
    {
      id: "poijasdfhwer",
      description: "January Rent",
      note: "This was the final payment for that adress",
      amount: 54500,
      createdAt: 0
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

console.log("expensify");


const user = {
    name: 'Jen',
    age: 24
}
console.log('testing in console the spread operator values',{age: 29, ...user, name: 'Animesh',location: 'India'});