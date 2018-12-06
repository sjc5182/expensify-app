import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import subtract, { square, add } from './utils.js';
import isSenior, {isAdult, canDrink} from './person.js';
import validator from 'validator';

const ExpenseDashboardPage = () =>(
  <div>
    This is from my dashboard component
  </div>
)

const AddExpensePage = () =>(
  <div>
    This is from my Expense
  </div>
)

const EditExpensePage = () =>(
  <div>
    This is to edit my expense
  </div>
)

const HelpPage = () =>(
  <div>
    This is to get help
  </div>
)

const NotFoundPage = () =>(
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
)

const Header = () =>(
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));




// const template = <p>testing</p>;

// ReactDOM.render(template, document.getElementById('app'));


// console.log(validator.isEmail('test@gmail.com'));




// console.log('utils.js is running');

// console.log(square(4));
// console.log(add(6,7));
// console.log(subtract(123,23));


// console.log(isAdult(16));
// console.log(canDrink(35));
// console.log(isSenior(63));
