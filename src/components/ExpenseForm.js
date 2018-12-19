import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

export default class ExpenseForm extends React.Component {
  state = { 
    description: '',
    note: '',
    amount: '',
    createAt: moment(),
    calendarFocused: false
  };

  onDescriptionChange = (e) =>{
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
      if(amount.match(/^\d*(\.\d{0,2})?$/)){
        this.setState(() => ({
          amount
        }))
      }
  };

  onDateChange = (createAt) => {
    this.setState(()=>({
      createAt
    }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(()=>({
      calendarFocused: focused
    }))
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}