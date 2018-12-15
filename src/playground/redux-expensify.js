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

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) =>({
  type: 'FILTER_TEXT',
  text
});

// SORT_BY_AMOUNT
const sortByAmount = () =>({
  type: 'SORT_BY_AMOUNT',
});

// SORT_BY_DATE
const sortByDate = () =>({
  type: 'SORT_BY_DATE'
});

// START_DATE
const setStartDate = (startDate) =>({ // no need to set default value of undefined, its already default to undefined
  type: 'SET_START_DATE',
  startDate
})
// END_DATE
const setEndDate = (endDate) =>({
  type: 'SET_END_DATE',
  endDate
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
      case 'EDIT_EXPENSE':
        return state.map((expense) => {
          if (expense.id === action.id){
            return{
              ...expense,
              ...action.updates
            };
          } else{
            return expense;
          };
        });
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
    case 'FILTER_TEXT':
        return{
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
}

// timestamps

// Get visible expense
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date'){
      return a.createAt < b.createAt ? 1 : -1;
    }else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

const store = createStore(
  //combine reducer takes aurgement that takes key, value pair object
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

 const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 700, createAt: -2000}))

 const expenseTwo = store.dispatch(addExpense({ description: 'meat', amount: 600, createAt: -1000}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate()); // date

// store.dispatch(setStartDate(2025));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));















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