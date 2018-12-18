// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const ExpensiveListItem = ({ dispatch, id, description, amount, createAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createAt}</p>
    <button onClick = {(e) => {
      dispatch(removeExpense({ id }))
    }}>Remove</button>
  </div>
  // <div>
  //   {props.expenses.map((expense) =>{
  //     return (<h1 key={expense.id}> {expense.description}</h1>)
  //   })}
  // </div>
);


export default connect()(ExpensiveListItem);