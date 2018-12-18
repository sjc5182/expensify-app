// Export a stateless functional component
// description, amount, createdAt
import React from 'react';


const ExpensiveListItem = ({ description, amount, createAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createAt}</p>
  </div>
  // <div>
  //   {props.expenses.map((expense) =>{
  //     return (<h1 key={expense.id}> {expense.description}</h1>)
  //   })}
  // </div>
);


export default ExpensiveListItem;