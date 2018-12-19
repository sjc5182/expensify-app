// Get visible expense
import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;//typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment, 'day') : true;//typeof endDate !== 'number' || expense.createAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date'){
      return a.createAt < b.createAt ? 1 : -1;
    }else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export default getVisibleExpenses;