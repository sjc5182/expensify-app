import { createStore, combineReducers } from 'redux';

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