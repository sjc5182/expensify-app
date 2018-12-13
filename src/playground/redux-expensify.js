import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// destructe first aurgement, if it doesnt exist then we will destruct empty object
const addExpense = (
  { 
    description = '', 
    note='', 
    amount=0, 
    createAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});

// Remove expense
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      //return state.concat(action.expense)
      // spread operator will do the job that concat do and better
      return [
        ...state,
        action.expense
      ];
      case 'REMOVE_EXPENSE':
        return state.filter(({ id })=>{
          return id !== action.id;
        })
      default:
        return state;
  }
};

const filtersReducersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducersDefaultState, action) =>{
  switch (action.type) {
    default:
      return state;
  }
}
const store = createStore(
  //combine reducer takes aurgement that takes key, value pair object
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() =>{
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))

const expenseTwo = store.dispatch(addExpense({ description: 'meat', amount: 600 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id}))

const demoState = {
  expenses: [{
    id: '1',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: 'undefined',
    endDate: 'undefined'
  }
};

const user = {
  name: 'Jen',
  age: 24
};

console.log({
  ...user,
  locaiton: 'pittsburgh',
  age: 31
});