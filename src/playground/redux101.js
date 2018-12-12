import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({ // this is call action generator
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count: count
})

const ResetCount = () => ({
    type: 'RESET'
})

// reducer is pure function, which mean you dont use varibles that is not define in the function or aurgment. 
const reducerCount = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default: 
      return state;
  }  
}

const store = createStore(reducerCount);

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})
// Redux store allow us to send off object inside of method call
store.dispatch(incrementCount())

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(ResetCount())

store.dispatch(
  {
    type: 'DECREMENT'
  }
)

store.dispatch(
  {
    type: 'DECREMENT',
    decrementBy: 10
  }
)

store.dispatch(setCount({count: 101}))
