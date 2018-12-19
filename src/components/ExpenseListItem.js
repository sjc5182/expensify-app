// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';


const ExpensiveListItem = ({ id, description, amount, createAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>{amount} - {createAt}</p>
  </div>
  // <div>
  //   {props.expenses.map((expense) =>{
  //     return (<h1 key={expense.id}> {expense.description}</h1>)
  //   })}
  // </div>
);


export default ExpensiveListItem;