import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (// this is version what we want props from store to be display in component
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) =>{
      return <ExpenseListItem key = {expense.id} {...expense} />
    })}
  </div>
);

const mapStateToProps = (state) => { // define what we wanna get of from redux store
  return {
    expenses: selectExpenses(state.expenses, state.filters)
    // expenses: state.expenses,
    // filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);

//react-redux "connect" is use for to pass components in same file, so that props dont need to get pass around