// SET_TEXT_FILTER
export const setTextFilter = ( text = '' ) =>({
  type: 'FILTER_TEXT',
  text
});

// SORT_BY_AMOUNT
export const sortByAmount = () =>({
  type: 'SORT_BY_AMOUNT',
});

// SORT_BY_DATE
export const sortByDate = () =>({
  type: 'SORT_BY_DATE'
});

// START_DATE
export const setStartDate = (startDate) =>({ // no need to set default value of undefined, its already default to undefined
  type: 'SET_START_DATE',
  startDate
})
// END_DATE
export const setEndDate = (endDate) =>({
  type: 'SET_END_DATE',
  endDate
})