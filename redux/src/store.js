import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'MINUS_COUNTER':
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

export const handlerPlusCounterAction = () => ({
  type: 'PLUS_COUNTER',
})

export const handlerMinusCounterAction = () => ({
  type: 'MINUS_COUNTER',
})

const middleware = []

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store