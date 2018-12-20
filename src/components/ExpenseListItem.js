// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpensiveListItem = ({ id, description, amount, createAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>
      {numeral(amount / 100).format('$0.0.00')} 
      - 
      {moment(createAt).format('MMMM do, YYYY')}
    </p>
  </div>
  // <div>
  //   {props.expenses.map((expense) =>{
  //     return (<h1 key={expense.id}> {expense.description}</h1>)
  //   })}
  // </div>
);


export default ExpensiveListItem;