import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({description: 'gas bill'}));
store.dispatch(addExpense({description: 'water bill'}));
store.dispatch(setTextFilter('gas'));
setTimeout(() =>{
  store.dispatch(setTextFilter('water'));
}, 3000)

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));