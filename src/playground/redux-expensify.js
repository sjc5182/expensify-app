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

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return state.concat(action.expense)
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

store.dispatch(addExpense({ description: 'Rent', amount: 100 }))

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