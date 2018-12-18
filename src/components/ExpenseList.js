import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (// this is version what we want props from store to be display in component
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);

const mapStateToProps = (state) => { // define what we wanna get of from redux store
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);

//react-redux "connect" is use for to pass components in same file, so that props dont need to get pass around